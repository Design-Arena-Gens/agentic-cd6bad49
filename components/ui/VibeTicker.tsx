'use client';

import { motion } from 'framer-motion';

const vibes = [
  'LOL как стиль жизни',
  'Глитч — наш второй язык',
  'Пиксели смеются вместе',
  'Гиперссылки хохочут',
  'Мемы вечны'
];

export function VibeTicker() {
  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-slate-900/60 py-3">
      <motion.div
        className="flex min-w-full gap-6 whitespace-nowrap text-xs uppercase tracking-[0.5em] text-slate-300"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        {[...vibes, ...vibes].map((vibe, index) => (
          <span key={`${vibe}-${index}`} className="inline-flex items-center gap-3">
            <span>{vibe}</span>
            <span className="h-1 w-1 rounded-full bg-fuchsia-400" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
