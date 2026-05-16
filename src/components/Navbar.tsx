import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Menu, X } from 'lucide-react';

const NavItem = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`link-hover px-2 py-1 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-charcoal ${isActive ? 'text-charcoal after:w-full' : 'text-charcoal/40'}`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`relative flex items-center justify-between px-4 md:px-8 py-1.5 md:py-4 bg-white/80 backdrop-blur-md border border-charcoal/5 rounded-full transition-all duration-700 ${
          isScrolled ? 'shadow-sm' : ''
        }`}>
          <Link to="/" className="group flex items-center">
            <span className="text-[11px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.3em] text-charcoal">THURIKA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/classes">Classes</NavItem>
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <Link 
              to="/enroll" 
              className="px-6 py-2 bg-charcoal text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors"
            >
              Enroll
            </Link>
          </nav>

          <button 
            className="md:hidden text-charcoal p-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[calc(100%+0.5rem)] left-4 right-4 p-4 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-[1.25rem] border border-charcoal/5 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-1 text-charcoal">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-2 text-[10px] font-black uppercase tracking-widest border-b border-charcoal/5">Home</Link>
              <Link to="/classes" onClick={() => setIsMenuOpen(false)} className="py-2 text-[10px] font-black uppercase tracking-widest border-b border-charcoal/5">Classes</Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="py-2 text-[10px] font-black uppercase tracking-widest border-b border-charcoal/5">Gallery</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="py-2 text-[10px] font-black uppercase tracking-widest border-b border-charcoal/5">About Us</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="py-2 text-[10px] font-black uppercase tracking-widest">Contact</Link>
              <Link 
                to="/enroll" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-3 py-3 bg-charcoal text-white rounded-full text-center text-[10px] font-black uppercase tracking-widest shadow-lg"
              >
                Enroll Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
