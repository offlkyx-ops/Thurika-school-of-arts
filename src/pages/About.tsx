import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-12 mb-24 md:mb-48"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-charcoal/30 mb-8 block underline decoration-charcoal/5 underline-offset-8">Legacy & Vision</span>
            <h1 className="text-7xl md:text-[10vw] lg:text-[12vw] text-charcoal leading-[0.8] font-black tracking-tighter mix-blend-multiply transition-all hover:tracking-normal duration-1000">
              CRAFTING <br />
              ARTISTS<span className="text-serif font-light">.</span>
            </h1>
          </motion.div>

          {/* Left Art Pane */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 relative mb-32"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[21/9] overflow-hidden rounded-3xl group border border-charcoal/5"
            >
              <img 
                src="https://picsum.photos/seed/about-craft/2400/800" 
                alt="Our Studio"
                className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>

          {/* Core Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-medium leading-[0.9] tracking-tight text-charcoal mb-12">
              Unlocking the <br /> 
              <span className="text-serif italic text-charcoal/30">latent potential</span> <br /> 
              in every soul.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="max-w-xl space-y-12 text-2xl text-charcoal/50 leading-relaxed font-display">
              <p>
                Thurika was born from a fundamental belief: that art is not a luxury, but a necessity for human expression. We bridge the gap between historical mastery and future technology.
              </p>
              <p className="italic font-serif text-charcoal/80">
                "Our mission is to nurture the creative spark within each child, providing them with the tools to paint their own future."
              </p>
              <div className="h-px w-full bg-charcoal/5" />
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div>
                  <h4 className="text-5xl font-black mb-2 tracking-tighter">500+</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/20">Global Alumni</p>
                </div>
                <div>
                  <h4 className="text-5xl font-black mb-2 tracking-tighter">10+</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/20">Lead Mentors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Principles Section */}
          <div className="lg:col-span-12 mt-60 grid md:grid-cols-3 gap-32">
            {[
              {
                title: "Precision",
                desc: "We teach the fundamental mechanics of art, from anatomical accuracy to color chemistry."
              },
              {
                title: "Chaos",
                desc: "We encourage the messy, unpredictable process of discovery where true innovation lives."
              },
              {
                title: "Disruption",
                desc: "We empower our students to challenge existing boundaries and create new paradigms."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group border-t border-charcoal/5 pt-12"
              >
                <h3 className="text-4xl font-medium mb-10 tracking-tight text-charcoal">
                  {item.title}.
                </h3>
                <p className="text-xl text-charcoal/40 leading-relaxed font-display">
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
