import type { Stats } from "~/data/absences";

export function StatsSummary({ stats }: { stats: Stats }) {
  const items = [
    { label: "Fehllektionen", value: stats.totalLektionen, accent: "text-slate-900" },
    { label: "Offen", value: stats.anzahlOffen, accent: "text-amber-600" },
    {
      label: "Unentschuldigt",
      value: stats.anzahlUnentschuldigt,
      accent: "text-red-600",
    },
    {
      label: "Quote unentsch.",
      value: `${stats.quoteUnentschuldigt}%`,
      accent: "text-blue-700",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((it) => (
        <div key={it.label} className="card p-5">
          <div className={`text-3xl font-bold ${it.accent}`}>{it.value}</div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
