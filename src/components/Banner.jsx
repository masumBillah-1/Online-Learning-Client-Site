import React from 'react';
import { motion } from 'framer-motion';
import bannerimg from '../assets/banner-1.webp.png';
import { CircleArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <section className="">
      {/* Background Gradient */}
      <div className="bg-linear-to-br from-blue-900 to-black py-30">
        {/* Center Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 px-6">
          
          {/* Left Side Text */}
          <motion.div
            className="space-y-3 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className="text-white text-2xl">Our latest course:</h2>
            <h2 className="text-white font-semibold text-4xl leading-snug">
              Graphic Design <br /> and Storytelling
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-amber-400 border-none mt-5 hover:bg-amber-500 text-white font-semibold"
            >
              Enroll Now <CircleArrowRight className="w-5 ml-2" />
            </motion.button>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="w-72 h-72 rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col justify-start"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -15, 0]
            }}
            transition={{ 
              opacity: { duration: 1, delay: 0.4, ease: 'easeOut' },
              scale: { duration: 1, delay: 0.4, ease: 'easeOut' },
              y: { 
                duration: 3, 
                delay: 1.4,
                ease: 'easeInOut',
                repeat: Infinity
              }
            }}
          >
            <img
              src={bannerimg}
              alt="Banner"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <h3 className="font-bold text-gray-800 text-2xl text-center py-4">
              Graphic Design
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;