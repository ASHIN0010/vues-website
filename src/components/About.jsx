import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Palette } from 'lucide-react';
import { aboutContent } from '../data';
import aboutImage from '../assets/about_vision.png';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-surface">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side: Image layout */}
          <motion.div variants={itemVariants} className="relative aspect-square md:aspect-[4/3] lg:aspect-square">
            <div className="absolute inset-4 rounded-3xl bg-primary/20 blur-2xl"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border border-soft group shadow-2xl">
              <img 
                src={aboutImage} 
                alt="VUES Vision" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold font-mono tracking-widest uppercase border border-white/20">Creative</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary backdrop-blur-md rounded-full text-xs font-bold font-mono tracking-widest uppercase border border-primary/30">Visionary</span>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -right-6 -bottom-6 glass-card p-4 rounded-2xl border border-soft flex items-center gap-4 hidden sm:flex"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-zinc-950">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white leading-tight">{aboutContent.stats[0].value}</h4>
                <p className="text-xs text-dim">{aboutContent.stats[0].label}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side: Content */}
          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <h2 className="text-primary uppercase font-mono tracking-widest text-sm font-bold">{aboutContent.tag}</h2>
            </motion.div>
            
            <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold leading-tight">
              {aboutContent.title} <span className="text-gradient">{aboutContent.titleAccent}</span>.
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-dim text-lg leading-relaxed">
              {aboutContent.description}
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {aboutContent.features.map((feature, idx) => (
                <div key={idx} className="glass-card p-5 rounded-2xl hover-glow">
                  {idx === 0 ? <Camera className="text-primary mb-3" size={28} /> : <Palette className="text-primary mb-3" size={28} />}
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-dim">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
