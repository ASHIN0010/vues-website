import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import { Clapperboard } from 'lucide-react';
import { personalInfo } from '../data';
import logo from '../assets/LOGO1.png';

export default function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14ecc8a?q=80&w=800&auto=format&fit=crop')] opacity-[0.02] mix-blend-screen scale-110 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-soft hover:scale-110 transition-transform">
            <img src={logo} alt="VUES Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="font-bold tracking-tight text-white">{personalInfo.name}<span className="text-primary">.</span></span>
        </div>

        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 glass text-dim hover:text-primary rounded-full transition-colors border-soft hover-glow">
            <FaInstagram size={18} />
          </a>
          <a href={personalInfo.socials.vimeo} target="_blank" rel="noopener noreferrer" className="p-2 glass text-dim hover:text-primary rounded-full transition-colors border-soft hover-glow">
            <FaYoutube size={18} />
          </a>
          <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 glass text-dim hover:text-primary rounded-full transition-colors border-soft hover-glow">
            <FaTwitter size={18} />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 glass text-dim hover:text-primary rounded-full transition-colors border-soft hover-glow">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
