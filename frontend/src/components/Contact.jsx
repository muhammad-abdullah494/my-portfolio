import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 border-t border-white/5"
    >
      <SectionHeading eyebrow="Get In Touch" title="Let's work together." />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-text-primary/90 max-w-2xl">
            I build responsive web applications and practical software solutions using modern development practices and the MERN stack. I’m open to opportunities and collaborations where I can contribute my skills and turn ideas into reliable solutions.
          </p>

          {/* Big email — opens Gmail compose in the browser, never Outlook */}
          {/* <a
            href={personalInfo.gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-3xl md:text-4xl font-semibold text-text-primary tracking-tight hover:text-accent-400 transition-colors duration-300 break-all"
          >
            <span className="border-b-2 border-text-primary/20 group-hover:border-accent-400 pb-2 transition-colors">
              {personalInfo.email}
            </span>
            <ArrowUpRight size={32} className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a> */}

          <p className="text-blue-400 text-sm pt-4">
             Find me here:
          </p>
          <SocialLinks />
        </div>

        <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">Location</p>
            <p className="text-lg text-text-primary">{personalInfo.location}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">Status</p>
            <p className="text-lg text-text-primary flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for new opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}