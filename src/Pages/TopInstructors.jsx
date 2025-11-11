import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const instructors = [
  {
    name: "Yomi Denzel",
    role: "E-Commerce Expert",
    department: "Digital Marketing",
    rating: 4.9,
    students: "25K+",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Timothée Moiroux",
    role: "UI/UX Specialist",
    department: "UI/UX Design",
    rating: 4.8,
    students: "18K+",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    name: "David Sequiera",
    role: "Sales & Marketing",
    department: "Digital Marketing",
    rating: 4.9,
    students: "30K+",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
  },
  {
    name: "Manuel Ravier",
    role: "Full Stack Developer",
    department: "Web Development",
    rating: 4.7,
    students: "15K+",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  {
    name: "Sophie Laurent",
    role: "Brand Designer",
    department: "Graphic Design",
    rating: 4.8,
    students: "22K+",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Alexandre Dubois",
    role: "Motion Graphics",
    department: "Video Editing",
    rating: 4.9,
    students: "20K+",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Emma Bernard",
    role: "Mobile Developer",
    department: "App Development",
    rating: 4.8,
    students: "17K+",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "Lucas Martin",
    role: "Creative Director",
    department: "Graphic Design",
    rating: 4.9,
    students: "28K+",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop"
  },
  {
    name: "Marie Dubois",
    role: "UX Researcher",
    department: "UI/UX Design",
    rating: 4.7,
    students: "12K+",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "Pierre Lefebvre",
    role: "Frontend Expert",
    department: "Web Development",
    rating: 4.9,
    students: "24K+",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  {
    name: "Camille Rousseau",
    role: "Video Producer",
    department: "Video Editing",
    rating: 4.8,
    students: "19K+",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  },
  {
    name: "Antoine Moreau",
    role: "iOS Developer",
    department: "App Development",
    rating: 4.9,
    students: "21K+",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop"
  }
];

const departments = ["ALL", "Graphic Design", "Web Development", "Digital Marketing", "UI/UX Design", "Video Editing", "App Development"];

export default function TopInstructorsShowcase() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(0);
  
  const filteredInstructors = activeFilter === "ALL" 
    ? instructors 
    : instructors.filter(inst => inst.department === activeFilter);
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredInstructors.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleInstructors = filteredInstructors.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#193485] via-[#0a1d4a] to-[#000106] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-2 text-white">
            Meet the <span className="font-bold">top instructors.</span>
          </h1>
          <p className="text-blue-200 mb-8">Learn from industry-leading experts</p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => handleFilterChange(dept)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider transition-all ${
                  activeFilter === dept
                    ? "bg-[#193485] text-white border-2 border-white"
                    : "bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-[#193485] border-2 border-white/30 shadow-lg flex items-center justify-center transition-all ${
                  currentPage === 0 
                    ? "opacity-30 cursor-not-allowed" 
                    : "hover:bg-[#1e4099] hover:shadow-xl hover:border-white/50"
                }`}
              >
                <ChevronLeft size={24} className="text-white" />
              </button>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-[#193485] border-2 border-white/30 shadow-lg flex items-center justify-center transition-all ${
                  currentPage === totalPages - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-[#1e4099] hover:shadow-xl hover:border-white/50"
                }`}
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </>
          )}

          {/* Team Members */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-4">
            {visibleInstructors.map((instructor, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Profile Image */}
                <div className="relative mb-4 w-32 h-32">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#193485] shadow-lg group-hover:shadow-2xl group-hover:border-white/50 transition-all">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#193485] rounded-full border-4 border-white shadow-md flex items-center justify-center">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">
                  {instructor.name}
                </h3>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-2">
                  {instructor.role}
                </p>
                
                {/* Stats */}
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span>{instructor.rating}</span>
                  </div>
                  <span className="text-white/40">|</span>
                  <span>{instructor.students} students</span>
                </div>
              </div>
            ))}
          </div>

          {/* Page Indicator */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentPage 
                      ? "bg-white w-8" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-16 text-center text-blue-200 text-sm">
          Showing {visibleInstructors.length} of {filteredInstructors.length} top instructors
        </div>
      </div>
    </div>
  );
}