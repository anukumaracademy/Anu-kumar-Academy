import { motion } from 'motion/react';
import { Clock, Calendar, Info, CheckCircle2 } from 'lucide-react';

const Schedule = () => {
  const scheduleItems = [
    { day: "Monday - Friday", time: "Flexible Slots", type: "Online / Home Tuition", status: "Available" },
    { day: "Saturday", time: "9:00 AM - 8:00 PM", type: "All Formats", status: "Popular" },
    { day: "Sunday", time: "9:00 AM - 1:00 PM", type: "All Formats", status: "Limited" },
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
            Class Schedule
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            We offer flexible timings to accommodate students, working professionals, and language enthusiasts.
          </motion.p>
        </div>
      </section>

      {/* Schedule Table/Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {scheduleItems.map((item, i) => (
              <div key={i} className="bg-background rounded-3xl p-8 border border-gray-100 card-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${
                    item.status === 'Popular' ? 'bg-orange-100 text-orange-600' : 
                    item.status === 'Limited' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-accent">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.day}</h3>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Clock size={16} />
                  <span className="text-sm font-medium">{item.time}</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-6">{item.type}</p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Slots are allocated on a first-come, first-served basis. Contact us to book your preferred time.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="max-w-4xl mx-auto bg-accent/5 rounded-[2.5rem] p-8 lg:p-12 border border-accent/10">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                <Info size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Important Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Standard sessions are 1 hour long.",
                    "Weekend classes are highly recommended for working professionals.",
                    "Flexible timing available for 1-1 online sessions.",
                    "Home tuition slots depend on location and availability.",
                    "Rescheduling requires at least 24 hours notice.",
                    "Custom intensive batches can be arranged on request."
                  ].map((note, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-accent shrink-0" />
                      <span className="text-sm text-gray-600">{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
