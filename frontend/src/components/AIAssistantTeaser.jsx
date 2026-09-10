import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import AIChat from './AIChat';

export default function AIAssistantTeaser() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-24">
      <div className="border border-white/10 bg-white/[0.02] rounded-2xl px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="space-y-3">
          <p className="font-sans text-blue-400 text-sm uppercase tracking-widest flex items-center gap-2">
            <Sparkles size={16} /> Interactive Feature
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
            Meet Abdullah's AI
          </h2>
          <p className="text-text-primary/90 text-lg md:text-xl">
            Want to know more about my skills, projects or experience?
          </p>
        </div>

        {/* The button now opens the real chat — no more alert */}
        <button
          type="button"
          onClick={() => setChatOpen(true)}
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-text-primary text-lg font-medium hover:border-white/40 hover:bg-white/5 transition-all shrink-0"
        >
          Ask Abdullah's AI
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* The real chat window lives here */}
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </section>
  );
}