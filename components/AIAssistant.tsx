
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: "Hello! I'm your Ignite24x7 Assistant. How can I help you today? Ask me about our Software, Academy, Marketing or HR services!" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      // Fix: Use direct process.env.API_KEY for initialization as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Fix: Use simplified content string and correct systemInstruction config
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an assistant for Ignite24x7. Answer this user query: ${userMsg}`,
        config: {
          systemInstruction: "You are a professional, helpful, and high-energy assistant for Ignite24x7, a company offering Software Dev, Academy, Digital Marketing, and HR/Recruitment. Keep answers concise and guide users towards our services. Our website is www.ignite24x7.com."
        }
      });

      // Fix: Access .text as a property (not a method) according to @google/genai documentation
      const text = response.text || "I'm sorry, I couldn't process that. How else can I assist you with Ignite24x7?";
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having a bit of a spark issue. Please try again or contact us directly!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 sm:w-96 glass-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-orange-600/20">
          <div className="bg-orange-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-white" size={20} />
              <span className="font-bold text-white">Ignite AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-orange-600 text-white' : 'glass-card text-gray-200'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="glass-card p-3 rounded-xl">
                  <Loader2 className="animate-spin text-orange-600" size={16} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-black/60 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm flex-grow focus:outline-none focus:border-orange-500"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-orange-600 p-2 rounded-lg hover:bg-orange-500 disabled:opacity-50"
            >
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 hover:bg-orange-500 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 glow-effect"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;