import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Tag, Zap, CalendarCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { brandingFeatures } from '../data';

const iconMap = {
  BadgeCheck: BadgeCheck,
  Tag: Tag,
  Zap: Zap,
  CalendarCheck: CalendarCheck,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake
};

const BrandingCard = ({ feature, index }) => {
  const IconComponent = iconMap[feature.icon] || ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-[85vw] sm:w-[350px] snap-center md:w-auto h-[400px] md:h-auto 
                 bg-[#1c1313] md:bg-[#1a1111] border border-red-900/30 rounded-3xl p-6 md:p-8 
                 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6
                 relative overflow-hidden group hover:border-red-500/50 transition-colors"
    >
      {/* Mobile background glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-red-900/10 to-transparent opacity-50 md:hidden pointer-events-none" />

      {/* Text Section: On Top for Mobile, Right for Desktop (via flex order) */}
      <div className="flex-1 z-10 flex flex-col items-center md:items-start justify-center order-1 md:order-2">
        <h3 className="text-2xl font-bold text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
          {feature.desc}
        </p>
      </div>

      {/* Visual/Icon Section: On Bottom for Mobile, Left for Desktop */}
      <div className="w-full h-1/2 md:h-[200px] md:w-[200px] md:min-w-[200px] flex items-center justify-center relative order-2 md:order-1 mt-auto md:mt-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1313] via-transparent to-transparent z-10 md:hidden" />
        
        {/* Placeholder for massive icon mimicking the image */}
        <div className="relative z-0 group-hover:scale-110 transition-transform duration-500">
           <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full" />
           <IconComponent className="w-32 h-32 md:w-28 md:h-28 text-white/80 drop-shadow-[0_0_15px_rgba(2dc2,38,38,0.5)]" strokeWidth={1} />
        </div>
      </div>
    </motion.div>
  );
};

const Branding = () => {
  return (
    <section className="py-20 md:py-32 w-full max-w-7xl mx-auto px-0 md:px-6 relative">
      <div className="text-center px-6 md:px-0 mb-12 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 text-sm font-medium mb-6"
        >
          <Zap className="w-4 h-4" />
          <span>Why Vues</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2"
        >
          Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Values</span>
        </motion.h2>
      </div>

      {/* Carousel on Mobile, Grid on Desktop */}
      <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory px-6 md:px-0 pb-12 md:pb-0 hide-scrollbar">
        {brandingFeatures.map((feature, index) => (
          <BrandingCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
      
      {/* Scroll indicator for mobile */}
      <div className="flex justify-center items-center gap-2 mt-2 md:hidden">
         <span className="w-2 h-2 rounded-full bg-red-500"></span>
         <span className="w-2 h-2 rounded-full bg-slate-700"></span>
         <span className="w-2 h-2 rounded-full bg-slate-700"></span>
      </div>
    </section>
  );
};

export default Branding;
