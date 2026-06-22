import { Form, redirect, useNavigation } from "react-router";

import type { Route } from "./+types/lehrperson";
import { createAbsence, getAllAbsences, getStats } from "~/data/absences";
import { modules } from "~/data/modules";
import { requireUser } from "~/session.server";
import { AbsenceTable } from "~/components/AbsenceTable";
import { FilterBar } from "~/components/FilterBar";
import { PageHeader } from "~/components/PageHeader";
import { StatsSummary } from "~/components/StatsSummary";

export async function loader({ request }: Route.LoaderArgs) {
  await requireUser(request, "lehrperson");
  const filter = new URL(request.url).searchParams.get("status");
  const all = getAllAbsences();
  const stats = getStats(all);
  const absences = filter ? all.filter((a) => a.status === filter) : all;
  return { absences, stats, filter };
}

export async function action({ request }: Route.ActionArgs) {
  await requireUser(request, "lehrperson");
  const f = await request.formData();
  const studentName = String(f.get("studentName") ?? "").trim();
  const moduleId = String(f.get("moduleId") ?? "").trim();
  const date = String(f.get("date") ?? "").trim();
  const lessons = String(f.get("lessons") ?? "").trim();
  const teacher = String(f.get("teacher") ?? "").trim();
  const lessonCount = Number(f.get("lessonCount") ?? 1);

  if (!studentName || !moduleId || !date) {
    return { error: "Lernende, Modul und Datum sind Pflichtfelder." };
  }

  createAbsence({
    studentName,
    moduleId,
    date,
    lessons: lessons || "–",
    teacher: teacher || "–",
    lessonCount: Number.isFinite(lessonCount) && lessonCount > 0 ? lessonCount : 1,
  });

  return redirect("/lehrperson");
}

export default function LehrpersonDashboard({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { absences, stats, filter } = loaderData;
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  return (
    <div className="space-y-6">
      <PageHeader
        title="Lehrperson – Absenzen"
        subtitle="Absenzen erfassen und über die Entschuldigung entscheiden."
      />

      <StatsSummary stats={stats} />

      <details className="card p-6" open>
        <summary className="cursor-pointer text-sm font-semibold text-slate-700">
          Neue Absenz erfassen
        </summary>
        <Form method="post" className="mt-4 grid gap-4 sm:grid-cols-2">
          <Input name="studentName" label="Lernende" required />
          <label className="block">
            <span className="label">Modul</span>
            <select name="moduleId" required defaultValue="" className="input">
              <option value="" disabled>
                – Modul wählen –
              </option>
              {modules.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.id} – {m.title}
                </option>
              ))}
            </select>
          </label>
          <Input name="date" label="Datum" type="date" required />
          <Input name="lessons" label="Lektionen" placeholder="z.B. 3.–4. Lektion" />
          <Input
            name="lessonCount"
            label="Anzahl Lektionen"
            type="number"
            defaultValue="1"
          />
          <Input name="teacher" label="Lehrperson" />
          <div className="sm:col-span-2">
            {actionData?.error && (
              <p className="mb-2 text-sm text-red-600">{actionData.error}</p>
            )}
            <button className="btn btn-primary" disabled={busy}>
              {busy ? "Wird gespeichert…" : "Absenz erfassen"}
            </button>
          </div>
        </Form>
      </details>

      <FilterBar active={filter} />
      <AbsenceTable absences={absences} basePath="/lehrperson/absenz" />
    </div>
  );
}

function Input({
  name,
  label,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="input"
      />
    </label>
  );
}
