import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import lightlogo from '../assets/logoblue.png';
import darklogo from '../assets/logoWhite.png';

const Footer = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

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

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }} // একবারই animate হবে
            className="p-10 bg-base-300 text-base-content"
        >
            <footer className="footer sm:footer-horizontal w-11/12 mx-auto">
                {/* Logo + Info */}
                <aside>
                    <div className="flex gap-2 items-center">
                        <img
                            src={theme === 'light' ? lightlogo : darklogo}
                            alt="Edu Wave Logo"
                            className="w-10"
                        />
                        <p className="font-bold text-2xl">
                            Edu{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                                Wave
                            </span>
                        </p>
                    </div>
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>

                {/* Services */}
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                {/* Company */}
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                {/* Legal */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </motion.div>
    );
};

export default Footer;
