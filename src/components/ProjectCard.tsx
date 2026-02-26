'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork } from 'lucide-react';
import { GitHubRepo } from '@/types';

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

const languageColors: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Java: '#b07219',
  'C#': '#178600',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full p-6 bg-[#141414] rounded-xl border border-[#1a1a1a] transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-[#8b5cf6] transition-colors duration-300">
            {repo.name}
          </h3>
          <ExternalLink className="w-5 h-5 text-[#71717a] group-hover:text-[#8b5cf6] transition-colors duration-300" />
        </div>

        <p className="text-[#a1a1aa] text-sm mb-4 line-clamp-2 min-h-[40px]">
          {repo.description || 'Sem descrição disponível'}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ 
                    backgroundColor: languageColors[repo.language] || '#8b5cf6' 
                  }}
                />
                <span className="text-[#71717a]">{repo.language}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 text-[#71717a]">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#1a1a1a]">
          <span className="text-xs text-[#71717a]">
            Atualizado em {formatDate(repo.updated_at)}
          </span>
        </div>
      </a>
    </motion.div>
  );
}
