import { Code2, Lightbulb, Users } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const highlights = [
  { icon: Code2, title: 'MERN Stack', subtitle: 'Developer' },
  { icon: Lightbulb, title: 'Problem Solver', subtitle: '& Learner' },
  { icon: Users, title: 'Team Leader', subtitle: '& Communicator' },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 border-t border-white/5"
    >
      <SectionHeading eyebrow="Who I Am" title="About Me" />

      {/* One confident, readable-width professional summary */}
      <p className="text-xl md:text-2xl font-light leading-relaxed text-text-primary/90 max-w-4xl">
        {personalInfo.aboutDetailed}
      </p>

      {/* Structured highlight row — anchored by hairline rules, no floating */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-16 md:mt-20">
        {highlights.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="border-t border-white/10 pt-6 ">
            <Icon size={22} strokeWidth={1.5} className="text-accent-400 mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
            <p className="text-text-secondary mt-1">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}