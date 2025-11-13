import React, { useState } from 'react';
import { Star, Clock, Users, BookOpen, TrendingUp, Filter, Search } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';

const AllCourses = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Design', 'Development', 'Business', 'Marketing', 'Photography'];

    const courses = useLoaderData() || []; // ensure courses is always array

    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        const matchesSearch =
            course.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor?.name?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getBadgeColor = (badge) => {
        const colors = {
            'Bestseller': 'bg-orange-500',
            'Hot': 'bg-red-500',
            'New': 'bg-green-500',
            'Popular': 'bg-blue-500',
            'Trending': 'bg-purple-500',
            'Featured': 'bg-pink-500'
        };
        return colors[badge] || 'bg-gray-500';
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="w-11/12 mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <TrendingUp size={16} />
                        <span>EXPLORE COURSES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Discover Our
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#193485] to-[#0b1d4b]"> Popular Courses</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Choose from hundreds of courses with new additions published every month
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search courses, instructors..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#193485] focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                            <Filter className="text-gray-400 w-5 h-5 flex-shrink-0" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all cursor-pointer ${
                                        selectedCategory === category
                                            ? 'bg-gradient-to-r from-[#193485] to-[#0b1d4b] text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Showing <span className="font-bold text-gray-900">{filteredCourses.length}</span> courses
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <div
                            key={course._id || course.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            {/* Course Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.thumbnail || course.image}
                                    alt={course.title || 'Course'}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Badge */}
                                {course.tags?.[0] && (
                                    <div className="absolute top-4 left-4">
                                        <span className={`${getBadgeColor(course.tags[0])} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                                            {course.tags[0]}
                                        </span>
                                    </div>
                                )}

                                {/* Level Badge */}
                                {course.level && (
                                    <div className="absolute top-4 right-4">
                                        <p>{course._id }</p>
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                                            {course.level}
                                        </span>
                                    </div>
                                )}

                                {/* Category */}
                                {course.category && (
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-[#193485]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {course.category}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Course Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#193485] transition-colors">
                                    {course.title || 'Untitled Course'}
                                </h3>

                                <p className="text-sm text-gray-600 mb-4">By {course.instructor?.name || 'Unknown Instructor'}</p>

                                {/* Stats */}
                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="font-semibold text-gray-900">{course.rating ?? 0}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>{course.students?.toLocaleString() ?? 0}</span>
                                    </div>
                                </div>

                                {/* Course Details */}
                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 pb-4 border-b border-gray-100">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{course.duration || 'N/A'}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookOpen className="w-4 h-4" />
                                        <span>{course.lessons ?? 0} lessons</span>
                                    </div>
                                </div>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900">${course.price?.discounted ?? 0}</span>
                                        <span className="text-sm text-gray-400 line-through ml-2">${course.price?.original ?? 0}</span>
                                    </div>
                                    <Link to={`/details/${course._id}`} className="bg-linear-to-r from-[#193485] to-[#0b1d4b] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
    Enroll Now
</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllCourses;
