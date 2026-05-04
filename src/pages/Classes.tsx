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
    location: "Pothanur", 
    sessions: [
      { day: "Sat", time: "4:30 - 5:30 pm", topic: "Abstract Forms", description: "Exploring non-representational art through mixed media." },
      { day: "Sun", time: "4:00 - 5:00 pm", topic: "Still Life", description: "Drawing from observation with a focus on depth and volume." }
    ]
  },
  { 
    name: "Vadavalli (Little Life)", 
    location: "Aishwarya Nagar", 
    sessions: [
      { day: "Tue/Thu", time: "5:00 - 6:00 pm", topic: "Mixed Media", description: "Combining collage, paint, and found objects in art." },
      { day: "Sat/Sun", time: "6:00 pm", topic: "Advanced Theory", description: "Diving deeper into color theory and historical art movements." }
    ]
  },
  { 
    name: "Kovilpalayam (Kidz Art)", 
    location: "Sathy Main Road", 
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
    <div className="bg-canvas min-h-screen pt-40 pb-20 paper-texture selection:bg-accent-blue/30 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-blue mb-4 block">Admission Open</span>
            <h1 className="text-7xl md:text-[8rem] lg:text-[12rem] text-charcoal leading-[0.8] mix-blend-multiply italic text-serif">
              Our <br />
              <span className="text-normal not-italic text-charcoal ml-12 md:ml-32">Classes.</span>
            </h1>
          </motion.div>
          
          <div className="flex bg-white/40 backdrop-blur-xl p-2 rounded-full border border-charcoal/5 self-start">
            <button 
              onClick={() => setActiveTab('direct')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'direct' ? 'bg-charcoal text-canvas shadow-2xl' : 'text-charcoal/40 hover:text-charcoal'}`}
            >
              Direct Classes
            </button>
            <button 
              onClick={() => setActiveTab('online')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'online' ? 'bg-charcoal text-canvas shadow-2xl' : 'text-charcoal/40 hover:text-charcoal'}`}
            >
              Online Classes
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 font-display">
          <AnimatePresence mode="wait">
            {activeTab === 'direct' ? (
              <motion.div 
                key="direct"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {BRANCHES.map((branch, branchIdx) => (
                  <motion.div
                    key={branch.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: branchIdx * 0.05 }}
                    className="group relative bg-white p-12 pb-32 rounded-[4rem] border border-charcoal/5 hover:border-accent-pink/20 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(255,20,147,0.15)] h-full flex flex-col"
                  >
                    <div className="bg-charcoal/5 p-4 rounded-2xl w-fit mb-8 group-hover:bg-accent-pink/10 transition-colors">
                      <MapPin size={24} className="group-hover:text-accent-pink transition-colors" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/30 mb-2">Location 0{branchIdx + 1}</p>
                    <h3 className="text-3xl font-bold mb-4">{branch.name}</h3>
                    <p className="text-charcoal/40 text-lg mb-8 italic">{branch.location}</p>
                    
                    <div className="space-y-4 pt-4 border-t border-charcoal/5 mt-auto">
                      {branch.sessions.map((session, sessionIdx) => {
                        const sessionId = `direct-${branchIdx}-${sessionIdx}`;
                        const isOpen = selectedSession === sessionId;
                        
                        return (
                          <div key={sessionId} className="relative">
                            <button 
                              onClick={() => toggleSession(sessionId)}
                              className={`w-full flex items-center justify-between py-2 text-left transition-colors ${isOpen ? 'text-accent-pink' : 'text-accent-blue hover:text-charcoal'}`}
                            >
                              <span className="text-xs font-bold uppercase tracking-widest">{session.day}: {session.time}</span>
                              <span className="text-[10px] font-bold px-2 py-1 bg-charcoal/5 rounded-full">{isOpen ? '−' : '+'} INFO</span>
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pb-4 pt-2">
                                    <p className="text-sm font-bold text-charcoal mb-1">{session.topic}</p>
                                    <p className="text-xs text-charcoal/50 leading-relaxed">{session.description}</p>
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
                      className="absolute bottom-10 right-10 h-16 w-16 rounded-full border border-charcoal/5 flex items-center justify-center group-hover:bg-charcoal group-hover:text-canvas transition-all duration-500"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="online"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="lg:col-span-12"
              >
                <div className="grid md:grid-cols-2 gap-8 h-full">
                  <div className="bg-charcoal p-16 md:p-24 rounded-[5rem] text-canvas flex flex-col justify-between">
                    <div>
                      <Globe size={64} className="text-accent-blue mb-12" />
                      <h2 className="text-5xl md:text-7xl font-bold mb-8">Online <br />Learning.</h2>
                      <p className="text-2xl text-canvas/40 leading-relaxed mb-12 max-w-sm font-serif italic">
                        Live sessions for students across the world.
                      </p>
                      
                      <a 
                        href="https://wa.me/917604969891"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-accent-blue px-8 py-4 rounded-full text-charcoal font-bold hover:bg-white transition-colors mb-20"
                      >
                        Enroll Online <MessageCircle size={20} />
                      </a>
                    </div>
                    <div className="space-y-8">
                      {ONLINE_SESSIONS.map((session, idx) => {
                        const sessionId = `online-${idx}`;
                        const isOpen = selectedSession === sessionId;

                        return (
                          <div key={sessionId}>
                            <button 
                              onClick={() => toggleSession(sessionId)}
                              className="text-left group w-full"
                            >
                              <p className={`text-xs uppercase tracking-[0.4em] font-bold mb-4 transition-colors ${idx === 0 ? 'text-accent-blue' : 'text-accent-pink'}`}>
                                {session.day} {isOpen ? '— INSIGHT' : ''}
                              </p>
                              <p className="text-4xl hover:text-white transition-colors">{session.time}</p>
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="py-8 border-t border-canvas/10 mt-6 max-w-md">
                                    <h4 className="text-2xl font-bold mb-4 text-accent-yellow">{session.topic}</h4>
                                    <p className="text-lg text-canvas/40 font-serif italic leading-relaxed">
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
                  
                  <div className="grid gap-8">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-accent-pink/5 border border-accent-pink/20 p-16 rounded-[4rem] flex flex-col justify-center"
                    >
                      <h3 className="text-4xl font-bold mb-6 text-accent-pink italic text-serif">Personal Guidance.</h3>
                      <p className="text-xl text-charcoal/60 leading-relaxed">Interactive classes with professional teachers to help you improve.</p>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-accent-yellow/5 border border-accent-yellow/20 p-16 rounded-[4rem] flex flex-col justify-center"
                    >
                      <h3 className="text-4xl font-bold mb-6 text-accent-yellow italic text-serif">Digital Tools.</h3>
                      <p className="text-xl text-charcoal/60 leading-relaxed">Learn modern digital art using updated software and techniques.</p>
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
          transition={{ duration: 0.8 }}
          className="mt-40 pt-40 border-t border-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <h2 className="text-6xl md:text-8xl text-charcoal/10 font-bold max-w-xl">Join our art community today.</h2>
          <Link 
            to="/enroll"
            className="px-16 py-8 bg-charcoal text-canvas rounded-full font-bold text-2xl hover:bg-accent-pink hover:scale-105 transition-all shadow-2xl shadow-charcoal/10"
          >
            Register Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
