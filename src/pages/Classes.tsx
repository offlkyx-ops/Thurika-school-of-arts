import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Globe, MessageCircle, ChevronRight, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const BRANCHES = [
  { 
    name: "NH1 (Little Millennium)", 
    location: "Sathy Road", 
    sessions: [
      { day: "Sat", time: "5:00 - 7:00 pm", topic: "Traditional Sketching", description: "Mastering light and shadow through charcoal and graphite studies." },
      { day: "Sun", time: "10:00 am - 12:00 pm", topic: "Watercolor Basics", description: "Introduction to wash techniques and landscape composition." }
    ]
  },
  { 
    name: "NH2 (Cambridge Montessori)", 
    location: "Cheran Ma Nagar", 
    sessions: [
      { day: "Sat", time: "10:00 - 11:00 am", topic: "Creative Clay", description: "Hands-on sculpting focused on organic forms and textures." },
      { day: "Sun", time: "5:00 - 7:00 pm", topic: "Oil Pastel Art", description: "Learning vibrant blending and layering for expressive results." }
    ]
  },
  { 
    name: "Peramanur (Busy Bees)", 
    location: "Maraimalai Nagar", 
    sessions: [
      { day: "Sat", time: "4:00 - 5:00 pm", topic: "Cartooning", description: "Character design fundamentals and storyboard creation." },
      { day: "Sun", time: "2:00 - 5:00 pm", topic: "Canvas Painting", description: "Comprehensive acrylic painting on large scale surfaces." }
    ]
  },
  { 
    name: "Railnagar (SSFA Academy)", 
    location: "Maraimalai Nagar", 
    sessions: [
      { day: "Sat", time: "4:30 - 5:30 pm", topic: "Abstract Forms", description: "Exploring non-representational art through mixed media." },
      { day: "Sun", time: "4:00 - 5:00 pm", topic: "Still Life", description: "Drawing from observation with a focus on depth and volume." }
    ]
  },
  { 
    name: "Maraimalai Nagar (Little Life)", 
    location: "Aishwarya Nagar", 
    sessions: [
      { day: "Tue/Thu", time: "5:00 - 6:00 pm", topic: "Mixed Media", description: "Combining collage, paint, and found objects in art." },
      { day: "Sat/Sun", time: "6:00 pm", topic: "Advanced Theory", description: "Diving deeper into color theory and historical art movements." }
    ]
  },
  { 
    name: "Ninnakarai (Little's Life)", 
    location: "Kattankulathur", 
    sessions: [
      { day: "Sat", time: "3:00 - 5:00 pm", topic: "Acrylic Portraits", description: "Learning facial proportions and skin tone blending." },
      { day: "Sun", time: "11:00 am - 1:00 pm", topic: "Perspective Drawing", description: "Understanding vanishing points and spatial depth." }
    ]
  }
];

const ONLINE_SESSIONS = [
  { day: "Sundays", time: "9:30 am — 11:30 am", topic: "Digital Illustration", description: "Mastering digital tools for modern character design and painting." },
  { day: "Fri & Thu", time: "6:30 pm — 7:30 pm", topic: "Art Foundations", description: "Core concepts of color theory and composition explained live." }
];

