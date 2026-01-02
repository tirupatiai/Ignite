
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: "Hi! I'm your Ignite24x7 Assistant. How can I help you ignite your business today?" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an assistant for Ignite24x7. Answer this user query: ${userMsg}`,
        config: {
          systemInstruction: "You are a professional, helpful, and high-energy assistant for Ignite24x7, a company offering Software Dev, Academy, Digital Marketing, and HR/Recruitment. Keep answers concise and guide users towards our services. Our website is www.ignite24x7.com."
        }
      });

      const text = response.text || "I'm sorry, I couldn't process that. How else can I assist you?";
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops, I had a momentary blackout! Please try again or reach out to us at info@ignite24x7.com." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-orange-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-orange-600 p-5 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-2">
              <Bot className="text-white" size={24} />
              <span className="font-black text-white uppercase tracking-tighter">Ignite AI Agent</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white bg-white/10 p-1.5 rounded-xl transition-all">
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-5 space-y-4 bg-orange-50/30">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-semibold shadow-sm ${m.role === 'user' ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 border border-orange-50'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-orange-50 shadow-sm">
                  <Loader2 className="animate-spin text-orange-600" size={20} />
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-white border-t border-orange-50 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about Ignite24x7..."
              className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-600 transition-all font-medium"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-orange-600 p-3 rounded-2xl hover:bg-orange-500 disabled:opacity-50 transition-all shadow-lg shadow-orange-600/20"
            >
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 hover:bg-orange-500 text-white p-5 rounded-3xl shadow-2xl transition-all hover:scale-110 glow-effect"
        >
          <MessageSquare size={30} />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
