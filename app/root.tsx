import {
  Form,
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import type { Role } from "~/data/absences";
import { getCurrentUser } from "~/session.server";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getCurrentUser(request);
  return {
    user: user ? { displayName: user.displayName, role: user.role } : null,
  };
}

const ROLE_LABELS: Record<Role, string> = {
  lernende: "Lernende",
  lehrperson: "Lehrperson",
  eltern: "Eltern",
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App({ loaderData }: Route.ComponentProps) {
  const user = loaderData.user;

  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-700 text-sm font-bold text-white">
              eA
            </span>
            <span>
              <span className="block text-base font-semibold leading-tight text-slate-900">
                eAbsenzen
              </span>
              <span className="block text-xs leading-tight text-slate-500">
                BBW Winterthur · Informatik &amp; Naturwissenschaft
              </span>
            </span>
          </NavLink>

          {user ? (
            <div className="flex items-center gap-4">
              <NavLink
                to="/module"
                className={({ isActive }) =>
                  `hidden text-sm font-medium transition sm:inline ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-500 hover:text-slate-900"
                  }`
                }
              >
                Module
              </NavLink>
              <div className="text-right">
                <div className="text-sm font-medium text-slate-900">
                  {user.displayName}
                </div>
                <div className="text-xs text-slate-500">
                  {ROLE_LABELS[user.role]}
                </div>
              </div>
              <Form method="post" action="/logout">
                <button className="btn btn-ghost">Abmelden</button>
              </Form>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-ghost">
              Anmelden
            </NavLink>
          )}
        </div>
      </header>

      <main className="container mx-auto w-full flex-1 px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-slate-400">
          eAbsenzen · Prototyp · BBW Winterthur – Informatik &amp;
          Naturwissenschaft · Modul 241
        </div>
      </footer>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Fehler";
  let details = "Ein unerwarteter Fehler ist aufgetreten.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Fehler";
    details =
      error.status === 404
        ? "Die angeforderte Seite konnte nicht gefunden werden."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <p className="text-4xl font-bold text-slate-900">{message}</p>
      <p className="mt-3 text-slate-600">{details}</p>
      <NavLink to="/" className="btn btn-primary mt-6">
        Zur Startseite
      </NavLink>
      {stack && (
        <pre className="mt-8 w-full overflow-x-auto rounded-lg bg-slate-100 p-4 text-left text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