export default function Classes() {
  const [activeTab, setActiveTab] = useState<'direct' | 'online'>('direct');
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  const toggleSession = (id: string) => {
    setSelectedSession(selectedSession === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-charcoal/30 mb-4 md:mb-6 block underline decoration-charcoal/5 underline-offset-8">Academic Schedule</span>
            <h1 className="text-4xl sm:text-6xl md:text-[8rem] lg:text-[12rem] text-charcoal leading-[0.8] tracking-tighter mix-blend-multiply">
              THE <br />
              CLASSES<span className="text-serif font-light">.</span>
            </h1>
          </motion.div>
          
          <div className="flex bg-zinc-50 p-1.5 md:p-2 rounded-full border border-charcoal/5 self-center md:self-end">
            <button 
              onClick={() => setActiveTab('direct')}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'direct' ? 'bg-charcoal text-white shadow-2xl' : 'text-charcoal/40 hover:text-charcoal'}`}
            >
              Direct
            </button>
            <button 
              onClick={() => setActiveTab('online')}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'online' ? 'bg-charcoal text-white shadow-2xl' : 'text-charcoal/40 hover:text-charcoal'}`}
            >
              Online
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 font-display">
          <AnimatePresence mode="wait">
            {activeTab === 'direct' ? (
              <motion.div 
                key="direct"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {BRANCHES.map((branch, branchIdx) => (
                    <motion.div
                      key={branch.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: branchIdx * 0.05 }}
                      className="group relative bg-zinc-50 p-8 md:p-12 pb-24 md:pb-32 rounded-3xl border border-charcoal/5 hover:bg-white hover:border-charcoal/10 transition-all duration-500 h-full flex flex-col"
                    >
                      <div className="p-3 md:p-4 rounded-2xl w-fit mb-8 md:mb-12 border border-charcoal/5">
                        <MapPin size={20} className="text-charcoal" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/20 mb-4 italic">0{branchIdx + 1} — {branch.location}</p>
                      <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-8 text-charcoal">{branch.name}</h3>
                      
                      <div className="space-y-4 md:space-y-6 pt-6 md:pt-8 border-t border-charcoal/5 mt-auto">
                        {branch.sessions.map((session, sessionIdx) => {
                          const sessionId = `direct-${branchIdx}-${sessionIdx}`;
                          const isOpen = selectedSession === sessionId;
                          
                          return (
                            <div key={sessionId} className="relative">
                              <button 
                                onClick={() => toggleSession(sessionId)}
                                className={`w-full flex items-center justify-between py-2 text-left transition-colors ${isOpen ? 'text-charcoal' : 'text-charcoal/40 hover:text-charcoal'}`}
                              >
                                <span className="text-[10px] font-black uppercase tracking-widest">{session.day} — {session.time}</span>
                                <span className="text-[10px] font-black tracking-widest">{isOpen ? '−' : '+'}</span>
                              </button>
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pb-6 md:pb-8 pt-4">
                                      <p className="text-base md:text-lg font-bold text-charcoal mb-2 font-serif italic">{session.topic}</p>
                                      <p className="text-xs md:text-sm text-charcoal/50 leading-relaxed max-w-xs">{session.description}</p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>

                      <a 
                        href="https://wa.me/919940249333" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-6 md:bottom-12 right-6 md:right-12 h-12 w-12 md:h-16 md:w-16 rounded-full border border-charcoal/5 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-500"
                      >
                        <MessageCircle size={18} />
                      </a>
                    </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="online"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:col-span-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-charcoal p-8 md:p-24 rounded-3xl text-white flex flex-col justify-between">
                    <div>
                      <Globe size={40} className="text-white mb-8 md:mb-12" />
                      <h2 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tight mb-8 md:mb-12">LIVE <br />PORTAL<span className="text-serif font-light text-zinc-500">.</span></h2>
                      <p className="text-lg md:text-2xl text-zinc-500 leading-relaxed mb-12 md:mb-16 max-w-sm font-serif italic">
                        Synchronous digital learning for an interconnected artistic world.
                      </p>
                      
                      <a 
                        href="https://wa.me/917604969891"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto justify-center items-center gap-6 border border-zinc-700 px-8 py-5 md:px-10 md:py-6 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all"
                      >
                        Enroll Online
                      </a>
                    </div>
                    <div className="space-y-8 md:space-y-12 mt-16 md:mt-24">
                      {ONLINE_SESSIONS.map((session, idx) => {
                        const sessionId = `online-${idx}`;
                        const isOpen = selectedSession === sessionId;

                        return (
                          <div key={sessionId} className="border-t border-zinc-800 pt-6 md:pt-8">
                            <button 
                              onClick={() => toggleSession(sessionId)}
                              className="text-left group w-full"
                            >
                              <div className="flex items-center justify-between mb-4">
                                <p className="text-[10px] uppercase font-black tracking-widest text-zinc-500">
                                  {session.day} {isOpen ? '— ANALYSIS' : ''}
                                </p>
                                <span className="text-white text-[10px]">{isOpen ? '▼' : '▶'}</span>
                              </div>
                              <p className="text-2xl md:text-4xl hover:text-zinc-300 transition-colors tracking-tight">{session.time}</p>
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="py-8 md:py-12 mt-4 max-w-md">
                                    <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif italic text-white">{session.topic}</h4>
                                    <p className="text-base text-zinc-500 leading-relaxed text-sm md:text-base">
                                      {session.description}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-zinc-50 border border-charcoal/5 p-8 md:p-16 rounded-3xl flex flex-col justify-center"
                    >
                      <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 md:mb-8 text-charcoal italic font-serif">Deep Focus.</h3>
                      <p className="text-lg text-charcoal/40 leading-relaxed max-w-xs">One-on-one digital sessions designed for intensive skill development.</p>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-zinc-900 border border-zinc-800 p-8 md:p-16 rounded-3xl flex flex-col justify-center text-white"
                    >
                      <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 md:mb-8 italic font-serif">Global Reach.</h3>
                      <p className="text-lg text-zinc-500 leading-relaxed max-w-xs">Connecting masters with students regardless of geographical boundaries.</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 pt-24 md:pt-40 border-t border-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <h2 className="text-5xl md:text-9xl text-charcoal/5 font-black tracking-tighter leading-none text-center md:text-left">JOIN THE <br />REBELLION.</h2>
          <Link 
            to="/enroll"
            className="w-full md:w-auto text-center px-16 py-8 bg-charcoal text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-2xl"
          >
            Register Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
