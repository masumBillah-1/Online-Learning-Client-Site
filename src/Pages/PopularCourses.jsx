import React from "react";
import { BookOpen, Code, TrendingUp, Palette, Video, Smartphone, ArrowRight } from "lucide-react";

const PopularCourses = () => {
  const courses = [
    { 
      id: 1, 
      name: "Graphic Design", 
      icon: Palette,
      students: "15K+",
      lessons: 45,
      duration: "8 weeks",
      level: "Beginner"
    },
    { 
      id: 2, 
      name: "Web Development", 
      icon: Code,
      students: "22K+",
      lessons: 60,
      duration: "12 weeks",
      level: "Intermediate"
    },
    { 
      id: 3, 
      name: "Digital Marketing", 
      icon: TrendingUp,
      students: "18K+",
      lessons: 38,
      duration: "6 weeks",
      level: "Beginner"
    },
    { 
      id: 4, 
      name: "UI/UX Design", 
      icon: Palette,
      students: "12K+",
      lessons: 42,
      duration: "10 weeks",
      level: "Intermediate"
    },
    { 
      id: 5, 
      name: "Video Editing", 
      icon: Video,
      students: "14K+",
      lessons: 35,
      duration: "7 weeks",
      level: "Beginner"
    },
    { 
      id: 6, 
      name: "App Development", 
      icon: Smartphone,
      students: "19K+",
      lessons: 55,
      duration: "14 weeks",
      level: "Advanced"
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-[#193485] via-[#0f2454] to-[#000106]">
      <div className="w-10/12 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wider border border-white/20">
              EXPLORE COURSES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Popular <span className="text-blue-300">Courses</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Master in-demand skills with our comprehensive courses designed by industry experts
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
              >
                {/* Card Header with Icon */}
                <div className="relative bg-gradient-to-br from-[#193485] to-[#0a1d4a] p-8">
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {course.level}
                    </span>
                  </div>
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {course.name}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-200 text-sm">
                    <BookOpen size={16} />
                    <span>{course.lessons} Lessons</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-white/80">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">{course.students} Students</span>
                    </div>
                    <span className="text-white/80 text-sm">{course.duration}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-white/60 mb-2">
                      <span>Course Progress</span>
                      <span>0%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-0 group-hover:w-1/4 transition-all duration-1000"></div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-white/10 hover:bg-[#193485] text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 border border-white/20 hover:border-white/40 cursor-pointer">
                    Start Learning
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-white text-[#193485] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;