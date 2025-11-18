import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Content Planner',
    stack: ['React', 'FastAPI', 'MongoDB'],
    challenge: 'Create a fast, collaborative planning tool with real-time feel.',
    solution: 'Optimized data model, optimistic UI, and background sync.',
    link: '#',
    demo: '#'
  },
  {
    title: 'E-commerce Starter',
    stack: ['Next.js', 'Stripe', 'Postgres'],
    challenge: 'Ship a reliable, performant storefront quickly.',
    solution: 'Prebuilt flows, dynamic caching, and accessible components.',
    link: '#',
    demo: '#'
  },
  {
    title: 'Team Dashboard',
    stack: ['Vite', 'Express', 'Redis'],
    challenge: 'Unify metrics and actions with clarity.',
    solution: 'Composable widgets, role-based access, and crisp charts.',
    link: '#',
    demo: '#'
  }
];

export default function Projects(){
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Best work only—each highlights tech, challenge, solution, and links.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-blue-600/5 transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">{p.stack.join(' • ')}</span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-slate-700 dark:text-slate-200"><span className="font-medium">Challenge:</span> {p.challenge}</p>
                <p className="text-slate-700 dark:text-slate-200"><span className="font-medium">Solution:</span> {p.solution}</p>
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.link} className="text-sm text-blue-600 hover:underline">Source</a>
                <a href={p.demo} className="text-sm text-blue-600 hover:underline">Live</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
