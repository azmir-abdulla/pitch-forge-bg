import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Github, Linkedin, Twitter, Instagram, 
  Mail, Phone, MapPin, ArrowRight 
} from 'lucide-react';
import { SERVICES, PRODUCTS } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-white/5 pt-32 pb-12 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-brand-cyan to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-brand-cyan rounded-2xl flex items-center justify-center font-black text-2xl text-black shadow-[0_0_20px_rgba(0,245,255,0.4)]">P</div>
              <span className="text-3xl font-black tracking-tighter dark:text-white uppercase italic">PitchForge</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Forging the future of enterprise technology with precision engineering and innovative digital architectures. Global software powerhouse based in the digital edge.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, idx) => (
                <button key={idx} className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-black dark:text-white uppercase tracking-widest">Solutions</h4>
            <div className="grid gap-4">
              {SERVICES.map(s => (
                <Link key={s.id} to={`/services/${s.id}`} className="text-slate-500 dark:text-slate-400 hover:text-brand-cyan transition-colors font-medium">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-8">
            <h4 className="text-lg font-black dark:text-white uppercase tracking-widest">Ecosystem</h4>
            <div className="grid gap-4">
              {PRODUCTS.map(p => (
                <Link key={p.id} to={`/products/${p.id}`} className="text-slate-500 dark:text-slate-400 hover:text-brand-cyan transition-colors font-medium">
                  {p.title}
                </Link>
              ))}
              <Link to="/portfolio" className="text-slate-500 dark:text-slate-400 hover:text-brand-cyan transition-colors font-medium">Case Studies</Link>
              <Link to="/insights" className="text-slate-500 dark:text-slate-400 hover:text-brand-cyan transition-colors font-medium">Tech Insights</Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            <h4 className="text-lg font-black dark:text-white uppercase tracking-widest">Get Updates</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-xs font-bold tracking-widest dark:text-white outline-none focus:border-brand-cyan transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-cyan">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                 <Mail className="w-5 h-5 text-brand-cyan" />
                 <span className="text-sm font-medium">hello@pitchforge.tech</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                 <Phone className="w-5 h-5 text-brand-cyan" />
                 <span className="text-sm font-medium">+1 (555) FUTURE-XP</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                 <MapPin className="w-5 h-5 text-brand-cyan" />
                 <span className="text-sm font-medium">Silicon Valley • Tokyo • London</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-slate-500 dark:text-gray-600 uppercase tracking-[0.3em]">
            © {currentYear} PITCHFORGE TECHNOLOGIES. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[10px] font-black text-slate-500 dark:text-gray-600 uppercase tracking-[0.3em] hover:text-brand-cyan transition-colors">Privacy Protocol</Link>
            <Link to="/terms" className="text-[10px] font-black text-slate-500 dark:text-gray-600 uppercase tracking-[0.3em] hover:text-brand-cyan transition-colors">Terms of Sync</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
