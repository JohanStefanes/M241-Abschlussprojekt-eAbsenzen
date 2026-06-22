import { Form, Link, redirect, useNavigation } from "react-router";

import type { Route } from "./+types/lernende.absenz.$id";
import { addDocument, getAbsenceById, signByStudent } from "~/data/absences";
import { requireUser } from "~/session.server";
import { AbsenceDetail } from "~/components/AbsenceDetail";

export async function loader({ request, params }: Route.LoaderArgs) {
  const user = await requireUser(request, "lernende");
  const absence = getAbsenceById(params.id);
  if (!absence || absence.studentName !== user.studentName) {
    throw new Response("Not Found", { status: 404 });
  }
  return { absence };
}

export async function action({ request, params }: Route.ActionArgs) {
  const user = await requireUser(request, "lernende");
  const absence = getAbsenceById(params.id);
  if (!absence || absence.studentName !== user.studentName) {
    throw new Response("Not Found", { status: 404 });
  }

  const formData = await request.formData();
  const reason = String(formData.get("reason") ?? "").trim();
  const file = formData.get("beleg");
  const documentName =
    file instanceof File && file.name ? file.name : undefined;

  if (!reason) {
    return { error: "Bitte gib eine Begründung an." };
  }

  signByStudent(params.id, reason);
  if (documentName) {
    addDocument(params.id, documentName);
  }

  return redirect("/lernende");
}

export default function LernendeAbsenzDetail({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { absence } = loaderData;
  const canSign = absence.status === "offen";
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Link
        to="/lernende"
        className="text-sm font-medium text-blue-700 hover:text-blue-900"
      >
        Zurück zur Übersicht
      </Link>

      <AbsenceDetail absence={absence} />

      {canSign ? (
        <Form
          method="post"
          encType="multipart/form-data"
          className="card space-y-4 p-6"
        >
          <h2 className="text-base font-semibold text-slate-900">
            Absenz unterschreiben
          </h2>

          <div>
            <label className="label" htmlFor="reason">
              Begründung
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={3}
              required
              className="input"
              placeholder="z.B. Arzttermin, Krankheit"
            />
          </div>

          <div>
            <label className="label" htmlFor="beleg">
              Beleg (optional)
            </label>
            <input
              id="beleg"
              type="file"
              name="beleg"
              className="block w-full text-sm"
            />
            <span className="mt-1 block text-xs text-slate-400">
              Im Prototyp wird nur der Dateiname gespeichert.
            </span>
          </div>

          {actionData?.error && (
            <p className="text-sm text-red-600">{actionData.error}</p>
          )}

          <button type="submit" className="btn btn-primary" disabled={busy}>
            {busy ? "Wird gespeichert…" : "Digital unterschreiben"}
          </button>
        </Form>
      ) : (
        <p className="card p-4 text-sm text-slate-500">
          Diese Absenz wurde bereits bearbeitet.
        </p>
      )}
    </div>
  );
}
