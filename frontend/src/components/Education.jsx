import { education, conferences } from '../data/education';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 border-t border-white/5"
    >
      <SectionHeading eyebrow="Background" title="Education" />

      <div>
        {education.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-white/10"
          >
            <div className="md:col-span-3">
              {item.period && (
                <p className="text-sm font-mono text-text-secondary pt-1 text-blue-400">{item.period}</p>
              )}
            </div>
            <div className="md:col-span-9 space-y-1">
              <h3 className="text-xl md:text-2xl font-serif tracking-tight text-text-primary">
                {item.degree}
              </h3>
              {item.institution && (
                <p className="text-text-primary/80 text-lg">{item.institution}</p>
              )}
              {item.detail && (
                <p className="text-accent-400 text-sm font-mono pt-1">{item.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-20">
        <h3 className="text-sm uppercase tracking-widest text-text-secondary mb-6 font-semibold text-blue-400 flex items-center gap-2">
          Conferences & Seminars
        </h3>
        <ul className="space-y-4">
          {conferences.map((c) => (
            <li
              key={c.title}
              className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8 border-t border-white/5 pt-4 "
            >
              <span className="text-text-primary/90 text-base md:text-lg">{c.title}</span>
              <span className="text-text-primary/60 text-sm font-mono shrink-0">{c.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}