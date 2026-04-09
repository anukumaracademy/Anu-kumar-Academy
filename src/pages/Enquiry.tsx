import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Info } from 'lucide-react';
import { COURSES, CLASS_TYPES } from '../constants';

const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    classType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
            Enquire Now
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Fill out the form below and we will get back to you within 24 hours to discuss your learning goals.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Custom Form */}
            <div className="lg:w-1/2">
              <div className="bg-background rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 card-shadow">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
                    <p className="text-gray-500 mb-8">
                      We have received your enquiry. We will contact you soon 😊
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-accent font-bold hover:underline"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Name</label>
                        <input
                          required
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                        <input
                          required
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="course" className="text-sm font-bold text-gray-700 ml-1">Course Selection</label>
                        <select
                          required
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm appearance-none"
                        >
                          <option value="">Select a course</option>
                          {COURSES.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="classType" className="text-sm font-bold text-gray-700 ml-1">Class Type</label>
                        <select
                          required
                          id="classType"
                          name="classType"
                          value={formData.classType}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm appearance-none"
                        >
                          <option value="">Select class type</option>
                          {CLASS_TYPES.map(t => <option key={t.title} value={t.title}>{t.title}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your learning goals..."
                        rows={4}
                        className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent text-white py-5 rounded-2xl font-bold hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2"
                    >
                      Submit Enquiry <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Google Form Embed */}
            <div className="lg:w-1/2">
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 bg-accent/5 p-4 rounded-2xl border border-accent/10">
                  <Info className="text-accent shrink-0" size={20} />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Prefer Google Forms? You can also fill out our official registration form below.
                  </p>
                </div>
                <div className="flex-grow bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 min-h-[600px] relative">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfD_X6qY_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="absolute inset-0"
                    title="Google Form Enquiry"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
