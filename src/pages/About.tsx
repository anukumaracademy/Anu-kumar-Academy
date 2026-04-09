import { motion } from 'motion/react';
import { CheckCircle2, Heart, Shield, Target } from 'lucide-react';
import { ACADEMY_NAME } from '../constants';

const About = () => {
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
            About the Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Dedicated to preserving and promoting the Hindi language through excellence in education and personalized mentorship.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-accent/5 overflow-hidden shadow-2xl relative">
                  <img
                    src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional Hindi Tutor"
                    className="w-full h-full object-cover relative z-10"
                  />
                  <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
                    <span className="text-accent/30 font-bold uppercase tracking-widest text-xs">Instructor Portrait</span>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-3xl -z-10 hidden lg:block"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Meet Your Tutor</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At {ACADEMY_NAME}, we believe that learning a language is more than just memorizing words; it's about connecting with a culture and building confidence. With over a decade of experience in teaching Hindi to students of all ages, our approach is rooted in patience and clarity.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you are a student struggling with school syllabus, a professional looking to improve fluency, or someone interested in the formal certifications of the Dakshina Bharat Hindi Prachar Sabha, we provide the right guidance tailored to your needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Heart className="text-accent" />, title: "Student-Centric", desc: "We adapt to your learning style." },
                  { icon: <Shield className="text-accent" />, title: "Trustworthy", desc: "Proven track record of success." },
                  { icon: <Target className="text-accent" />, title: "Goal-Oriented", desc: "Focused on results and fluency." },
                  { icon: <CheckCircle2 className="text-accent" />, title: "Expertise", desc: "Deep knowledge of Hindi literature." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Teaching Approach</h2>
            <p className="text-gray-500">How we make learning Hindi effective and enjoyable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Personalized Learning",
                desc: "Every student is different. We create custom lesson plans that focus on your strengths and work on your weaknesses.",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Interactive Sessions",
                desc: "Our classes are not lectures. We encourage active participation, conversation, and real-world application of the language.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Continuous Feedback",
                desc: "Regular assessments and constructive feedback help track progress and ensure that learning goals are being met.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 card-shadow group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
