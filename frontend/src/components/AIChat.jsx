import { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';

/* Today: local backend. At deployment we set VITE_API_URL once — this line picks it up automatically. */
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const suggestions = [
  'What is Studiction?',
  'What skills does he have?',
  'How can I contact him?',
];

export default function AIChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hi! I'm Abdullah's AI. Ask me about his projects, skills, education, experience, or how to contact him.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  /* The waiter: sends any text (typed or chip-clicked) to the brain */
  const send = async (text) => {
    if (!text || isLoading) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'ai', text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: "Sorry — I can't reach my brain right now. Is the backend server running?" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (text) send(text);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Chat with Abdullah's AI"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[70] w-[92vw] max-w-md h-[65vh] bg-navy-950 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-blue-400" />
          <span className="font-display font-semibold text-text-primary">Abdullah's AI</span>
          <span className="font-sans text-[10px] uppercase tracking-widest text-text-secondary/60 border border-white/10 rounded-full px-2 py-0.5">
            offline brain
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="text-text-secondary hover:text-text-primary transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-white/5 text-text-primary border border-white/5 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Suggestion chips: shown only before the first real question */}
        {messages.length === 1 && !isLoading && (
          <div className="flex flex-wrap gap-2 pt-1">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="font-sans text-xs text-text-secondary border border-white/10 rounded-full px-3 py-1.5 hover:text-text-primary hover:border-white/30 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-2xl rounded-bl-none px-4 py-3">
              <Loader2 size={14} className="animate-spin text-blue-400" />
              <span className="font-sans text-xs text-text-secondary">Thinking…</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={onSubmit} className="flex gap-2 p-3 border-t border-white/10 bg-white/[0.02]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my projects, skills…"
          disabled={isLoading}
          className="flex-1 font-sans text-sm bg-white/5 border border-white/10 rounded-full px-4 py-2 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-blue-400 transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          aria-label="Send message"
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-white/10 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}