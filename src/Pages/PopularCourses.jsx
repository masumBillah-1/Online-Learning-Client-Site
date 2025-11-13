import React from "react";
import { BookOpen, Code, TrendingUp, Palette, Video, Smartphone, ArrowRight } from "lucide-react";
import CourseCard from "../components/CourseCard";

const PopularCourses = ({coursedata}) => {


  console.log(coursedata)
  // const courses = [
  //   { 
  //     id: 1, 
  //     name: "Graphic Design", 
  //     icon: Palette,
  //     students: "15K+",
  //     lessons: 45,
  //     duration: "8 weeks",
  //     level: "Beginner"
  //   },
  //   { 
  //     id: 2, 
  //     name: "Web Development", 
  //     icon: Code,
  //     students: "22K+",
  //     lessons: 60,
  //     duration: "12 weeks",
  //     level: "Intermediate"
  //   },
  //   { 
  //     id: 3, 
  //     name: "Digital Marketing", 
  //     icon: TrendingUp,
  //     students: "18K+",
  //     lessons: 38,
  //     duration: "6 weeks",
  //     level: "Beginner"
  //   },
  //   { 
  //     id: 4, 
  //     name: "UI/UX Design", 
  //     icon: Palette,
  //     students: "12K+",
  //     lessons: 42,
  //     duration: "10 weeks",
  //     level: "Intermediate"
  //   },
  //   { 
  //     id: 5, 
  //     name: "Video Editing", 
  //     icon: Video,
  //     students: "14K+",
  //     lessons: 35,
  //     duration: "7 weeks",
  //     level: "Beginner"
  //   },
  //   { 
  //     id: 6, 
  //     name: "App Development", 
  //     icon: Smartphone,
  //     students: "19K+",
  //     lessons: 55,
  //     duration: "14 weeks",
  //     level: "Advanced"
  //   },
  // ];

  return (
    <section id="courses" className="py-20 bg-linear-to-br from-[#193485] via-[#0f2454] to-[#000106]">
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

          {
            coursedata.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
          }
          


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