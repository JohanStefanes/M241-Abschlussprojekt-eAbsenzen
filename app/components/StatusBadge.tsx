import type { AbsenceStatus } from "~/data/absences";
import { statusLabel } from "~/data/absences";

const STYLES: Record<AbsenceStatus, { dot: string; text: string; bg: string }> = {
  offen: { dot: "bg-slate-400", text: "text-slate-700", bg: "bg-slate-100" },
  lernende_bestaetigt: { dot: "bg-blue-500", text: "text-blue-700", bg: "bg-blue-50" },
  eltern_bestaetigt: {
    dot: "bg-indigo-500",
    text: "text-indigo-700",
    bg: "bg-indigo-50",
  },
  entschuldigt: {
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  unentschuldigt: { dot: "bg-red-500", text: "text-red-700", bg: "bg-red-50" },
};

export function StatusBadge({ status }: { status: AbsenceStatus }) {
  const s = STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${s.bg} ${s.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {statusLabel(status)}
    </span>
  );
}
