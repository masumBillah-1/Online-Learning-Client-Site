import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import lightlogo from '../assets/logoblue.png';
import darklogo from '../assets/logoWhite.png';
import { AuthContext } from '../context/AuthContext';

import { UserRound } from 'lucide-react';

const Navbar = () => {


    const {user, SignOutUser} = use(AuthContext)

    const handleSignOut = ()=>{
        SignOutUser() 
        .then(()=> {})
        .catch(error=> console.log(error))
    }




    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const menulink = (
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/allcourses'}>Courses</NavLink></li>
            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        </>
    );

    return (
        <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-base-100 shadow-sm inter-fonts fixed top-0 left-0 w-full z-50"
        >
            <div className="navbar md:w-11/12 mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
                        >
                            {menulink}
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex gap-2 items-center">
                        <img
                            src={theme === 'light' ? lightlogo : darklogo}
                            alt="EduWave Logo"
                            className="w-10"
                        />
                        <p className="font-bold text-2xl">
                            Edu
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                                Wave
                            </span>
                        </p>
                    </div>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {menulink}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end space-x-5">
                    {/* Profile Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"

                            
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} alt="User Avatar" className="w-full h-full object-cover" />
                                    ) : (
                                        <UserRound className="w-full h-full text-gray-500" />
                                    )}
                                </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                    {/* Theme Toggle */}
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={handleThemeToggle}
                        />
                        {/* Sun Icon */}
                        <svg
                            className="swap-on h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
                        </svg>
                        {/* Moon Icon */}
                        <svg
                            className="swap-off h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                    {/* Auth Buttons */}
                    {/* <Link
                        to={'/login'}
                        className="btn text-blue-600 border-blue-600"
                    >
                        Login
                    </Link>
                    <Link
                        to={'/register'}
                        className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white"
                    >
                        Register
                    </Link> */}

                    {
                        user ? (
                            <button onClick={handleSignOut} className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white">Sign Out</button>
                        ) : (
                            <div>
                                <Link to={'/login'} className="btn text-blue-600 border-blue-600">Login</Link>
                                <Link to={'/register'} className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white ml-2">Register</Link>
                            </div>
                        )
                    }



                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
