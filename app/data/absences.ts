// In-Memory-Datenhaltung für den Prototyp (keine Datenbank).
// Hinweis: Bei SSR bleibt dieses Modul über Requests hinweg im Speicher,
// daher wirken die Mutatoren wie ein einfacher "Server-State".

export type Role = "lernende" | "lehrperson" | "eltern";

export type AbsenceStatus =
  | "offen" // von Lehrperson erfasst
  | "lernende_bestaetigt" // Lernende hat begründet/unterschrieben
  | "eltern_bestaetigt" // Eltern haben bestätigt
  | "entschuldigt" // final durch Lehrperson
  | "unentschuldigt"; // final durch Lehrperson

export type HistoryEntry = {
  at: string;
  by: Role;
  action: string;
};

export type Absence = {
  id: string;
  studentName: string;
  date: string; // "2026-06-22"
  lessons: string; // z.B. "3.–4. Lektion"
  lessonCount: number;
  moduleId: string; // ICT-Modul, z.B. "M319" (siehe modules.ts)
  teacher: string;
  reason?: string; // von Lernende
  documentName?: string; // simulierter Beleg (nur Dateiname)
  status: AbsenceStatus;
  history: HistoryEntry[];
};

export type Stats = {
  totalLektionen: number;
  anzahlOffen: number;
  anzahlUnentschuldigt: number;
  quoteUnentschuldigt: number; // 0..100
};

// "Eingeloggte" Lernende im Prototyp (kein echtes Auth).
export const CURRENT_STUDENT = "Lena Meier";

const STATUS_LABELS: Record<AbsenceStatus, string> = {
  offen: "Offen",
  lernende_bestaetigt: "Von Lernende bestätigt",
  eltern_bestaetigt: "Von Eltern bestätigt",
  entschuldigt: "Entschuldigt",
  unentschuldigt: "Unentschuldigt",
};

