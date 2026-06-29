/* ============================================================================
 * fischarten.js  —  Fisch-Erkennungsmodul
 * ----------------------------------------------------------------------------
 * Aufgabe: das komplette Fischarten-Modul. Liest window.FISCH_DATA und
 * window.FISCH_BILD_BASE und rendert in #app von pages/fischarten.html.
 *
 * Zwei Bereiche (Tabs):
 *   • Steckbriefe  – alle 49 Arten als Karten (Bild, Merkmale, Schonmaß,
 *                    Laichzeit), filterbar nach Fischgruppe
 *   • Bildquiz     – Bild (oder Merkmale) zeigen → richtige Art aus 4 wählen
 *
 * Nutzt window.FT (app.js) für DOM-Helfer, Mischen und Streak/Fortschritt.
 * ========================================================================== */

(function () {
  "use strict";

  var FT = window.FT;
  var DATA = window.FISCH_DATA || [];
  var IMG_BASE = window.FISCH_BILD_BASE || "";
  var root, progress;

  /* Lesbare Namen für die Fischgruppen (Schlüssel = group-Feld in den Daten) */
  var GROUPS = {
    raubfisch:   "Raubfische",
    friedfisch:  "Friedfische",
    grundfisch:  "Grundfische",
    salmonide:   "Salmoniden",
    meeresfisch: "Meeresfische",
    aal:         "Aal",
    neunauge:    "Neunaugen",
    krebs:       "Krebse"
  };

  var state = {
    tab: "lernen",       // lernen | quiz
    filter: "alle",      // Gruppen-Filter in der Steckbrief-Liste
    // Quiz-Zustand:
    deck: [], idx: 0, picked: null, answers: []
  };

  /* Bild-URL einer Art (leer, wenn kein Bild hinterlegt) */
  function imgUrl(fish) { return fish.bild ? IMG_BASE + fish.bild : ""; }

  /* ---- Quiz-Frage bauen: richtige Art + 3 zufällige andere als Optionen --- */
  function makeQuestion(fish) {
    var others = FT.shuffle(DATA.filter(function (f) { return f.id !== fish.id; })).slice(0, 3);
    var opts = FT.shuffle([fish].concat(others));
    return {
      fish: fish,
      options: opts.map(function (o) { return { id: o.id, name: o.name }; }),
      correct: opts.findIndex(function (o) { return o.id === fish.id; })
    };
  }
  function startQuiz() {
    state.tab = "quiz";
    state.deck = FT.shuffle(DATA).map(makeQuestion);
    state.idx = 0; state.picked = null; state.answers = [];
    render();
  }

  /* ---- Antwort wählen ----------------------------------------------------- */
  function pick(i) {
    if (state.picked !== null) return;
    var q = state.deck[state.idx];
    var ok = i === q.correct;
    state.picked = i;
    state.answers[state.idx] = { correct: ok };
    FT.bumpStreak(progress, "fisch", ok);
    render();
  }
  function next() {
    if (state.idx + 1 >= state.deck.length) { state.tab = "result"; }
    else { state.idx += 1; state.picked = null; }
    render();
  }

  /* ====================== RENDERING ======================================== */
  function render() {
    root.innerHTML = "";
    root.appendChild(tabBar());
    if (state.tab === "lernen")      root.appendChild(viewLernen());
    else if (state.tab === "quiz")   root.appendChild(viewQuiz());
    else                             root.appendChild(viewResult());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Umschalter Steckbriefe / Bildquiz */
  function tabBar() {
    var lernActive = state.tab === "lernen";
    return FT.el("div.row.mt-sm", null, [
      FT.el("button.btn" + (lernActive ? ".primary" : ".ghost"),
        { onclick: function () { state.tab = "lernen"; render(); } }, "Steckbriefe lernen"),
      FT.el("button.btn" + (!lernActive ? ".primary" : ".ghost"),
        { onclick: startQuiz }, "Bildquiz starten"),
      FT.el("span.spacer"),
      streakChip(progress.streaks.fisch)
    ]);
  }

  /* ---- Steckbrief-Liste mit Gruppenfilter --------------------------------- */
  function viewLernen() {
    var wrap = FT.el("div");

    // Filterleiste (alle + vorkommende Gruppen)
    var present = {};
    DATA.forEach(function (f) { present[f.group] = true; });
    var bar = FT.el("div.filterbar.mt");
    bar.appendChild(filterBtn("alle", "Alle (" + DATA.length + ")"));
    Object.keys(GROUPS).forEach(function (g) {
      if (present[g]) {
        var n = DATA.filter(function (f) { return f.group === g; }).length;
        bar.appendChild(filterBtn(g, GROUPS[g] + " (" + n + ")"));
      }
    });
    wrap.appendChild(bar);

    // Kartenraster
    var list = FT.el("div.fish-list");
    DATA.filter(function (f) { return state.filter === "alle" || f.group === state.filter; })
      .forEach(function (f) { list.appendChild(fishCard(f)); });
    wrap.appendChild(list);
    return wrap;
  }

  function filterBtn(key, label) {
    return FT.el("button" + (state.filter === key ? ".active" : ""),
      { onclick: function () { state.filter = key; render(); } }, label);
  }

  function fishCard(f) {
    var media = f.bild
      ? FT.el("img", { src: imgUrl(f), alt: f.name, loading: "lazy" })
      : FT.el("div.ph", null, "Kein Bild verfügbar");
    var merkmale = FT.el("ul");
    f.merkmale.forEach(function (m) { merkmale.appendChild(FT.el("li", null, m)); });

    return FT.el("article.fish-card.card", null, [
      media,
      FT.el("div.body", null, [
        FT.el("span.pill.grp", null, GROUPS[f.group] || f.group),
        FT.el("h3.mt-sm", null, f.name),
        merkmale,
        FT.el("div.sl", null, [
          FT.el("span", null, [document.createTextNode("Schonmaß: "), FT.el("b", null, f.schon || "–")]),
          FT.el("span", null, [document.createTextNode("Laichzeit: "), FT.el("b", null, f.laich || "–")])
        ])
      ])
    ]);
  }

  /* ---- Bildquiz ----------------------------------------------------------- */
  function viewQuiz() {
    var q = state.deck[state.idx];
    var f = q.fish;
    var answered = state.picked !== null;
    var quiz = FT.el("div.fish-quiz");

    quiz.appendChild(FT.el("div.quiz-top", null, [
      FT.el("button.btn.ghost.sm", { onclick: function () { state.tab = "lernen"; render(); } }, "← Steckbriefe"),
      FT.el("span.count", null, (state.idx + 1) + " / " + state.deck.length)
    ]));
    quiz.appendChild(progressBar((state.idx + (answered ? 1 : 0)) / state.deck.length));

    // Reiz: Bild oder – falls keins vorhanden – die Merkmale
    if (f.bild) {
      quiz.appendChild(FT.el("img.fish-img.mt", { src: imgUrl(f), alt: "Zu bestimmender Fisch", loading: "lazy" }));
    } else {
      var box = FT.el("div.fish-noimg.mt");
      box.appendChild(FT.el("div", null, [
        FT.el("b", null, "Bestimme anhand der Merkmale:"),
        (function () {
          var ul = FT.el("ul", { style: "text-align:left;margin-top:8px" });
          f.merkmale.forEach(function (m) { ul.appendChild(FT.el("li", null, m)); });
          return ul;
        })()
      ]));
      quiz.appendChild(box);
    }

    quiz.appendChild(FT.el("p.center.muted", null, "Welcher Fisch ist das?"));

    // Optionen
    var opts = FT.el("div.options.mt-sm");
    q.options.forEach(function (o, i) {
      var cls = "opt";
      if (answered) {
        if (i === q.correct) cls += ".correct";
        else if (i === state.picked) cls += ".wrong";
        else cls += ".dim";
      }
      opts.appendChild(FT.el("button." + cls,
        { onclick: function () { pick(i); }, disabled: answered }, [
          FT.el("span.badge", null, String.fromCharCode(65 + i)),
          FT.el("span", null, o.name)
        ]));
    });
    quiz.appendChild(opts);

    // Auflösung mit Steckbrief-Fakten
    if (answered) {
      var ok = state.picked === q.correct;
      var info = FT.el("div.explain.pop", null, [
        FT.el("b", null, ok ? "Richtig – " + f.name + "! " : "Das war der " + f.name + ". ")
      ]);
      info.appendChild(FT.el("div.fish-facts", null, [
        fact("Gruppe", GROUPS[f.group] || f.group),
        fact("Schonmaß", f.schon || "–"),
        fact("Laichzeit", f.laich || "–")
      ]));
      quiz.appendChild(info);

      var last = state.idx + 1 >= state.deck.length;
      quiz.appendChild(FT.el("div.row.mt", null,
        FT.el("button.btn.primary", { onclick: next }, last ? "Ergebnis anzeigen" : "Nächster Fisch →")));
    }
    return quiz;
  }

  function fact(label, value) {
    return FT.el("span.fact", null, [FT.el("small", null, label), FT.el("b", null, value)]);
  }

  /* ---- Ergebnis ----------------------------------------------------------- */
  function viewResult() {
    var correct = state.answers.filter(function (a) { return a && a.correct; }).length;
    var total = state.deck.length;
    var pct = total ? Math.round(correct / total * 100) : 0;
    return FT.el("div.result.card.pad.pop", null, [
      FT.el("div.pill", null, "Quiz abgeschlossen"),
      FT.el("div.score.mt", null, correct + " / " + total),
      FT.el("p.mt-sm", null, pct + " % richtig bestimmt."),
      FT.el("div.row.mt", { style: "justify-content:center" }, [
        FT.el("button.btn.primary", { onclick: startQuiz }, "Neues Quiz"),
        FT.el("button.btn.ghost", { onclick: function () { state.tab = "lernen"; render(); } }, "Zu den Steckbriefen")
      ])
    ]);
  }

  /* ---- gemeinsame Mini-Bausteine ----------------------------------------- */
  function streakChip(s) {
    return FT.el("span.streak", null, [
      FT.el("span.flame", null, "🐟"),
      FT.el("b", null, String(s.cur)),
      document.createTextNode(" Serie"),
      FT.el("span.best", null, "Best: " + s.best)
    ]);
  }
  function progressBar(frac) {
    var bar = FT.el("div.progressbar.mt-sm");
    bar.appendChild(FT.el("span", { style: "width:" + Math.round(frac * 100) + "%" }));
    return bar;
  }

  document.addEventListener("DOMContentLoaded", function () {
    root = document.getElementById("app");
    if (!root) return;
    progress = FT.loadProgress();
    render();
  });
})();
