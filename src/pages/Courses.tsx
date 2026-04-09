import { motion } from 'motion/react';
import { CheckCircle2, BookOpen, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { COURSES } from '../constants';
import { Link } from 'react-router-dom';
import { useEnquiry } from '../context/EnquiryContext';

const Courses = () => {
  const { openEnquiry } = useEnquiry();
  const icons = {
    BookOpen: <BookOpen className="text-accent" size={32} />,
    MessageCircle: <MessageCircle className="text-accent" size={32} />,
    GraduationCap: <GraduationCap className="text-accent" size={32} />
  };

  const courseImages: { [key: string]: string } = {
    academics: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    spoken: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    sabha: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800"
  };

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
            Our Specialized Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            From school syllabus to professional fluency, we have the perfect program for your Hindi learning needs.
          </motion.p>
        </div>
      </section>

      {/* Course Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {COURSES.map((course, i) => (
              <div key={course.id} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                    {icons[course.icon as keyof typeof icons]}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">{course.title}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {course.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-3 bg-background p-4 rounded-2xl border border-gray-100">
                        <CheckCircle2 size={20} className="text-accent shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={openEnquiry}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/10"
                  >
                    Enroll in this Course <ArrowRight size={18} />
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                    <img
                      src={courseImages[course.id] || `https://picsum.photos/seed/${course.id}/800/600`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Comparison / Summary */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 lg:p-20 border border-gray-100 card-shadow">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Not sure which course to pick?</h2>
              <p className="text-gray-500">We offer a free consultation to help you decide the best path.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-accent font-bold text-xl mb-2">School Students</div>
                <p className="text-gray-500 text-sm">Focus on Academics Hindi to excel in school exams and build a strong foundation.</p>
              </div>
              <div className="text-center p-6 border-y md:border-y-0 md:border-x border-gray-100">
                <div className="text-accent font-bold text-xl mb-2">Professionals</div>
                <p className="text-gray-500 text-sm">Choose Spoken Hindi to communicate effectively with clients and colleagues.</p>
              </div>
              <div className="text-center p-6">
                <div className="text-accent font-bold text-xl mb-2">Language Enthusiasts</div>
                <p className="text-gray-500 text-sm">Go for Sabha Hindi for formal certifications and deep literary knowledge.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/contact" className="text-accent font-bold hover:underline">
                Contact us for a free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
