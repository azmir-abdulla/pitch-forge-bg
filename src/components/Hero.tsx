import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Code, ShieldCheck, Zap, Database } from 'lucide-react';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="min-h-[1em]">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse border-r-4 border-brand-cyan">&nbsp;</span>
    </span>
  );
};

const FloatingCard = ({ icon: Icon, title, desc, delay, className }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute glass-card p-5 rounded-3xl border border-slate-200 dark:border-white/10 hidden md:flex items-center gap-5 shadow-2xl ${className}`}
      whileHover={{ scale: 1.05, borderColor: 'rgba(0, 245, 255, 0.5)' }}
    >
      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-cyan border border-slate-200 dark:border-white/5">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">{title}</h4>
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{desc}</p>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-500">
      {/* Background Animated Gradients / Glows (Replaces Three.js) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-cyan/20 blur-[100px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-purple/20 blur-[120px] mix-blend-screen"
        />
      </div>

      {/* Background Overlays */}
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none z-0" />
      <div className="noise-bg z-0" />

      {/* Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="tech-pill mb-8 inline-flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span>Available for New Projects</span>
            </motion.div>
        
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-slate-900 dark:text-white mb-8 select-none tracking-tight whitespace-nowrap">
              FORGING THE{" "}
              <span className="gradient-text italic pr-2 inline-block">
                <Typewriter
                  texts={[
                    "FUTURE OF TECH",
                    "DIGITAL BEYOND",
                    "SMART SYSTEMS",
                    "INNOVATION",
                  ]}
                />
              </span>
            </h1>
   
            <p className="text-xl px-1 md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium">
              Global software power-house building resilient, high-speed
              infrastructures for the next era of enterprise technology.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/contact" className="btn-primary group">
                START YOUR PROJECT
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-outline">
                VIEW CASE STUDIES
              </Link>
            </div>
            {/* Trusted Brands */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-20 pt-10 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-white">
                Trusted by Leaders:
              </span>
              <div className="flex gap-8 md:gap-12 items-center">
                <span className="text-sm md:text-base font-black tracking-widest text-slate-900 dark:text-white transition-colors">
                  AMAZON
                </span>
                <span className="text-sm md:text-base font-black tracking-widest text-slate-900 dark:text-white transition-colors">
                  GOOGLE
                </span>
                <span className="text-sm md:text-base font-black tracking-widest text-slate-900 dark:text-white transition-colors">
                  NETFLIX
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side Parallax Hero Visuals */}
        <div className="lg:col-span-5 relative hidden lg:block h-[600px] w-full">
          <motion.div
            style={{ y: y1 }}
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          >
            <FloatingCard
              icon={Zap}
              title="System Optimal"
              desc="99.9% Uptime"
              delay={0.5}
              className="top-[10%] right-[10%] backdrop-blur-3xl"
            />
            <FloatingCard
              icon={ShieldCheck}
              title="Zero-Trust Sec"
              desc="Military Grade"
              delay={0.7}
              className="top-[45%] left-[-20%] backdrop-blur-xl"
            />
            <FloatingCard
              icon={Database}
              title="Edge Compute"
              desc="Global Scale"
              delay={0.9}
              className="bottom-[15%] right-[20%] backdrop-blur-2xl"
            />

            {/* Central Graphic */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-brand-cyan/30 flex items-center justify-center p-8 glass-card before:absolute before:inset-0 before:rounded-full before:bg-brand-cyan/5 before:animate-spin-slow"
            >
              <div className="w-full h-full rounded-full border border-brand-purple/30 border-dashed animate-reverse-spin flex items-center justify-center">
                <Code className="w-16 h-16 text-brand-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.8)]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20 hidden md:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-gray-400">
          Scroll down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-slate-500 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
