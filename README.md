# eAbsenzen

Digitale Absenzenverwaltung - **Abschlussprojekt Modul 241**, BBW Winterthur
(Abteilung Informatik & Naturwissenschaft). Gruppe: Johan Stefanes & Julian Scherrer.

Ersetzt das Papier-Absenzenbüchlein durch einen durchgängigen, digitalen Prozess
für drei Rollen: **Lernende**, **Lehrbetrieb** und **Lehrperson**.

## Projektdokumentation

Die vollständige Projektarbeit (Idee, PESTEL, Stakeholder, Marktforschung,
Erfolgsmessung, Risiko, Geschäftsmodell, Prototyp-Tests, Präsentation) liegt im
Ordner [`dokumentation/`](./dokumentation/):

- **[Abschlussprojekt_Dokumentation.pdf](./dokumentation/Abschlussprojekt_Dokumentation.pdf)** - die abgabefertige Doku (Abschnitte 1-9)
- **[Praesentation_Briefing.pdf](./dokumentation/Praesentation_Briefing.pdf)** - Briefing für die Präsentation
- Aufgabenstellung (`04.0_Projekt-Idea.pdf`, `04_GA_…pdf`)

## Status-Workflow

`offen` → (Lernende begründet & unterschreibt) `lernende_bestaetigt`
→ (Lehrbetrieb bestätigt) `lehrbetrieb_bestaetigt`
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

> Hinweis: Prototyp. Passwörter liegen im Klartext vor - in einer echten
> Anwendung müssten sie gehasht werden (z. B. bcrypt/argon2).
