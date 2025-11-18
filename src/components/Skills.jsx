import { motion } from 'framer-motion';

const categories = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL'] },
  { title: 'Cloud & Tools', items: ['Vercel', 'Docker', 'GitHub Actions', 'Figma', 'Sentry'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Skills</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Categorized for clarity. No fluff.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
