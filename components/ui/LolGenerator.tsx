'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const lolPhrases = [
  'Лол-лопатой зачерпни юзабилити',
  'Снимок экрана? Лол, это уже NFT',
  'Кофе закончился, но лол-сила вечна',
  'Мысли громче сабвуфера — лол',
  'Квантовый мем наблюдает за тобой'
];

const lolPalettes = [
  ['from-pink-500 via-fuchsia-500 to-indigo-400', 'shadow-pink-500/50'],
  ['from-sky-500 via-cyan-400 to-emerald-400', 'shadow-sky-500/40'],
  ['from-orange-500 via-rose-500 to-purple-500', 'shadow-orange-500/40']
];

export function LolGenerator() {
  const [index, setIndex] = useState(0);
  const palette = useMemo(() => lolPalettes[index % lolPalettes.length], [index]);

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Лол-случайность</p>
        <motion.button
          type="button"
          onClick={() => setIndex((prev) => prev + 1)}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-fuchsia/60 hover:text-fuchsia-200"
          whileTap={{ scale: 0.97 }}
        >
          <SparklesIcon className="h-4 w-4" />
          Новая волна
        </motion.button>
      </div>
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${palette[0]} p-1`}
      >
        <div className="rounded-[20px] bg-slate-950/95 p-6">
          <motion.p
            className="text-lg font-semibold"
            animate={{ opacity: [0.7, 1, 0.85, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
          >
            {lolPhrases[index % lolPhrases.length]}
          </motion.p>
        </div>
        <div className={`absolute inset-0 -z-10 blur-xl ${palette[1]}`} />
      </motion.div>
      <p className="text-xs text-slate-400">
        Рандомизатор пропитан загадочным мем-энергоном. Каждый клик — как новый снэпшот параллельной реальности.
      </p>
    </div>
  );
}
