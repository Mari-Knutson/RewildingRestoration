import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import projects from '../data/projects.json';

export default function Projects() {
    return (
        <section className="bg-nature-light py-20 px-4">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-12 text-center text-4xl font-serif font-bold text-nature-dark">
                    Selected Works
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="rounded-full bg-nature-moss/20 px-3 py-1 text-xs font-medium text-nature-dark">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="mb-2 text-xl font-bold text-nature-dark">{project.title}</h3>
                                <p className="mb-4 text-nature-stone">{project.description}</p>

                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-nature-accent hover:text-nature-dark transition-colors"
                                >
                                    View Project <ExternalLink size={16} className="ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
