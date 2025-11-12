import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from 'lucide-react';
import lightlogo from '../assets/logoblue.png';
import darklogo from '../assets/logoWhite.png';

const Footer = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const handleStorageChange = () => {
            setTheme(localStorage.getItem('theme') || 'light');
        };
        window.addEventListener('storage', handleStorageChange);
        const interval = setInterval(() => {
            const currentTheme = localStorage.getItem('theme') || 'light';
            if (currentTheme !== theme) {
                setTheme(currentTheme);
            }
        }, 100);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, [theme]);

    const handleSubscribe = () => {
        // Newsletter subscription logic
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <footer className="relative bg-gradient-to-br from-[#1a3689] via-[#0f2454] to-[#030d28] text-white overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="border-b border-white/10">
                    <div className="w-11/12 mx-auto px-4 py-12">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="text-center lg:text-left">
                                <h3 className="text-3xl font-bold mb-2">Stay Updated!</h3>
                                <p className="text-blue-200 text-sm">Subscribe to our newsletter for the latest courses and updates.</p>
                            </div>
                            <div className="flex gap-3 w-full lg:w-auto">
                                <div className="relative flex-1 lg:w-80">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <button
                                    onClick={handleSubscribe}
                                    className="bg-white text-[#1a3689] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                                >
                                    Subscribe
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="w-11/12 mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className="flex gap-2 items-center">
                                <img
                                    src={theme === 'light' ? darklogo : darklogo}
                                    alt="Edu Wave Logo"
                                    className="w-10"
                                />
                                <p className="font-bold text-2xl">
                                    Edu{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                                        Wave
                                    </span>
                                </p>
                            </div>
                            <p className="text-blue-200 text-sm leading-relaxed">
                                Empowering learners worldwide with quality education and innovative courses. Join thousands of students on their learning journey.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-blue-200">
                                    <Phone className="w-4 h-4" />
                                    <span>+880 1234-567890</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-blue-200">
                                    <Mail className="w-4 h-4" />
                                    <span>info@eduwave.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-blue-200">
                                    <MapPin className="w-4 h-4" />
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h6 className="text-lg font-bold mb-4 relative inline-block">
                                Quick Links
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h6>
                            <ul className="space-y-2">
                                {['About Us', 'All Courses', 'Become Instructor', 'Success Stories', 'FAQ', 'Blog'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-blue-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 text-sm group">
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Courses */}
                        <div>
                            <h6 className="text-lg font-bold mb-4 relative inline-block">
                                Popular Courses
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h6>
                            <ul className="space-y-2">
                                {['Web Development', 'Graphic Design', 'Digital Marketing', 'Data Science', 'UI/UX Design', 'Mobile App Dev'].map((course) => (
                                    <li key={course}>
                                        <a href="#" className="text-blue-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 text-sm group">
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {course}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h6 className="text-lg font-bold mb-4 relative inline-block">
                                Support
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h6>
                            <ul className="space-y-2">
                                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-blue-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 text-sm group">
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            {/* Copyright */}
                            <p className="text-blue-200 text-sm text-center md:text-left">
                                © 2024 Edu Wave. Made with <Heart className="inline w-4 h-4 text-red-400 fill-red-400" /> in Bangladesh. All rights reserved.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {[
                                    { icon: Facebook, label: 'Facebook' },
                                    { icon: Twitter, label: 'Twitter' },
                                    { icon: Instagram, label: 'Instagram' },
                                    { icon: Linkedin, label: 'LinkedIn' }
                                ].map(({ icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href="#"
                                        aria-label={label}
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:bg-white hover:text-[#1a3689] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Wave */}
            <div className="absolute top-0 left-0 right-0 transform rotate-180">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.05"/>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;