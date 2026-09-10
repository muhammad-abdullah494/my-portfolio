import { useEffect, useState } from 'react';
import { Briefcase, User, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState('work');

  // Concept 2: scroll-spy — which section is in the middle of the screen?
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 2;
      let current = 'work';
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= pos) current = link.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 pointer-events-none">
      {/* LEFT: day/night toggle */}
      <div className="absolute right-4 md:right-8 top-4 pointer-events-auto">
        <ThemeToggle />
      </div>

      {/* CENTER: pill navigation */}
      <nav
        aria-label="Primary"
        className="absolute left-1/2 top-4 -translate-x-1/2 pointer-events-auto flex items-center gap-1 rounded-full border-2 border-white/25 bg-black p-1.5 shadow-xl shadow-black/30"
      >
        {links.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={isActive ? 'true' : undefined}
              className={`flex items-center gap-2 rounded-full border-2 px-3 py-2 transition-all duration-300 md:px-4 ${
                isActive
                  ? 'border-black bg-white text-black'
                  : 'border-transparent text-white/80 hover:text-white'
              }`}
            >
              <Icon size={18} strokeWidth={2} />
              <span className={`text-sm font-medium ${isActive ? 'inline' : 'hidden lg:inline'}`}>
                {label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* RIGHT: monogram circle = back to top */}
      <a
        href="#home"
        aria-label="Back to top"
        className="absolute left-4 md:left-8 top-4 pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/25 bg-black text-sm font-bold text-white shadow-xl shadow-black/30 transition-transform hover:scale-105"
      >
        MA
      </a>
    </header>
  );
}