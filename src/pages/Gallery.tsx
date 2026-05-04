import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const MASTERPIECES = [
  { id: 1, title: "Still Life: Tropical Vibrance", url: "/1.jpg", span: "row-span-2" },
  { id: 2, title: "Windows to the Soul", url: "/2.jpg", span: "row-span-1" },
  { id: 3, title: "Generational Bond", url: "/3.jpg", span: "row-span-2" },
  { id: 4, title: "Ancestral Roots", url: "/4.jpg", span: "row-span-1" },
  { id: 5, title: "Sacred Ganesha", url: "/5.jpg", span: "row-span-2" },
];

export default function Gallery() {
  return (
    <div className="bg-charcoal min-h-screen pt-40 pb-20 selection:bg-accent-yellow/30 relative">
      {/* Dynamic Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')] mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-yellow mb-4 block">Student Artwork</span>
            <h1 className="text-7xl md:text-[10vw] text-canvas leading-[0.8] tracking-tighter">
              STUDENT <br />
              <span className="text-outline italic">GALLERY.</span>
            </h1>
          </motion.div>
          <div className="max-w-xs text-canvas/40 uppercase tracking-widest text-[10px] leading-relaxed">
            See the beautiful artwork created by our talented students. Every piece shows their unique growth.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-32">
          {MASTERPIECES.map((piece, i) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-canvas/5 border border-canvas/10 mb-8 perspective-1000">
                <motion.div 
                  whileHover={{ rotateY: 10, rotateX: -5 }}
                  className="w-full h-full transition-transform duration-700"
                >
                  <motion.img 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    src={piece.url} 
                    alt={piece.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute top-6 left-6 h-10 w-10 bg-canvas text-charcoal font-black flex items-center justify-center text-xs tracking-tighter">
                  ID:0{piece.id}
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl text-canvas font-bold mb-1 group-hover:text-accent-yellow transition-colors">{piece.title.toUpperCase()}</h3>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-canvas/30">
                  <span>Verified Student Work</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-60 py-40 border-t border-canvas/10"
        >
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <h2 className="text-5xl md:text-8xl text-canvas leading-none tracking-tighter">
              READY TO <br />
              <span className="text-accent-yellow italic">START?</span>
            </h2>
            <div className="space-y-12">
              <p className="text-xl text-canvas/40 font-serif italic max-w-sm">
                We are now accepting new applications for our upcoming art classes.
              </p>
              <Link 
                to="/enroll"
                className="group relative inline-flex items-center gap-8 py-4 overflow-hidden"
              >
                <span className="text-3xl font-bold text-canvas z-10">Sign Up Now</span>
                <div className="h-px w-20 bg-accent-yellow group-hover:w-32 transition-all duration-700" />
                <div className="absolute inset-0 bg-accent-yellow/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
