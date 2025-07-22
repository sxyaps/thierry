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
  private apiKey = import.meta.env.VITE_OPENAI_API_KEY;

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

      // Prepare messages for OpenAI
      const messages = [
        { role: 'system', content: PERFUMIST_PROMPT },
        ...contextMessages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      ];

      // Call OpenAI API directly with fetch
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 150,
          temperature: 0.7,
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantResponse = data.choices[0]?.message?.content || 
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
      
      // Fallback to contextual mock responses if API fails
      const lowerMessage = userMessage.toLowerCase();
      let fallbackResponse = "I apologize, but I'm experiencing some technical difficulties. However, I'd be happy to help with your fragrance questions!";
      
      if (lowerMessage.includes('evening') || lowerMessage.includes('night')) {
        fallbackResponse = "For evening occasions, I recommend deeper, more sensual fragrances with rich amber, warm vanilla, or mysterious oud notes.";
      } else if (lowerMessage.includes('work') || lowerMessage.includes('office')) {
        fallbackResponse = "For professional settings, choose subtle yet sophisticated scents like light florals or clean citrus - memorable without being overwhelming.";
      } else if (lowerMessage.includes('layer') || lowerMessage.includes('layering')) {
        fallbackResponse = "Layering is an art! Start with your lightest fragrance on pulse points, then add complementary notes. Try pairing citrus with florals.";
      }
      
      // Add fallback response to conversation
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: fallbackResponse,
        timestamp: new Date(),
      };
      
      this.conversation.push(fallbackMsg);
      
      return fallbackResponse;
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
