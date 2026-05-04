import React from 'react';
import { Palette, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-canvas border-t border-charcoal/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center bg-charcoal rounded-full text-canvas">
              <Palette size={18} />
            </div>
            <span className="font-display font-bold tracking-tight text-charcoal">THURIKA SCHOOL OF ARTS</span>
          </div>
          
          <div className="flex items-center gap-6 text-charcoal">
            <a href="#" className="p-2 hover:text-accent-pink transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 hover:text-accent-blue transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-charcoal/40 font-bold">
          <p>&copy; {new Date().getFullYear()} Thurika School of Arts. All Rights Reserved.</p>
          <p>Designed for Future Visionaries</p>
        </div>
      </div>
    </footer>
  );
}
