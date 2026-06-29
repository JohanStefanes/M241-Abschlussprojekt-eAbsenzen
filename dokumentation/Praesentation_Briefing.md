# eAbsenzen - Präsentations-Briefing

**Modul 241 · BBW Winterthur · Gruppe Johan Stefanes & Julian Scherrer**

Dieses Dokument enthält **alles für die Präsentation**: Technik, Folienaufbau mit Sprechtext,
Demo-Anleitung, Bewertungskriterien und eine Checkliste. Es genügt, dieses Briefing + die fertige
Doku (`Abschlussprojekt_Dokumentation.pdf`) zu kennen.

---

## 1. Das Wichtigste in Kürze

| Punkt | Vorgabe |
|---|---|
| **Technik** | Storytelling als **Heldenreise** (Hero Journey) rund um Persona „Lena" |
| **Dauer** | **2-3 Minuten** (±30 Sek.) - laut Bewertungsblatt. **Streng einhalten!** |
| **Ziel** | Die Innovation eAbsenzen emotional „verkaufen", nicht Features aufzählen |
| **Hilfsmittel** | 6-7 bildstarke Folien + ein kurzer Blick in den Prototyp |
| **Bewertet wird** | Engagement · Narrative Structure · Character Development (Total 6 Pkt.) |

> **Goldene Regel:** Es ist eine **Geschichte**, kein Vortrag. Erzähle von Lena, nicht von „der App".
> Folien zeigen Bilder/Stichworte - **niemals Text vorlesen**.

---

## 2. Bewertungskriterien (Heldenreise) - darauf achten die Beobachter

Aus dem Bewertungsblatt `04_GA_Projekt-präsentieren_beobachten.pdf`:

- **Engagement**
  1. Fesselt die Geschichte von der ersten Sekunde?
  2. Ist das Publikum emotional in die Geschichte investiert?
  3. Bleibt die Spannung über die ganze Präsentation erhalten?
- **Narrative Structure**
  1. Klarer Anfang, Mitte und Ende?
  2. Sind die Übergänge flüssig und logisch?
  3. Folgt die Geschichte einem zusammenhängenden Handlungsbogen?
- **Character Development**
  1. Ist die Figur (Lena) gut ausgearbeitet und nahbar?
  2. Fühlt das Publikum mit ihr mit?
  3. Sind ihre Handlungen/Motive glaubwürdig?

Zusätzlich gut für Punkte: **Überraschend / löst Zuhörerinteresse aus · starker Bezug zu den
Betrachtern · enthusiastisch und überzeugend für „Investoren".**

---

## 3. Folien (6-7 Stück) mit Sprechtext

Richtwert: **~2:30 Min**. Sprechtext ist ein Vorschlag - mit eigenen Worten frei erzählen.

### Folie 1 - Titel (≈ 10 Sek.)
**Zeigt:** „eAbsenzen" + Untertitel „Schluss mit dem verlorenen Absenzenbüchlein" + ein Bild
(Papierbüchlein / Schülerin).
**Sprechtext:** *„Das ist die Geschichte von Lena - und einem Zettel, der ihr fast die Note ruiniert
hätte."*

### Folie 2 - Gewohnte Welt (≈ 20 Sek.)
**Zeigt:** Foto/Illustration einer Lernenden; Stichwort „Papier-Absenzenbüchlein".
**Sprechtext:** *„Lena, 17, Informatik-Lernende an der BBW. Wenn sie fehlt, muss sie das auf Papier
im Absenzenbüchlein nachtragen und unterschreiben lassen - so wie alle hier."*

### Folie 3 - Der Ruf / das Problem (≈ 30 Sek.) ⭐ emotionaler Tiefpunkt
**Zeigt:** Symbol Arzttermin → durchgestrichenes Büchlein → rotes „UNENTSCHULDIGT".
**Sprechtext:** *„Eines Tages: Arzttermin, alles legitim. Doch das Büchlein bleibt zu Hause, die
Frist verstreicht - und ihre eigentlich entschuldigte Absenz wird **unentschuldigt**. Kein Einzelfall:
Zettel gehen verloren, der Lehrbetrieb unterschreibt zu spät, niemand sieht den Stand."*

### Folie 4 - Der Wendepunkt / die Lösung (≈ 30 Sek.)
**Zeigt:** Logo eAbsenzen + 3 Icons (Lernende · Lehrbetrieb · Lehrperson) mit Pfeilen.
**Sprechtext:** *„Hier kommt eAbsenzen. Lena begründet ihre Absenz digital und unterschreibt mit
einem Klick. Der Lehrbetrieb bestätigt online. Die Lehrperson entscheidet transparent. Ein
durchgängiger Prozess - kein Papier, keine verlorenen Zettel."*

### Folie 5 - Bewährung / Prototyp (≈ 30 Sek.)
**Zeigt:** Screenshot **Detail/Verlauf** (Status-Timeline) ODER kurze Live-Demo (siehe Abschnitt 4).
**Sprechtext:** *„Und das ist keine Idee auf Papier - es läuft. Hier sieht man Lenas Absenz: erfasst,
unterschrieben, vom Lehrbetrieb bestätigt, von der Lehrperson entschuldigt. Jeder Schritt
nachvollziehbar dokumentiert."*

