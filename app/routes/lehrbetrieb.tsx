import type { Route } from "./+types/lehrbetrieb";
import { getAbsencesForStudent, getStats } from "~/data/absences";
import { requireUser } from "~/session.server";
import { AbsenceTable } from "~/components/AbsenceTable";
import { FilterBar } from "~/components/FilterBar";
import { PageHeader } from "~/components/PageHeader";
import { StatsSummary } from "~/components/StatsSummary";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await requireUser(request, "lehrbetrieb");
  const student = user.studentName ?? "";
  const filter = new URL(request.url).searchParams.get("status");
  const all = getAbsencesForStudent(student);
  const stats = getStats(all);
  const absences = filter ? all.filter((a) => a.status === filter) : all;
  return { absences, stats, student, filter };
}

export default function LehrbetriebDashboard({ loaderData }: Route.ComponentProps) {
  const { absences, stats, student, filter } = loaderData;

  return (
    <div className="space-y-6">
      <PageHeader title="Absenzen unserer Lernenden" subtitle={student} />
      <StatsSummary stats={stats} />
      <FilterBar active={filter} />
      <AbsenceTable absences={absences} basePath="/lehrbetrieb/absenz" />
    </div>
  );
}
