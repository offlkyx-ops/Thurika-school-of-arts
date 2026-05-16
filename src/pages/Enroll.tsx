import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Calendar, Mail, Phone, Send, Sparkles, Palette } from 'lucide-react';

export default function Enroll() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transmissionStatus, setTransmissionStatus] = useState<'idle' | 'encrypting' | 'syncing' | 'dispatching'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTransmissionStatus('encrypting');
    
    // Rapid sequence for a faster feeling
    setTimeout(() => {
      setTransmissionStatus('dispatching');
      
      const message = encodeURIComponent(
        `*THURIKA SCHOOL OF ARTS - ENROLLMENT*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `🎂 *Age:* ${formData.age}\n` +
        `📱 *Contact:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `✍️ *Notes:* ${formData.message || 'None'}`
      );

      const whatsappUrl = `https://wa.me/917604969891?text=${message}`;
      window.location.href = whatsappUrl;

      // Re-enable after a short delay in case they return to the tab
      setTimeout(() => {
        setIsSubmitting(false);
        setTransmissionStatus('idle');
      }, 1500);
    }, 600);
  };

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-40 pb-20">
      {/* Transmission Overlay */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center text-white p-6"
          >
            <div className="text-center">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 animate-pulse italic font-serif">
                {transmissionStatus === 'encrypting' && "INITIALIZING"}
                {transmissionStatus === 'syncing' && "COMMUNICATION"}
                {transmissionStatus === 'dispatching' && "REDIRECTING"}
              </h2>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.5em]">
                Establishing Handshake with Encryption Node
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 lg:sticky lg:top-40"
          >
            <h1 className="text-5xl sm:text-7xl md:text-[10rem] text-charcoal leading-[0.8] mb-8 md:mb-12 font-black tracking-tighter text-center md:text-left">
              ACCESS <br />
              GRANTED<span className="text-serif font-light text-charcoal/20">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/40 leading-relaxed max-w-sm mb-12 md:mb-16 font-serif italic text-center md:text-left mx-auto md:mx-0">
              New admissions are currently prioritized. Authenticate your application below.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-4 text-charcoal/30 font-black uppercase tracking-widest text-[10px]">
              Secure Admission Protocol v2.0
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-zinc-50 p-8 md:p-24 rounded-3xl border border-charcoal/5 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
                <div className="space-y-10 md:space-y-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Primary Identity</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      placeholder="Candidate Name"
                      className="w-full text-2xl md:text-5xl font-medium tracking-tight border-b-2 border-charcoal/5 pb-4 md:pb-8 focus:border-charcoal outline-none transition-colors bg-transparent placeholder:text-charcoal/10"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Temporal Age</label>
                      <input 
                        required
                        type="number" 
                        name="age"
                        placeholder="00"
                        className="w-full text-2xl md:text-5xl font-medium tracking-tight border-b-2 border-charcoal/5 pb-4 md:pb-8 focus:border-charcoal outline-none transition-colors bg-transparent placeholder:text-charcoal/10"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Vocal Node / WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        placeholder="+91 00000 00000"
                        className="w-full text-2xl md:text-5xl font-medium tracking-tight border-b-2 border-charcoal/5 pb-4 md:pb-8 focus:border-charcoal outline-none transition-colors bg-transparent placeholder:text-charcoal/10"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-10 md:space-y-12 pt-4 md:pt-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Digital Coordinate</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      placeholder="identity@server.com"
                      className="w-full text-2xl md:text-5xl font-medium tracking-tight border-b-2 border-charcoal/5 pb-4 md:pb-8 focus:border-charcoal outline-none transition-colors bg-transparent placeholder:text-charcoal/10"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-10 md:space-y-12 pt-4 md:pt-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Philosophical Intent</label>
                    <textarea 
                      name="message"
                      rows={1}
                      placeholder="Articulate your artistic drive..."
                      className="w-full text-xl md:text-3xl font-medium tracking-tight border-b-2 border-charcoal/5 pb-4 focus:border-charcoal outline-none transition-colors bg-transparent placeholder:text-charcoal/10 resize-none overflow-hidden italic font-serif"
                      onChange={(e) => {
                        handleChange(e);
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                      }}
                    />
                  </div>
                </div>

                <div className="pt-8 md:pt-12">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-between w-full py-6 md:py-8 border-t-2 border-charcoal transition-all hover:bg-charcoal hover:text-white hover:px-8 md:hover:px-12"
                  >
                    <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                      {isSubmitting ? "TRANSMITTING" : "FINALIZE REGISTRATION"}
                    </span>
                    <Send className={`w-6 h-6 md:w-8 md:h-8 ${isSubmitting ? 'animate-ping' : 'group-hover:translate-x-4 transition-transform'}`} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
