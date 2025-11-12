import React from 'react';
import { CircleArrowRight, Star, Users, BookOpen, TrendingUp } from 'lucide-react';

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1a3689] via-[#0f2454] to-[#030d28] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="relative z-10 w-10/12 mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              <TrendingUp size={16} />
              <span>NEW COURSE LAUNCH</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Master
                <span className="block text-3xl text-blue-300">Graphic Design</span>
                <span className="block text-blue-200">& Storytelling</span>
              </h1>
              <p className="text-blue-200 text-[14px] max-w-xl">
                Learn professional design principles and creative storytelling techniques from industry experts. Transform your ideas into stunning visual narratives.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                  <Users size={24} className="text-blue-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold">25K+</div>
                  <div className="text-sm text-blue-200">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                  <Star size={24} className="text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                  <BookOpen size={24} className="text-blue-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-blue-200">Lessons</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group bg-white text-[#1a3689] px-4 py-1 rounded-xl font-bold text-[16px] hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                Enroll Now
                <CircleArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-4 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                Watch Preview
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-0.5"></div>
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white/20 flex items-center justify-center text-white font-bold text-xs">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-white/80 text-sm">
                Join <span className="font-bold text-white">25,000+</span> happy students
              </div>
            </div>
          </div>

          {/* Right Side - Course Card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-blue-500/20 w-[280px] h-[380px] hover:scale-105 transition-transform duration-500">
                {/* Course Image */}
                <div className="relative h-35 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                  <img
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
                    alt="Graphic Design Course"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3689] via-transparent to-transparent"></div>
                  
                  {/* Popular Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      BESTSELLER
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#1a3689] border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-4 space-y-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-blue-400/30">
                        Design
                      </span>
                      <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-green-400/30">
                        Beginner
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Graphic Design & Storytelling
                    </h3>
                    <p className="text-blue-200 text-[11px]">
                      Master visual communication and narrative design
                    </p>
                  </div>

                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/10">
                    <div className="text-center">
                      <div className="text-white font-bold text-base">12 Weeks</div>
                      <div className="text-blue-200 text-[10px]">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-base">50+</div>
                      <div className="text-blue-200 text-[10px]">Lessons</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-base">4.9★</div>
                      <div className="text-blue-200 text-[10px]">Rating</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">$149</span>
                      <span className="text-xs text-white/40 line-through ml-2">$299</span>
                    </div>
                    <div className="bg-green-500/20 text-green-300 px-2.5 py-1 rounded-lg text-xs font-bold border border-green-400/30">
                      50% OFF
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-2xl rotate-12 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                <Star size={32} className="text-white fill-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-2xl -rotate-12 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                <BookOpen size={36} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>
    </section>
  );
};

export default Banner;