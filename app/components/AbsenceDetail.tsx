import type { Absence } from "~/data/absences";
import { daysUntil, deadlineFor } from "~/data/absences";
import { getModule } from "~/data/modules";
import { StatusBadge } from "./StatusBadge";
import { StatusTimeline } from "./StatusTimeline";

export function AbsenceDetail({ absence }: { absence: Absence }) {
  const deadline = deadlineFor(absence);
  const module = getModule(absence.moduleId);

  return (
    <div className="card space-y-6 p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            {module?.title ?? absence.moduleId}
          </h1>
          <p className="text-sm text-slate-500">
            {absence.moduleId} · {absence.date} · {absence.lessons}
          </p>
        </div>
        <StatusBadge status={absence.status} />
      </div>

      <div className="rounded-lg bg-slate-50 p-4">
        <StatusTimeline absence={absence} />
      </div>

      {deadline && <DeadlineNotice deadline={deadline} />}

      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-3">
        <Field label="Lernende" value={absence.studentName} />
        <Field label="Lehrperson" value={absence.teacher} />
        <Field label="Lektionen" value={`${absence.lessons} (${absence.lessonCount})`} />
        <Field label="Begründung" value={absence.reason ?? "–"} />
        <Field label="Beleg" value={absence.documentName ?? "–"} />
      </dl>

      <div>
        <h2 className="mb-3 text-sm font-semibold text-slate-700">Verlauf</h2>
        <ol className="space-y-3">
          {absence.history.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
              <div>
                <span className="text-slate-700">{h.action}</span>
                <span className="ml-2 text-xs text-slate-400">
                  {h.at} · {h.by}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function DeadlineNotice({ deadline }: { deadline: string }) {
  const days = daysUntil(deadline);
  const overdue = days < 0;
  const soon = days >= 0 && days <= 3;

  const tone = overdue
    ? "bg-red-50 text-red-700"
    : soon
      ? "bg-amber-50 text-amber-700"
      : "bg-slate-50 text-slate-600";

  const text = overdue
    ? `Frist abgelaufen (${deadline})`
    : `Frist: ${deadline} · noch ${days} ${days === 1 ? "Tag" : "Tage"}`;

  return (
    <div className={`rounded-lg px-4 py-2 text-sm font-medium ${tone}`}>
      {text}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-0.5 font-medium text-slate-800">{value}</dd>
    </div>
  );
}
