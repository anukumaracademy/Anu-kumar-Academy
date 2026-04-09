import { motion } from 'motion/react';
import { Monitor, Home as HomeIcon, MapPin, CheckCircle2, Clock, Users } from 'lucide-react';
import { CLASS_TYPES } from '../constants';

const Classes = () => {
  const icons = [
    <Monitor className="text-accent" size={32} />,
    <MapPin className="text-accent" size={32} />,
    <HomeIcon className="text-accent" size={32} />
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight text-primary mb-6"
          >
            Flexible Learning Options
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            We offer multiple ways to learn Hindi, ensuring that you can find a format that fits your lifestyle and location.
          </motion.p>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLASS_TYPES.map((type, i) => (
              <div key={i} className="flex flex-col bg-background rounded-[2.5rem] p-10 border border-gray-100 card-shadow hover:border-accent/30 transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  {icons[i]}
                </div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-grow">
                  {type.description}
                </p>
                <div className="space-y-4 mb-8">
                  {type.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-accent shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">Best For</span>
                  <p className="text-sm font-medium mt-1">
                    {i === 0 ? "Remote Students" : i === 1 ? "Local Residents" : "Personalized Focus"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Our Classes Stand Out</h2>
                <p className="text-white/60">Quality education delivered with care and professionalism.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  { icon: <Users size={24} />, title: "1-1 Teaching Focus", desc: "We prioritize individual attention over large group sessions." },
                  { icon: <Clock size={24} />, title: "Flexible Timing", desc: "Schedule your classes at times that work best for you." },
                  { icon: <CheckCircle2 size={24} />, title: "Custom Pace", desc: "Learn at your own speed without the pressure of a group." },
                  { icon: <Monitor size={24} />, title: "Modern Tools", desc: "We use the latest digital tools for effective online learning." },
                  { icon: <GraduationCap size={24} />, title: "Expert Guidance", desc: "Direct mentorship from an experienced Hindi educator." },
                  { icon: <MessageCircle size={24} />, title: "Doubt Clearing", desc: "Dedicated time for answering all your questions and queries." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

import { GraduationCap, MessageCircle } from 'lucide-react';
export default Classes;
