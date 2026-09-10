import { useEffect, useState } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

export default function ThemeToggle() {
  // Read saved choice once (Concept 4)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  // Apply the single class to <html> (Concept 3)
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') root.classList.add('light');
    else root.classList.remove('light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={isLight ? 'Switch to night mode' : 'Switch to day mode'}
      className={`relative flex h-11 w-11 sm:w-44 items-center overflow-hidden rounded-full border-2 transition-colors duration-300 ${
        isLight ? 'border-gray-300 bg-gray-200' : 'border-white/25 bg-black'
      }`}
    >
      {/* Sliding circle with sun/moon */}
      <span
        className={`absolute z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-300 ${
          isLight ? 'right-1.5' : 'left-1.5'
        }`}
      >
        {isLight ? <Sun size={18} /> : <Moon size={18} />}
      </span>

      {/* Sparkle next to moon in night mode (like your reference) */}
      {!isLight && (
        <Sparkles size={12} className="absolute left-10 top-2 text-white" aria-hidden="true" />
      )}

      {/* Label */}
      <span
        className={`hidden sm:block text-xs font-bold tracking-widest transition-all duration-300 ${
          isLight ? 'ml-4 mr-10 text-black' : 'ml-14 text-white'
        }`}
      >
        {isLight ? 'DAY MODE' : 'NIGHT MODE'}
      </span>
    </button>
  );
}