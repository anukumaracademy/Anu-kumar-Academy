import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2, Star, BookOpen, GraduationCap, Users } from 'lucide-react';
import { COURSES, TESTIMONIALS, WHATSAPP_LINK } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full"
            >
              Premium Hindi Tuition
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-primary mb-8 leading-[1.1]"
            >
              Learn Hindi with <span className="text-accent">Confidence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 mb-10 leading-relaxed"
            >
              Expert guidance for Academics, Spoken, and Sabha Hindi. 
              Online, Offline & Home Tuition available for all age groups.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/enquiry"
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2"
              >
                Enquire Now <ArrowRight size={18} />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} className="text-[#25D366]" /> WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-accent/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="text-accent" />, title: "1-1 Personalized Classes", desc: "Dedicated attention to every student's unique learning pace." },
              { icon: <GraduationCap className="text-accent" />, title: "Weekend Classes", desc: "Flexible schedules designed for busy students and professionals." },
              { icon: <BookOpen className="text-accent" />, title: "Flexible Learning", desc: "Choose between Online, Offline, or Home Tuition options." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-background border border-gray-100 card-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Popular Courses</h2>
            <p className="text-gray-500">Tailored programs to meet your specific Hindi learning goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSES.map((course, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 card-shadow transition-all hover:border-accent/30">
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">{course.description}</p>
                <ul className="space-y-3 mb-8">
                  {course.benefits.slice(0, 3).map((benefit, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent mr-2 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/courses" className="text-accent font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">Why Choose Anu Kumar Academy?</h2>
              <div className="space-y-8">
                {[
                  { title: "Simple Teaching Methods", desc: "Complex grammar made easy through relatable examples and practical usage." },
                  { title: "Individual Attention", desc: "No crowded batches. We focus on one student at a time for maximum impact." },
                  { title: "Practical Approach", desc: "Focus on speaking and understanding rather than just rote memorization." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl bg-accent/5 flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="aspect-square bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
                    <span className="text-3xl font-bold text-accent mb-2">10+</span>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Years Experience</span>
                  </div>
                  <div className="aspect-square bg-accent text-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center translate-y-8">
                    <span className="text-3xl font-bold mb-2">500+</span>
                    <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Students Taught</span>
                  </div>
                  <div className="aspect-square bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center -translate-y-8">
                    <span className="text-3xl font-bold text-accent mb-2">100%</span>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Result Oriented</span>
                  </div>
                  <div className="aspect-square bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
                    <span className="text-3xl font-bold text-accent mb-2">4.9/5</span>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Student Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Parents & Students Say</h2>
            <p className="text-gray-500">Real feedback from our learning community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 card-shadow">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-accent font-bold hover:underline">
              View All Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Start Your Hindi Journey Today</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Join Anu Kumar Academy and experience a new way of learning Hindi that is fun, effective, and personalized.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/enquiry"
                className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-full font-bold hover:bg-accent/90 transition-all shadow-xl shadow-accent/20"
              >
                Get Started Now
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
