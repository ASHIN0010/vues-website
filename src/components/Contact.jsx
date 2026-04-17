import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[\s+]/g, '')}`;

  return (
    <section id="contact" className="py-24 bg-surface relative border-t border-soft">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <h2 className="text-primary uppercase font-mono tracking-widest text-sm font-bold">{personalInfo.name === 'VUES' ? 'Get In Touch' : 'Contact Me'}</h2>
            </div>

            <h3 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              Ready to <br /><span className="text-gradient hover-glow transition">Collaborate?</span>
            </h3>

            <p className="text-dim max-w-md text-lg mb-10 leading-relaxed">
              Whether you have a wild idea, an upcoming project, or just want to chat about visuals—I'm a message away.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-dim hover:text-white transition">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center bg-white/5 border border-soft text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-muted mb-1">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium text-lg">{personalInfo.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-dim hover:text-white transition">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center bg-white/5 border border-soft text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-muted mb-1">Location</p>
                  <p className="font-medium text-lg">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href={whatsappUrl} className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366]/20 text-[#25D366] rounded-full font-bold border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all hover:-translate-y-1">
                <MessageSquare size={20} />
                Message on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl border border-white/10"
          >
            <h4 className="text-2xl font-bold mb-8 capitalize">Send a <span className="text-primary">message</span></h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-muted">Name</label>
                  <input type="text" className="w-full bg-zinc-900/50 border border-soft rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors glass" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-muted">Email</label>
                  <input type="email" className="w-full bg-zinc-900/50 border border-soft rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors glass" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted">Subject</label>
                <input type="text" className="w-full bg-zinc-900/50 border border-soft rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors glass" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted">Message</label>
                <textarea rows="4" className="w-full bg-zinc-900/50 border border-soft rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors glass resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="button" className="w-full group bg-primary text-zinc-950 font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors">
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
