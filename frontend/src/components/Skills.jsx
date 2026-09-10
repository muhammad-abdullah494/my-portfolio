import { Compass } from 'lucide-react';
import { skills } from '../data/skills';
import SectionHeading from './SectionHeading';

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'programming', label: 'Programming' },
  { key: 'tools', label: 'Tools' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 border-t border-white/5"
    >
      <SectionHeading eyebrow="Toolkit" title="Technologies I Work With" />

      <div>
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-white/10 "
          >
            <h3 className="md:col-span-3 text-sm uppercase tracking-widest text-text-secondary pt-1 text-blue-400 flex items-center gap-2">
              {cat.label}
            </h3>
            <ul className="md:col-span-9 flex flex-wrap gap-x-8 gap-y-3">
              {skills[cat.key].map((skill) => (
                <li key={skill} className="text-lg md:text-xl font-light text-text-primary/90">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Currently Exploring — learning, NOT claimed expertise */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-b border-white/10">
          <h3 className="md:col-span-3 text-sm uppercase tracking-widest text-accent-400 pt-1 flex items-center gap-2">
            <Compass size={16} aria-hidden="true" /> Exploring
          </h3>
          <div className="md:col-span-9">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {skills.exploring.map((item) => (
                <li key={item} className="text-lg md:text-xl font-light italic text-text-primary/90">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-text-primary/90 text-sm mt-4">
              Topics I am currently learning and experimenting with — not yet professional expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}