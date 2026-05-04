import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-canvas min-h-screen pt-40 pb-20 paper-texture selection:bg-accent-yellow/30 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 sticky top-40"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-pink mb-4 block">Registration Hub</span>
            <h1 className="text-5xl md:text-7xl text-charcoal leading-[0.85] mb-12 mix-blend-multiply italic text-serif font-black tracking-tighter">
              Join <br />
              <span className="text-normal not-italic text-charcoal ml-8 md:ml-16">Thurika School Of Arts.</span>
            </h1>
            <p className="text-2xl text-charcoal/50 leading-relaxed max-w-sm mb-12">
              Secure a spot for your child in our next art session. We're excited to help them grow.
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
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid gap-8 font-display"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white p-12 md:p-20 rounded-[4rem] border border-charcoal/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] group hover:shadow-[0_40px_100px_-20px_rgba(0,191,255,0.1)] transition-all duration-700"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-20 w-20 rounded-3xl bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-3xl font-display">@</div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-charcoal/30 font-bold mb-1">Email Us</p>
                    <p className="text-2xl md:text-3xl font-bold">thurikaschoolofarts @gmail.com</p>
                  </div>
                </div>
                <a 
                  href="mailto:thurikaschoolofarts@gmail.com"
                  className="inline-flex items-center gap-4 text-accent-blue font-bold text-xl border-b-2 border-accent-blue/10 pb-2 hover:border-accent-blue transition-colors px-4"
                >
                  Draft Message →
                </a>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white p-12 md:p-20 rounded-[4rem] border border-charcoal/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] group hover:shadow-[0_40px_100px_-20px_rgba(255,20,147,0.1)] transition-all duration-700"
              >
                <div className="flex items-center gap-6 mb-12 font-display">
                  <div className="h-20 w-20 rounded-3xl bg-accent-pink/10 flex items-center justify-center text-accent-pink">
                    <Phone size={40} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-charcoal/30 font-bold">Call Us</p>
                    <p className="text-2xl md:text-4xl font-bold">76049 69891</p>
                    <p className="text-2xl md:text-4xl font-bold">99402 49333</p>
                  </div>
                </div>
                <div className="flex gap-4 px-4">
                  <a 
                    href="https://wa.me/917604969891" 
                    className="flex items-center gap-3 text-accent-pink font-bold text-lg hover:underline"
                  >
                    Online Batch <MessageCircle size={18} />
                  </a>
                  <span className="text-charcoal/20">/</span>
                  <a 
                    href="https://wa.me/919940249333" 
                    className="flex items-center gap-3 text-accent-pink font-bold text-lg hover:underline"
                  >
                    Direct Batch <MessageCircle size={18} />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-charcoal p-12 md:p-20 rounded-[4rem] text-canvas relative overflow-hidden group"
              >
                <div className="relative z-10 flex items-center gap-6 mb-12">
                  <div className="h-20 w-20 rounded-3xl bg-canvas/10 flex items-center justify-center text-accent-yellow">
                    <MapPin size={40} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-canvas/30 font-bold mb-1">Location Address</p>
                    <p className="text-3xl md:text-4xl font-bold">Chengalpattu, Tamil Nadu</p>
                  </div>
                </div>
                <p className="text-xl text-canvas/40 leading-relaxed mb-12 max-w-sm px-4">Visit us at Maraimalai Nagar or any of our 10 local branches.</p>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none grayscale brightness-200">
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
