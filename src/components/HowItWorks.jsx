import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, Send } from 'lucide-react';
import { workingSteps } from '../data';

const iconMap = {
  Calendar: <Calendar size={32} />,
  Video: <Video size={32} />,
  Send: <Send size={32} />,
};

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 relative bg-dark overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <h2 className="text-primary uppercase font-mono tracking-widest text-sm font-bold">Workflow</h2>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            How it <span className="text-gradient">Works.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0"></div>

          {workingSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center group z-10"
            >
              <div className="w-24 h-24 rounded-full bg-surface border-2 border-soft flex items-center justify-center text-primary mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(203,11,11,0.2)] transition-all duration-500 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-zinc-950 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                {iconMap[step.icon]}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{step.title}</h4>
              <p className="text-dim max-w-[250px] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
