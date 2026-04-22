import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { SERVICES, PRODUCTS, PORTFOLIO } from '../data/mockData';
import { 
  ArrowLeft, CheckCircle2, Zap, ArrowRight, Code, 
  Globe, Smartphone, Brain, Cloud, Target, Activity
} from 'lucide-react';
import { cn } from '../lib/utils';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const iconMap: any = {
  'web-dev': <Globe />,
  'app-dev': <Smartphone />,
  'ai-automation': <Brain />,
  'cloud-solutions': <Cloud />,
};

const DetailsPage = ({ type }: { type: 'service' | 'product' | 'portfolio' }) => {
  const { id } = useParams();
  
  const data: any = type === 'service' 
    ? SERVICES.find(s => s.id === id) 
    : type === 'product'
    ? PRODUCTS.find(p => p.id === id)
    : PORTFOLIO.find(pr => pr.id === id);

  if (!data) return <Navigate to="/" />;

  return (
    <Layout>
      <Helmet>
        <title>{data.title} | PitchForge Intelligence</title>
      </Helmet>
      <Navbar />

      <main className="pt-40 pb-32 bg-white dark:bg-dark-bg min-h-screen relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
        <div className="noise-bg" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to={type === 'portfolio' ? '/portfolio' : '/'} className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-gray-500 hover:text-brand-cyan transition-colors mb-20">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
              BACK TO {type === 'portfolio' ? 'ARCHIVE' : 'CENTRAL'}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="tech-pill inline-flex">
                  {type === 'service' ? 'Capability' : type === 'product' ? 'Proprietary Tech' : 'Case Study'}
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] uppercase tracking-tighter">
                  {data.title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                  {data.details || data.overview || data.description}
                </p>
              </div>

              {/* Technologies / Features */}
              <div className="grid gap-4">
                {(data.features || data.technologies)?.map((item: string, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="group flex items-center gap-6 p-6 glass-card rounded-3xl border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 dark:bg-white/5 flex items-center justify-center text-brand-cyan border border-brand-cyan/20 group-hover:bg-brand-cyan group-hover:text-black transition-all">
                      {type === 'portfolio' ? <Code className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 flex flex-wrap gap-6 items-center">
                <Link to="/contact" className="btn-primary w-full sm:w-auto text-xl py-6">
                  INITIATE PROJECT <ArrowRight />
                </Link>
                {type === 'portfolio' && data.demo && (
                  <a href={data.demo} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto text-xl py-6">
                    VIEW LIVE DEMO
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-slate-200 dark:border-white/5 relative glass-card group">
                <img 
                  src={data.image || `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000`} 
                  alt={data.title} 
                  className="w-full h-full object-cover grayscale opacity-50 dark:opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                />
                
                {/* Floating Info */}
                <div className="absolute bottom-10 left-10 right-10 p-10 glass-card rounded-[3rem] border-white/10 backdrop-blur-2xl">
                   <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-black text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-2">Current Deployment</p>
                        <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Active State</h4>
                      </div>
                      <div className="flex flex-col items-end">
                         <div className="flex gap-1 mb-2">
                           {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                         </div>
                         <p className="text-[10px] font-black text-brand-cyan uppercase tracking-widest">v4.2.0 Sync</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Decorative Glowing Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/20 blur-[80px] rounded-full animate-pulse-glow pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-cyan/20 blur-[80px] rounded-full animate-float-slow pointer-events-none" />
            </motion.div>
          </div>

          {/* Deep Dive Section for Portfolios */}
          {type === 'portfolio' && (
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-32 space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {data.challenge && (
                  <div className="glass-card p-12 rounded-[3xl] border-slate-200 dark:border-white/5">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight border-b border-brand-cyan/20 pb-4 inline-block">The Challenge</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{data.challenge}</p>
                  </div>
                )}
                {data.solution && (
                  <div className="glass-card p-12 rounded-[3xl] border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-brand-cyan/5">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-brand-cyan mb-6 uppercase tracking-tight border-b border-brand-cyan/20 pb-4 inline-block">The Solution</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{data.solution}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Stats Bar (Optional for Projects) */}
          {type === 'portfolio' && (
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-12 p-12 glass-card rounded-[4rem] border-slate-200 dark:border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-mesh opacity-20" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
                {[
                  { label: "Execution Time", value: "84 Days", icon: <Activity className="w-5 h-5 text-brand-cyan mx-auto mb-4" /> },
                  { label: "Project Outcome", value: "100% Success", icon: <Target className="w-5 h-5 text-brand-cyan mx-auto mb-4" /> },
                  { label: "Deployment", value: "Global Cloud", icon: <Cloud className="w-5 h-5 text-brand-cyan mx-auto mb-4" /> }
                ].map((s, idx) => (
                  <div key={idx} className={cn(idx !== 2 ? "md:border-r border-slate-200 dark:border-white/5" : "")}>
                    {s.icon}
                    <h5 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-1">{s.value}</h5>
                    <p className="text-[10px] font-black text-slate-500 dark:text-gray-500 uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default DetailsPage;
