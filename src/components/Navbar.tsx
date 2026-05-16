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
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border border-charcoal/5 rounded-full transition-all duration-700 ${
          isScrolled ? 'shadow-sm' : ''
        }`}>
          <Link to="/" className="group flex items-center">
            <span className="text-sm font-black tracking-[0.3em] text-charcoal">THURIKA</span>
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
            className="md:hidden text-charcoal p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 bg-white rounded-[3rem] shadow-2xl border border-charcoal/5 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl font-display text-charcoal">
              <NavItem to="/" onClick={() => setIsMenuOpen(false)}>Home</NavItem>
              <NavItem to="/classes" onClick={() => setIsMenuOpen(false)}>Classes</NavItem>
              <NavItem to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavItem>
              <NavItem to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavItem>
              <NavItem to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
              <Link 
                to="/enroll" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-4 bg-charcoal text-canvas rounded-2xl text-center font-bold"
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
