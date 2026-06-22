# eAbsenzen

Digitale Absenzenverwaltung – Prototyp für **Modul 241**, BBW Winterthur
(Abteilung Informatik & Naturwissenschaft).

Ersetzt das Papier-Absenzenbüchlein durch einen durchgängigen, digitalen Prozess
für drei Rollen: **Lernende**, **Eltern** und **Lehrperson**.

## Status-Workflow

`offen` → (Lernende begründet & unterschreibt) `lernende_bestaetigt`
→ (Eltern bestätigen) `eltern_bestaetigt`
→ (Lehrperson entscheidet) `entschuldigt` / `unentschuldigt`

## Funktionen

- Anmeldung mit Rollen (Cookie-Session) und Rollen-/Eigentumsschutz
- Absenzen-Liste mit Status, Filter und Statistik
- Digitales Unterschreiben inkl. (simuliertem) Beleg-Upload
- Fristen-Anzeige und nachvollziehbarer Verlauf je Absenz
- Absenzen sind an echte ICT-Module aus dem Modulbaukasten gebunden

## Tech-Stack

React Router 7 (SSR) · TypeScript · TailwindCSS v4 · In-Memory-Daten (keine DB).

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # react-router typegen + tsc
npm run build      # Produktions-Build
```

## Testzugänge

Siehe [`ZUGANGSDATEN.txt`](./ZUGANGSDATEN.txt).

> Hinweis: Prototyp. Passwörter liegen im Klartext vor – in einer echten
> Anwendung müssten sie gehasht werden (z. B. bcrypt/argon2).
