# Modul 241 - Abschlussprojekt: "eAbsenzen"

**Datum:** Juni 2026 · **Schule:** BBW Winterthur, Abteilung Informatik

**Gruppe (2 Personen):**

| Name | Rollen im Projekt |
|---|---|
| **Johan Stefanes** | Projektleitung / Story-Teller (Idee, Moderation) · Entwicklung / Demo-Pilot (Prototyp, Architektur) |
| **Julian Scherrer** | Markt & Strategie (PESTEL, Marktforschung, Geschäftsmodell) · Qualität & Risiko (Tests, Risikoanalyse, Q&A) |

> Status: Vollständig ausgearbeitet - Abschnitte 1-9.

---

## Inhaltsverzeichnis
1. Idee entwickeln
2. Innovation bewerten (PESTEL-Analyse)
3. Stakeholder-Analyse
4. Marktforschung
5. Erfolgsmessung
6. Risiko
7. St. Galler Business Model Navigator
8. Prototype mit Framework (React Router)
9. Präsentationstechnik

---

## 1. Idee entwickeln

### 1.1 Ausgangslage / Problem

An der BBW Winterthur (und an Berufsfachschulen allgemein) werden Absenzen heute **doppelspurig**
verwaltet: Lehrpersonen erfassen Absenzen in einem **Online-Tool**, die Lernenden müssen sie aber
zusätzlich **handschriftlich im Papier-Absenzenbüchlein** unterschreiben lassen. Typische Probleme:

- Das Absenzenbüchlein geht verloren, wird vergessen oder zu spät vorgelegt → Absenzen werden
  **unentschuldigt**, obwohl ein gültiger Grund vorlag.
- **Keine Transparenz** für Lernende: Sie sehen ihren aktuellen Absenzenstand und offene Fristen nicht.
- **Der Lehrbetrieb** muss über Absenzen Bescheid wissen, ist aber im Papierprozess kaum eingebunden.
- **Medienbruch**: Lehrpersonen-Tool (digital) und Lernenden-Unterschrift (Papier) sind nicht verbunden.
- **Aufwand** für Klassenlehrpersonen/Sekretariat beim Nachverfolgen und Auswerten.
- Schlechte **Nachvollziehbarkeit**: Wer hat wann was bestätigt? Im Büchlein nicht dokumentiert.

### 1.2 Idee: "eAbsenzen" - die digitale Absenzenverwaltung

**eAbsenzen** ist eine Web-App, die das Papier-Absenzenbüchlein ersetzt und alle Beteiligten in einen
durchgängigen digitalen Prozess einbindet:

- **Lernende** sehen alle ihre Absenzen mit Status, geben eine **Begründung** ein, hängen optional
  einen **Beleg** (z.B. Arztzeugnis) an und **unterschreiben digital**.
- **Der Lehrbetrieb** **bestätigt** die Absenz online.
- **Lehrpersonen/Sekretariat** **erfassen** Absenzen und entscheiden transparent über
  **entschuldigt / unentschuldigt**.
- Jede Absenz hat einen nachvollziehbaren **Verlauf** (wer hat wann was getan) und eine **Statistik**
  (Total Fehllektionen, offene Fälle, Anteil unentschuldigt).

### 1.3 Zielgruppe (Personas)

| Persona | Beschreibung | Bedürfnis |
|---|---|---|
| **Lena, 17, Lernende Informatik** | Vergisst oft, das Büchlein rechtzeitig unterschreiben zu lassen | Übersicht über offene Absenzen & Fristen, schnell digital erledigen |
| **Beat Brunner, 45, Klassenlehrer** | Verwaltet Absenzen der ganzen Klasse, prüft Fristen | Weniger Verwaltungsaufwand, klare Entscheidungsbasis |
| **Lehrbetrieb** | Muss Absenzen kennen und bestätigen, ist im Papierprozess kaum eingebunden | Einfache, ortsunabhängige Online-Bestätigung |
| **Sekretariat / Schulleitung** | Braucht Auswertungen und Nachvollziehbarkeit | Lückenlose, revisionssichere Dokumentation |

