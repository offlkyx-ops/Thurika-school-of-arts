import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-canvas min-h-screen pt-40 pb-20 paper-texture selection:bg-accent-pink/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-12 mb-32"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-pink mb-6 block">Our Story — Maraimalai Nagar</span>
            <h1 className="text-[10vw] lg:text-[12vw] text-charcoal leading-[0.8] mb-12 font-black tracking-tighter mix-blend-multiply">
              ABOUT <br />
              US<span className="text-serif italic font-light animate-pulse">.</span>
            </h1>
          </motion.div>

          {/* Left Art Pane */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/5] overflow-hidden rounded-[5rem] group border-2 border-charcoal/5"
            >
              <img 
                src="https://picsum.photos/seed/about-craft/1200/1500" 
                alt="Our Studio"
                className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-pink/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-charcoal flex items-center justify-center text-canvas p-8 text-center"
            >
              <p className="text-xs font-bold leading-tight uppercase tracking-widest">Mastery over pixels & pigments</p>
            </motion.div>
          </motion.div>

          {/* Right Content Pane */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div
              className="max-w-xl space-y-12"
            >
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
                Discovering the <br /> 
                <span className="text-serif italic font-normal text-accent-pink underline decoration-charcoal/5 underline-offset-8">artist within</span> <br /> 
                every child.
              </h2>
              <div className="space-y-8 text-xl text-charcoal/60 leading-relaxed font-display">
                <p>
                  Thurika was founded to provide a supportive space for children to express themselves. We believe in the power of traditional art and digital creativity. 
                </p>
                <p>
                  Our goal is to teach both classical painting and modern digital techniques, offering a complete learning experience for students in Tamil Nadu.
                </p>
              </div>
              <div className="h-px w-40 bg-charcoal/10" />
              <div className="grid grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-3xl font-bold mb-2">500+</h4>
                  <p className="text-xs uppercase tracking-widest opacity-40">Happy Students</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-3xl font-bold mb-2">10+</h4>
                  <p className="text-xs uppercase tracking-widest opacity-40">Expert Teachers</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Three Pillar Cards */}
          <div className="lg:col-span-12 mt-60 grid md:grid-cols-3 gap-24 font-display">
            {[
              {
                title: "Tradition",
                desc: "We honor the masters of the past, teaching techniques that have stood for centuries."
              },
              {
                title: "Innovation",
                desc: "We embrace the digital frontier, from 3D sculpting to AI-assisted generation."
              },
              {
                title: "Rebellion",
                desc: "We encourage our students to break the rules once they've mastered them."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <h3 className="text-4xl font-bold mb-8 italic text-serif group-hover:text-accent-blue transition-colors">
                  {item.title}.
                </h3>
                <p className="text-xl text-charcoal/50 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
