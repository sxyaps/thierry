import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Note: In production, use a backend API
});

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const PERFUMIST_PROMPT = `You are an elegant virtual perfumist for Thierry, a luxury French perfume house. You have extensive knowledge about:
- Perfume notes (top, middle, base), scent families, and fragrance compositions
- Skin chemistry and how different perfumes work with various skin types
- Layering techniques and perfume application tips
- Seasonal recommendations and occasion-appropriate scents
- Luxury perfume brands and artisanal fragrance creation

Respond in a warm, sophisticated, yet approachable tone. Keep responses concise (2-3 sentences max) but informative. Use elegant language befitting a luxury brand. Occasionally use French perfume terms naturally. Always be helpful and encouraging about fragrance exploration.

If asked about specific Thierry fragrances, be enthusiastic but acknowledge you'd need to know more about their personal preferences to make the best recommendation.`;

export class ChatbotService {
  private conversation: Message[] = [];

  async sendMessage(userMessage: string): Promise<string> {
    try {
      // Add user message to conversation
      const userMsg: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: userMessage,
        timestamp: new Date(),
      };
      
      this.conversation.push(userMsg);

      // Keep conversation context limited (last 6 messages)
      const contextMessages = this.conversation.slice(-6);

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: PERFUMIST_PROMPT },
          ...contextMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        ],
        max_tokens: 150,
        temperature: 0.7,
      });

      const assistantResponse = completion.choices[0]?.message?.content || 
        "Je suis désolé, I'm having a moment of silence. Please try again.";

      // Add assistant response to conversation
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantResponse,
        timestamp: new Date(),
      };
      
      this.conversation.push(assistantMsg);

      return assistantResponse;
    } catch (error) {
      console.error('Chatbot error:', error);
      return "I apologize, but I'm experiencing some technical difficulties. Please try again in a moment.";
    }
  }

  getConversation(): Message[] {
    return this.conversation;
  }

  clearConversation(): void {
    this.conversation = [];
  }
}

export const chatbotService = new ChatbotService();
