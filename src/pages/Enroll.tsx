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

      const whatsappUrl = `https://wa.me/919940249333?text=${message}`;
      window.location.href = whatsappUrl;

      // Re-enable after a short delay in case they return to the tab
      setTimeout(() => {
        setIsSubmitting(false);
        setTransmissionStatus('idle');
      }, 1500);
    }, 600);
  };

  return (
    <div className="bg-canvas min-h-screen pt-32 pb-20 paper-texture">
      {/* Transmission Overlay */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center text-canvas p-6"
          >
            <div className="relative h-64 w-64 mb-12">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-canvas/10 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-accent-pink/20 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Palette size={48} className="text-accent-pink animate-pulse" />
              </div>
            </div>
            
            <motion.div 
              key={transmissionStatus}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold uppercase tracking-[0.5em] mb-4">
                {transmissionStatus === 'encrypting' && "Preparing Form..."}
                {transmissionStatus === 'syncing' && "Formatting Message..."}
                {transmissionStatus === 'dispatching' && "Opening WhatsApp..."}
              </h2>
              <p className="text-canvas/40 font-mono text-sm">
                Redirecting to official WhatsApp portal
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 sticky top-32"
          >
            <h1 className="text-7xl md:text-[10rem] text-charcoal leading-[0.85] mb-12 mix-blend-multiply">
              Art <br />
              <span className="text-serif italic text-accent-pink font-normal">Starts</span> <br />
              Here.
            </h1>
            <p className="text-2xl text-charcoal/50 leading-relaxed max-w-sm mb-12">
              New admissions are currently open. Register today to hold your spot.
            </p>
            
            <div className="flex items-center gap-4 text-charcoal/30 font-bold uppercase tracking-widest text-xs">
              <Sparkles size={16} className="text-accent-yellow" />
              Direct Admission Portal
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="lg:col-span-7"
          >
            <div className="relative bg-white p-12 md:p-24 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-charcoal/5 group transition-all duration-500 hover:shadow-[0_60px_120px_-20px_rgba(255,20,147,0.1)]">
              {/* Decorative "Torn Paper" edge */}
              <div className="absolute top-0 inset-x-0 h-10 bg-canvas -translate-y-full" style={{ clipPath: 'polygon(0% 100%, 5% 40%, 10% 100%, 15% 30%, 20% 100%, 25% 50%, 30% 100%, 35% 20%, 40% 100%, 45% 60%, 50% 100%, 55% 10%, 60% 100%, 65% 50%, 70% 100%, 75% 30%, 80% 100%, 85% 40%, 90% 100%, 95% 60%, 100% 100%)' }} />
              
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">Candidate Details</span>
                  <input 
                    required
                    type="text" 
                    name="name"
                    placeholder="Candidate Name"
                    className="w-full text-4xl md:text-6xl font-display font-light border-b border-charcoal/10 pb-6 focus:border-accent-pink outline-none transition-colors bg-transparent placeholder:text-charcoal/10"
                    onChange={handleChange}
                  />
                  <div className="grid grid-cols-2 gap-12">
                    <input 
                      required
                      type="number" 
                      name="age"
                      placeholder="Age"
                      className="w-full text-2xl md:text-4xl font-display font-light border-b border-charcoal/10 pb-4 focus:border-accent-blue outline-none transition-colors bg-transparent placeholder:text-charcoal/10"
                      onChange={handleChange}
                    />
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      placeholder="Contact No."
                      className="w-full text-2xl md:text-4xl font-display font-light border-b border-charcoal/10 pb-4 focus:border-accent-yellow outline-none transition-colors bg-transparent placeholder:text-charcoal/10"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-pink">Digital Reach</span>
                  <input 
                    required
                    type="email" 
                    name="email"
                    placeholder="yourname@gmail.com"
                    className="w-full text-2xl md:text-4xl font-display font-light border-b border-charcoal/10 pb-6 focus:border-accent-pink outline-none transition-colors bg-transparent placeholder:text-charcoal/10"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-4 pt-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">Portfolio / Interests</span>
                  <textarea 
                    name="message"
                    rows={1}
                    placeholder="Tell us what drives your passion..."
                    className="w-full text-xl md:text-3xl font-display font-light border-b border-charcoal/10 pb-2 focus:border-accent-pink outline-none transition-colors bg-transparent placeholder:text-charcoal/10 resize-none overflow-hidden"
                    onChange={(e) => {
                      handleChange(e);
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                  />
                </div>

                <div className="pt-12">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center gap-8 py-6"
                  >
                    <div className="h-24 w-24 rounded-full bg-charcoal flex items-center justify-center text-canvas group-hover:bg-accent-pink transition-colors duration-500">
                      <Send size={32} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </div>
                    <span className="text-4xl md:text-5xl font-bold border-b-4 border-charcoal/5 pb-2 group-hover:border-accent-pink transition-colors">
                      {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                    </span>
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
