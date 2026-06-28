import { Form, redirect, useNavigation } from "react-router";

import type { Route } from "./+types/login";
import { verifyUser } from "~/data/users";
import { createUserSession, getCurrentUser } from "~/session.server";

export function meta() {
  return [{ title: "Anmelden - eAbsenzen" }];
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getCurrentUser(request);
  if (user) throw redirect(`/${user.role}`);
  return null;
}

export async function action({ request }: Route.ActionArgs) {
  const f = await request.formData();
  const username = String(f.get("username") ?? "").trim();
  const password = String(f.get("password") ?? "");

  const user = verifyUser(username, password);
  if (!user) {
    return { error: "Benutzername oder Passwort ist falsch." };
  }

  return createUserSession(user.username, `/${user.role}`);
}

export default function Login({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  return (
    <div className="mx-auto mt-8 max-w-sm">
      <div className="card p-8">
        <h1 className="text-lg font-semibold text-slate-900">Anmelden</h1>
        <p className="mt-1 text-sm text-slate-500">
          eAbsenzen · BBW Winterthur
        </p>

        <Form method="post" className="mt-6 space-y-4">
          <div>
            <label className="label" htmlFor="username">
              Benutzername
            </label>
            <input
              id="username"
              name="username"
              autoComplete="username"
              required
              className="input"
            />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input"
            />
          </div>

          {actionData?.error && (
            <p className="text-sm text-red-600">{actionData.error}</p>
          )}

          <button className="btn btn-primary w-full" disabled={busy}>
            {busy ? "Anmelden…" : "Anmelden"}
          </button>
        </Form>

        <p className="mt-6 text-xs text-slate-400">
          Testzugänge siehe Datei <code>ZUGANGSDATEN.txt</code>.
        </p>
      </div>
    </div>
  );
}
