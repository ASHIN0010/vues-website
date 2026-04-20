import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroContent } from '../data';
import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark text-white">
      {/* Background with glowing orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-[2px]"></div> {/* Overlay */}
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between min-h-[90vh]">
        
        {/* Left Content (Text & Buttons) */}
        <div className="w-full lg:w-[55%] flex flex-col items-start justify-center text-left z-20">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tight mb-6 leading-[1.1] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {heroContent.headingMain} <br />
            <span className="text-primary">{heroContent.headingAccent1}</span>
            {heroContent.headingBreak} <br />
            <span>{heroContent.headingAccent2}</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-dim max-w-lg mb-10 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-zinc-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative flex items-center gap-2">Book Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>

            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full transition-all hover:bg-white/10"
            >
              <span>Explore Our Story</span>
            </a>
          </motion.div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-[45%] mt-16 lg:mt-0 relative flex justify-center lg:justify-end z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <img src={heroImg} alt="Hero Presentation" className="relative z-10 w-[80%] lg:w-full max-w-[500px] object-contain drop-shadow-[0_20px_50px_rgba(203,11,11,0.2)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
