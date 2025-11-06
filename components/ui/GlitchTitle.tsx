'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import clsx from 'clsx';

const slices = [
  { rotate: -1.5, offset: '-0.2rem', color: 'text-fuchsia-300/90' },
  { rotate: 0.75, offset: '0.25rem', color: 'text-blue-300/70' },
  { rotate: 0, offset: '0', color: 'text-slate-50' }
];

export function GlitchTitle({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  const chars = useMemo(() => text.split(''), [text]);

  return (
    <div className={clsx('relative inline-flex select-none', className)}>
      {slices.map((slice, index) => (
        <motion.span
          key={slice.color}
          aria-hidden
          className={clsx('absolute inset-0 flex flex-wrap gap-1 uppercase tracking-[0.35em]', slice.color)}
          style={{ transform: `translate(${slice.offset}, ${slice.offset}) rotate(${slice.rotate}deg)` }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
        >
          {chars.map((char, charIndex) => (
            <motion.span
              key={`${index}-${charIndex}`}
              className="inline-block"
              animate={{
                y: [0, index === 0 ? -1.5 : 1.5, 0],
                opacity: [1, index === 2 ? 1 : 0.75, 1]
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 3 + Math.random() * 2,
                duration: 0.25,
                delay: Math.random() * 1.4
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      ))}
      <span className="relative flex flex-wrap gap-1 uppercase tracking-[0.35em] text-slate-50 mix-blend-screen">
        {chars.map((char, charIndex) => (
          <span key={charIndex} className="animate-pulse" style={{ animationDelay: `${charIndex * 35}ms` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </div>
  );
}
