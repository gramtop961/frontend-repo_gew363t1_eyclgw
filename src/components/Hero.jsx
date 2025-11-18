import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 grid lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-xs font-medium backdrop-blur pointer-events-none">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Available for new projects
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Building clean, fast, and delightful web experiences
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            I craft modern websites and apps with a focus on performance, clarity, and meaningful motion.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:brightness-110 transition">View Work</a>
            <a href="/resume.pdf" download className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-800 transition">Download Resume</a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-slate-900/60 dark:via-transparent dark:to-slate-900" />
    </section>
  );
}