export function statusLabel(status: AbsenceStatus): string {
  return STATUS_LABELS[status];
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

const absences: Absence[] = [
  {
    id: "1",
    studentName: CURRENT_STUDENT,
    date: "2026-06-15",
    lessons: "1.–2. Lektion",
    lessonCount: 2,
    moduleId: "M319",
    teacher: "Herr Brunner",
    status: "offen",
    history: [{ at: "2026-06-15", by: "lehrperson", action: "Absenz erfasst" }],
  },
  {
    id: "2",
    studentName: CURRENT_STUDENT,
    date: "2026-06-10",
    lessons: "5.–6. Lektion",
    lessonCount: 2,
    moduleId: "M295",
    teacher: "Frau Keller",
    reason: "Arzttermin",
    status: "lernende_bestaetigt",
    history: [
      { at: "2026-06-10", by: "lehrperson", action: "Absenz erfasst" },
      {
        at: "2026-06-11",
        by: "lernende",
        action: "Begründung erfasst und unterschrieben",
      },
    ],
  },
  {
    id: "3",
    studentName: CURRENT_STUDENT,
    date: "2026-05-28",
    lessons: "3. Lektion",
    lessonCount: 1,
    moduleId: "M106",
    teacher: "Herr Brunner",
    reason: "Krank",
    documentName: "arztzeugnis.pdf",
    status: "entschuldigt",
    history: [
      { at: "2026-05-28", by: "lehrperson", action: "Absenz erfasst" },
      { at: "2026-05-29", by: "lernende", action: "Begründung + Beleg erfasst" },
      { at: "2026-05-30", by: "eltern", action: "Bestätigt" },
      { at: "2026-06-01", by: "lehrperson", action: "Als entschuldigt entschieden" },
    ],
  },
  {
    id: "4",
    studentName: CURRENT_STUDENT,
    date: "2026-05-20",
    lessons: "7.–8. Lektion",
    lessonCount: 2,
    moduleId: "M122",
    teacher: "Frau Vogt",
    status: "unentschuldigt",
    history: [
      { at: "2026-05-20", by: "lehrperson", action: "Absenz erfasst" },
      {
        at: "2026-05-27",
        by: "lehrperson",
        action: "Frist abgelaufen – unentschuldigt",
      },
    ],
  },
  {
    id: "5",
    studentName: "Tim Suter",
    date: "2026-06-16",
    lessons: "1. Lektion",
    lessonCount: 1,
    moduleId: "M320",
    teacher: "Herr Brunner",
    status: "offen",
    history: [{ at: "2026-06-16", by: "lehrperson", action: "Absenz erfasst" }],
  },
  {
    id: "6",
    studentName: "Tim Suter",
    date: "2026-06-12",
    lessons: "4. Lektion",
    lessonCount: 1,
    moduleId: "M294",
    teacher: "Frau Keller",
    reason: "Verschlafen",
    status: "eltern_bestaetigt",
    history: [
      { at: "2026-06-12", by: "lehrperson", action: "Absenz erfasst" },
      { at: "2026-06-12", by: "lernende", action: "Begründung erfasst" },
      { at: "2026-06-13", by: "eltern", action: "Bestätigt" },
    ],
  },
];

let idCounter = absences.length;

export function getAllAbsences(): Absence[] {
  return [...absences].sort((a, b) => b.date.localeCompare(a.date));
}

export function getAbsencesForStudent(name: string): Absence[] {
  return getAllAbsences().filter((a) => a.studentName === name);
}

export function getAbsenceById(id: string | undefined): Absence | undefined {
  if (!id) return undefined;
  return absences.find((a) => a.id === id);
}

export function createAbsence(input: {
  studentName: string;
  date: string;
  lessons: string;
  lessonCount: number;
  moduleId: string;
  teacher: string;
}): Absence {
  idCounter += 1;
  const absence: Absence = {
    id: String(idCounter),
    ...input,
    status: "offen",
    history: [{ at: today(), by: "lehrperson", action: "Absenz erfasst" }],
  };
  absences.push(absence);
  return absence;
}

export function signByStudent(id: string, reason: string): void {
  const a = getAbsenceById(id);
  if (!a) return;
  a.reason = reason;
  a.status = "lernende_bestaetigt";
  a.history.push({
    at: today(),
    by: "lernende",
    action: "Begründung erfasst und unterschrieben",
  });
}

export function addDocument(id: string, fileName: string): void {
  const a = getAbsenceById(id);
  if (!a) return;
  a.documentName = fileName;
  a.history.push({
    at: today(),
    by: "lernende",
    action: `Beleg hinzugefügt: ${fileName}`,
  });
}

export function confirmByParent(id: string): void {
  const a = getAbsenceById(id);
  if (!a) return;
  a.status = "eltern_bestaetigt";
  a.history.push({ at: today(), by: "eltern", action: "Bestätigt" });
}

export function decideByTeacher(
  id: string,
  decision: "entschuldigt" | "unentschuldigt",
): void {
  const a = getAbsenceById(id);
  if (!a) return;
  a.status = decision;
  a.history.push({
    at: today(),
    by: "lehrperson",
    action:
      decision === "entschuldigt"
        ? "Als entschuldigt entschieden"
        : "Als unentschuldigt entschieden",
  });
}

export function getStats(list: Absence[]): Stats {
  const totalLektionen = list.reduce((sum, a) => sum + a.lessonCount, 0);
  const anzahlOffen = list.filter((a) => a.status === "offen").length;
  const anzahlUnentschuldigt = list.filter(
    (a) => a.status === "unentschuldigt",
  ).length;
  const quoteUnentschuldigt =
    list.length === 0
      ? 0
      : Math.round((anzahlUnentschuldigt / list.length) * 100);
  return { totalLektionen, anzahlOffen, anzahlUnentschuldigt, quoteUnentschuldigt };
}

// Erlaubte Aktionen pro Rolle/Status – steuert, welche Buttons/Forms erscheinen.
export function nextActionsFor(role: Role, status: AbsenceStatus): string[] {
  if (role === "lernende") return status === "offen" ? ["unterschreiben"] : [];
  if (role === "eltern")
    return status === "lernende_bestaetigt" ? ["bestaetigen"] : [];
  if (role === "lehrperson")
    return status === "eltern_bestaetigt" ? ["entscheiden"] : [];
  return [];
}

// Fristenlogik: Absenzen müssen innert DEADLINE_DAYS bestätigt werden,
// sonst droht "unentschuldigt". Abgeschlossene Absenzen haben keine Frist.
const DEADLINE_DAYS = 14;

export function deadlineFor(a: Absence): string | undefined {
  if (a.status === "entschuldigt" || a.status === "unentschuldigt") return undefined;
  const d = new Date(`${a.date}T00:00:00`);
  d.setDate(d.getDate() + DEADLINE_DAYS);
  return d.toISOString().slice(0, 10);
}

// Tage bis zum Datum (negativ = in der Vergangenheit / überfällig).
export function daysUntil(dateStr: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(`${dateStr}T00:00:00`);
  return Math.round((target.getTime() - now.getTime()) / 86_400_000);
}
