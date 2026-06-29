import type { Role } from "./absences";

// Demo-User. Passwörter im Klartext - ok fürs Proto, echt müsste man sie hashen.
export type User = {
  username: string;
  password: string;
  role: Role;
  displayName: string;
  studentName?: string; // für Lernende/Lehrbetrieb: zugeordnete:r Lernende:r
};

export const users: User[] = [
  {
    username: "lena.meier",
    password: "lena2026",
    role: "lernende",
    displayName: "Lena Meier",
    studentName: "Lena Meier",
  },
  {
    username: "tim.suter",
    password: "tim2026",
    role: "lernende",
    displayName: "Tim Suter",
    studentName: "Tim Suter",
  },
  {
    username: "webhouse",
    password: "betrieb2026",
    role: "lehrbetrieb",
    displayName: "Webhouse AG",
    studentName: "Lena Meier",
  },
  {
    username: "datatec",
    password: "betrieb2026",
    role: "lehrbetrieb",
    displayName: "Datatec GmbH",
    studentName: "Tim Suter",
  },
  {
    username: "b.brunner",
    password: "lehrer2026",
    role: "lehrperson",
    displayName: "Beat Brunner",
  },
];

export function getUserByUsername(username: string): User | undefined {
  return users.find((u) => u.username === username);
}

export function verifyUser(username: string, password: string): User | undefined {
  const user = getUserByUsername(username);
  if (!user || user.password !== password) return undefined;
  return user;
}
