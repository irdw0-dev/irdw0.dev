'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Layers,
  FileCode,
  Coffee,
  Braces,
  Globe
} from 'lucide-react';

const skills = [
  { name: 'C#', icon: Code2, category: 'language' },
  { name: 'Java', icon: Coffee, category: 'language' },
  { name: 'JavaScript', icon: Braces, category: 'language' },
  { name: 'TypeScript', icon: FileCode, category: 'language' },
  { name: '.NET', icon: Layers, category: 'framework' },
  { name: 'APIs REST', icon: Server, category: 'framework' },
  { name: 'MongoDB', icon: Database, category: 'database' },
  { name: 'SQL', icon: Database, category: 'database' },
  { name: 'Web Development', icon: Globe, category: 'tool' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
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
              <Layers className="w-6 h-6 text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Habilidades
            </h2>
          </div>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            Tecnologias e ferramentas que utilizo no dia a dia para desenvolver soluções robustas e escaláveis.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="flex flex-col items-center gap-3 p-6 bg-[#141414] rounded-xl border border-[#1a1a1a] transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                  <div className="p-3 bg-[#8b5cf6]/10 rounded-lg group-hover:bg-[#8b5cf6]/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#8b5cf6]" />
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
