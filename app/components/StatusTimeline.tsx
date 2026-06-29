import type { Absence, AbsenceStatus } from "~/data/absences";

function completedCount(status: AbsenceStatus): number {
  switch (status) {
    case "offen":
      return 1;
    case "lernende_bestaetigt":
      return 2;
    case "lehrbetrieb_bestaetigt":
      return 3;
    case "entschuldigt":
    case "unentschuldigt":
      return 4;
  }
}

export function StatusTimeline({ absence }: { absence: Absence }) {
  const done = completedCount(absence.status);
  const isUnexcused = absence.status === "unentschuldigt";

  const steps = [
    { label: "Erfasst", sub: "Lehrperson" },
    { label: "Unterschrieben", sub: "Lernende" },
    { label: "Bestätigt", sub: "Lehrbetrieb" },
    { label: isUnexcused ? "Unentschuldigt" : "Entschuldigt", sub: "Lehrperson" },
  ];

  return (
    <ol className="flex items-start">
      {steps.map((s, i) => {
        const n = i + 1;
        const completed = n <= done;
        const current = n === done + 1;
        const isFinalRed = n === 4 && completed && isUnexcused;

        const circle = isFinalRed
          ? "bg-red-500 text-white"
          : completed
            ? "bg-emerald-500 text-white"
            : current
              ? "border-2 border-blue-600 bg-white text-blue-700"
              : "border border-slate-300 bg-white text-slate-400";

        return (
          <li
            key={s.label}
            className="relative flex w-full flex-col items-center"
          >
            {i > 0 && (
              <div
                className={`absolute -left-1/2 top-4 -z-10 h-0.5 w-full ${
                  completed ? "bg-emerald-500" : "bg-slate-200"
                }`}
              />
            )}
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${circle}`}
            >
              {completed ? "✓" : n}
            </div>
            <div className="mt-2 px-1 text-center">
              <div
                className={`text-xs font-medium ${
                  completed || current ? "text-slate-700" : "text-slate-400"
                }`}
              >
                {s.label}
              </div>
              <div className="text-[10px] text-slate-400">{s.sub}</div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
