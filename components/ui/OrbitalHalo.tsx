'use client';

import { motion, useCycle } from 'framer-motion';
import { useEffect } from 'react';

const glowColors = ['rgba(244,114,182,0.18)', 'rgba(129,140,248,0.22)', 'rgba(248,113,113,0.17)'];

export function OrbitalHalo() {
  const [colorIndex, cycleColor] = useCycle(...glowColors.map((color, index) => index));

  useEffect(() => {
    const interval = setInterval(() => cycleColor(), 2200);
    return () => clearInterval(interval);
  }, [cycleColor]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        animate={{
          backgroundColor: glowColors[colorIndex],
          rotate: [0, 10, -5, 0]
        }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia/40"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
