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
    <div className="bg-white min-h-screen pt-24 md:pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-48 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-charcoal/30 mb-8 block underline decoration-charcoal/5 underline-offset-8">Exhibition Space</span>
            <h1 className="text-5xl sm:text-7xl md:text-[10vw] text-charcoal leading-[0.8] tracking-tighter">
              VISUAL <br />
              ARCHIVE<span className="text-serif font-light">.</span>
            </h1>
          </motion.div>
          <div className="max-w-xs text-charcoal/30 uppercase tracking-widest text-[10px] leading-relaxed italic font-serif">
            A curated selection of student works representing the evolution of our artistic community across borders.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-32 gap-x-12">
          {MASTERPIECES.map((piece, i) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-50 border border-charcoal/5 mb-8 md:mb-12">
                <motion.img 
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  src={piece.url} 
                  alt={piece.title}
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 md:top-8 md:left-8 text-[10px] font-black text-charcoal/20 tracking-widest bg-white/50 backdrop-blur-md px-3 py-1 rounded-full">
                  REC:{piece.id.toString().padStart(4, '0')}
                </div>
              </div>
              <div className="px-4 border-l-2 border-charcoal transition-all group-hover:pl-8">
                <h3 className="text-xl md:text-2xl text-charcoal font-medium tracking-tight mb-2">{piece.title.toUpperCase()}</h3>
                <div className="text-[10px] font-black uppercase tracking-widest text-charcoal/20">
                  Authenticated Portfolio Entry
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-60 py-24 md:py-40 border-t border-charcoal/5"
        >
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <h2 className="text-5xl md:text-9xl text-charcoal/5 font-black tracking-tighter leading-none text-center md:text-left">
              BEGIN THE <br />
              JOURNEY<span className="text-serif font-light text-charcoal/20">.</span>
            </h2>
            <div className="space-y-12 md:space-y-16 text-center md:text-left">
              <p className="text-xl md:text-2xl text-charcoal/40 font-serif italic max-w-sm mx-auto md:mx-0 leading-relaxed">
                Applications for the upcoming semester are currently being reviewed. Secure your placement within our legacy.
              </p>
              <Link 
                to="/enroll"
                className="group relative inline-flex items-center gap-8 md:gap-12 py-4"
              >
                <span className="text-2xl md:text-3xl font-black text-charcoal z-10 uppercase tracking-tighter">Initialize Registration</span>
                <div className="h-px w-8 md:w-12 bg-charcoal group-hover:w-24 transition-all duration-700" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
