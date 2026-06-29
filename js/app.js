/* ============================================================================
 * app.js  —  Gemeinsame Grundlage aller Seiten (Navigation + Hilfen)
 * ----------------------------------------------------------------------------
 * Aufgabe dieser Datei:
 *   • die obere Navigationsleiste und den Footer auf JEDER Seite erzeugen
 *   • die aktive Seite hervorheben
 *   • einen kleinen geteilten Werkzeugkasten bereitstellen (window.FT):
 *       - Fortschritt/Streaks in localStorage speichern & laden
 *       - kleine Helfer (Element erzeugen, Liste mischen)
 *
 * Wird auf allen Seiten eingebunden. Module (theorie/geraetebau/fischarten)
 * greifen über window.FT auf die geteilten Funktionen zu.
 *
 * Jede Seite setzt am <body> zwei Attribute:
 *   data-base  ="" (Startseite)  oder  "../" (Seiten in /pages)
 *   data-page  ="home" | "theorie" | "geraetebau" | "fischarten"
 * Daraus werden die richtigen relativen Links gebaut – funktioniert sowohl
 * lokal per Doppelklick (file://) als auch auf GitHub Pages.
 * ========================================================================== */

(function () {
  "use strict";

  // --- Seiten-Kontext aus dem <body> lesen ---------------------------------
  var body = document.body;
  var base = body.getAttribute("data-base") || "";   // "" oder "../"
  var page = body.getAttribute("data-page") || "home";

  // Definition der Navigationspunkte. href wird mit base zusammengesetzt.
  var NAV = [
    { key: "home",       label: "Start",      href: "index.html" },
    { key: "theorie",    label: "Theorie",    href: "pages/theorie.html" },
    { key: "geraetebau", label: "Gerätebau",  href: "pages/geraetebau.html" },
    { key: "fischarten", label: "Fischarten", href: "pages/fischarten.html" }
  ];

  /* -------------------------------------------------------------------------
   * Werkzeugkasten window.FT  (von allen Modulen genutzt)
   * ----------------------------------------------------------------------- */
  var STORE_KEY = "fpnrw_v2";   // localStorage-Schlüssel (v2 = Neuaufbau)

  var FT = {
    base: base,
    page: page,

    /* DOM-Helfer: el("button.foo", {onclick:fn}, "Text" | childNode | [..]) */
    el: function (sel, attrs, children) {
      var parts = sel.split(/(?=[.#])/);
      var node = document.createElement(parts[0] || "div");
      parts.slice(1).forEach(function (p) {
        if (p[0] === "#") node.id = p.slice(1);
        else node.classList.add(p.slice(1));
      });
      if (attrs) Object.keys(attrs).forEach(function (k) {
        if (k === "onclick") node.addEventListener("click", attrs[k]);
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k in node) node[k] = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
      FT.append(node, children);
      return node;
    },
    /* Kinder anhängen – akzeptiert String, Node, Array, null */
    append: function (node, children) {
      if (children == null) return node;
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c == null) return;
        node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
      return node;
    },

    /* Fisher–Yates: Liste ohne Original-Mutation mischen */
    shuffle: function (arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    },

    /* --- Fortschritt laden/speichern ------------------------------------- */
    _defaults: function () {
      return {
        theorieMastered: {},   // qid -> true (einmal richtig beantwortet)
        rodsDone: {},          // rodId -> true
        streaks: {             // pro Modul: aktuelle Serie + Bestwert
          theorie: { cur: 0, best: 0 },
          rod:     { cur: 0, best: 0 },
          fisch:   { cur: 0, best: 0 }
        }
      };
    },
    loadProgress: function () {
      var def = this._defaults();
      try {
        var p = JSON.parse(localStorage.getItem(STORE_KEY));
        if (p && p.streaks) {
          // fehlende Felder aus Defaults ergänzen (vorwärtskompatibel)
          for (var k in def) if (p[k] === undefined) p[k] = def[k];
          return p;
        }
      } catch (e) {}
      return def;
    },
    saveProgress: function (p) {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
    },

    /* Streak hochzählen (ok=true) oder zurücksetzen (ok=false).
       kind = "theorie" | "rod" | "fisch". Gibt das aktualisierte Streak-Objekt
       zurück und speichert den Fortschritt. */
    bumpStreak: function (progress, kind, ok) {
      var s = progress.streaks[kind];
      if (ok) { s.cur += 1; if (s.cur > s.best) s.best = s.cur; }
      else { s.cur = 0; }
      this.saveProgress(progress);
      return s;
    }
  };
  window.FT = FT;

  /* -------------------------------------------------------------------------
   * Kopfzeile (Logo + Navigation) erzeugen und einsetzen
   * ----------------------------------------------------------------------- */
  function buildHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var brand = FT.el("a.brand", { href: base + "index.html" }, [
      FT.el("span.logo", { html: fishIcon() }),
      FT.el("span", null, [
        document.createTextNode("Fischerprüfung NRW"),
        FT.el("small", null, "Lern- & Übungsportal")
      ])
    ]);

    var nav = FT.el("nav.nav");
    NAV.forEach(function (item) {
      var a = FT.el("a" + (item.key === page ? ".active" : ""),
        { href: base + item.href }, item.label);
      nav.appendChild(a);
    });

    header.appendChild(FT.el("div.container", null, FT.el("div.bar", null, [brand, nav])));
  }

  /* Footer erzeugen */
  function buildFooter() {
    var footer = document.querySelector(".site-footer");
    if (!footer) return;
    footer.appendChild(FT.el("div.container", null,
      FT.el("div.bar", null, [
        FT.el("span", null, "Fischerprüfungs-Trainer NRW · Lerninhalte ohne Gewähr"),
        FT.el("span.spacer"),
        FT.el("span", null, "Vanilla HTML/CSS/JS – läuft offline & auf GitHub Pages")
      ])
    ));
  }

  /* Kleines Fisch-Logo (Inline-SVG, damit kein externes Bild nötig ist) */
  function fishIcon() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none">' +
      '<path d="M3 12c3-5 9-6 13-3 1.5-2 3-2.5 4.5-2.5-1 1.8-1 3 0 4.5-1 1.5-1 2.7 0 4.5C19 12.5 17.5 12 16 10c-4 3-10 2-13-3z" ' +
      'fill="#fff"/><circle cx="7.5" cy="10.5" r="1" fill="#0e7c6b"/></svg>';
  }

  // Auf allen Seiten sofort ausführen
  buildHeader();
  buildFooter();
})();
