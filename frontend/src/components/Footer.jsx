import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left space-y-1">
          <p className="text-text-primary text-sm font-medium">
            &copy; {currentYear} {personalInfo.name}.
          </p>
          <p className="text-text-primary/70 text-xs">
            Designed & Built with React, Tailwind CSS.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group inline-flex items-center gap-2 text-text-secondary text-sm hover:text-text-primary transition-colors"
        >
          Back to top
          <span className="p-2 rounded-full border border-white/10 group-hover:border-white/30 group-hover:-translate-y-1 transition-all">
            <ArrowUp size={14} />
          </span>
        </button>

      </div>
    </footer>
  );
}