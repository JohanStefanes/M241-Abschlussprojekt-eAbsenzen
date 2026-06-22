import { Link } from "react-router";

import type { Absence } from "~/data/absences";
import { daysUntil, deadlineFor } from "~/data/absences";
import { getModule } from "~/data/modules";
import { StatusBadge } from "./StatusBadge";

function DeadlineCell({ absence }: { absence: Absence }) {
  const deadline = deadlineFor(absence);
  if (!deadline) return <span className="text-slate-300">–</span>;

  const days = daysUntil(deadline);
  if (days < 0) {
    return <span className="font-medium text-red-600">überfällig</span>;
  }
  if (days <= 3) {
    return (
      <span className="font-medium text-amber-600">
        in {days} {days === 1 ? "Tag" : "Tagen"}
      </span>
    );
  }
  return (
    <span className="text-slate-500">
      in {days} Tagen
    </span>
  );
}

export function AbsenceTable({
  absences,
  basePath,
}: {
  absences: Absence[];
  basePath: string;
}) {
  if (absences.length === 0) {
    return (
      <div className="card p-10 text-center text-sm text-slate-500">
        Keine Absenzen vorhanden.
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3 font-semibold">Datum</th>
            <th className="px-4 py-3 font-semibold">Lernende</th>
            <th className="px-4 py-3 font-semibold">Modul</th>
            <th className="hidden px-4 py-3 font-semibold sm:table-cell">
              Lektionen
            </th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="hidden px-4 py-3 font-semibold md:table-cell">Frist</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {absences.map((a) => (
            <tr key={a.id} className="transition hover:bg-slate-50">
              <td className="px-4 py-3 whitespace-nowrap text-slate-700">
                {a.date}
              </td>
              <td className="px-4 py-3 font-medium text-slate-900">
                {a.studentName}
              </td>
              <td className="px-4 py-3 text-slate-700">
                <span className="font-medium text-slate-900">{a.moduleId}</span>
                <span className="ml-2 hidden text-slate-500 lg:inline">
                  {getModule(a.moduleId)?.title}
                </span>
              </td>
              <td className="hidden px-4 py-3 text-slate-500 sm:table-cell">
                {a.lessons}
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={a.status} />
              </td>
              <td className="hidden px-4 py-3 md:table-cell">
                <DeadlineCell absence={a} />
              </td>
              <td className="px-4 py-3 text-right">
                <Link
                  to={`${basePath}/${a.id}`}
                  className="font-medium text-blue-700 hover:text-blue-900"
                >
                  Öffnen
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
