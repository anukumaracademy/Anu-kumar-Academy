import { motion } from 'motion/react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK, EMAIL, ACADEMY_NAME } from '../constants';

const Contact = () => {
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Have questions? We're here to help. Reach out to us via any of the channels below.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-10 rounded-[2.5rem] border border-gray-100 card-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Available for calls and inquiries during business hours.
                </p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-bold text-primary hover:text-accent transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>

              <div className="bg-background p-10 rounded-[2.5rem] border border-gray-100 card-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Quick chat for instant replies and class scheduling.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-background p-10 rounded-[2.5rem] border border-gray-100 card-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  For detailed queries and formal communication.
                </p>
                <a href={`mailto:${EMAIL}`} className="text-lg font-bold text-primary hover:text-accent transition-colors break-all">
                  {EMAIL}
                </a>
              </div>

              <div className="bg-background p-10 rounded-[2.5rem] border border-gray-100 card-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <p className="text-gray-500 text-sm mb-2 leading-relaxed">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sun: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>

            {/* Location / Socials */}
            <div className="bg-primary text-white p-12 rounded-[3rem] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Visit Us</h3>
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-accent shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold mb-2">Academy Center</h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Available for Offline Classes and Home Tuition in the local area. Contact us for the exact location.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={20} />, link: "#" },
                    { icon: <Instagram size={20} />, link: "#" },
                    { icon: <Twitter size={20} />, link: "#" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] bg-gray-200 rounded-[3rem] overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <MapPin size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-500 mb-2">Interactive Map Coming Soon</h3>
              <p className="text-gray-400 text-sm max-w-md">
                We provide home tuition across the city and offline classes at our main center.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
