import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TechShowcase, FinalCTA } from '../components/Sections';
import { PORTFOLIO } from '../data/mockData';

const CATEGORIES = ["All", "Web App", "ERP", "POS", "SaaS", "Mobile App", "E-commerce"];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortfolio = activeCategory === "All" 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Multi-Million Dollar Projects | PitchForge</title>
      </Helmet>
      <Navbar />
      
      <header className="pt-48 pb-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="tech-pill mb-8 inline-flex">ARCHIVE OF EXCELLENCE</div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white leading-[0.8] uppercase tracking-tighter mb-12">
              BEYOND the <br /> <span className="gradient-text italic">LIMITS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
              Explore our curation of high-impact digital infrastructures, financial ecosystems, and AI-driven platforms built for global industry leaders.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="pb-32 bg-white dark:bg-dark-bg transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-20 border-b border-slate-200 dark:border-white/10 pb-8">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === category 
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-[0_0_15px_rgba(0,245,255,0.4)]' 
                    : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid View */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <Link to={`/portfolio/${item.id}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6 border border-slate-200 dark:border-white/5 glass-card">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute top-6 left-6 tech-pill bg-white/90 text-slate-900 border-none px-4 py-1.5 shadow-xl font-bold dark:bg-black/80 dark:text-white backdrop-blur">
                        {item.category}
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white z-10">
                         <div className="flex flex-wrap gap-2 mb-3">
                           {item.technologies.slice(0, 3).map((tech, idx) => (
                             <span key={idx} className="text-[9px] font-black tracking-widest uppercase bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">{tech}</span>
                           ))}
                         </div>
                      </div>
                    </div>
                    <div className="px-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-cyan transition-colors uppercase tracking-tight leading-tight">{item.title}</h3>
                      <p className="text-[11px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest">{item.client}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredPortfolio.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl text-slate-500 font-bold uppercase tracking-widest">No Projects Found for this Category.</p>
              </div>
            )}
          </motion.div>
        </div>

        <div className="mt-32">
          <TechShowcase />
        </div>
        <FinalCTA />
      </main>

      <Footer />
    </Layout>
  );
};

export default PortfolioPage;
