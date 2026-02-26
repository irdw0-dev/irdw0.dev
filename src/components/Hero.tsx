'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  name: string;
  bio: string | null;
  avatarUrl: string;
  githubUrl: string;
}

export default function Hero({ name, bio, avatarUrl, githubUrl }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#8b5cf6]/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <Image
                src={avatarUrl}
                alt={name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-[#8b5cf6]/20 animate-pulse" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          {name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-[#8b5cf6] font-medium mb-6"
        >
          Engenheiro de Software FullStack Pleno
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {bio || 'Desenvolvedor FullStack Pleno apaixonado pela criação de soluções de software. Com base sólida em C# e SQL, focado no desenvolvimento de sistemas escaláveis e eficientes utilizando o ecossistema .NET. Experiência em SignalR, Garnet, Flutter, MongoDB e Java.'}
        </motion.p>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-16">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#8b5cf6] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#a78bfa] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          
          <a
            href="https://linkedin.com/in/irdw0-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#8b5cf6]/50 text-[#8b5cf6] rounded-full font-medium transition-all duration-300 hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6] hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#71717a]"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
