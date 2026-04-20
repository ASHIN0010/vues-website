import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data';
import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-8 border-t border-soft relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Logo & Brand */}
          <div className="lg:col-span-2 flex flex-col items-start gap-6">
            <a href="#hero" className="flex items-center gap-2 group mb-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-soft group-hover:scale-110 transition-transform">
                <img src={logo} alt="VUES Logo" className="w-12 h-12 object-contain" />
              </div>
              <span className="font-bold text-3xl tracking-tight text-white">{personalInfo.name}<span className="text-primary">.</span></span>
            </a>
            <p className="text-dim max-w-md text-base leading-relaxed">
              We craft immersive digital experiences, high-end videos, and striking visuals that tell compelling stories and captivate audiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#hero" className="text-dim hover:text-white transition-colors inline-block text-base">Home</a></li>
              <li><a href="#about" className="text-dim hover:text-white transition-colors inline-block text-base">About Us</a></li>
              <li><a href="#work" className="text-dim hover:text-white transition-colors inline-block text-base">Portfolio</a></li>
              <li><a href="#contact" className="text-dim hover:text-white transition-colors inline-block text-base">Contact Now</a></li>
              <li><a href="#services" className="text-dim hover:text-white transition-colors inline-block text-base">Book Now</a></li>
              <li><a href="/admin" className="text-dim hover:text-white transition-colors inline-block text-base">Admin Page</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white mb-1">Contact Us</h3>
            
            <div>
              <h4 className="text-white font-bold text-base mb-2">Email Us</h4>
              <a href={`mailto:${personalInfo.email}`} className="text-dim hover:text-white transition-colors block text-base">
                {personalInfo.email}
              </a>
            </div>

            <div>
              <h4 className="text-white font-bold text-base mb-2">Call Us</h4>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-dim hover:text-white transition-colors block text-base mb-1">
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <p className="text-dim text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 glass text-dim hover:text-white rounded-full transition-colors border border-soft hover-glow">
              <FaInstagram size={18} />
            </a>
            <a href={personalInfo.socials.vimeo} target="_blank" rel="noopener noreferrer" className="p-2 glass text-dim hover:text-white rounded-full transition-colors border border-soft hover-glow">
              <FaYoutube size={18} />
            </a>
            <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 glass text-dim hover:text-white rounded-full transition-colors border border-soft hover-glow">
              <FaTwitter size={18} />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 glass text-dim hover:text-white rounded-full transition-colors border border-soft hover-glow">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
