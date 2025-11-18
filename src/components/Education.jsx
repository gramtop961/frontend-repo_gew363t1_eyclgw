import { motion } from 'framer-motion';

const edu = [
  { school: 'State University', degree: 'B.S. in Computer Science', period: '2017 – 2021', highlights: ['Dean’s List', 'Capstone: Real-time analytics', 'ACM Lead'] },
  { school: 'Online Programs', degree: 'Advanced Frontend & UX', period: '2022', highlights: ['Design systems', 'Performance', 'Accessibility'] },
];

export default function Education(){
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">A concise, achievement-focused timeline.</p>
        </div>
        <div className="relative pl-4">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-8">
            {edu.map((e, i) => (
              <motion.div key={e.school} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="relative ml-6">
                <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-blue-600" />
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{e.school}</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{e.period}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200">{e.degree}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {e.highlights.map(h => (
                      <li key={h} className="px-2.5 py-1 rounded-md text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