### 1.4 Value Proposition (Kurzform)

> "eAbsenzen ersetzt das Papier-Absenzenbüchlein: Lernende begründen und unterschreiben Absenzen
> digital, der Lehrbetrieb bestätigt online und Lehrpersonen entscheiden transparent - schneller,
> nachvollziehbar und ohne verlorene Zettel."

### 1.5 Kreativitätsmethode

Ausgehend von einem konkreten Alltagsproblem ("Lena hat das Absenzenbüchlein vergessen und ihre
entschuldbare Absenz wird unentschuldigt") wurden mit **Brainwriting (6-3-5)** und einer
**Problem-Lösungs-Matrix** mehrere Ansätze gesammelt (striktere Fristen, Erinnerungs-SMS,
Lehrbetrieb-E-Mail, **durchgängige Web-App**) und nach Umsetzbarkeit/Kosten/Nutzen bewertet. Die App-Lösung
wurde gewählt, weil sie den **Medienbruch** behebt, alle Stakeholder (Lernende, Lehrbetrieb, Lehrpersonen,
Sekretariat) einbindet und sich ideal als **React-Framework-Prototyp** (Aufgabe 8) umsetzen lässt.

---

## 2. Innovation bewerten - PESTEL-Analyse

Wir bewerten **eAbsenzen** mit der **PESTEL-Analyse**, um externe Chancen und Risiken zu identifizieren,
die nicht direkt von uns kontrolliert werden können.

| Faktor | Beobachtung | Chance (C) / Risiko (R) |
|---|---|---|
| **P - Political** | Bildungsdirektionen fördern Digitalisierung an Berufsfachschulen; Bildungsverordnungen verlangen eine lückenlose Absenzenkontrolle | C: Rückenwind für digitale Schulprozesse |
| **E - Economic** | Manuelle Absenzenverwaltung bindet Lehrpersonen-/Sekretariatszeit; Schulen stehen unter Verwaltungs-Kostendruck | C: Effizienzgewinn senkt Verwaltungskosten |
| **S - Social** | Lernende (Digital Natives) erwarten digitale Prozesse; gleichzeitig Sensibilität bzgl. "Überwachung" | C: Hohe Akzeptanz; R: Sorge um Daten/Kontrolle |
| **T - Technological** | Praktisch alle besitzen ein Smartphone; bestehende Schulverwaltungs-/LMS-Systeme bieten Schnittstellen | C: Technische Basis (React/React Router, APIs) verfügbar; Integration möglich |
| **E - Environmental** | Das Papier-Absenzenbüchlein verursacht Papier-/Druckaufwand | C: Papierlose Verwaltung als kleiner Nachhaltigkeitsbeitrag |
| **L - Legal** | Datenschutz (DSG/DSGVO), v. a. bei Weitergabe an den Lehrbetrieb; Arztzeugnisse sind **besondere Personendaten**; Aufbewahrungs-/Einwilligungspflichten | R: Erhöhter Aufwand für Datenschutz-Compliance und sichere Beleg-Ablage |

### Strategie-Ableitung

1. **Nutzen (Political/Technological):** Digitalisierungsförderung und vorhandene Schulsysteme als
   Argument für ein Pilotprojekt an der BBW nutzen; Integration statt Insellösung anstreben.
2. **Anpassen (Social/Economic):** App auf **Einfachheit & Geschwindigkeit** (wenige Klicks bis zur
   Unterschrift) und klare Fristen-Erinnerungen ausrichten, um Akzeptanz zu sichern.
3. **Schützen (Legal):** Datenschutz "by design" - minimale Datenerhebung, sichere Ablage von Belegen
   (besondere Personendaten), Einwilligung der Lernenden zur Weitergabe an den Lehrbetrieb, Lösch-/Aufbewahrungskonzept.
4. **Kommunizieren (Social):** Transparenz betonen - Lernende und Lehrbetrieb sehen jederzeit den
   nachvollziehbaren Verlauf; es geht um Service, nicht um Überwachung.

---

## 3. Stakeholder-Analyse

Wir analysieren die Stakeholder von **eAbsenzen** mit einer **Stakeholder-Map** und ordnen
sie in einem **Power-Interest-Grid** (Einfluss × Interesse) ein. So erkennen wir, wen wir
aktiv einbinden (hohes Interesse + hoher Einfluss) und wen wir nur informieren müssen.

### 3.1 Erhebungsmethode

Zur Erhebung der Bedürfnisse sind **Fokusgruppen** mit den drei Kernrollen geplant
(je eine Gruppe Lernende, Lehrpersonen/Klassenlehrpersonen und Lehrbetriebe), ergänzt durch ein
Kurzinterview mit dem Sekretariat. Leitfragen: Wo entstehen heute Reibung und Aufwand? Welche
Informationen fehlen? Welche Bedenken bestehen (v. a. Datenschutz)?

### 3.2 Stakeholder-Übersicht

| Stakeholder | Interesse | Einfluss | Erwartung / Bedürfnis | Einbindungsstrategie |
|---|---|---|---|---|
| **Lernende** (z. B. Lena) | Hoch | Mittel | Übersicht, Fristen, schnelle digitale Erledigung | **Aktiv einbinden** - Kernnutzer, Usability-Tests, Pilot |
| **Lehrbetrieb** | Mittel | Mittel | Einfache, ortsunabhängige Online-Bestätigung | **Aktiv einbinden** - einfacher Bestätigungs-Flow, klare Kommunikation |
| **Lehrpersonen / Klassenlehrperson** | Hoch | Hoch | Weniger Aufwand, klare Entscheidungsbasis | **Eng managen** - Schlüsselrolle, früh in Konzept & Pilot |
| **Sekretariat / Schulleitung** | Hoch | Hoch | Auswertungen, lückenlose Nachvollziehbarkeit | **Eng managen** - Auftraggeber/Budget, Statistik & Revisionssicherheit |
| **IT / Datenschutzbeauftragte/r** | Mittel | Hoch | DSG-Konformität, sichere Beleg-Ablage, Integration | **Zufrieden halten** - früh Datenschutzkonzept abstimmen |
| **Bildungsdirektion** | Niedrig | Hoch | Erfüllung der Absenzenkontroll-Vorgaben | **Informieren** - Rahmenbedingungen, Pilot-Reporting |

### 3.3 Erkenntnisse

1. **Schlüssel-Stakeholder** sind Lehrpersonen und Sekretariat/Schulleitung (hoher Einfluss
   *und* hohes Interesse) - sie müssen das Projekt tragen und werden eng eingebunden.
2. **Lernende und Lehrbetrieb** sind die Endnutzer des neuen, im Papierprozess fehlenden
   Bestätigungswegs - ihre Akzeptanz entscheidet über den Erfolg.
3. Die drei Kernrollen sind im Prototyp bereits direkt als Sichten abgebildet
   (`lernende`, `lehrperson`, `lehrbetrieb`) - die Stakeholder-Struktur spiegelt sich 1:1 im UI.
4. **Datenschutz (IT)** ist trotz mittlerem Interesse wegen des hohen Einflusses früh
   einzubinden (Arztzeugnisse als besondere Personendaten, vgl. PESTEL „Legal").

---

## 4. Marktforschung

Die Marktforschung kombiniert **Primärforschung** (eigene Erhebung) und **Sekundärforschung**
(bestehende Tools/Quellen), um Bedarf und Marktlücke zu belegen.

### 4.1 Primärforschung - Umfrage

Geplant ist eine **Online-Umfrage** an der BBW Winterthur unter Lernenden und Lehrpersonen.

- **Leitfrage:** „Wie oft gehen entschuldbare Absenzen verloren, weil das Absenzenbüchlein
  vergessen, verloren oder zu spät vorgelegt wird?"
- **Zielgruppe / Stichprobe:** ca. 100 Lernende (mehrere Klassen/Lehrjahre) + 15 Lehrpersonen.
- **Methode:** standardisierter Fragebogen (5-7 geschlossene Fragen, Likert-Skala) plus 2 offene
  Fragen zu Aufwand und Verbesserungswünschen.
- **Erwartete Hypothese:** Ein relevanter Anteil der Lernenden (Annahme > 30 %) hatte schon
  mindestens eine fälschlich unentschuldigte Absenz wegen des Papierprozesses.

### 4.2 Sekundärforschung - bestehende Tools

| Tool | Absenzen-Erfassung | Lernenden-Einbindung | Lehrbetrieb-Bestätigung | Medienbruch |
|---|---|---|---|---|
| **LehrerOffice** | Ja (Lehrpersonen) | Gering | Nein/indirekt | Ja - Unterschrift weiter auf Papier |
| **Schulnetz / Intranet** | Ja (Verwaltung) | Anzeige, kaum Aktion | Nein | Ja |
| **Papier-Absenzenbüchlein** | Manuell | Unterschrift | Unterschrift | Grundproblem |
| **eAbsenzen (unser Ansatz)** | Ja | **Begründen + digital unterschreiben** | **Online-Bestätigung** | **Nein - durchgängig digital** |

### 4.3 Erkenntnisse

1. Bestehende Schul-Tools decken die **Erfassung** durch Lehrpersonen gut ab, binden aber
   **Lernende und Lehrbetrieb nicht durchgängig** in einen digitalen Bestätigungsprozess ein.
2. Genau hier liegt die **Marktlücke**: kein verbreitetes Tool verbindet digitale Erfassung,
   Lernenden-Unterschrift und Lehrbetrieb-Bestätigung medienbruchfrei - das ist die Kernidee von
   eAbsenzen.
3. eAbsenzen positioniert sich daher **nicht als Konkurrenz**, sondern als ergänzende Lösung,
   die idealerweise an bestehende Systeme (z. B. LehrerOffice) andocken kann (vgl. Abschnitt 7).

---

## 5. Erfolgsmessung

Den Projekterfolg messen wir an konkreten **Kennzahlen (KPIs)**. Für jede Kennzahl definieren wir
eine Baseline aus dem heutigen Papierprozess, einen Zielwert und die Erhebungsart.

| KPI | Messgröße | Baseline (Papier) | Zielwert | Erhebung |
|---|---|---|---|---|
| **Fälschlich unentschuldigte Absenzen** | Anteil unentschuldigter Absenzen mit eigentlich gültigem Grund | Annahme ~15 % | **−50 %** im ersten Jahr | App-Statistik (`getStats`) vs. Vorjahr |
| **Verwaltungszeit** | Minuten pro Klasse/Monat für Absenzen-Nachverfolgung | ~120 min | **−40 %** | Zeitaufschrieb Lehrpersonen/Sekretariat |
| **Bearbeitungsdauer** | Tage von Erfassung bis Bestätigung | ~7-10 Tage | **< 3 Tage** | Zeitstempel im `history[]`-Verlauf |
| **Adoptionsrate** | Anteil aktiv genutzter Pilot-Accounts | 0 % | **> 80 %** im Pilot | Login-/Nutzungsdaten |
| **Fristeinhaltung** | Anteil rechtzeitig bestätigter Absenzen (vor Frist) | unbekannt | **> 90 %** | `deadlineFor` / Fristen-Auswertung |
| **Break-Even** | Amortisation der Einführungskosten | - | **< 18 Monate** | Kostenrechnung Lizenz vs. eingesparte Zeit |

### Erkenntnisse

1. Die wichtigsten Erfolgsgrößen sind **weniger fälschlich unentschuldigte Absenzen** und
   **eingesparte Verwaltungszeit** - beide adressieren direkt das Kernproblem aus Abschnitt 1.
2. Der Prototyp liefert die Datenbasis bereits mit: `getStats()` (Total Fehllektionen, offene
   Fälle, Quote unentschuldigt) und der `history[]`-Verlauf erlauben die Messung ohne Zusatzaufwand.
3. Der Break-Even wird über das Lizenzmodell (Abschnitt 7) gegen die eingesparte Personalzeit
   gerechnet - das macht den wirtschaftlichen Nutzen für die Schulleitung greifbar.

---

## 6. Risiko

Zur Risikobeurteilung kombinieren wir eine **SWOT-Analyse** (interne Stärken/Schwächen, externe
Chancen/Risiken) mit einer **Risikotabelle**. Schwerpunkt sind **Datenschutz** und **Akzeptanz**.

### 6.1 SWOT-Analyse

| Intern | Extern |
|---|---|
| **Stärken (S)** | **Chancen (O)** |
| Behebt Medienbruch, bindet alle Stakeholder ein; lückenloser Verlauf; einfache Bedienung | Digitalisierungsförderung; Andocken an bestehende Systeme; Papierersparnis |
| **Schwächen (W)** | **Risiken (T)** |
| Prototyp ohne DB/echtes Auth; Pflege-/Betriebsaufwand; Abhängigkeit von Schul-IT | Datenschutzauflagen; Akzeptanz/„Überwachungs"-Sorge; Konkurrenz durch Modul in Bestandssystem |

### 6.2 Risikotabelle

| Risiko | Wahrscheinlichkeit | Auswirkung | Maßnahme |
|---|---|---|---|
| **Datenschutzverletzung** (Arztzeugnisse = besondere Personendaten) | Mittel | Hoch | Datenschutz „by design": minimale Daten, verschlüsselte Beleg-Ablage, Zugriffskontrolle, Lösch-/Aufbewahrungskonzept |
| **Geringe Akzeptanz / „Überwachungs"-Sorge** | Mittel | Hoch | Transparenz betonen (Service statt Kontrolle), Lernende/Lehrbetrieb sehen Verlauf; Pilot mit Feedback |
| **Integrationsaufwand** in Schulsysteme | Mittel | Mittel | Schnittstellen/Standards früh klären; modularer Add-on-Ansatz (Abschnitt 7) |
| **Datenverlust** (im Prototyp In-Memory) | Hoch (nur Prototyp) | Mittel | Für Produktivbetrieb persistente DB + Backups; im Prototyp bewusst akzeptiert |
| **Nicht-Nutzung / Rückfall auf Papier** | Niedrig | Hoch | Verbindliche Einführung, Schulung, Fristen-Erinnerungen in der App |

### Erkenntnisse

Die kritischsten Risiken sind **Datenschutz** (hohe Auswirkung, deckt sich mit PESTEL „Legal")
und **Akzeptanz**. Beide werden weniger technisch als organisatorisch entschärft: ein sauberes
Datenschutzkonzept und eine transparente, nutzerfreundliche Einführung sind die wichtigsten
Gegenmaßnahmen.

---

## 7. St. Galler Business Model Navigator

Wir beschreiben das Geschäftsmodell von eAbsenzen mit dem **St. Galler Business Model Navigator**
anhand der vier zentralen Dimensionen **Wer? Was? Wie? Wert?** und nutzen die Muster
**„Subscription"** und **„Add-on"**.

| Dimension | Ausprägung bei eAbsenzen |
|---|---|
| **Wer? (Zielkunde)** | **Kunde:** Berufsfach-/Schulen, Bildungsdirektionen (zahlen die Lizenz). **Nutzer:** Lernende, Lehrbetrieb, Lehrpersonen, Sekretariat. |
| **Was? (Nutzenversprechen)** | Ersatz des Papier-Absenzenbüchleins durch einen durchgängigen, nachvollziehbaren digitalen Prozess (Value Proposition aus 1.4): schneller, transparent, ohne verlorene Zettel. |
| **Wie? (Wertschöpfung)** | SaaS-Web-App (React Router/SSR), gehostet; Integration in bestehende Schulsysteme via Schnittstellen; sichere Datenhaltung; Support & Wartung. |
| **Wert? (Ertragsmodell)** | **Subscription:** jährliche Lizenz pro Schule bzw. gestaffelt pro Klasse/Lernende. Alternativ **Add-on**: kostenpflichtiges Modul zu bestehenden Schulverwaltungs-Tools (z. B. LehrerOffice). |

### Erkenntnisse

1. Das **Subscription-Muster** passt zum planbaren Schulbudget und sichert wiederkehrende
   Einnahmen; der Nutzen wird über die eingesparte Verwaltungszeit (PESTEL „Economic",
   Abschnitt 5) begründet.
2. Der **Add-on-Ansatz** senkt die Einstiegshürde, weil eAbsenzen an vorhandene Systeme andockt
   statt sie zu ersetzen - das adressiert direkt die Konkurrenz- und Integrationsrisiken aus
   Abschnitt 6 und die Marktlücke aus Abschnitt 4.

---

## 8. Prototype mit Framework (React Router)

### 8.1 Technik & Architektur

Der lauffähige Prototyp liegt im Ordner **`absenzen-app/`** (Geschwisterordner zu diesem
`Abschlussprojekt/`-Ordner). Technik: **React Router 7** (Server-Side Rendering) mit **TailwindCSS v4**,
In-Memory-Daten (keine Datenbank im Prototyp). Drei Rollen-Bereiche (`lernende`, `lehrperson`,
`lehrbetrieb`) teilen sich wiederverwendbare UI-Komponenten; ein einfaches Login mit Session steuert den
Zugriff. Belege werden im Prototyp **simuliert** (nur der Dateiname wird gespeichert), die Daten
liegen im Arbeitsspeicher und werden bei Server-Neustart zurückgesetzt - beides bewusst für den
Prototyp.

### 8.2 Abgebildeter Workflow (drei Rollen)

1. **Lehrperson** erfasst eine Absenz → Status `offen`.
2. **Lernende** gibt Begründung ein, hängt optional einen Beleg an, unterschreibt digital →
   `lernende_bestaetigt`.
3. **Der Lehrbetrieb** bestätigt → `lehrbetrieb_bestaetigt`.
4. **Lehrperson** entscheidet final → `entschuldigt` oder `unentschuldigt`.

**Funktionen:** Login je Rolle, Absenzen-Liste mit Status, digitales Unterschreiben
(Formular/Mutation), Beleg "hochladen" (simuliert), Statistik-Übersicht je Rolle, Fristen­anzeige
und nachvollziehbarer Verlauf pro Absenz.

**Starten:** `cd absenzen-app && npm install && npm run dev` → http://localhost:5173
(Testzugänge siehe `absenzen-app/ZUGANGSDATEN.txt`).

### 8.3 Validiertes UI / User Experience (UX)

Das UI ist bewusst auf **wenige Klicks bis zur Unterschrift** ausgelegt (Strategie-Ableitung aus
Abschnitt 2). UX-Entscheidungen:

- **Rollenspezifische Sicht:** Jede Rolle sieht nur ihre relevanten Absenzen und Aktionen -
  Lernende/Lehrbetrieb nur die zugeordnete Person, die Lehrperson alle. So bleibt die Oberfläche schlank.
- **Status auf einen Blick:** farbige **Status-Badges** und eine **Statistik-Übersicht** (Total
  Fehllektionen, offene Fälle, Quote unentschuldigt) machen den Stand sofort erfassbar.
- **Geführte Aktionen:** Es erscheinen nur die im aktuellen Status erlaubten Buttons/Formulare
  (z. B. „Unterschreiben" nur bei `offen`), was Fehlbedienung verhindert.
- **Transparenz:** der Verlauf („wer hat wann was getan") und die Fristenanzeige bauen Vertrauen auf
  (Service statt Überwachung - vgl. Abschnitt 6).

### 8.4 Screenshots

**Login** - Anmeldung je Rolle (Testzugänge siehe `ZUGANGSDATEN.txt`):

![Login](../absenzen-app/screenshots/login.png)

**Lernende** (angemeldet als Lena Meier) - sieht nur die eigenen Absenzen mit Status, Frist und Statistik:

![Lernende](../absenzen-app/screenshots/lernende.png)

**Lehrperson** (Beat Brunner) - Gesamtübersicht aller Lernenden, Statistik-Kacheln und Formular „Neue Absenz erfassen":

![Lehrperson](../absenzen-app/screenshots/lehrperson.png)

**Lehrbetrieb** (Webhouse AG) - Bestätigungsansicht der Absenzen der/des Lernenden:

![Lehrbetrieb](../absenzen-app/screenshots/lehrbetrieb.png)

**Detail / Verlauf** - Statusverlauf einer Absenz (Erfasst → Unterschrieben → Bestätigt → Entschuldigt) inkl. Begründung, Beleg und Audit-Trail:

![Detail](../absenzen-app/screenshots/detail.png)

### 8.5 Tests zur technischen Validität

Zur Überprüfung der technischen Validität wurden statische Prüfungen, ein Produktions-Build und
funktionale Smoke-Tests gegen den laufenden Server (`npm run dev`) durchgeführt.

| # | Testfall | Erwartung | Ergebnis |
|---|---|---|---|
| T1 | `npm run typecheck` (TypeScript) | keine Typfehler | ✅ Exit 0, keine Fehler |
| T2 | `npm run build` (Produktions-Build) | Build erfolgreich | ✅ 26 Module, Build in ~0.1 s |
| T3 | Login mit gültigen Daten (Lehrperson) | Weiterleitung auf Rollen-Seite | ✅ HTTP 302 → `/lehrperson` |
| T4 | Login mit falschem Passwort | Fehlermeldung, kein Zugriff | ✅ „… ist falsch" gerendert |
| T5 | Rollen-Seite ohne Login aufrufen | Schutz greift, Umleitung zu `/login` | ✅ HTTP 302 → `/login` |
| T6 | Lehrperson öffnet Liste | sieht alle Lernenden (z. B. „Tim Suter") | ✅ vorhanden |
| T7 | Lernende öffnet Liste | sieht nur eigene Absenzen | ✅ „Tim Suter" kommt 0× vor |
| T8 | Detailseite existierende Absenz (`/…/absenz/1`) | Seite lädt | ✅ HTTP 200 |
| T9 | Detailseite unbekannte ID (`/…/absenz/999`) | 404 über ErrorBoundary | ✅ HTTP 404 |
| T10 | Statusübergänge erfassen → unterschreiben → bestätigen → entscheiden | jeder Schritt mutiert Status + Verlauf | ✅ Workflow durchgängig lauffähig |

### 8.6 Schlussfolgerung

Die Tests bestätigen die **technische Validität** des Prototyps: Der Typcheck ist fehlerfrei, der
Produktions-Build gelingt, der Zugriffsschutz und das rollenbasierte Daten-Scoping funktionieren,
und der vollständige Absenzen-Workflow ist über alle vier Statusübergänge lauffähig. Damit ist der
**Lösungsansatz validiert**: Der durchgängig digitale Prozess (Erfassen → Unterschreiben →
Bestätigen → Entscheiden) lässt sich technisch umsetzen. Für einen Produktivbetrieb sind die bewusst
ausgelassenen Teile zu ergänzen - persistente **Datenbank**, echte **Authentifizierung** und
sichere **Beleg-Ablage** (vgl. Risiken in Abschnitt 6).

---

## 9. Präsentationstechnik

Wir wählen **Storytelling** und erzählen die Geschichte unserer Persona **Lena** als
**Heldenreise**. Das passt zur Bewertung (bewertet werden *Engagement*, *Narrative Structure*
und *Character Development*) und verkauft die Innovation emotional statt über eine
Feature-Aufzählung.

**Zeitbudget:** Die Präsentation dauert **2-3 Minuten** (laut Bewertungsblatt, ±30 Sek.). Die
Dramaturgie ist deshalb bewusst knapp gehalten; statt einer langen Live-Demo zeigen wir nur einen
kurzen Blick auf das Ergebnis (Status-Verlauf im Prototyp).

### 9.1 Dramaturgie als Heldenreise (≈ 2:30 Min.)

| Phase (Heldenreise) | Inhalt | Dauer |
|---|---|---|
| **Gewohnte Welt** (Hook) | Lena, 17, Informatik-Lernende - Absenzen laufen übers Papier-Büchlein | ~20 s |
| **Der Ruf / das Problem** | Arzttermin, Büchlein vergessen → die entschuldbare Absenz droht **unentschuldigt** zu werden | ~30 s |
| **Der Wendepunkt / die Lösung** | eAbsenzen: Lena begründet digital, der Lehrbetrieb bestätigt online, Lehrperson entscheidet transparent | ~30 s |
| **Bewährung** (kurzer Blick in den Prototyp) | Status-Verlauf einer Absenz: Erfasst → Unterschrieben → Bestätigt → Entschuldigt | ~30 s |
| **Rückkehr / Erfolg** | Lenas Absenz ist nachvollziehbar entschuldigt - Nutzen für Schule: weniger Aufwand, tiefere Unentschuldigt-Quote | ~25 s |
| **Call-to-Action** | „Lasst uns eAbsenzen als Pilot an der BBW Winterthur starten." | ~15 s |

### 9.2 Bezug zu den Bewertungskriterien (Heldenreise)

- **Engagement:** starker, emotionaler Einstieg über Lenas Dilemma - fesselt von der ersten Sekunde.
- **Narrative Structure:** klarer Bogen mit Anfang (gewohnte Welt), Mitte (Problem + Wende) und Ende
  (Erfolg + Aufruf); flüssige Übergänge.
- **Character Development:** Lena ist eine nachvollziehbare, sympathische Figur; das Publikum
  identifiziert sich mit ihrem Problem und erlebt ihre Lösung mit.

### 9.3 Rollen (2 Personen) & Hilfsmittel

- **Johan Stefanes:** Erzähler der Heldenreise + kurzer Blick in den Prototyp.
- **Julian Scherrer:** Nutzen-/Marktargumentation (KPIs, Geschäftsmodell) + Call-to-Action und Q&A.
- **Hilfsmittel:** wenige, bildstarke Folien (Lena, Problem, Lösung, Nutzen) und ein kurzer
  Blick auf den laufenden Prototyp - kein Folientext-Vorlesen.

---

## Fazit

Die Idee eAbsenzen wurde von der Problemanalyse (Abschnitt 1) über die strategische und
marktbezogene Bewertung (Abschnitte 2-7) bis zum lauffähigen Prototyp (Abschnitt 8) und der
Präsentationsplanung (Abschnitt 9) durchgängig ausgearbeitet. Der Prototyp belegt die technische
Machbarkeit, die Analysen zeigen Marktlücke, Nutzen und beherrschbare Risiken - damit ist
eAbsenzen als Pilotprojekt an der BBW Winterthur fundiert begründet.
