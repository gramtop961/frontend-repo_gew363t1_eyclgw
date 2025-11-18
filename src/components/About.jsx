import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-12 items-start">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="lg:col-span-1">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">A sharp, intentional snapshot of who I am and how I deliver value.</p>
        </motion.div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="lg:col-span-2 space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
            I design and build fast, accessible web products. My edge: clarity. I simplify complex problems into clean, production-ready solutions that ship on time.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
            <li className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Performance-first engineering</li>
            <li className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Intentional UI with meaningful motion</li>
            <li className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Clear communication and ownership</li>
            <li className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Process that scales with teams</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
