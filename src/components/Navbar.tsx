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
      className={`brush-stroke px-2 py-1 text-sm font-medium transition-colors hover:text-accent-pink ${isActive ? 'text-accent-pink after:w-full' : ''}`}
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-1000 ${
        isScrolled ? 'pt-2' : 'pt-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between px-10 py-5 bg-white/20 backdrop-blur-3xl border border-white/10 rounded-full transition-all duration-1000 ${
          isScrolled ? 'shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] bg-white/40' : ''
        }`}>
          <Link to="/" className="group flex items-center gap-4">
            <span className="text-sm font-black tracking-[0.4em] text-charcoal">THURIKA SCHOOL OF ARTS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-12 text-charcoal">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/classes">Classes</NavItem>
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <Link 
              to="/enroll" 
              className="px-8 py-3 bg-charcoal text-canvas rounded-full text-sm font-bold hover:bg-accent-pink transition-all hover:scale-105 active:scale-95 shadow-xl shadow-charcoal/10"
            >
              Enroll
            </Link>
          </nav>

          <button 
            className="md:hidden text-charcoal p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
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
