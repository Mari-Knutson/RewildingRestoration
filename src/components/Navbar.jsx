import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Projects', href: '/RewildingRestoration/projects' },
        { name: 'About', href: '/RewildingRestoration/about' },
        { name: 'Contact', href: '/RewildingRestoration/contact' },
    ];
    // Removed Journal as requested


    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-nature-dark/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo / Brand */}
                <Link to="/RewildingRestoration/" className="flex items-center gap-3 text-nature-light hover:text-nature-accent transition-colors">
                    <img src="/RewildingRestoration/logo.jpg" alt="Rewilding Logo" className="h-10 w-10 object-contain drop-shadow-md" />
                    <span className="text-xl font-bold font-serif tracking-wide shadow-black drop-shadow-sm">Rewilding Restoration</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm uppercase tracking-widest text-nature-light hover:text-nature-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/RewildingRestoration/join"
                        className="rounded-full bg-nature-moss px-6 py-2 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105 hover:bg-nature-accent"
                    >
                        Join
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-nature-light"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-16 left-0 w-full bg-nature-dark/95 p-6 md:hidden backdrop-blur-md"
                >
                    <div className="flex flex-col gap-6 text-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg text-nature-light hover:text-nature-accent"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/RewildingRestoration/join" onClick={() => setIsOpen(false)} className="text-lg text-nature-light hover:text-nature-accent">
                            Join
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
