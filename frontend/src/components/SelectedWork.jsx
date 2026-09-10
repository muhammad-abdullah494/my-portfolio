import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { projects } from '../data/projects';

export default function SelectedWork() {
  const [lightbox, setLightbox] = useState(null); // null = closed, project = open

  // Close viewer with Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Freeze page scroll while viewer is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="work" className="px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 border-t border-white/5">
      <div className="mb-16 md:mb-24">
        <p className=" text-blue-400 text-sm uppercase tracking-widest mb-4">Portfolio</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
          Selected Work
        </h2>
      </div>

      <div className="space-y-32 md:space-y-40">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            onImageClick={() => setLightbox(project)}
          />
        ))}
      </div>

      {/* In-page viewer — drawn only when a project image is open */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto bg-navy-950/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title} full screenshot`}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            autoFocus
            onClick={() => setLightbox(null)}
            aria-label="Close full screenshot"
            className="fixed top-4 right-4 md:top-6 md:right-6 z-10 p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-white/10 transition-colors"
          >
            <X size={28} />
          </button>

          <div className="min-h-full flex items-center justify-center p-4 md:p-10">
            {/* Natural shape, scaled to fit screen = always completely visible */}
            <img
              src={lightbox.image}
              alt={`${lightbox.title} — full project screenshot`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg border border-white/10 shadow-2xl shadow-black/60"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectItem({ project, index, onImageClick }) {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center group">
      {/* Text Content */}
      <div className="order-2 md:order-1 space-y-4">
        <div className="flex items-center gap-3 text-sm font-mono text-blue-400">
          <span>{formattedIndex}</span>
          <span className="w-8 h-px bg-blue-400"></span>
          <span className="uppercase tracking-wider text-blue-400">{project.label}</span>
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-semibold text-text-primary tracking-tight leading-tight">
          {project.title}
        </h3>

        {project.note && (
          <p className="text-accent-400 text-sm italic border-l-2 border-accent-400 pl-3">
            {project.note}
          </p>
        )}

                <p className="text-text-primary/90 text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary border border-white/10">
              {tech}
            </span>
          ))}
        </div>

        {/* Internal Link for case study, external <a> for everything else */}
        {project.hasCaseStudy ? (
          <Link
            to="/case-study/studiction"
            className="inline-flex items-center gap-2 mt-6 text-text-primary text-lg font-medium border-b border-white/20 pb-1 hover:border-white transition-all group/link"
          >
            View case study
            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        ) : (
          (project.liveUrl || project.githubUrl) && (
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-text-primary text-lg font-medium border-b border-white/20 pb-1 hover:border-white transition-all group/link"
            >
              {project.liveUrl ? 'View project' : 'View on GitHub'}
              <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          )
        )}
      </div>

      {/* Project image — same perfect look, clickable to open viewer */}
      {project.image ? (
        <button
          type="button"
          onClick={onImageClick}
          aria-label={`View full screenshot of ${project.title}`}
          className="order-1 md:order-2 w-full aspect-[16/10] bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden relative group-hover:border-white/20 cursor-zoom-in transition-all duration-500"
        >
          <img
            src={project.image}
            alt={`${project.title} — project screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Subtle hover glow */}
          <div className="absolute inset-0 bg-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </button>
      ) : (
        <div className="order-1 md:order-2 aspect-[16/10] bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden relative">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8 space-y-2">
              <p className="text-text-secondary/40 text-lg font-medium">{project.title}</p>
              <p className="text-text-secondary/20 text-sm">Screenshot coming soon</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}