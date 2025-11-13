import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import darklogo from '../assets/logoWhite.png';

const Root = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 100;
                return prev + 2; // progress speed
            });
        }, 30); // increase every 30ms

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // total loader duration

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <div className="relative w-32 h-32">
                    {/* Circular Progress */}
                    <svg className="w-full h-full rotate-[-90deg]">
                        <circle
                            className="text-gray-700"
                            strokeWidth="4"
                            stroke="currentColor"
                            fill="transparent"
                            r="48"
                            cx="50%"
                            cy="50%"
                        />
                        <circle
                            className="text-blue-500"
                            strokeWidth="4"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="48"
                            cx="50%"
                            cy="50%"
                            strokeDasharray={2 * Math.PI * 48}
                            strokeDashoffset={2 * Math.PI * 48 * (1 - progress / 100)}
                        />
                    </svg>

                    {/* Logo in center */}
                    <img
                        src={darklogo}
                        alt="Logo"
                        className="absolute inset-0 m-auto w-16 h-16"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <nav>
                <Navbar />
            </nav>
            <main className='grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;
