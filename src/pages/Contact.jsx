import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="min-h-screen bg-nature-light text-nature-dark">
            <Navbar />
            <div className="pt-32 px-6 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-serif font-bold mb-12 text-nature-dark"
                >
                    Contact
                </motion.h1>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-nature-stone mb-6">
                            Interested in collaborating or learning more about our projects?
                            We'd love to hear from you.
                        </p>
                        <a href="mailto:hello@rewildingrestoration.com" className="text-nature-accent font-bold text-lg hover:underline">
                            hello@rewildingrestoration.com
                        </a>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold mb-2">Name</label>
                            <input type="text" className="w-full p-3 bg-white border border-nature-dark/20 rounded-lg focus:outline-none focus:border-nature-moss" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Email</label>
                            <input type="email" className="w-full p-3 bg-white border border-nature-dark/20 rounded-lg focus:outline-none focus:border-nature-moss" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Message</label>
                            <textarea rows="4" className="w-full p-3 bg-white border border-nature-dark/20 rounded-lg focus:outline-none focus:border-nature-moss"></textarea>
                        </div>
                        <button className="bg-nature-dark text-nature-light px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-nature-moss transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
