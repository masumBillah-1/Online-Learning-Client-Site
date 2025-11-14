// MyCourses.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!user?.email) return;
  
  const fetchMyCourses = async () => {
    setLoading(true);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_URL}/purchases?email=${user.email}`);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      setCourses(data);
    } catch {
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };
  
  fetchMyCourses();
}, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center " style={{background: 'linear-gradient(135deg, #193485 0%, #0a1c4a 100%)'}}>
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(to right, #193485, #0a1c4a)'}}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{color: '#193485'}}>Login Required</h2>
          <p className="text-gray-600 mb-6">Please login to see your courses.</p>
          <Link to="/login" className="inline-block px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition" style={{background: 'linear-gradient(to right, #193485, #0a1c4a)'}}>
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #193485 0%, #0a1c4a 100%)'}}>
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading your courses...</p>
        </div>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #193485 0%, #0a1c4a 100%)'}}>
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-gray-100">
            <svg className="w-12 h-12" style={{color: '#193485'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{color: '#193485'}}>No Courses Yet</h2>
          <p className="text-gray-600 mb-6">You have not purchased any courses yet. Start learning today!</p>
          <Link to="/courses" className="inline-block px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition" style={{background: 'linear-gradient(to right, #193485, #0a1c4a)'}}>
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #193485 0%, #0a1c4a 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">My Courses</h1>
          <p className="text-blue-100 text-lg">Continue your learning journey</p>
          <div className="mt-6 inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
            {courses.length} {courses.length === 1 ? 'Course' : 'Courses'} Enrolled
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course._id}
              to={`/courses/${course.courseid}`}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.thumbnail || "https://via.placeholder.com/400x200"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-lg">
                    <svg className="w-8 h-8 ml-1" style={{color: '#193485'}} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold text-white rounded-full backdrop-blur-sm" style={{background: 'rgba(25, 52, 133, 0.8)'}}>
                    {course.category || "Category"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-[#193485] transition-colors">
                  {course.title || "Course Title"}
                </h2>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500" style={{background: 'linear-gradient(to right, #193485, #0a1c4a)', width: '45%'}}></div>
                  </div>
                </div>

                {/* Continue Button */}
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold px-5 py-2 rounded-lg group-hover:shadow-lg transition-all" style={{background: 'linear-gradient(to right, #193485, #0a1c4a)'}}>
                    Continue Learning
                  </span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" style={{color: '#193485'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;