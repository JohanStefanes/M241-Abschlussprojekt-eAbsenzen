import type { Route } from "./+types/module";
import { MODULE_FIELDS, modules } from "~/data/modules";
import { requireUser } from "~/session.server";
import { PageHeader } from "~/components/PageHeader";

export function meta() {
  return [{ title: "Module - eAbsenzen" }];
}

export async function loader({ request }: Route.LoaderArgs) {
  await requireUser(request);
  return null;
}

export default function ModulePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Module"
        subtitle="ICT-Module aus dem Modulbaukasten · Informatik & Naturwissenschaft"
      />

      {MODULE_FIELDS.map((field) => {
        const list = modules.filter((m) => m.field === field);
        return (
          <section key={field}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              {field}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((m) => (
                <div key={m.id} className="card p-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">
                      {m.id}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{m.title}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <p className="text-xs text-slate-400">
        Quelle: Modulbaukasten ICT-Berufsbildung Schweiz
        (modulbaukasten.ch). Repräsentative Auswahl - an den Modulplan der BBW
        anpassbar.
      </p>
    </div>
  );
}
