/* ============================================================================
 * theorie.js  —  Theorie-Quiz (Fragenkatalog der Fischerprüfung)
 * ----------------------------------------------------------------------------
 * Aufgabe: das komplette Theorie-Modul. Liest window.THEORIE_DATA und rendert
 * alles in den Container #app der Seite pages/theorie.html.
 *
 * Spielprinzip:
 *   • Startansicht: Streak + sechs Sachgebiete + Prüfungssimulation
 *   • Kategorie-Modus: alle Fragen eines Gebiets, gemischt
 *   • Simulation:      eine Auswahl quer durch alle Gebiete
 *   • Frage beantworten → sofortiges Feedback + Erklärung → weiter
 *   • am Ende: Ergebnisanzeige
 *
 * Nutzt window.FT (aus app.js) für DOM-Helfer, Mischen und Fortschritt.
 * ========================================================================== */

(function () {
  "use strict";

  var FT = window.FT;
  var DATA = window.THEORIE_DATA || [];
  var root, progress;

  // Wie viele Fragen je Gebiet in die Prüfungssimulation kommen
  var SIM_PER_SECTION = 10;

  /* Laufzeit-Zustand der aktuellen Übung */
  var state = {
    view: "home",   // home | quiz | result
    deck: [],       // aktuelle Fragenliste (jeweils mit gemischten Optionen)
    idx: 0,
    picked: null,   // gewählter Optionsindex oder null
    answers: []     // [{correct:bool}] für die Auswertung
  };

  /* ---- Fragen vorbereiten: Optionen mischen, richtigen Index nachführen --- */
  function prepare(q, sectionName) {
    var opts = q.options.map(function (label, i) { return { label: label, orig: i }; });
    opts = FT.shuffle(opts);
    return {
      q: q.q,
      expl: q.expl,
      section: sectionName,
      options: opts,
      correct: opts.findIndex(function (o) { return o.orig === q.correct; })
    };
  }

  /* ---- Decks bauen -------------------------------------------------------- */
  function deckForSection(sec) {
    return FT.shuffle(sec.questions).map(function (q) { return prepare(q, sec.name); });
  }
  function deckForSim() {
    var deck = [];
    DATA.forEach(function (sec) {
      var qs = FT.shuffle(sec.questions).slice(0, SIM_PER_SECTION);
      qs.forEach(function (q) { deck.push(prepare(q, sec.name)); });
    });
    return FT.shuffle(deck);
  }

  /* ---- Navigation zwischen den Ansichten ---------------------------------- */
  function startSection(sec) { state.deck = deckForSection(sec); enterQuiz(); }
  function startSim()        { state.deck = deckForSim();        enterQuiz(); }
  function enterQuiz() {
    state.view = "quiz"; state.idx = 0; state.picked = null; state.answers = [];
    render();
  }
  function goHome() { state.view = "home"; render(); }

  /* ---- Antwort wählen ----------------------------------------------------- */
  function pick(i) {
    if (state.picked !== null) return;          // nur eine Wahl pro Frage
    var q = state.deck[state.idx];
    var ok = i === q.correct;
    state.picked = i;
    state.answers[state.idx] = { correct: ok };
    FT.bumpStreak(progress, "theorie", ok);     // Serie pflegen + speichern
    render();
  }
  function next() {
    if (state.idx + 1 >= state.deck.length) { state.view = "result"; }
    else { state.idx += 1; state.picked = null; }
    render();
  }

  /* ====================== RENDERING ======================================== */
  function render() {
    root.innerHTML = "";
    if (state.view === "home")   root.appendChild(viewHome());
    else if (state.view === "quiz")   root.appendChild(viewQuiz());
    else root.appendChild(viewResult());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Startansicht: Streak + Kategorien + Simulation */
  function viewHome() {
    var wrap = FT.el("div");

    // Streak-Leiste
    var s = progress.streaks.theorie;
    wrap.appendChild(FT.el("div.row.mt-sm", null, [
      streakChip(s),
      FT.el("button.btn.primary", { onclick: startSim },
        "Prüfungssimulation (" + (DATA.length * SIM_PER_SECTION) + " Fragen)")
    ]));

    // Kategorien
    var grid = FT.el("div.cat-grid.mt");
    DATA.forEach(function (sec) {
      var card = FT.el("button.cat-card", { onclick: function () { startSection(sec); } }, [
        FT.el("span.tag", null, sec.id),
        FT.el("span.info", null, [
          FT.el("b", null, sec.name),
          FT.el("small", null, sec.questions.length + " Fragen")
        ]),
        FT.el("span.chev", { html: chevron() })
      ]);
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  /* Quiz-Ansicht: eine Frage */
  function viewQuiz() {
    var q = state.deck[state.idx];
    var answered = state.picked !== null;
    var quiz = FT.el("div.quiz");

    // Kopf: zurück, Fortschritt, Streak
    quiz.appendChild(FT.el("div.quiz-top", null, [
      FT.el("button.btn.ghost.sm", { onclick: goHome }, "← Übersicht"),
      FT.el("span.count", null, (state.idx + 1) + " / " + state.deck.length),
      FT.el("span.spacer"),
      FT.el("span.pill", null, q.section)
    ]));

    // Fortschrittsbalken
    quiz.appendChild(progressBar((state.idx + (answered ? 1 : 0)) / state.deck.length));

    // Frage
    quiz.appendChild(FT.el("p.quiz-q.mt", null, q.q));

    // Optionen
    var opts = FT.el("div.options");
    q.options.forEach(function (o, i) {
      var cls = "opt";
      if (answered) {
        if (i === q.correct) cls += ".correct";
        else if (i === state.picked) cls += ".wrong";
        else cls += ".dim";
      }
      var btn = FT.el("button." + cls,
        { onclick: function () { pick(i); }, disabled: answered }, [
          FT.el("span.badge", null, String.fromCharCode(65 + i)),
          FT.el("span", null, o.label)
        ]);
      opts.appendChild(btn);
    });
    quiz.appendChild(opts);

    // Erklärung + Weiter
    if (answered) {
      if (q.expl) quiz.appendChild(FT.el("div.explain.pop", null, [
        FT.el("b", null, (state.picked === q.correct ? "Richtig! " : "Leider falsch. ")),
        document.createTextNode(q.expl)
      ]));
      var last = state.idx + 1 >= state.deck.length;
      quiz.appendChild(FT.el("div.row.mt", null,
        FT.el("button.btn.primary", { onclick: next }, last ? "Ergebnis anzeigen" : "Nächste Frage →")));
    }
    return quiz;
  }

  /* Ergebnis-Ansicht */
  function viewResult() {
    var correct = state.answers.filter(function (a) { return a && a.correct; }).length;
    var total = state.deck.length;
    var pct = total ? Math.round(correct / total * 100) : 0;

    return FT.el("div.result.card.pad.pop", null, [
      FT.el("div.pill", null, "Übung abgeschlossen"),
      FT.el("div.score.mt", null, correct + " / " + total),
      FT.el("p.mt-sm", null, pct + " % richtig beantwortet."),
      FT.el("div.row.mt", { style: "justify-content:center" }, [
        FT.el("button.btn.primary", { onclick: enterQuizSame }, "Nochmal üben"),
        FT.el("button.btn.ghost", { onclick: goHome }, "Zur Übersicht")
      ])
    ]);
  }
  function enterQuizSame() {
    // gleiche Fragenmenge neu mischen
    state.deck = FT.shuffle(state.deck);
    enterQuiz();
  }

  /* ---- kleine UI-Bausteine ------------------------------------------------ */
  function streakChip(s) {
    return FT.el("span.streak", null, [
      FT.el("span.flame", null, "🔥"),
      FT.el("b", null, String(s.cur)),
      document.createTextNode(" Serie"),
      FT.el("span.best", null, "Best: " + s.best)
    ]);
  }
  function progressBar(frac) {
    var bar = FT.el("div.progressbar");
    bar.appendChild(FT.el("span", { style: "width:" + Math.round(frac * 100) + "%" }));
    return bar;
  }
  function chevron() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  /* ---- Start -------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    root = document.getElementById("app");
    if (!root) return;
    progress = FT.loadProgress();
    render();
  });
})();
