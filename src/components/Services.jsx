import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sun, Heart, Briefcase, Check } from 'lucide-react';
import { services } from '../data';

const iconMap = {
  Clock: <Clock size={32} />,
  Sun: <Sun size={32} />,
  Heart: <Heart size={32} />,
  Briefcase: <Briefcase size={32} />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-surface/50">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <h2 className="text-primary uppercase font-mono tracking-widest text-sm font-bold">Services</h2>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">What I <span className="text-gradient">Offer.</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group border border-soft hover:border-primary"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                {iconMap[service.iconName]}
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20">
                {iconMap[service.iconName]}
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-dim mb-6 min-h-[80px] leading-relaxed">{service.desc}</p>
              
              <ul className="mb-8 space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-dim group/item">
                    <Check size={16} className="text-primary group-hover/item:scale-125 transition-transform" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-soft flex items-center justify-between">
                <span className="font-mono text-xl font-bold text-primary">{service.price}</span>
                <a href="#contact" className="text-xs uppercase text-dim font-bold tracking-widest hover:text-white transition group-hover:underline">
                  Inquire
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
