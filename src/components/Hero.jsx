import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { heroContent, partners } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with glowing orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-[2px]"></div> {/* Overlay */}
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-soft glass text-primary text-sm font-medium tracking-wide mb-6">
              {heroContent.badge}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] origin-center"
            initial={{ opacity: 0, scaleX: 0.2, scaleY: 0.01 }}
            animate={{ 
              opacity: [0, 1, 1], 
              scaleX: [0.2, 1, 1], 
              scaleY: [0.01, 0.01, 1] 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "circOut", 
              delay: 0.1,
              times: [0, 0.25, 1]
            }}
          >
            {heroContent.headingMain} <span className="text-gradient">{heroContent.headingAccent1}</span> <br />
            {heroContent.headingBreak} <span className="text-gradient-light">{heroContent.headingAccent2}</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-dim max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-zinc-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-primary-hover group-hover:scale-110 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">Explore My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>

            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass border border-soft text-white font-medium rounded-full transition-all hover:bg-white/10 hover-glow"
            >
              <Play fill="currentColor" size={16} className="text-primary" />
              <span>Showreel</span>
            </a>
          </motion.div>
          
          {/* Partners marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 w-full pt-10 border-t border-white/5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-8 font-bold">Trusted by Brands Worldwide</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 invert hover:opacity-100 transition-opacity duration-700">
              {partners.map((partner, i) => (
                <span key={i} className="text-lg md:text-xl font-black tracking-tighter whitespace-nowrap italic">{partner}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 border-soft/20 relative overflow-hidden bg-white/10">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-primary"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
