# Fischerprüfungs-Trainer NRW

Lern- und Übungsportal zur staatlichen Fischerprüfung in Nordrhein-Westfalen.
Reines **Vanilla HTML/CSS/JS** – kein Framework, kein Build-Tool. Läuft direkt
im Browser (Doppelklick auf `index.html`) und auf GitHub Pages.

## Aufbau

```
(Repo-Wurzel)
├── index.html            Startseite (Shell + Navigation + Modul-Kacheln)
├── css/
│   └── style.css         Gesamtes Styling (Design-Tokens, alle Seiten)
├── js/
│   ├── app.js            Geteilte Navigation, Footer, Fortschritt (window.FT)
│   ├── data.js           ALLE Lerninhalte (Theorie, Ruten, Fische) – nur Daten
│   ├── theorie.js        Theorie-Quiz (359 Fragen, 6 Sachgebiete)
│   ├── geraetebau.js     Gerätebau-Trainer (Rutenmontagen A1–A10)
│   └── fischarten.js     Fisch-Erkennung (49 Arten: Steckbriefe + Bildquiz)
└── pages/
    ├── theorie.html      Seite, die theorie.js einbindet
    ├── geraetebau.html   Seite, die geraetebau.js einbindet
    └── fischarten.html   Seite, die fischarten.js einbindet
```

**Eine Datei = eine Aufgabe.** Jede Seite lädt in dieser Reihenfolge:
`data.js` (Inhalte) → `app.js` (gemeinsame Helfer + Navigation) → das Modul-Skript.
Die Module rendern ihren Inhalt jeweils in den Container `<div id="app">`.

## Architektur

Echte **Multi-Page-App**: `index.html` und die Seiten in `pages/` sind je
eigenständige Seiten, verbunden über geteilte `css/` und `js/`. Das funktioniert
sowohl lokal per `file://` als auch auf GitHub Pages – ohne Server. (Ein SPA mit
`fetch()` auf HTML-Teilstücke würde lokal an der Browser-CORS-Sperre scheitern.)

- **Fortschritt** wird lokal in `localStorage` (`fpnrw_v2`) gespeichert – keine
  Datenübertragung. Pro Modul gibt es eine eigene „Serie" (Streak).
- **Fischbilder** liegen extern (`window.FISCH_BILD_BASE` in `data.js`) und werden
  bei Bedarf nachgeladen; 6 der 49 Arten haben (noch) kein Bild – dort greift im
  Quiz automatisch die Merkmals-Beschreibung.

## Deployment auf GitHub Pages

Die App liegt im Repo-Wurzelverzeichnis und wird von GitHub Pages direkt aus
dem `main`-Branch ausgeliefert. In den Repo-Einstellungen unter *Pages* als
Quelle **Branch `main` / Ordner `/ (root)`** wählen – `index.html` wird dann
automatisch als Startseite genutzt.

Inhalte 1:1 aus der ursprünglichen App übernommen. Ohne Gewähr.
