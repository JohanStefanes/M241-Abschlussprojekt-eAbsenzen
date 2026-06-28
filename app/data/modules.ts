// ICT-Module aus dem Modulbaukasten (https://www.modulbaukasten.ch/),
// Auswahl an ICT-Modulen (Applikationsentwicklung), nicht der ganze Modulplan.

export type ModuleField = "Grundlagen" | "Applikationsentwicklung" | "Cloud & Betrieb";

export type Module = {
  id: string; // z.B. "M319"
  title: string;
  field: ModuleField;
};

export const modules: Module[] = [
  // Grundlagen & Daten
  { id: "M106", title: "Datenbanken abfragen, bearbeiten und warten", field: "Grundlagen" },
  { id: "M114", title: "Codierungs-, Kompressions- und Verschlüsselungsverfahren einsetzen", field: "Grundlagen" },
  { id: "M117", title: "Informatik- und Netzinfrastruktur für ein kleines Unternehmen realisieren", field: "Grundlagen" },
  { id: "M122", title: "Abläufe mit einer Scriptsprache automatisieren", field: "Grundlagen" },
  { id: "M162", title: "Daten analysieren und modellieren", field: "Grundlagen" },
  { id: "M164", title: "Datenbanken erstellen und Daten einfügen", field: "Grundlagen" },
  { id: "M187", title: "ICT-Arbeitsplatz mit Betriebssystem in Betrieb nehmen", field: "Grundlagen" },
  { id: "M231", title: "Datenschutz und Datensicherheit anwenden", field: "Grundlagen" },
  { id: "M293", title: "Webauftritt erstellen und veröffentlichen", field: "Grundlagen" },

  // Applikationsentwicklung
  { id: "M165", title: "NoSQL-Datenbanken einsetzen", field: "Applikationsentwicklung" },
  { id: "M183", title: "Applikationssicherheit implementieren", field: "Applikationsentwicklung" },
  { id: "M223", title: "Multi-User Applikationen objektorientiert realisieren", field: "Applikationsentwicklung" },
  { id: "M294", title: "Frontend einer interaktiven Webapplikation realisieren", field: "Applikationsentwicklung" },
  { id: "M295", title: "Backend für Applikationen realisieren", field: "Applikationsentwicklung" },
  { id: "M319", title: "Applikationen entwerfen und implementieren", field: "Applikationsentwicklung" },
  { id: "M320", title: "Objektbasiert programmieren", field: "Applikationsentwicklung" },
  { id: "M322", title: "Benutzerschnittstellen entwickeln", field: "Applikationsentwicklung" },
  { id: "M335", title: "Mobile-Applikation realisieren", field: "Applikationsentwicklung" },

  // Cloud & Betrieb
  { id: "M210", title: "Public Cloud für Anwendungen nutzen", field: "Cloud & Betrieb" },
];

export const MODULE_FIELDS: ModuleField[] = [
  "Grundlagen",
  "Applikationsentwicklung",
  "Cloud & Betrieb",
];

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function moduleLabel(id: string): string {
  const m = getModule(id);
  return m ? `${m.id} - ${m.title}` : id;
}
