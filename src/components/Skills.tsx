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
  Globe,
  Zap,
  Layout,
  Monitor,
  Cpu
} from 'lucide-react';

const skills = [
  // Languages
  { name: 'C#', icon: Code2, category: 'language' },
  { name: 'Visual Basic', icon: Code2, category: 'language' },
  { name: 'Java', icon: Coffee, category: 'language' },
  { name: 'JavaScript', icon: Braces, category: 'language' },
  { name: 'TypeScript', icon: FileCode, category: 'language' },
  { name: 'SQL', icon: Database, category: 'language' },
  { name: 'XML', icon: FileCode, category: 'language' },
  
  // Frameworks & Libraries
  { name: '.NET', icon: Layers, category: 'framework' },
  { name: '.NET Core', icon: Layers, category: 'framework' },
  { name: '.NET Framework', icon: Layers, category: 'framework' },
  { name: 'ASP.NET', icon: Globe, category: 'framework' },
  { name: 'Blazor', icon: Layout, category: 'framework' },
  { name: 'Razor', icon: FileCode, category: 'framework' },
  { name: 'React.js', icon: Monitor, category: 'framework' },
  { name: 'Next.js', icon: Server, category: 'framework' },
  
  // Databases
  { name: 'SQL Server', icon: Database, category: 'database' },
  { name: 'MongoDB', icon: Database, category: 'database' },
  { name: 'SAP HANA', icon: Database, category: 'database' },
  
  // Tools & Technologies
  { name: 'SignalR', icon: Zap, category: 'tool' },
  { name: 'WebSocket', icon: Zap, category: 'tool' },
  { name: 'Garnet', icon: Cpu, category: 'tool' },
  { name: 'Grafana', icon: Monitor, category: 'tool' },
  { name: 'Seq', icon: Monitor, category: 'tool' },
  { name: 'OOP', icon: Code2, category: 'tool' },
];

const categories = {
  language: 'Languages',
  framework: 'Frameworks',
  database: 'Databases',
  tool: 'Tools',
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
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

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Skills
            </h2>
          </div>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            Technologies and tools I use daily to develop robust and scalable solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-[#8b5cf6] mb-4">
                {categories[category as keyof typeof categories]}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
              >
                {categorySkills.map((skill) => {
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
                      <div className="flex flex-col items-center gap-2 p-4 bg-[#141414] rounded-xl border border-[#1a1a1a] transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                        <div className="p-2 bg-[#8b5cf6]/10 rounded-lg group-hover:bg-[#8b5cf6]/20 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-[#8b5cf6]" />
                        </div>
                        <span className="text-white text-sm font-medium text-center">{skill.name}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
