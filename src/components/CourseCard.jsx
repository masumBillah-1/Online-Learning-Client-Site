import React from 'react';
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from 'react-router';

const CourseCard = ({ course }) => {
  const { _id = '', level = '', title = '', lessons = 0, students = 0, duration = '' } = course || {};

  console.log(_id)

  return (
    <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
      
      {/* Card Header */}
      <div className="relative bg-gradient-to-br from-[#193485] to-[#0a1d4a] p-8">
        <div className="absolute top-4 right-4">
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">{level}</span>
        </div>
        <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
          <BookOpen size={40} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-blue-200 text-sm">
          <BookOpen size={16} />
          <span>{lessons} Lessons</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm">{students} Students</span>
          </div>
          <span className="text-white/80 text-sm">{duration}</span>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-white/60 mb-2">
            <span>Course Progress</span>
            <span>0%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-0 group-hover:w-1/4 transition-all duration-1000"></div>
          </div>
        </div>

        

        <Link to={`/details/${_id}`} className="w-full bg-white/10 hover:bg-[#193485] text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 border border-white/20 hover:border-white/40 cursor-pointer">
          Start Learning
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
