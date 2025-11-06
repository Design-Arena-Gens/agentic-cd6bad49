const timeline = [
  {
    title: '2010 — Мем на кухне',
    description: 'Первый «лол» вырвался в момент, когда тостер решил стать вай-фай роутером.'
  },
  {
    title: '2014 — Хакатон неожиданностей',
    description: 'Прототип приложения «Лол-локатор» выигрывает приз за самую странную идею.'
  },
  {
    title: '2020 — Космическая экспедиция',
    description: 'Астронавты записали «лол» в невесомости и запустили его как сигнал надежды.'
  },
  {
    title: '2024 — Тут и сейчас',
    description: 'Мы синхронизируем мемную частоту интернета и создаем атмосферу для новых лол-парадоксов.'
  }
];

export function LolTimeline() {
  return (
    <div className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-300">ХРОНОЛОГИЯ ЛОЛ</p>
      <ol className="relative space-y-6 before:absolute before:-left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-fuchsia-400/70 before:via-purple-400/40 before:to-slate-700">
        {timeline.map((item) => (
          <li key={item.title} className="relative pl-6">
            <span className="absolute -left-[26px] top-2 flex h-3 w-3 items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
            </span>
            <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
