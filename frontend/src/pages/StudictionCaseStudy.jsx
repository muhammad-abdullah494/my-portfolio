import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { studictionCaseStudy } from '../data/caseStudies';

export default function StudictionCaseStudy() {
  // Always start reading at the top of the article
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reading progress bar (0% at top → 100% at bottom)
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cs = studictionCaseStudy;

  return (
    <main className="min-h-screen bg-navy-950 text-text-primary selection:bg-accent-500/30 selection:text-white">
      {/* Reading progress bar */}
      <div
        className="fixed top-0 inset-x-0 h-0.5 bg-blue-500 z-[80] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Focused reading header */}
      <header className="enter enter-1 px-6 md:px-12 max-w-5xl mx-auto pt-8 pb-4 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft size={18} /> Back to portfolio
        </Link>
        <span className="font-display text-xl font-semibold tracking-tight">MA</span>
      </header>

      <article className="px-6 md:px-12 max-w-5xl mx-auto pb-24 md:pb-32">
        {/* Title block — cascades in, line by line */}
        <div className="pt-12 md:pt-20 pb-12 md:pb-16 border-b border-white/10 space-y-6">
          <p className="enter enter-1 text-blue-400 text-sm uppercase tracking-widest">{cs.eyebrow}</p>

          <h1 className="enter enter-2 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance text-text-primary">
            {cs.title}
          </h1>

          <p className="enter enter-3 text-text-primary font-medium text-lg md:text-xl leading-relaxed max-w-3xl">
            {cs.summary}
          </p>

          {/* Editorial meta line — newspaper-style credibility */}
          <p className="enter enter-4 font-sans text-sm text-text-secondary tracking-wide">
            Final Year Project · BS Computer Science · ~6 min read
          </p>

          <div className="enter enter-5 flex flex-wrap items-center gap-6 pt-4">
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-primary text-lg font-medium border-b border-white/20 pb-1 hover:border-white transition-all group"
            >
              Visit live project
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="text-text-secondary text-sm font-mono">{cs.stack.join(' · ')}</span>
          </div>
        </div>

        {/* All sections rendered by one machine */}
        {cs.sections.map((section, i) => (
          <CaseSection key={section.heading} section={section} index={i} />
        ))}

        {/* Graceful exit card — always gives a next step */}
        <div className="enter mt-16 border border-white/10 bg-white/[0.02] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-display text-2xl md:text-3xl font-semibold text-text-primary tracking-tight">
              Read enough?
            </p>
            <p className="text-text-secondary text-lg mt-2">
              Explore my other projects or see Studiction in action.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-text-primary hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <ArrowLeft size={16} /> Back to portfolio
            </Link>
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Open live platform
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

/* One renderer for paragraphs / lists / images. */
function CaseSection({ section, index }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <section className="py-12 md:py-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
      {/* Section heading: number in display voice, word in regular caps */}
      <h2 className="md:col-span-4 text-sm uppercase tracking-widest text-blue-400 pt-1 font-sans">
        <span className="font-display text-blue-400 mr-1 normal-case">{num}</span>
        <span className="text-text-secondary mx-1">—</span>
        {section.heading}
      </h2>
      <div className="md:col-span-8 space-y-4">
        {section.paragraphs &&
          section.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-text-primary/90 font-medium text-xl">
              {p}
            </p>
          ))}

        {section.items && (
          <ul className="space-y-3">
            {section.items.map((item) => (
              <li
                key={typeof item === 'string' ? item : item.title}
                className="flex gap-3 text-lg leading-relaxed text-text-primary/90"
              >
                <span className="text-accent-400 mt-[2px]">—</span>
                <span>
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <>
                      <strong className="font-semibold text-text-primary">{item.title}: </strong>
                      {item.detail}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}

        {section.images && (
          <div className="space-y-6">
            {section.images.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full rounded-xl border border-white/10"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}