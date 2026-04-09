import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
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
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Hear from the parents and students who have experienced our unique teaching methodology.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid bg-background p-8 rounded-[2rem] border border-gray-100 card-shadow relative"
              >
                <Quote className="absolute top-6 right-8 text-accent/10" size={48} />
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Additional Dummy Reviews to make it at least 5 as requested (constants has 5 already, adding more for variety) */}
            {[
              { name: "Sanjay Patel", role: "Student", text: "The Sabha Hindi exams felt so much easier after the coaching here. Highly recommended for formal certifications.", stars: 5 },
              { name: "Kavitha S.", role: "Parent", text: "My son used to be afraid of Hindi classes in school. Now he actually looks forward to his weekend sessions with Anu Kumar Academy.", stars: 5 },
              { name: "David Miller", role: "Expat", text: "As someone new to India, learning Hindi was a challenge. The 1-1 sessions helped me understand the basics very quickly.", stars: 5 }
            ].map((t, i) => (
              <motion.div
                key={i + 10}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="break-inside-avoid bg-background p-8 rounded-[2rem] border border-gray-100 card-shadow relative"
              >
                <Quote className="absolute top-6 right-8 text-accent/10" size={48} />
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to write your own success story?</h2>
          <p className="text-gray-500 mb-10">Join hundreds of satisfied students and parents today.</p>
          <a
            href="/enquiry"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold hover:bg-accent/90 transition-all shadow-xl shadow-accent/20"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
