// Note: For production, this should be implemented with a backend API
// Currently using mock responses for development

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const PERFUMIST_RESPONSES = [
  "Bonjour! For your skin type, I'd recommend starting with lighter, citrus-based notes in the morning and transitioning to warmer base notes in the evening. What occasions are you shopping for?",
  "Ah, layering fragrances is an art! Start with your lightest scent first, then build complexity. I suggest applying pulse points - wrists, neck, behind ears. What fragrance families do you typically enjoy?",
  "For evening wear, consider oriental or woody scents with deeper base notes like sandalwood, amber, or musk. These create an alluring, sophisticated presence. Do you prefer bold or subtle statements?",
  "Oriental scents feature warm spices, resins, and exotic notes like vanilla and amber. Floral fragrances center on flower essences - rose, jasmine, lily. Both can be romantic, but orientals are more mysterious while florals are more feminine and fresh.",
  "The key to choosing the right scent is understanding your skin chemistry. Warmer skin amplifies citrus and floral notes, while cooler skin enhances woody and green notes. Would you like me to help you identify your skin's undertones?",
  "Parfum concentration lasts 6-8 hours and has the richest scent profile. Eau de Parfum is perfect for daily wear with 4-6 hour longevity. Consider the season and your lifestyle when choosing concentration levels.",
];

export class ChatbotService {
  private conversation: Message[] = [];
  private responseIndex = 0;

  async sendMessage(userMessage: string): Promise<string> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));

    // Add user message to conversation
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };
    
    this.conversation.push(userMsg);

    // Get a contextual response (cycling through predefined responses for now)
    let response = PERFUMIST_RESPONSES[this.responseIndex % PERFUMIST_RESPONSES.length];
    this.responseIndex++;

    // Add some variation based on keywords
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('evening') || lowerMessage.includes('night')) {
      response = "For evening occasions, I recommend deeper, more sensual fragrances. Think rich amber, warm vanilla, or mysterious oud. These create an enchanting presence that lingers beautifully.";
    } else if (lowerMessage.includes('work') || lowerMessage.includes('office')) {
      response = "For professional settings, choose subtle yet sophisticated scents. Light florals or clean citrus notes work wonderfully - they're memorable without being overwhelming.";
    } else if (lowerMessage.includes('layer') || lowerMessage.includes('layering')) {
      response = "Layering is truly an art form! Start with your lightest fragrance on pulse points, then add complementary notes. Try pairing citrus with light florals, or woody bases with warm spices.";
    } else if (lowerMessage.includes('skin')) {
      response = "Your skin chemistry is unique! Oily skin tends to amplify and extend fragrance, while dry skin may need reapplication. Warmer skin brings out top notes beautifully, while cooler skin enhances base notes.";
    }

    // Add assistant response to conversation
    const assistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    };
    
    this.conversation.push(assistantMsg);

    return response;
  }

  getConversation(): Message[] {
    return this.conversation;
  }

  clearConversation(): void {
    this.conversation = [];
    this.responseIndex = 0;
  }
}

export const chatbotService = new ChatbotService();
