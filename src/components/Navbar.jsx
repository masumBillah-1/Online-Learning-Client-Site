import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from 'framer-motion';
import lightlogo from '../assets/logoblue.png';
import darklogo from '../assets/logoWhite.png';
import { AuthContext } from '../context/AuthContext';
import { UserRound, Sun, Moon, Home, BookOpen, LayoutDashboard, Settings, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, SignOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    SignOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const menuLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Courses', path: '/allcourses', icon: BookOpen },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, 
    //     children: [
    //   { name: 'Overview', path: '/dashboard/overview' },
    //   { name: 'My Courses', path: '/dashboard/mycourses' },
    //   { name: 'Students', path: '/dashboard/students' },
    // ] 
},
  ];

  // Theme-based classes
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const hoverBg = theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-white/10';
  const dropdownBg = theme === 'light' ? 'bg-white' : 'bg-[#193485]';
  const borderColor = theme === 'light' ? 'border-gray-200' : 'border-white/20';
  const buttonPrimary = theme === 'light'
    ? 'bg-[#193485] text-white hover:bg-[#0f2454]'
    : 'bg-white text-[#193485] hover:bg-gray-100';
  const buttonSecondary = theme === 'light'
    ? 'text-[#193485] border-[#193485] border-2'
    : 'text-white border-white border-2';

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-sm transition-all duration-300 ${theme === 'light' ? 'bg-white' : 'bg-gradient-to-r from-[#193485] to-[#0a1d4a]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={theme === 'light' ? lightlogo : darklogo} alt="EduWave Logo" className="w-10" />
            <span className={`font-bold text-2xl ${textColor}`}>
              Edu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Wave</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {menuLinks.map((link) => {
              const Icon = link.icon;
              // If link has children, render a dropdown
              if (link.children) {
                return (
                  <div key={link.name} className="relative group">
                    <button className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium ${textColor} ${hoverBg} transition-all duration-200`}>
                      <Icon size={18} />
                      {link.name}
                      <svg className={`ml-1 h-3 w-3 ${textColor}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                      </svg>

                    <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-[#193485] rounded-lg shadow-lg border border-gray-100 dark:border-white/10 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 pointer-events-none group-hover:pointer-events-auto">
                        <ul className="p-2">
                          {link.children.map((child) => (
                            <li key={child.path}>
                              <NavLink to={child.path} className={`block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/10 ${textColor}`}>
                                {child.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium ${textColor} ${hoverBg} transition-all duration-200`}
                >
                  <Icon size={18} />
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-lg ${hoverBg} transition-all duration-200`}
            >
              {theme === 'light' ? <Moon className={textColor} size={20} /> : <Sun className="text-yellow-300" size={20} />}
            </button>

            {/* Profile / Auth */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`w-10 h-10 rounded-full overflow-hidden border-2 ${borderColor} hover:border-[#632EE3] transition-all duration-200`}
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="User Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <UserRound className={textColor} />
                  )}
                </button>

                {isProfileOpen && (
                  <div className={`absolute right-0 mt-2 w-52 rounded-xl ${dropdownBg} shadow-xl border ${borderColor} overflow-hidden`}>
                    <div className={`p-4 border-b ${borderColor}`}>
                      <p className={`font-semibold ${textColor}`}>{user.displayName || user.email}</p>
                      <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-blue-200'}`}>{user.email}</p>
                    </div>
                    <div className="p-2">
                      <button className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${textColor} ${hoverBg} transition-all`}>
                        <UserRound size={18} /> Profile
                      </button>
                      <button className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${textColor} ${hoverBg} transition-all`}>
                        <Settings size={18} /> Settings
                      </button>
                      <button
                        onClick={handleSignOut}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${theme === 'light' ? 'text-red-600 hover:bg-red-50' : 'text-red-400 hover:bg-red-500/10'} transition-all`}
                      >
                        <LogOut size={18} /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link to="/login" className={`px-4 py-2 rounded-lg font-semibold ${buttonSecondary} transition-all duration-200`}>Login</Link>
                <Link to="/register" className={`px-4 py-2 rounded-lg font-semibold ${buttonPrimary} transition-all duration-200`}>Register</Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${hoverBg} transition-all duration-200`}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${dropdownBg} border-t ${borderColor}`}>
          <ul className="px-4 py-4 space-y-2">
            {menuLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg ${textColor} ${hoverBg} transition-all duration-200`}
                >
                  <Icon size={18} /> {link.name}
                </NavLink>
              );
            })}
            {!user && (
              <div className="pt-4 space-y-2 border-t border-white/10">
                <Link to="/login" className={`w-full px-4 py-3 rounded-lg font-semibold ${buttonSecondary} transition-all duration-200`}>Login</Link>
                <Link to="/register" className={`w-full px-4 py-3 rounded-lg font-semibold ${buttonPrimary} transition-all duration-200`}>Register</Link>
              </div>
            )}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
