import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import projects from '../data/projects.json';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen bg-nature-light">
                <Navbar />
                <div className="flex h-screen items-center justify-center">
                    <div className="text-center">
                        <h2 className="mb-4 text-2xl font-bold text-nature-dark">Project Not Found</h2>
                        <Link to="/RewildingRestoration/projects" className="text-nature-accent hover:underline">
                            Return to Projects
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-nature-light">
            <Navbar />

            <div className="pt-24 lg:pt-32 pb-20 px-6">
                <div className="mx-auto max-w-5xl">
                    <Link
                        to="/RewildingRestoration/projects"
                        className="mb-8 inline-flex items-center text-sm font-medium text-nature-stone hover:text-nature-accent transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Projects
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="overflow-hidden rounded-2xl bg-white shadow-xl"
                    >
                        <div className="relative h-64 sm:h-96 w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-md">
                                    {project.title}
                                </h1>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="mb-8 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="rounded-full bg-nature-moss/20 px-3 py-1 text-sm font-medium text-nature-dark">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="prose prose-lg prose-nature max-w-none mb-10 text-nature-dark">
                                <p>{project.description}</p>
                            </div>

                            {project.link && project.link !== '#' && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-full bg-nature-accent px-6 py-3 text-white transition-transform hover:scale-105 hover:bg-nature-dark"
                                >
                                    View Live Project <ExternalLink size={18} className="ml-2" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
