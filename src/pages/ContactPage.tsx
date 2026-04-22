import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
      // Reset after showing success nicely
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <Layout>
      <Helmet>
        <title>Connect | PitchForge Technologies</title>
      </Helmet>
      <Navbar />

      <main className="pt-40 pb-32 bg-white dark:bg-dark-bg min-h-screen relative transition-colors duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            {/* Left Column: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div className="space-y-6">
                <div className="tech-pill inline-flex">Direct Connection</div>
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] uppercase tracking-tighter">
                  LET'S <br /> BUILD THE <br /> <span className="gradient-text italic">FUTURE.</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-md leading-relaxed">
                  Connect with our high-end engineering team to discuss your next industry-disrupting project.
                </p>
              </div>

              <div className="grid gap-10">
                {[
                  { icon: <Mail />, label: "Inquiries", value: "forge@pitchforge.tech" },
                  { icon: <Phone />, label: "HQ Access", value: "+1 (555) PITCH-TECH" },
                  { icon: <MapPin />, label: "Global Presence", value: "London • San Francisco • Tokyo" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-brand-cyan transition-all border border-slate-200 dark:border-white/10 group-hover:border-brand-cyan">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">{item.value}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Grid */}
              <div className="flex gap-4">
                 {[Globe, MessageSquare, Send].map((Icon, i) => (
                   <button key={i} className="btn-outline w-16 h-16 border-slate-200 dark:border-white/10">
                     <Icon className="w-6 h-6 text-slate-400 hover:text-brand-cyan" />
                   </button>
                 ))}
              </div>
            </motion.div>

            {/* Right Column: Premium Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-[3rem] p-12 lg:p-16 border-slate-200 dark:border-white/10 shadow-2xl relative"
            >
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-gray-500 block ml-2">Full Name</label>
                    <input 
                       type="text" 
                       required
                       disabled={status !== 'idle'}
                       placeholder="ALEX RIVERS"
                       className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-8 py-5 text-sm font-bold uppercase tracking-widest dark:text-white outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-gray-500 block ml-2">Enterprise Email</label>
                    <input 
                       type="email" 
                       required
                       disabled={status !== 'idle'}
                       placeholder="ALEX@COMPANY.TECH"
                       className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-8 py-5 text-sm font-bold uppercase tracking-widest dark:text-white outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-gray-500 block ml-2">Service Required</label>
                  <select disabled={status !== 'idle'} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-8 py-5 text-sm font-bold uppercase tracking-widest dark:text-white outline-none focus:border-brand-cyan transition-all appearance-none disabled:opacity-50">
                    <option>WEB ENGINEERING</option>
                    <option>AI AUTOMATION</option>
                    <option>MOBILE INNOVATION</option>
                    <option>CLOUD SCALING</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-gray-500 block ml-2">Project Vision</label>
                  <textarea 
                    rows={4}
                    required
                    disabled={status !== 'idle'}
                    placeholder="DESCRIBE YOUR SYSTEM ARCHITECTURE NEEDS..."
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-8 py-5 text-sm font-bold uppercase tracking-widest dark:text-white outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none disabled:opacity-50"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status !== 'idle'}
                  className="btn-primary w-full py-8 text-xl disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {status === 'idle' && <><Send className="w-5 h-5 mr-2 inline" /> SEND TRANSMISSION</>}
                  {status === 'submitting' && <span className="animate-pulse">UPLOADING DATA...</span>}
                  {status === 'success' && <><CheckCircle2 className="w-5 h-5 mr-2 inline text-green-400" /> <span className="text-green-400">TRANSMISSION SECURED</span></>}
                </button>
              </form>

              {/* Form Decoration */}
              <div className="absolute top-10 right-10 flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse delay-75" />
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse delay-150" />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default ContactPage;
