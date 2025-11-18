import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact(){
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // For demo, just simulate success
      await new Promise(r => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you soon.');
      e.target.reset();
    } catch {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Contact</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Minimal, functional, and direct.</p>
          <div className="mt-6 space-y-2 text-slate-700 dark:text-slate-200">
            <p>Email: <a className="text-blue-600 hover:underline" href="mailto:you@example.com">you@example.com</a></p>
            <div className="flex gap-4 text-sm">
              <a className="text-blue-600 hover:underline" href="#">Twitter</a>
              <a className="text-blue-600 hover:underline" href="#">GitHub</a>
              <a className="text-blue-600 hover:underline" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <motion.form onSubmit={onSubmit} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Name</label>
              <input required name="name" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Email</label>
              <input required type="email" name="email" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Message</label>
            <textarea required name="message" rows="4" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:brightness-110 transition">Send</button>
            <p className="text-sm text-slate-600 dark:text-slate-300">{status}</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
