'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SpotlightBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e]/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" />
      
      {/* Spotlight that follows mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Secondary subtle glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
