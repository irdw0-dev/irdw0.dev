'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/irdw0-dev',
    icon: Github,
    description: 'Confira meus projetos',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/irdw0-dev',
    icon: Linkedin,
    description: 'Conecte-se comigo',
  },
  {
    name: 'Email',
    url: 'mailto:contato@irdw0.dev',
    icon: Mail,
    description: 'Entre em contato',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Vamos conversar?
          </h2>
          <p className="text-[#a1a1aa] text-lg">
            Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group flex flex-col items-center gap-4 p-8 bg-[#141414] rounded-xl border border-[#1a1a1a] transition-all duration-300 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              >
                <div className="p-4 bg-[#8b5cf6]/10 rounded-full group-hover:bg-[#8b5cf6]/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-[#8b5cf6]" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">{link.name}</h3>
                  <p className="text-[#71717a] text-sm">{link.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-[#71717a] group-hover:text-[#8b5cf6] transition-colors duration-300" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center pt-12 border-t border-[#1a1a1a]"
        >
          <p className="text-[#71717a] text-sm">
            © {new Date().getFullYear()} Felipe Reis. Todos os direitos reservados.
          </p>
          <p className="text-[#71717a]/60 text-xs mt-2">
            Desenvolvido com Next.js, Tailwind CSS e muito ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
}
