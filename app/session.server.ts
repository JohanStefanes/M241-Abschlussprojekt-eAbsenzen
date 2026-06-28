import { createCookieSessionStorage, redirect } from "react-router";

import type { Role } from "~/data/absences";
import { getUserByUsername, type User } from "~/data/users";

type SessionData = { username: string };

const storage = createCookieSessionStorage<SessionData>({
  cookie: {
    name: "ea_session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["dev-secret-eabsenzen-prototyp"],
    maxAge: 60 * 60 * 8, // 8 Stunden
  },
});

function getSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getCurrentUser(
  request: Request,
): Promise<User | undefined> {
  const session = await getSession(request);
  const username = session.get("username");
  if (!username) return undefined;
  return getUserByUsername(username);
}

// verlangt Login (optional eine Rolle), sonst Redirect
export async function requireUser(
  request: Request,
  role?: Role,
): Promise<User> {
  const user = await getCurrentUser(request);
  if (!user) throw redirect("/login");
  if (role && user.role !== role) throw redirect(`/${user.role}`);
  return user;
}

export async function createUserSession(username: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("username", username);
  return redirect(redirectTo, {
    headers: { "Set-Cookie": await storage.commitSession(session) },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect("/login", {
    headers: { "Set-Cookie": await storage.destroySession(session) },
  });
}
