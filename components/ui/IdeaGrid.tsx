const ideas = [
  {
    title: 'Нейро-сцена',
    description: 'Собираем стаи мемов и обучаем их смешить алгоритмы.'
  },
  {
    title: 'Глитч-оркестр',
    description: 'Синхронизируем цифровые артефакты, чтобы создавать резонансный лол.'
  },
  {
    title: 'LOL-as-a-Service',
    description: 'API, которое возвращает только настроение и мигающие пиксели.'
  },
  {
    title: 'Секретная лаборатория',
    description: 'Складываем забавные гипотезы и тестируем их в реальном времени.'
  }
];

export function IdeaGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {ideas.map((idea) => (
        <article
          key={idea.title}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-6 transition hover:border-fuchsia/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.35)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-fuchsia-500/5 to-purple-500/20 opacity-0 transition group-hover:opacity-100" />
          <h3 className="relative text-lg font-semibold text-slate-50">{idea.title}</h3>
          <p className="relative mt-2 text-sm text-slate-300">{idea.description}</p>
        </article>
      ))}
    </div>
  );
}
