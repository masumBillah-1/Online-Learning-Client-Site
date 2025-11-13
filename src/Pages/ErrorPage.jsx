import React from 'react';
import { Home } from 'lucide-react';
import darklogo from '../assets/logoWhite.png'; // আপনার logo path এখানে দিন
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center' style={{background: 'linear-gradient(135deg, #0b1d4b 0%, #193485 100%)'}}>
            <div className='flex flex-col items-center justify-center py-20 px-6'>
                <img 
                    src={darklogo} 
                    alt="Logo" 
                    className='w-30 mb-8' 
                />
                <h2 className='text-9xl font-extrabold text-white mb-4'>404</h2>
                <p className='text-3xl text-white mb-8'>Page not Found</p>
                
                <Link to={'/'} className='group flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mt-6' style={{color: '#0b1d4b'}}>
                    <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;