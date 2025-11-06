import { GlitchTitle } from '@/components/ui/GlitchTitle';
import { IdeaGrid } from '@/components/ui/IdeaGrid';
import { LolGenerator } from '@/components/ui/LolGenerator';
import { LolTimeline } from '@/components/ui/LolTimeline';
import { OrbitalHalo } from '@/components/ui/OrbitalHalo';
import { VibeTicker } from '@/components/ui/VibeTicker';

const highlights = [
  {
    label: 'Микрофон мемов',
    value: '24/7',
    note: 'Потоковые «лол» на любой вкус'
  },
  {
    label: 'Триггеры глитча',
    value: '108',
    note: 'Предиктивные аномалии, которые заставят улыбнуться'
  },
  {
    label: 'Эмоции в минуту',
    value: '∞',
    note: 'Потому что лол не знает границ'
  }
];

export default function Page() {
  return (
    <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 md:px-8 md:py-24">
      <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/50 p-10 shadow-[0_0_40px_rgba(79,70,229,0.18)]">
        <div className="absolute inset-0">
          <OrbitalHalo />
        </div>
        <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-6">
            <GlitchTitle text="ЛОЛ-РЕАЛЬНОСТЬ" className="text-3xl font-bold md:text-5xl" />
            <p className="text-base text-slate-300 md:text-lg">
              Добро пожаловать в пространство, где мемы загибают пространство-время, а глитч становится новым видом искусства.
              Тут мы культивируем лол-эмоции, строим хроники хаоса и транслируем перманентный звук смеха.
            </p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-slate-400">
              <span className="rounded-full border border-white/10 px-4 py-2">Глитч</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Неон</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Анекдотичный Квант</span>
            </div>
          </div>
          <div className="grid w-full max-w-sm gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl md:w-auto">
            {highlights.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                <p className="text-3xl font-semibold text-slate-50">{item.value}</p>
                <p className="text-xs text-slate-400">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VibeTicker />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <LolGenerator />
        <LolTimeline />
      </section>

      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Манифест</p>
        <IdeaGrid />
      </section>
    </div>
  );
}