### Folie 6 - Erfolg & Nutzen (≈ 25 Sek.)
**Zeigt:** 2-3 Kennzahlen (z. B. „−50 % fälschlich unentschuldigte Absenzen", „−40 %
Verwaltungszeit") + Stichwort Geschäftsmodell „Lizenz pro Schule".
**Sprechtext:** *„Lenas Absenz ist sauber entschuldigt. Und die Schule profitiert: weniger
Verwaltungsaufwand, weniger Fehlentscheide, volle Transparenz. Finanziert über eine einfache Lizenz
pro Schule."*

### Folie 7 - Call-to-Action (≈ 15 Sek.)
**Zeigt:** „eAbsenzen - Pilot an der BBW Winterthur" + Kontakt/Logo.
**Sprechtext:** *„Geben wir Lena - und allen Lernenden - ihre Zeit zurück. Starten wir eAbsenzen als
Pilot an der BBW. Danke!"*

---

## 4. Live-Demo (optional, statt Folie 5) - Anleitung

Eine kurze Live-Demo wirkt stark, ist aber bei 2-3 Min **riskant** (Zeit!). Empfehlung:
**maximal 20-30 Sek.**, vorher einloggen, oder einfach den **Screenshot** auf Folie 5 nehmen.

**App starten (vor der Präsentation, nicht live):**
```
cd absenzen-app
npm install      # nur beim ersten Mal
npm run dev      # öffnet http://localhost:5173
```

**Testzugänge** (auch in `absenzen-app/ZUGANGSDATEN.txt`):

| Rolle | Benutzername | Passwort |
|---|---|---|
| Lehrperson | `b.brunner` | `lehrer2026` |
| Lernende | `lena.meier` | `lena2026` |
| Lehrbetrieb | `webhouse` | `betrieb2026` |

**Was zeigen (wenn live):** Als `b.brunner` einloggen → eine Absenz öffnen → den **Status-Verlauf**
(Erfasst → Unterschrieben → Bestätigt → Entschuldigt) zeigen. Nicht den ganzen Workflow durchklicken
- dafür ist keine Zeit.

> **Tipp:** Browser-Tab **vorher** schon eingeloggt und auf der Detailseite offen halten. Dann nur
> kurz hinüberwechseln. Kein Risiko mit Login/Tippen vor Publikum.

---

## 5. Technik-Setup & Plan B

- **Folien:** PowerPoint oder Google Slides. Wenig Text, große Bilder, eine Aussage pro Folie.
- **Demo-Rechner:** App lokal laufen lassen (`npm run dev`), Tab vorbereitet. Internet ist **nicht**
  nötig (läuft lokal).
- **Plan B (falls Technik streikt):** Die 5 Screenshots liegen in `absenzen-app/screenshots/`
  (`login`, `lernende`, `lehrperson`, `lehrbetrieb`, `detail`). Einfach als Bilder in die Folien einbauen -
  dann braucht es gar keine Live-Demo.
- **Generalprobe:** Mindestens 1× mit Stoppuhr durchlaufen → muss in **2:30** passen.

---

## 6. Inhaltliche Backups für die Fragerunde (Q&A)

Falls Nachfragen kommen - Kurzantworten (Details in der Doku):

- **„Wie verdient ihr Geld?"** → Subscription: jährliche Lizenz pro Schule; alternativ Add-on zu
  bestehenden Tools wie LehrerOffice (Doku Abschnitt 7).
- **„Datenschutz?"** → Arztzeugnisse sind besondere Personendaten; Lösung „Datenschutz by design":
  minimale Daten, sichere/verschlüsselte Ablage, Einwilligung der Lernenden (Abschnitt 6).
- **„Gibt es das nicht schon?"** → Bestehende Tools erfassen nur, binden aber Lernende **und** Lehrbetrieb
  nicht digital ein - das ist die Marktlücke (Abschnitt 4).
- **„Funktioniert es technisch?"** → Lauffähiger Prototyp (React Router), getestet: Typcheck grün,
  Build ok, Workflow + Zugriffsschutz geprüft (Abschnitt 8.5).

---

## 7. Rollen (falls beide präsentieren)

Optional - wenn nur eine Person präsentiert, macht sie alles.

- **Johan Stefanes:** Erzähler der Heldenreise (Folien 1-5) + Prototyp-Blick.
- **Julian Scherrer:** Nutzen/Markt (Folie 6) + Call-to-Action (Folie 7) + Q&A.

---

## 8. Checkliste vor der Präsentation

- [ ] Folien fertig (6-7, bildstark, kein Fliesstext)
- [ ] Mit Stoppuhr geprobt → passt in 2:30 (±30 Sek.)
- [ ] App läuft lokal, Browser-Tab eingeloggt auf Detailseite vorbereitet
- [ ] Screenshots als Plan B in den Folien hinterlegt
- [ ] Einstiegssatz und Schlusssatz auswendig (die zwei wichtigsten Momente)
- [ ] Q&A-Antworten (Abschnitt 6) gelesen
- [ ] Selbsteinschätzungs-Note überlegt (steht so im Bewertungsblatt)
