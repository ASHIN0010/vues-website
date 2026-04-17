import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: "Alex R.",
      role: "Founder, NeoBrands",
      text: "Incredible eye for detail. The final cut exceeded our expectations and drove a 40% increase in engagement on our ad campaigns.",
      rating: 5,
    },
    {
      name: "Sarah C.",
      role: "Event Organizer",
      text: "Captured the energy of our festival perfectly. The turnaround time was fast, and the color grading was breathtaking.",
      rating: 5,
    },
    {
      name: "Mike T.",
      role: "Content Creator",
      text: "A master at visual storytelling. My YouTube intro has never looked so premium. Highly recommend working together.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <h2 className="text-amber-500 uppercase font-mono tracking-widest text-sm font-bold">Testimonials</h2>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Client <span className="text-gradient">Stories.</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/5 relative group"
            >
              <div className="absolute top-6 right-8 text-amber-500/20 text-6xl font-serif leading-none group-hover:text-amber-500/40 transition-colors">"</div>
              <div className="flex text-amber-500 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 min-h-[80px]">"{review.text}"</p>
              <div>
                <h5 className="text-white font-bold">{review.name}</h5>
                <p className="text-sm text-slate-500 uppercase tracking-wider">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
