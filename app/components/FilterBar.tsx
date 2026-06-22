import { Link } from "react-router";

import type { AbsenceStatus } from "~/data/absences";
import { statusLabel } from "~/data/absences";

const FILTERS: { value: AbsenceStatus | null; label: string }[] = [
  { value: null, label: "Alle" },
  { value: "offen", label: statusLabel("offen") },
  { value: "lernende_bestaetigt", label: statusLabel("lernende_bestaetigt") },
  { value: "eltern_bestaetigt", label: statusLabel("eltern_bestaetigt") },
  { value: "entschuldigt", label: statusLabel("entschuldigt") },
  { value: "unentschuldigt", label: statusLabel("unentschuldigt") },
];

export function FilterBar({ active }: { active: string | null }) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((f) => {
        const isActive = (f.value ?? null) === (active ?? null);
        return (
          <Link
            key={f.label}
            to={f.value ? `?status=${f.value}` : "?"}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              isActive
                ? "bg-blue-700 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {f.label}
          </Link>
        );
      })}
    </div>
  );
}
