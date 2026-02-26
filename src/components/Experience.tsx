'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

interface Position {
  company: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string | null;
}

interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

const positions: Position[] = [
  {
    company: 'Evertec Brasil',
    title: 'Senior .NET Software Engineer',
    description: 'Working as a Senior .NET Developer maintaining and evolving legacy systems essential for the financial sector. My responsibilities include analyzing and solving problems, optimizing existing code, and implementing new features using C# and VB, ensuring the stability and continuous performance of applications.',
    location: 'São Paulo, SP, Brazil',
    startDate: 'Jun 2025',
    endDate: null,
  },
  {
    company: 'Advice Compliance Solutions',
    title: 'Junior .NET Developer',
    description: 'Actively participated in the development of compliance systems using C# and the .NET ecosystem. Responsible for integrating SignalR for real-time communication and utilizing Garnet for performance optimization. Contributed to the architecture of scalable solutions, applying software development best practices.',
    location: 'São Paulo, Brazil',
    startDate: 'Sep 2024',
    endDate: 'Jun 2025',
  },
  {
    company: 'Advice Compliance Solutions',
    title: 'Program Development Intern',
    description: 'During my internship, collaborated on .NET system development, gaining practical experience with technologies such as SignalR and Garnet. Worked on problem-solving and developing new features, focusing on learning and applying coding best practices to create efficient software.',
    location: 'São Paulo, Brazil',
    startDate: 'Mar 2024',
    endDate: 'Sep 2024',
  },
  {
    company: 'Grupo Skill',
    title: 'Development Intern',
    description: 'In my first professional experience, worked on system development using a range of technologies including C#, XML, SQL, HANA, and XSL. This opportunity was fundamental in solidifying my skills in C# and SQL.',
    location: 'São Paulo, SP, Brazil',
    startDate: 'Jul 2022',
    endDate: 'Apr 2023',
  },
];

const education: Education[] = [
  {
    school: 'Universidade São Judas Tadeu',
    degree: "Bachelor's Degree",
    startDate: 'Jan 2022',
    endDate: 'Dec 2025',
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#8b5cf6]/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Work Experience
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {positions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 bg-[#141414] rounded-xl border border-[#1a1a1a] transition-all duration-300 hover:border-[#8b5cf6]/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#8b5cf6] transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-[#a1a1aa] font-medium">{position.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#71717a]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {position.startDate} - {position.endDate || 'Present'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-[#71717a] mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{position.location}</span>
                </div>

                <p className="text-[#a1a1aa] leading-relaxed">
                  {position.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#8b5cf6]/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Education
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-[#141414] rounded-xl border border-[#1a1a1a] transition-all duration-300 hover:border-[#8b5cf6]/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#8b5cf6] transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-[#a1a1aa]">{edu.degree}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#71717a]">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
