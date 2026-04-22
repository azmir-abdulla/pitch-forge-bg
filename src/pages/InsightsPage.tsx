import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../data/mockData';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InsightsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Insights | The PitchForge Intelligence Journal</title>
      </Helmet>
      <Navbar />

      <main className="pt-40 pb-32 bg-white dark:bg-dark-bg min-h-screen relative transition-colors duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
        <div className="noise-bg" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-32 space-y-8 max-w-4xl">
            <div className="tech-pill inline-flex">The Intelligence Journal</div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.8]">
              ENGINEERING <br /> <span className="gradient-text italic">FRONTIERS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Deciphering the architectures of tomorrow. A collection of research, perspectives, and engineering logs from the PitchForge core team.
            </p>
          </div>

          {/* Filtering Bar */}
          <div className="flex flex-wrap items-center justify-between gap-8 mb-20 pb-12 border-b border-slate-200 dark:border-white/10">
            <div className="flex gap-8 items-center text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em]">
               <span className="text-slate-900 dark:text-white border-b border-brand-cyan pb-2">ALL ARCHIVES</span>
               <span className="hover:text-brand-cyan cursor-pointer transition-colors pb-2">ARCHITECTURE</span>
               <span className="hover:text-brand-cyan cursor-pointer transition-colors pb-2">AI SYSTEMS</span>
               <span className="hover:text-brand-cyan cursor-pointer transition-colors pb-2">STRATEGY</span>
            </div>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="SEARCH TRANSMISSIONS" 
                className="bg-transparent border-b border-slate-200 dark:border-white/10 py-2 pl-8 text-[11px] font-black uppercase tracking-widest outline-none focus:border-brand-cyan transition-all dark:text-white"
              />
              <Search className="w-4 h-4 absolute left-0 top-2 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {INSIGHTS.map((article, i) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[3rem] mb-10 border border-slate-200 dark:border-white/5 relative glass-card shadow-2xl">
                   <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                   <div className="absolute top-8 left-8 tech-pill bg-black/40 border-white/10 text-white backdrop-blur">
                      {article.category}
                   </div>
                </div>
                <div className="px-4">
                  <p className="text-[10px] font-bold text-slate-500 dark:text-gray-600 uppercase tracking-[0.3em] mb-6">{article.date}</p>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-brand-cyan transition-colors leading-tight uppercase tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-500 leading-relaxed mb-10 group-hover:text-slate-800 dark:group-hover:text-gray-400 transition-colors">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-[10px] font-bold text-slate-700 dark:text-gray-700 uppercase tracking-widest group-hover:text-slate-900 dark:group-hover:text-white transition-all">
                    OPEN LOGS <ArrowRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className="mt-48 p-16 md:p-32 glass-card rounded-[4rem] text-center relative overflow-hidden border-slate-200 dark:border-white/10 shadow-3xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-cyan/5 blur-[120px] pointer-events-none" />
            <div className="relative z-10 space-y-12 max-w-2xl mx-auto">
               <div className="tech-pill mx-auto">JOIN THE COLLECTIVE</div>
               <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.8]">
                 DECODE THE <br /> <span className="text-brand-cyan italic">FUTURE.</span>
               </h2>
               <p className="text-slate-500 dark:text-gray-500 font-medium text-xl leading-relaxed">
                 Elite intelligence for modern engineers and visionary operators. Pure signal, zero noise.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto">
                 <input 
                   type="email" 
                   placeholder="TACTICAL EMAIL" 
                   className="flex-1 bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-10 py-6 dark:text-white font-bold outline-none focus:border-brand-cyan transition-all text-xs uppercase tracking-widest" 
                 />
                 <button className="btn-primary px-10 py-6 text-xs shadow-2xl">
                   SYNC
                 </button>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default InsightsPage;
