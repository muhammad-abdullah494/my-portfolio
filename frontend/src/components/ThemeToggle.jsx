import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

/* Compact labeled pill toggle: moon only (no star), knob slides, choice remembered. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'night');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'day');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isDay = theme === 'day';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDay}
      aria-label="Toggle day / night mode"
      onClick={() => setTheme(isDay ? 'night' : 'day')}
      className={`relative h-10 w-36 md:w-40 rounded-full transition-colors duration-300 ${
        isDay ? 'bg-gray-200 border border-gray-300' : 'bg-black border border-black'
      } shadow-md shadow-black/20`}
    >
      {/* Sliding knob */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all duration-300 ${
          isDay ? 'right-1 border border-gray-400' : 'left-1 border border-black'
        }`}
      >
        {isDay ? (
          <Sun size={16} strokeWidth={1.75} className="text-black" aria-hidden="true" />
        ) : (
          <Moon size={16} strokeWidth={1.75} className="text-black" aria-hidden="true" />
        )}
      </span>

      {/* Swapping label */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 font-sans font-bold uppercase tracking-[0.12em] text-[10px] md:text-[11px] transition-all duration-300 ${
          isDay ? 'left-4 text-black' : 'right-4 text-white'
        }`}
      >
        {isDay ? 'Day Mode' : 'Night Mode'}
      </span>
    </button>
  );
}