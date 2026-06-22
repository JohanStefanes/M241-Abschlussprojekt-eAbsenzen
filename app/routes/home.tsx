import { redirect } from "react-router";

import type { Route } from "./+types/home";
import { getCurrentUser } from "~/session.server";

// Einstiegspunkt: zum eigenen Dashboard weiterleiten oder zur Anmeldung.
export async function loader({ request }: Route.LoaderArgs) {
  const user = await getCurrentUser(request);
  return redirect(user ? `/${user.role}` : "/login");
}

export default function Home() {
  return null;
}
