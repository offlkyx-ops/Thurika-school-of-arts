import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 px-6 max-w-screen-2xl mx-auto overflow-hidden text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-12"
          >
            <h1 className="text-4xl sm:text-[10vw] lg:text-[clamp(5rem,8vw,10rem)] leading-[0.85] font-black tracking-tighter text-charcoal uppercase italic font-serif break-words">
              THURIKA<br />
              <span className="not-italic font-sans text-charcoal/20">SCHOOL OF ARTS.</span>
            </h1>

            <p className="text-base md:text-2xl text-charcoal/50 max-w-md mx-auto lg:mx-0 leading-relaxed italic font-serif">
              A disciplined sanctuary for the intersection of traditional mastery and modern artistic vision.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 pt-2 md:pt-4">
              <Link 
                to="/results"
                className="w-full sm:w-auto px-8 py-3.5 bg-accent-pink text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-charcoal transition-all shadow-xl shadow-accent-pink/20 text-center"
              >
                Check Exam Results
              </Link>
              <Link 
                to="/classes"
                className="w-full sm:w-auto px-8 py-3.5 border border-charcoal/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:border-charcoal transition-colors italic font-serif text-center"
              >
                View Programs
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-100">
              <img 
                src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2000&auto=format&fit=crop"
                alt="Art Studio"
                className="w-full h-full object-cover grayscale brightness-95"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-pink rounded-full flex items-center justify-center text-white font-black text-[10px] uppercase tracking-widest animate-float hidden md:flex">
              Explore Pots
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ticker */}
      <div className="py-8 md:py-12 border-y border-charcoal/5 mb-16 md:mb-32 overflow-hidden bg-white">
        <div className="flex gap-10 md:gap-20 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-charcoal/20 whitespace-nowrap animate-slide-left">
          <span>Traditional Skills • Modern Thinking • Artistic Discipline • Cultural Growth • Creative Liberty • Traditional Skills • Modern Thinking • Artistic Discipline • Cultural Growth • Creative Liberty</span>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 px-6 max-w-screen-xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          <div className="space-y-6 md:space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-blue">Philosophy</span>
            <h2 className="text-4xl md:text-7xl font-medium tracking-tight">The discipline of art.</h2>
          </div>
          <div className="space-y-10 md:space-y-12">
            <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed italic font-serif">
              "We don't just teach painting; we cultivate an understanding of light, shadow, and anatomy that forms the bedrock of professional artistry."
            </p>
            <div className="space-y-12 md:space-y-16">
              {[
                { title: "Technical Rigor", desc: "Mastering the fundamentals of form and perspective before individual expression." },
                { title: "Historical Context", desc: "Understanding the legacy of masters to inform tomorrow's innovations." },
                { title: "Personal Vision", desc: "Protecting and nurturing the unique creative voice of every student." }
              ].map((item, i) => (
                <div key={i} className="group flex gap-6 md:gap-8">
                  <span className="text-[10px] font-black text-charcoal/20 mt-1.5 md:mt-2">0{i+1}</span>
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest">{item.title}</h3>
                    <p className="text-sm md:text-charcoal/50 leading-relaxed text-charcoal/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-60 px-6 text-center max-w-screen-xl mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          <h2 className="text-5xl md:text-[10vw] font-medium leading-[0.9] tracking-tight text-charcoal">
            BEGIN YOUR<br />EVOLUTION.
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 pt-8 md:pt-12">
            <Link 
              to="/enroll"
              className="w-full md:w-auto px-10 py-4 bg-charcoal text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors shadow-2xl"
            >
              Apply for Enrollment
            </Link>
            <Link 
              to="/results"
              className="w-full md:w-auto px-10 py-4 border border-charcoal/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:border-charcoal transition-colors"
            >
              Check Exam Results
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
