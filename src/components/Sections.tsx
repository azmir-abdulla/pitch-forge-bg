import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Star, Quote, Code, Cpu, Globe, Rocket, Zap, 
  CheckCircle2, ShieldCheck, Layers, Target, Users, Briefcase, Heart,
  Smartphone, Brain, Cloud, Palette, Laptop, Database, Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { PORTFOLIO, TESTIMONIALS, SERVICES, CLIENTS, INSIGHTS, TECHNOLOGIES_LIST, TEAM } from '../data/mockData';

// Reusable Heading Component for Consistency
const SectionHeading = ({ badge, title, subtitle, centered = false }: { 
  badge: string; 
  title: React.ReactNode; 
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={cn("mb-20 space-y-6", centered ? "text-center mx-auto max-w-3xl" : "")}>
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={cn("tech-pill inline-flex", centered && "mx-auto")}
    >
      {badge}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.9]"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-slate-500 dark:text-slate-400 font-medium"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const target = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, Math.max(incrementTime, 10));

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// 1.5 ABOUT SECTION - Split layout
export const AboutSection = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <SectionHeading 
            badge="The PitchForge Core"
            title={<>ENGINEERING <br /> EXCELLENCE</>}
            subtitle="We don't just write code. We architect scalable, secure, and hyper-fast digital assets that dominate markets."
          />
          <p className="text-slate-500 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
            At PitchForge, our mission is to deliver Silicon Valley-grade engineering to enterprises worldwide. From headless e-commerce monoliths to predictive AI systems, our DNA is built on rigorous testing, zero-trust security, and unyielding performance.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-4xl font-black text-slate-900 dark:text-white mb-1"><Counter value="150" duration={2} />+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Engineers</p>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900 dark:text-white mb-1"><Counter value="50" duration={2} />M+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Users Reached</p>
            </div>
          </div>
          <Link to="/about" className="btn-outline hidden">LEARN MORE</Link>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
           <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass-card p-4 relative z-10 w-4/5 ml-auto">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" alt="Cyber Server" className="w-full h-full object-cover rounded-[2rem] filter grayscale hover:grayscale-0 transition-all duration-1000" />
           </div>
           
           <motion.div 
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-10 left-0 glass-card p-6 rounded-3xl w-64 z-20 shadow-2xl border-brand-cyan/20 backdrop-blur-2xl bg-white/80 dark:bg-black/60"
           >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <ShieldCheck />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Protocol</p>
                    <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Zero-Trust Active</p>
                 </div>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// 1.8 IT SOLUTIONS (Timeline / Process)
