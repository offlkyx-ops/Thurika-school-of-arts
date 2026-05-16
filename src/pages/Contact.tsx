import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 lg:sticky lg:top-40"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-charcoal/30 mb-8 block underline decoration-charcoal/5 underline-offset-8">Support & Access</span>
            <h1 className="text-7xl md:text-[8rem] text-charcoal leading-[0.8] mb-12 font-black tracking-tighter">
              GET IN <br />
              TOUCH<span className="text-serif font-light text-charcoal/20">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/40 leading-relaxed max-w-sm font-serif italic mb-16">
              Establish a direct line to our administrative and academic mentorship departments.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid gap-12 font-display"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-zinc-50 p-12 md:p-20 rounded-3xl border border-charcoal/5 group transition-all duration-700 hover:bg-white hover:border-charcoal/20"
              >
                <div className="flex items-center gap-8 mb-16">
                  <div className="h-20 w-20 rounded-2xl bg-charcoal flex items-center justify-center text-white font-black text-2xl">@</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-charcoal/30 font-black mb-2">Electronic Mail</p>
                    <p className="text-2xl md:text-3xl font-medium tracking-tight">thurikaschoolofarts @gmail.com</p>
                  </div>
                </div>
                <a 
                  href="mailto:thurikaschoolofarts@gmail.com"
                  className="inline-flex items-center gap-8 text-charcoal hover:pl-4 font-black text-[10px] uppercase tracking-widest transition-all"
                >
                  Initiate Correspondence <span className="h-px w-8 bg-charcoal"></span>
                </a>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-zinc-50 p-12 md:p-20 rounded-3xl border border-charcoal/5 group transition-all duration-700 hover:bg-white hover:border-charcoal/20"
              >
                <div className="flex items-center gap-8 mb-16 font-display">
                  <div className="h-20 w-20 rounded-2xl border border-charcoal/10 flex items-center justify-center text-charcoal">
                    <Phone size={32} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-charcoal/30 font-black">Direct Vocal Link</p>
                    <p className="text-3xl md:text-4xl font-medium tracking-tight leading-none tracking-tighter">76049 69891</p>
                    <p className="text-3xl md:text-4xl font-medium tracking-tight leading-none tracking-tighter">99402 49333</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <a 
                    href="https://wa.me/917604969891" 
                    className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors underline underline-offset-8"
                  >
                    Online Batch
                  </a>
                  <a 
                    href="https://wa.me/919940249333" 
                    className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors underline underline-offset-8"
                  >
                    Direct Batch
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-charcoal p-12 md:p-20 rounded-3xl text-white relative overflow-hidden group"
              >
                <div className="relative z-10 flex items-center gap-8 mb-16">
                  <div className="h-20 w-20 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-black mb-2">Geographical Hub</p>
                    <p className="text-3xl md:text-5xl font-medium tracking-tight">Chengalpattu, Tamil Nadu</p>
                  </div>
                </div>
                <p className="text-xl text-white/30 leading-relaxed mb-16 max-w-sm font-serif italic">Access our decentralized network at Maraimalai Nagar or any of our 10 local branches.</p>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none grayscale brightness-200">
                  <img src="https://picsum.photos/seed/map/800/800" alt="Map" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
