import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';


export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center w-full">
        {/* Text Content — cascades in, line by line */}
        <div className="md:col-span-7 space-y-6">
          <p className="enter enter-1 text-text-primary/90 text-lg md:text-xl font-light">
            Hi, I'm
          </p>

          <h1 className="enter enter-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary leading-[1.1]">
            Muhammad <br />
            <span className="text-accent-400">Abdullah</span>
          </h1>

          <h2 className="enter enter-3 text-xl md:text-2xl text-text-primary font-serif leading-relaxed max-w-2xl">
            {personalInfo.shortTitle}
          </h2>

           <p className="enter enter-4 text-text-primary/90 text-lg leading-relaxed max-w-xl pt-2">
            {personalInfo.about}
          </p>

          <div className="enter enter-5 flex flex-wrap gap-6 pt-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-text-primary text-lg font-medium border-b border-text-primary/30 pb-1 hover:border-text-primary transition-all"
            >
              View my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-text-secondary text-lg font-medium hover:text-text-primary border-b border-transparent hover:border-text-secondary/30 pb-1 transition-all"
            >
              View my Resume
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Photo — enters last, like the final note of a chord */}
        <div className="enter enter-6 md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl shadow-black/50">
            <img
              src="/profile.jpg"
              alt="Muhammad Abdullah — MERN Stack Developer and Software Engineer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}