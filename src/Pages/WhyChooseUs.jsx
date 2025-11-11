import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: "Trusted & Certified",
    desc: "We provide verified and high-quality courses from top professionals.",
  },
  {
    icon: <Clock className="w-10 h-10 text-amber-400" />,
    title: "Flexible Learning",
    desc: "Access courses anytime, anywhere — learn at your own pace.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-500" />,
    title: "Community Support",
    desc: "Join our active learning community and get instant feedback.",
  },
  {
    icon: <Award className="w-10 h-10 text-purple-500" />,
    title: "Top Rated Instructors",
    desc: "Learn from experienced professionals with real-world skills.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-black text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-3">Why Choose Us</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Our platform ensures quality learning experiences for every student,
          making education accessible and engaging.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 p-6 rounded-2xl shadow-md hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="flex flex-col items-center space-y-3">
              {f.icon}
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-300 text-center">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
