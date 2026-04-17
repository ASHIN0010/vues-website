import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';

const categories = ['All', ...new Set(projects.map(p => p.category))];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 relative bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Selected <span className="text-gradient">Works.</span></h2>
            <p className="text-dim max-w-md">A curated collection of my recent creative endeavors across various mediums.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-primary text-zinc-950' 
                    : 'glass border border-soft text-dim hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 border border-soft shadow-xl glass-card"
                onClick={() => setSelectedProject(project)}
              >
                {project.type === 'video' ? (
                  <video src={project.src} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col items-center text-center">
                  <span className="px-3 py-1 bg-primary text-zinc-950 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="w-8 h-[2px] bg-primary mx-auto mt-2 transition-all duration-500 group-hover:w-16"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal / Lightbox (Simple implementation) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden glass-card border flex border-soft"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 h-64 md:h-[600px]">
                  {selectedProject.type === 'video' ? (
                    <video src={selectedProject.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={selectedProject.src} alt={selectedProject.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center glass bg-zinc-900/50">
                  <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2">{selectedProject.category}</span>
                  <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-dim mb-8">{selectedProject.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Role</h4>
                      <p className="text-dim text-sm">Director, Editor</p>
                    </div>
                  </div>
                  
                  <button onClick={() => setSelectedProject(null)} className="px-6 py-3 border border-soft rounded-full hover:bg-white/10 transition">
                    Close Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
