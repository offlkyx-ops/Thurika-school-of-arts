import React from 'react';
import { motion } from 'motion/react';
import { Brush, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-canvas paper-texture selection:bg-accent-blue/30 overflow-x-hidden min-h-screen">
      {/* Hero Section - Editorial Split */}
      <section className="relative min-h-screen grid lg:grid-cols-12 max-w-[1920px] mx-auto border-b border-charcoal/5">
        {/* Left Pane - Large Text Context */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-16 xl:px-24 pt-32 pb-20 relative overflow-hidden bg-white/40">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            <div className="flex items-center gap-8 mb-12">
              <div className="h-24 w-24 rounded-full bg-accent-pink flex items-center justify-center text-canvas shadow-2xl group border-2 border-white p-1">
                <Palette size={48} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent-pink">
                  Thurika school of arts
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal/30 mt-1">
                  Artistic Excellence
                </span>
              </div>
            </div>
            
            <h1 className="text-[11vw] lg:text-[10vw] leading-[0.8] text-charcoal font-black tracking-tighter mb-16 mix-blend-multiply">
              CREATIVE <br />
              GROWTH<span className="text-accent-pink tracking-[-0.1em]">.</span>
            </h1>

            <div className="max-w-md">
              <div className="flex items-start gap-8">
                <div className="h-px w-16 bg-charcoal/20 mt-4 shrink-0" />
                <p className="text-2xl md:text-3xl text-charcoal/50 font-serif italic leading-relaxed">
                  Helping children discover their artistic potential through expert guidance and personalized care.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-20 pointer-events-none opacity-[0.02] select-none text-[35vw] font-black leading-none uppercase">
            Art
          </div>
        </div>

        {/* Right Pane - Image & Action Container */}
        <div className="lg:col-span-5 relative bg-charcoal flex flex-col justify-center p-6 md:p-16 xl:p-24 overflow-hidden border-l border-charcoal/5">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://picsum.photos/seed/artist-motion/1200/1800"
              alt="Artistic motion"
              className="w-full h-full object-cover grayscale mix-blend-screen"
            />
          </motion.div>

          <div className="relative z-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="space-y-16"
            >
              <div className="space-y-6">
                <div className="h-px w-12 bg-accent-pink" />
                <h2 className="text-4xl md:text-6xl text-canvas font-serif italic leading-tight max-w-sm">
                  "Art is a state of mind, not a craft."
                </h2>
              </div>

              <Link 
                to="/enroll"
                className="inline-flex items-center gap-8 group"
              >
                <div className="h-28 w-28 rounded-full border border-canvas/20 flex items-center justify-center group-hover:bg-accent-pink group-hover:border-accent-pink group-hover:text-canvas transition-all duration-700 text-canvas shrink-0">
                  <Palette size={48} className="group-hover:rotate-45 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="text-canvas text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-40">Join Our School</span>
                  <span className="text-canvas text-4xl font-bold border-b-2 border-canvas/10 group-hover:border-accent-pink transition-colors">Apply Today →</span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Vertical Rail Text */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.6em] text-canvas opacity-20">
            Evolution • Tradition • Innovation • Thurika School Of Arts
          </div>
        </div>
      </section>

      {/* Scroll Text - Optimized */}
      <div className="py-24 overflow-hidden bg-charcoal text-canvas relative">
        <div className="flex gap-24 text-[10vw] font-black uppercase tracking-tighter opacity-5 animate-slide-left whitespace-nowrap">
          <span>Imagine • Create • Inspire • Vision • Growth • Master • Imagine • Create • Inspire • Vision • Growth • Master</span>
        </div>
      </div>

      {/* Why Thurika - Portfolio Alignment */}
      <section className="py-32 md:py-48 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-40 space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent-pink">Our Approach</span>
              <h2 
                className="text-6xl md:text-8xl text-charcoal leading-tight font-black tracking-tighter"
              >
                Thurika <br />
                <span className="text-serif italic text-accent-pink font-normal">School of Arts.</span>
              </h2>
              <p className="text-xl text-charcoal/40 font-serif italic max-w-sm">
                Combining centuries-old tradition with modern-day creativity to build the future of art education.
              </p>
            </div>
          </motion.div>
          
          <div className="lg:col-span-7 space-y-32 py-20">
            {[
              {
                id: "01",
                title: "Technical Mastery",
                desc: "We don't just teach painting; we cultivate an understanding of light, shadow, and anatomy that forms the bedrock of professional artistry.",
                color: "bg-accent-pink/5"
              },
              {
                id: "02",
                title: "Digital Evolution",
                desc: "In an era of flux, we bridge traditional canvas techniques with modern digital tools, ensuring our students are ready for the future of art.",
                color: "bg-accent-blue/5"
              },
              {
                id: "03",
                title: "Radical Empathy",
                desc: "Art is a bridge. We encourage students to explore diverse perspectives and use their creative voice to build a more inclusive world.",
                color: "bg-accent-yellow/5"
              }
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                <div className="flex gap-12">
                  <span className="text-6xl md:text-8xl font-black text-charcoal/5 group-hover:text-charcoal/10 transition-colors shrink-0">
                    {item.id}
                  </span>
                  <div className="space-y-6 pt-6">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight">{item.title}</h3>
                    <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-display">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Student Work - Perfectly Aligned Carousel */}
      <section className="py-32 bg-charcoal overflow-hidden pt-40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent-yellow opacity-60">Gallery Highlights</span>
              <h2 className="text-6xl md:text-[8vw] text-canvas leading-none font-black tracking-tighter">
                STUDENT <br />
                <span className="italic text-outline font-serif">OUTPUTS.</span>
              </h2>
            </div>
            <Link to="/gallery" className="text-canvas text-xs font-black uppercase tracking-[0.4em] hover:text-accent-yellow transition-colors border-b-2 border-white/10 pb-2 group flex items-center gap-4">
              See the Full Archive <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-visible"
          >
            <motion.div 
              drag="x"
              dragConstraints={{ left: -1200, right: 0 }}
              className="flex gap-8 cursor-grab active:cursor-grabbing"
            >
              {[
                { id: 1, title: "Still Life: Tropical Vibrance", url: "/1.jpg" },
                { id: 2, title: "Windows to the Soul", url: "/2.jpg" },
                { id: 3, title: "Generational Bond", url: "/3.jpg" },
                { id: 4, title: "Ancestral Roots", url: "/4.jpg" },
                { id: 5, title: "Sacred Ganesha", url: "/5.jpg" },
              ].map((piece, i) => (
                <motion.div
                  key={piece.id}
                  className="min-w-[300px] md:min-w-[450px] group"
                >
                  <div className="aspect-[4/5] bg-canvas/5 overflow-hidden rounded-2xl relative mb-6">
                    <motion.img 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      src={piece.url} 
                      alt={piece.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-accent-yellow opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-canvas font-bold text-xl tracking-tight uppercase">{piece.title}</h4>
                    <p className="text-canvas/30 uppercase text-[10px] font-black tracking-widest">Verified Masterpiece • Entry 0{piece.id}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-12 flex items-center gap-4 text-canvas/20">
              <span className="text-[10px] font-black uppercase tracking-widest">Drag to explore</span>
              <div className="h-px w-20 bg-canvas/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Creation - Clean Minimalist Footer CTA */}
      <section className="py-40 md:py-64 bg-canvas relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-12"
          >
            <div className="h-24 w-px bg-accent-pink/30 mb-8" />
            <h2 className="text-7xl md:text-[12vw] text-charcoal leading-[0.8] font-black tracking-tighter">
              START <br />
              <span className="text-serif italic font-normal text-accent-pink">JOURNEY.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-charcoal/40 max-w-xl italic font-serif leading-relaxed">
              Join Tamil Nadu's favorite community for young artists and visionaries.
            </p>
            <Link 
              to="/enroll"
              className="mt-12 inline-flex items-center gap-12 group"
            >
              <div className="h-24 w-24 rounded-full border-2 border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-canvas transition-all duration-700 shadow-2xl">
                <Palette size={40} className="group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-4xl md:text-6xl font-black tracking-tighter text-charcoal border-b-4 border-charcoal/5 group-hover:border-accent-pink transition-colors">Apply Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
