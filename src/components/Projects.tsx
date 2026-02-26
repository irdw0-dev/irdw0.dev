'use client';

import { motion } from 'framer-motion';
import { GitHubRepo } from '@/types';
import ProjectCard from './ProjectCard';
import { Code2 } from 'lucide-react';

interface ProjectsProps {
  repos: GitHubRepo[];
}

export default function Projects({ repos }: ProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#8b5cf6]/10 rounded-lg">
              <Code2 className="w-6 h-6 text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Projects
            </h2>
          </div>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            Some of my most recent projects on GitHub. Each one represents a unique challenge and a learning opportunity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.slice(0, 6).map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </motion.div>

        {repos.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/irdw0-dev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#8b5cf6]/50 text-[#8b5cf6] rounded-full font-medium transition-all duration-300 hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]"
            >
              View all projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
