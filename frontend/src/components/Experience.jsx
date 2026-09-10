import { experience } from '../data/experience';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 border-t border-white/5"
    >
      <SectionHeading eyebrow="Career" title="Work Experience" />

      <div>
        {experience.map((job) => (
          <div
            key={job.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-white/10"
          >
            <div className="md:col-span-3">
              <p className="text-sm font-mono text-text-primary pt-1 text-blue-400">{job.period}</p>
            </div>

            <div className="md:col-span-9 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
                {job.role}
                <span className="text-text-primary font-semibold"> — {job.company}</span>
              </h3>
              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-lg leading-relaxed text-text-primary/90">
                    <span className="text-accent-400 mt-[2px]">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}