import { useEffect, useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'dark';
    setTheme(stored);
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/30" />
          <span className="font-semibold text-slate-800 dark:text-white">Your Name</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative text-sm font-medium transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white ${active===s.id ? 'text-slate-900 dark:text-white' : ''}`}
            >
              {s.label}
              {active===s.id && (
                <motion.span layoutId="active-dot" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-600" />
              )}
            </button>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400"/> : <Moon size={18} className="text-slate-700"/>}
          </button>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 grid grid-cols-2 gap-3">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className={`text-left text-sm px-3 py-2 rounded-md hover:bg-slate-100/70 dark:hover:bg-slate-800/70 ${active===s.id ? 'bg-slate-100/70 dark:bg-slate-800/70' : ''}`}>{s.label}</button>
            ))}
            <button onClick={toggleTheme} className="text-left text-sm px-3 py-2 rounded-md hover:bg-slate-100/70 dark:hover:bg-slate-800/70">Toggle theme</button>
          </div>
        </div>
      )}
    </div>
  );
}
