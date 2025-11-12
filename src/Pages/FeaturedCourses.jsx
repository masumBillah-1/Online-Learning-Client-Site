import React from "react";
import { Star, Clock, Users, Award, Play, TrendingUp } from "lucide-react";

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Advanced AI & Machine Learning",
      instructor: "Dr. Sarah Chen",
      rating: 4.9,
      reviews: 2840,
      students: 45000,
      duration: "16 weeks",
      price: 149,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      category: "Artificial Intelligence",
      badge: "Bestseller",
      lessons: 78,
      level: "Advanced"
    },
    {
      id: 2,
      title: "Full Stack Web Development Bootcamp",
      instructor: "Michael Rodriguez",
      rating: 4.8,
      reviews: 3520,
      students: 58000,
      duration: "20 weeks",
      price: 179,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      category: "Web Development",
      badge: "Popular",
      lessons: 95,
      level: "Beginner to Advanced"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery 2024",
      instructor: "Emma Thompson",
      rating: 4.7,
      reviews: 1980,
      students: 32000,
      duration: "10 weeks",
      price: 99,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Marketing",
      badge: "New",
      lessons: 52,
      level: "Intermediate"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a3689] via-[#0f2454] to-[#030d28] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="w-10/12 mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wider border border-white/20 inline-flex items-center gap-2">
              <TrendingUp size={18} />
              FEATURED COURSES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn From The{" "}
            <span className="text-blue-300">
              Best
            </span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Handpicked premium courses taught by industry leaders. Transform your career with cutting-edge skills.
          </p>
        </div>

        {/* Featured Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3689]/90 via-[#1a3689]/40 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${
                    course.badge === "Bestseller" 
                      ? "bg-orange-500" 
                      : course.badge === "Popular"
                      ? "bg-blue-400"
                      : "bg-green-400"
                  }`}>
                    {course.badge}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Play size={28} className="text-[#1a3689] ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-[#1a3689] px-3 py-1 rounded-full text-xs font-semibold">
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-blue-200 mb-4 flex items-center gap-2">
                  <Award size={16} className="text-blue-300" />
                  {course.instructor}
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-4 mb-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-white">{course.rating}</span>
                    <span>({course.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{(course.students / 1000).toFixed(0)}K</span>
                  </div>
                </div>

                {/* Course Details */}
                <div className="flex items-center justify-between py-3 border-t border-white/10 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-sm text-white/80">
                    {course.lessons} Lessons
                  </div>
                  <div className="text-xs bg-white/10 text-blue-300 px-2 py-1 rounded-full font-semibold border border-white/20">
                    {course.level}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-white">${course.price}</span>
                    <span className="text-sm text-white/40 line-through ml-2">${course.originalPrice}</span>
                  </div>
                  <button className="bg-white/10 hover:bg-[#1a3689] text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 hover:shadow-lg">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats & CTA */}
        <div className="bg-gradient-to-br from-[#1a3689] to-[#030d28] rounded-2xl p-8 md:p-12 text-white shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-blue-200 text-lg mb-6">
                Join over 135,000+ students worldwide and unlock your potential with our premium courses.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#1a3689] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Browse All Courses
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">135K+</div>
                <div className="text-blue-200">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.8★</div>
                <div className="text-blue-200">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-200">Online Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;