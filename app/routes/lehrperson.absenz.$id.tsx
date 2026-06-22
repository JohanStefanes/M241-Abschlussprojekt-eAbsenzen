import { Form, Link, redirect, useNavigation } from "react-router";

import type { Route } from "./+types/lehrperson.absenz.$id";
import { decideByTeacher, getAbsenceById } from "~/data/absences";
import { requireUser } from "~/session.server";
import { AbsenceDetail } from "~/components/AbsenceDetail";

export async function loader({ request, params }: Route.LoaderArgs) {
  await requireUser(request, "lehrperson");
  const absence = getAbsenceById(params.id);
  if (!absence) {
    throw new Response("Not Found", { status: 404 });
  }
  return { absence };
}

export async function action({ request, params }: Route.ActionArgs) {
  await requireUser(request, "lehrperson");
  const f = await request.formData();
  const decision = f.get("decision");
  if (decision === "entschuldigt" || decision === "unentschuldigt") {
    decideByTeacher(params.id, decision);
  }
  return redirect("/lehrperson");
}

export default function LehrpersonAbsenzDetail({
  loaderData,
}: Route.ComponentProps) {
  const { absence } = loaderData;
  const finalized =
    absence.status === "entschuldigt" || absence.status === "unentschuldigt";
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Link
        to="/lehrperson"
        className="text-sm font-medium text-blue-700 hover:text-blue-900"
      >
        Zurück zur Übersicht
      </Link>

      <AbsenceDetail absence={absence} />

      {!finalized ? (
        <Form method="post" className="card flex flex-wrap gap-3 p-6">
          <button
            name="decision"
            value="entschuldigt"
            className="btn btn-success"
            disabled={busy}
          >
            Als entschuldigt
          </button>
          <button
            name="decision"
            value="unentschuldigt"
            className="btn btn-danger"
            disabled={busy}
          >
            Als unentschuldigt
          </button>
        </Form>
      ) : (
        <p className="card p-4 text-sm text-slate-500">
          Diese Absenz ist bereits abgeschlossen.
        </p>
      )}
    </div>
  );
}