export const ITSolutionsSection = () => {
  const steps = [
    { title: "DISCOVERY & ARCHITECTURE", desc: "Mapping the infrastructure blueprint." },
    { title: "NATIVE ENGINEERING", desc: "Writing hyper-optimized, secure codebases." },
    { title: "QUALITY ASSURANCE", desc: "Stress-testing under extreme loads." },
    { title: "CI/CD DEPLOYMENT", desc: "Zero-downtime continuous integration." }
  ];

  return (
    <section className="py-32 bg-white dark:bg-dark-bg border-y border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge="Our Framework"
          title={<>THE DEPLOYMENT <br /> PROTOCOL</>}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-20">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 w-full h-[1px] bg-slate-200 dark:bg-white/10 hidden md:block" />
          
          {steps.map((step, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="relative z-10 text-center group"
            >
               <div className="w-24 h-24 mx-auto bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center text-3xl font-black text-slate-300 dark:text-white/20 mb-8 group-hover:bg-brand-cyan group-hover:text-black group-hover:border-brand-cyan transition-all duration-500 shadow-xl">
                 0{i + 1}
               </div>
               <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-4 group-hover:text-brand-cyan transition-colors">{step.title}</h4>
               <p className="text-[12px] font-medium text-slate-500 uppercase tracking-wider">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const ServicesGrid = () => {
  const iconsMap: any = {
    Globe: <Globe className="w-8 h-8" />,
    Smartphone: <Smartphone className="w-8 h-8" />,
    Brain: <Brain className="w-8 h-8" />,
    Cloud: <Cloud className="w-8 h-8" />,
    Palette: <Palette className="w-8 h-8" />
  };

  return (
    <section className="py-32 bg-white dark:bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Our Expertise"
          title={<>MASTERING <br /> THE STACK</>}
          subtitle="From cloud-native applications to deep AI integration, we build the core systems that define the next generation."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] glass-card border border-slate-200 dark:border-white/5 hover:border-brand-cyan/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="mb-8 w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center dark:text-white group-hover:bg-brand-cyan group-hover:text-black transition-all">
                {iconsMap[service.icon] || <Zap />}
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-500 dark:text-gray-500 group-hover:text-slate-800 dark:group-hover:text-gray-300 leading-relaxed text-sm transition-colors mb-8">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity">
                {service.features?.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500">
                    <CheckCircle2 className="w-3 h-3 text-brand-cyan" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to={`/services/${service.id}`} className="inline-flex items-center text-[10px] font-bold text-slate-600 dark:text-gray-600 group-hover:text-brand-cyan uppercase tracking-[0.2em] transition-all">
                DISCOVER MORE <ArrowRight className="ml-2 w-3 h-3" />
              </Link>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-cyan/5 blur-3xl rounded-full group-hover:bg-brand-cyan/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. TECH MARQUEE - Glowing badges, infinite scroll
import { FaReact, FaPython, FaJava, FaNodeJs, FaVuejs, FaGithub, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiDotnet, SiLaravel, SiMongodb, SiMysql, SiDocker } from 'react-icons/si';

const advancedTechStack = [
  { name: "React JS", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="dark:text-white text-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
  { name: ".NET", icon: <SiDotnet className="text-[#512BD4]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-[#4FC08D]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "AWS", icon: <FaAws className="text-[#232F3E] dark:text-[#FF9900]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "GitHub", icon: <FaGithub className="dark:text-white text-black" /> }
];

export const TechShowcase = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#070707] border-y border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-gray-600">Engineered with Global Standards</h3>
      </div>
      
      <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
        {[...advancedTechStack, ...advancedTechStack, ...advancedTechStack].map((tech, i) => (
          <div key={i} className="mx-6 px-10 py-5 glass-card rounded-3xl flex items-center gap-6 group cursor-default shadow-lg hover:shadow-brand-cyan/20 border-slate-200 dark:border-white/5 shrink-0 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
             
            {/* Glowing background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-purple/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
               {tech.icon}
            </div>
            <span className="text-lg font-black uppercase tracking-widest text-slate-900 dark:text-white relative z-10">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// 3. STATS - Count up with premium iconography
export const Stats = () => {
  const stats = [
    { label: "Successful Deployments", value: "450+", icon: <Rocket /> },
    { label: "Client Partners", value: "120+", icon: <Users /> },
    { label: "Years in Innovation", value: "12+", icon: <Briefcase /> },
    { label: "Global Engineers", value: "85+", icon: <Globe /> },
  ];

  return (
    <section className="py-32 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 mx-auto w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-brand-cyan transition-colors border border-slate-100 dark:border-white/5">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">
                <Counter value={stat.value} />
              </div>
              <p className="text-[10px] font-black text-slate-500 dark:text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. CLIENTS - Logo grid with slider
export const OurClients = () => {
  return (
    <section id="clients" className="py-32 bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Global Network"
          title={<>TRUSTED BY <br /> DISRUPTORS</>}
          centered
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-30 dark:opacity-20 grayscale dark:invert transition-all hover:opacity-100 hover:grayscale-0">
          {CLIENTS.map((logo, i) => (
            <div key={i} className="flex justify-center p-8 grayscale">
              <img src={logo} alt="Partner" className="max-h-8 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. TESTIMONIALS - Glass carousel
export const Testimonials = () => {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="py-32 bg-white dark:bg-dark-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <SectionHeading 
            badge="Wall of Love"
            title={<>WHAT THE <br /> LEADERS SAY</>}
            subtitle="Real impact across diverse global industries. Hear from our partners about the PitchForge transformation."
          />
          <div className="flex gap-4">
            <button 
              onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:border-brand-cyan transition-colors dark:text-white"
            >
              <ArrowRight className="rotate-180" />
            </button>
            <button 
              onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
              className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:border-brand-cyan transition-colors dark:text-white"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="p-10 glass-card rounded-[3rem] border-slate-200 dark:border-white/10"
            >
              <Quote className="w-12 h-12 text-brand-cyan/20 mb-8" />
              <div className="flex text-brand-cyan mb-8 gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-2xl font-medium text-slate-700 dark:text-gray-300 mb-12 italic leading-relaxed">
                "{TESTIMONIALS[active].text}"
              </p>
              <div className="flex items-center gap-6">
                 <img src={TESTIMONIALS[active].avatar} alt="" className="w-16 h-16 rounded-2xl grayscale" />
                 <div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{TESTIMONIALS[active].name}</h4>
                    <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">{TESTIMONIALS[active].position}</p>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// 6. FAQ - Modern Accordion
const ChevronDownIcon = ({ className }: { className?: string }) => <ArrowRight className={cn(className, "rotate-90")} />;
const ActivityIcon = () => <Zap />;

export const FAQ = ({ faqs }: { faqs: any[] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge="Support"
          title="QUESTIONS?"
          centered
        />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={cn(
                "glass-card rounded-3xl transition-all duration-500 overflow-hidden border-slate-200 dark:border-white/5",
                openIndex === i ? "border-brand-cyan/50 bg-white/10" : ""
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="text-xl font-bold dark:text-white tracking-tight uppercase">{faq.question}</span>
                <ChevronDownIcon className={cn("w-6 h-6 transition-transform dark:text-white", openIndex === i ? "rotate-180" : "")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. CTA - Impactful Parallax
export const FinalCTA = () => {
  return (
    <section className="py-32 bg-white dark:bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[4rem] bg-slate-900 overflow-hidden p-12 md:p-24 text-center">
          {/* Animated Background Icons */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
             <div className="grid grid-cols-6 gap-20 p-20 -rotate-12 scale-150">
               {[Terminal, Cpu, Globe, Database, Smartphone, Palette, Code, Layers, ShieldCheck, Zap, Rocket, ActivityIcon].map((Icon, idx) => (
                 <Icon key={idx} className="w-20 h-20 text-white" />
               ))}
             </div>
          </div>

          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-[clamp(3.5rem,10vw,7rem)] font-black text-white leading-[0.8] uppercase tracking-tighter">
              READY TO <br /> <span className="text-brand-cyan italic">DISRUPT?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Join the ranks of global brands building the future with PitchForge's precision engineering.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link to="/contact" className="btn-primary w-full sm:w-auto h-16">
                GET STARTED NOW <ArrowRight />
              </Link>
              <Link to="/portfolio" className="btn-outline w-full sm:w-auto h-16">
                EXPLORE PROJECTS
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-brand-cyan to-transparent opacity-50" />
        </div>
      </div>
    </section>
  );
};

// ... (at the end of the file)
export const PortfolioShowcase = ({ limit }: { limit?: number }) => {
  const displayItems = limit ? PORTFOLIO.slice(0, limit) : PORTFOLIO;
  return (
    <section className="py-32 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <SectionHeading 
            badge="Case Studies"
            title={<>SELECTED <br /> IMPACTS</>}
          />
          {limit && (
            <Link to="/portfolio" className="group flex items-center space-x-3 text-[10px] font-bold text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-all uppercase tracking-[0.3em]">
              <span>ALL CASE STUDIES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {displayItems.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="group">
              <Link to={`/portfolio/${item.id}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] mb-10 border border-slate-200 dark:border-white/5 glass-card">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute top-8 left-8 tech-pill bg-black/40 border-white/10 text-white backdrop-blur">
                    {item.category}
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-cyan transition-colors uppercase tracking-tight">{item.title}</h3>
                  <div className="flex items-center text-[10px] font-bold text-slate-500 dark:text-gray-600 uppercase tracking-widest gap-4">
                    <span>{item.client}</span>
                    <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/10" />
                    <span>{item.technologies.slice(0, 2).join(' + ')}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InsightsPreview = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <SectionHeading 
            badge="Insights"
            title={<>THE <br /> KNOWLEDGE BASE</>}
          />
          <Link to="/insights" className="group flex items-center space-x-3 text-[10px] font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all uppercase tracking-[0.3em]">
            <span>READ ALL ARTICLES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((article, i) => (
            <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
              <Link to="/insights">
                <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-10 border border-slate-200 dark:border-white/5 glass-card relative">
                   <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                   <div className="absolute top-8 left-8 tech-pill bg-black/40 text-white backdrop-blur border-white/10">
                      {article.category}
                   </div>
                </div>
                <div className="px-4">
                  <p className="text-[10px] font-bold text-slate-500 dark:text-gray-600 uppercase tracking-widest mb-4">{article.date}</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-brand-cyan transition-colors leading-tight uppercase tracking-tight">{article.title}</h3>
                  <div className="flex items-center text-[10px] font-bold text-slate-700 dark:text-gray-700 uppercase tracking-[0.2em] group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    READ ARTICLE <ArrowRight className="ml-3 w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. TEAM SHOWCASE - Modern team component
export const TeamShowcase = () => {
  return (
    <section className="py-32 bg-white dark:bg-dark-bg border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Core Intelligence"
          title={<>THE <br /> ARCHITECTS</>}
          subtitle="Meet the elite engineering minds behind PitchForge's industry-disrupting solutions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-white/5 mb-6 glass-card relative flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white">
                   <p className="text-[10px] font-black uppercase tracking-widest text-brand-cyan mb-1">{member.role}</p>
                   <p className="text-xl font-bold uppercase tracking-tight">{member.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
