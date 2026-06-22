import { Form, Link, redirect, useNavigation } from "react-router";

import type { Route } from "./+types/eltern.absenz.$id";
import { confirmByParent, getAbsenceById } from "~/data/absences";
import { requireUser } from "~/session.server";
import { AbsenceDetail } from "~/components/AbsenceDetail";

export async function loader({ request, params }: Route.LoaderArgs) {
  const user = await requireUser(request, "eltern");
  const absence = getAbsenceById(params.id);
  if (!absence || absence.studentName !== user.studentName) {
    throw new Response("Not Found", { status: 404 });
  }
  return { absence };
}

export async function action({ request, params }: Route.ActionArgs) {
  const user = await requireUser(request, "eltern");
  const absence = getAbsenceById(params.id);
  if (!absence || absence.studentName !== user.studentName) {
    throw new Response("Not Found", { status: 404 });
  }
  confirmByParent(params.id);
  return redirect("/eltern");
}

export default function ElternAbsenzDetail({
  loaderData,
}: Route.ComponentProps) {
  const { absence } = loaderData;
  const canConfirm = absence.status === "lernende_bestaetigt";
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Link
        to="/eltern"
        className="text-sm font-medium text-blue-700 hover:text-blue-900"
      >
        Zurück zur Übersicht
      </Link>

      <AbsenceDetail absence={absence} />

      {canConfirm ? (
        <Form method="post" className="card p-6">
          <p className="mb-3 text-sm text-slate-600">
            Mit der Bestätigung anerkennen Sie die Absenz Ihres Kindes.
          </p>
          <button className="btn btn-primary" disabled={busy}>
            {busy ? "Wird gespeichert…" : "Bestätigen"}
          </button>
        </Form>
      ) : (
        <p className="card p-4 text-sm text-slate-500">
          {absence.status === "offen"
            ? "Die Lernende muss die Absenz zuerst unterschreiben."
            : "Keine Aktion nötig."}
        </p>
      )}
    </div>
  );
}
