export default function Footer(){
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500" />
          <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
        </div>
        <div className="flex gap-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="/resume.pdf" download className="hover:underline">Resume</a>
        </div>
      </div>
    </footer>
  );
}
