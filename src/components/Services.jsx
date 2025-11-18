import { motion } from 'framer-motion';

const services = [
  { title: 'Product Website', problem: 'Unclear messaging and slow pages hurt conversions.', solution: 'Ship a crisp, SEO-ready site with compelling narrative and speed.', outcome: 'Higher conversion and stronger brand trust.' },
  { title: 'Web App Development', problem: 'Complex UX and flaky performance block growth.', solution: 'Design focused flows and implement resilient, scalable code.', outcome: 'Happier users and fewer support tickets.' },
  { title: 'Design Systems', problem: 'Inconsistent UI slows teams and breaks quality.', solution: 'Create a component library with tokens, guidelines, and tests.', outcome: 'Faster velocity and consistent, accessible interfaces.' },
];

export default function Services(){
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Services</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Problem → Solution → Outcome</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-slate-700 dark:text-slate-200"><span className="font-medium">Problem:</span> {s.problem}</p>
                <p className="text-slate-700 dark:text-slate-200"><span className="font-medium">Solution:</span> {s.solution}</p>
                <p className="text-slate-700 dark:text-slate-200"><span className="font-medium">Outcome:</span> {s.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
