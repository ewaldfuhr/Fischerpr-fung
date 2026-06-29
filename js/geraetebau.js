/* ============================================================================
 * geraetebau.js  —  Gerätebau-Trainer (Rutenmontagen A1–A10)
 * ----------------------------------------------------------------------------
 * Aufgabe: das komplette Gerätebau-Modul. Liest window.RODS_DATA und rendert
 * in #app von pages/geraetebau.html.
 *
 * Spielprinzip:
 *   • Übersicht: die 10 Montage-Aufgaben A1–A10 als Karten
 *   • Bau-Ansicht je Aufgabe:
 *       - links: Aufgabenbeschreibung + "Deine Montage" (verbaute Teile)
 *       - rechts: vollständiger Bauteile-Katalog (Akkordeon nach Kategorie)
 *   • Per Klick ein Teil aus dem Katalog wählen → es wird angebaut, sofern
 *     es an diese Rute gehört UND die nötige Vorstufe schon vorhanden ist
 *     (z.B. erst Schnur, dann Pose). Falsche Teile werden abgewiesen.
 *   • Sind alle Pflicht-Bauteile + Pflicht-Zubehör gesetzt → Montage fertig.
 *   • "Lösung zeigen" baut die Musterlösung ein (setzt die Serie zurück).
 *
 * Datenmodell (siehe data.js):
 *   rod.chain[] = { need, accept:[ids], optional }  – geordnete Bauschritte
 *   rod.zub[]   = [ [ids…], … ]                      – Pflicht-Zubehör (Alt.)
 *   catalog[id] = { name, short, spec, cat, icon, provides:[…] }
 * ========================================================================== */

(function () {
  "use strict";

  var FT = window.FT;
  var RODS = window.RODS_DATA || { rods: [], catalog: {}, categories: [] };
  var root, progress;

  var state = {
    view: "grid",        // grid | build
    rodId: null,
    placed: [],          // gesetzte Bauteile (in Reihenfolge)
    placedZub: [],        // gesetztes Zubehör
    openCats: {},        // welche Katalog-Kategorien aufgeklappt sind
    msg: null,           // { type:'ok'|'err'|'tip', text }
    checked: false,      // Montage als fertig erkannt
    tipShown: false      // Musterlösung wurde benutzt (zählt nicht zur Serie)
  };

  /* ---- Datenzugriffe ------------------------------------------------------ */
  function rod()      { return RODS.rods.find(function (r) { return r.id === state.rodId; }); }
  function item(id)   { return RODS.catalog[id]; }
  function cats()     { return RODS.categories; }

  /* Welche "Anschlüsse" liefern die bereits gesetzten Teile? (z.B. "schnur") */
  function provided() {
    var set = {};
    state.placed.forEach(function (id) {
      var it = item(id);
      if (it) it.provides.forEach(function (p) { set[p] = true; });
    });
    return set;
  }
  function isZubItem(r, id) { return r.zub.some(function (z) { return z.indexOf(id) >= 0; }); }
  function chainSlotFor(r, id) { return r.chain.find(function (s) { return s.accept.indexOf(id) >= 0; }) || null; }

  /* Lesbarer Name einer fehlenden Vorstufe für Fehlermeldungen */
  function needLabel(n) {
    var m = {
      rute: "die Rute", schnur: "die Schnur", fliegenschnur: "die Fliegenschnur",
      wirbel: "einen Wirbel", stahlvorfach: "das Stahlvorfach", fliegenvorfach: "das Fliegenvorfach",
      meereswirbel: "den Meereswirbel", haken: "einen Haken / ein Vorfach",
      schlagschnur: "die Schlagschnur", vorfach: "das Vorfach"
    };
    return m[n] || n;
  }

  /* ---- Fertigstellung prüfen ---------------------------------------------- */
  function slotFilled(slot)  { return slot.accept.some(function (id) { return state.placed.indexOf(id) >= 0; }); }
  function zubFilled(zslot)   { return zslot.some(function (id) { return state.placedZub.indexOf(id) >= 0; }); }
  function montageComplete(r) {
    var chainOk = r.chain.every(function (s) { return s.optional || slotFilled(s); });
    var zubOk = r.zub.every(zubFilled);
    return chainOk && zubOk;
  }

  /* ---- Interaktion: Klick auf ein Katalog-Teil ---------------------------- */
  function pickItem(id) {
    var r = rod(); if (!r) return;

    // (a) Zubehör? -> einfach an/abwählen
    if (isZubItem(r, id)) {
      var has = state.placedZub.indexOf(id) >= 0;
      state.placedZub = has
        ? state.placedZub.filter(function (x) { return x !== id; })
        : state.placedZub.concat([id]);
      state.msg = null;
      afterPlace(r);
      render();
      return;
    }

    // (b) gehört das Teil überhaupt an diese Rute?
    var slot = chainSlotFor(r, id);
    if (!slot) { state.msg = { type: "err", text: "Dieses Teil gehört nicht an diese Rute." }; render(); return; }

    // (c) schon gesetzt -> wieder entfernen
    if (state.placed.indexOf(id) >= 0) {
      state.placed = state.placed.filter(function (x) { return x !== id; });
      state.msg = null; state.checked = false;
      render();
      return;
    }

    // (d) Abhängigkeit prüfen: nötige Vorstufe vorhanden?
    if (slot.need && !provided()[slot.need]) {
      state.msg = { type: "err", text: "Teile fehlen – zuerst " + needLabel(slot.need) + " anbringen." };
      render();
      return;
    }

    // (e) anbauen
    state.placed = state.placed.concat([id]);
    var it = item(id);
    state.msg = { type: "ok", text: "Angebaut: " + (it ? it.short : id) };
    afterPlace(r);
    render();
  }

  /* Nach jedem Setzen prüfen, ob die Montage komplett ist */
  function afterPlace(r) {
    if (state.checked) return;
    if (montageComplete(r)) {
      state.checked = true;
      state.msg = null;
      progress.rodsDone[r.id] = true;
      if (!state.tipShown) FT.bumpStreak(progress, "rod", true);
      else FT.saveProgress(progress);
    }
  }

  /* Musterlösung einbauen (Serie wird zurückgesetzt) */
  function showTip() {
    var r = rod(); if (!r) return;
    state.placed = [];
    r.chain.forEach(function (s) { if (s.accept[0]) state.placed.push(s.accept[0]); });
    state.placedZub = [];
    r.zub.forEach(function (z) { if (z[0]) state.placedZub.push(z[0]); });
    state.tipShown = true; state.checked = true;
    progress.streaks.rod.cur = 0;          // Lösung benutzt -> Serie endet
    progress.rodsDone[r.id] = true;
    FT.saveProgress(progress);
    state.msg = { type: "tip", text: "Lösung eingebaut – die Bau-Serie wurde zurückgesetzt." };
    render();
  }

  function resetBuild() {
    state.placed = []; state.placedZub = []; state.msg = null; state.checked = false; state.tipShown = false;
    render();
  }

  /* ---- Navigation --------------------------------------------------------- */
  function openRod(id) {
    state.view = "build"; state.rodId = id;
    state.placed = []; state.placedZub = []; state.openCats = {};
    state.msg = null; state.checked = false; state.tipShown = false;
    render();
  }
  function backToGrid() { state.view = "grid"; render(); }
  function nextRod() {
    var i = RODS.rods.findIndex(function (r) { return r.id === state.rodId; });
    if (i >= 0 && i + 1 < RODS.rods.length) openRod(RODS.rods[i + 1].id);
    else backToGrid();
  }

  /* ====================== RENDERING ======================================== */
  function render() {
    root.innerHTML = "";
    root.appendChild(state.view === "grid" ? viewGrid() : viewBuild());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Übersicht der 10 Aufgaben */
  function viewGrid() {
    var wrap = FT.el("div");
    wrap.appendChild(FT.el("div.row.mt-sm", null, streakChip(progress.streaks.rod)));

    var grid = FT.el("div.rod-grid.mt");
    RODS.rods.forEach(function (r) {
      var done = !!progress.rodsDone[r.id];
      grid.appendChild(FT.el("button.rod-card" + (done ? ".done" : ""),
        { onclick: function () { openRod(r.id); } }, [
          FT.el("span.no", null, done ? "✓" : r.id),
          FT.el("span.info", null, [
            FT.el("b", null, r.title),
            FT.el("span.target", null, r.target),
            FT.el("p", null, r.task)
          ])
        ]));
    });
    wrap.appendChild(grid);
    return wrap;
  }

  /* Bau-Ansicht einer Aufgabe */
  function viewBuild() {
    var r = rod();
    var wrap = FT.el("div");

    wrap.appendChild(FT.el("div.row.mt-sm", null, [
      FT.el("button.btn.ghost.sm", { onclick: backToGrid }, "← Alle Montagen"),
      FT.el("span.spacer"),
      streakChip(progress.streaks.rod)
    ]));

    if (state.checked && !state.tipShown) {
      // Erfolgs-Ansicht
      wrap.appendChild(successPanel(r));
      return wrap;
    }

    var grid = FT.el("div.build.mt");
    grid.appendChild(taskPanel(r));
    grid.appendChild(catalogPanel(r));
    wrap.appendChild(grid);

    if (state.checked && state.tipShown) wrap.appendChild(successPanel(r));
    return wrap;
  }

  /* linke Spalte: Aufgabe + verbaute Teile */
  function taskPanel(r) {
    var panel = FT.el("div.build-task.card.pad");
    panel.appendChild(FT.el("span.pill", null, "Aufgabe " + r.id));
    panel.appendChild(FT.el("h2", null, r.title));
    panel.appendChild(FT.el("p.muted", null, "Zielfische: " + r.target));
    panel.appendChild(FT.el("p.mt-sm", null, r.task));

    // Fortschrittszähler
    var chainTotal = r.chain.filter(function (s) { return !s.optional; }).length;
    var chainDone = r.chain.filter(function (s) { return !s.optional && slotFilled(s); }).length;
    var zubTotal = r.zub.length;
    var zubDone = r.zub.filter(zubFilled).length;

    panel.appendChild(FT.el("h3.mt", null, "Deine Montage"));
    panel.appendChild(FT.el("p.muted", { style: "font-size:.85rem" },
      "Bauteile " + chainDone + "/" + chainTotal + " · Zubehör " + zubDone + "/" + zubTotal));

    // verbaute Bauteile (in Reihenfolge), entfernbar
    var slots = FT.el("div.slots");
    if (!state.placed.length && !state.placedZub.length) {
      slots.appendChild(FT.el("div.slot", null, "Noch nichts angebaut – wähle rechts die passenden Teile."));
    }
    state.placed.forEach(function (id, i) {
      var it = item(id);
      slots.appendChild(FT.el("div.slot.filled", null, [
        FT.el("span.dot", null, String(i + 1)),
        FT.el("span.nm", null, it ? it.short : id),
        removeBtn(id, false)
      ]));
    });
    state.placedZub.forEach(function (id) {
      var it = item(id);
      slots.appendChild(FT.el("div.slot.filled.zub", null, [
        FT.el("span.dot", { html: '<svg width="12" height="12" viewBox="0 0 24 24"><path d="M5 12l4 4 10-10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
        FT.el("span.nm", null, (it ? it.short : id) + " (Zubehör)"),
        removeBtn(id, true)
      ]));
    });
    panel.appendChild(slots);

    if (state.msg) panel.appendChild(FT.el("div.build-msg." + state.msg.type, null, state.msg.text));

    panel.appendChild(FT.el("div.row.mt", null, [
      FT.el("button.btn.ghost.sm", { onclick: resetBuild }, "Zurücksetzen"),
      FT.el("button.btn.ghost.sm", { onclick: showTip }, "Lösung zeigen")
    ]));
    return panel;
  }

  function removeBtn(id, isZub) {
    return FT.el("span.x", {
      title: "Entfernen",
      onclick: function (e) {
        e.stopPropagation();
        if (isZub) state.placedZub = state.placedZub.filter(function (x) { return x !== id; });
        else state.placed = state.placed.filter(function (x) { return x !== id; });
        state.checked = false; state.msg = null;
        render();
      }
    }, "✕");
  }

  /* rechte Spalte: vollständiger Bauteile-Katalog als Akkordeon */
  function catalogPanel(r) {
    var panel = FT.el("div.build-catalog");
    panel.appendChild(FT.el("p.muted", { style: "font-size:.85rem;margin-bottom:8px" },
      "Wähle die passenden Teile – nicht jedes gehört an diese Rute."));

    var byCat = {};
    cats().forEach(function (c) { byCat[c.key] = []; });
    Object.keys(RODS.catalog).forEach(function (id) {
      var it = RODS.catalog[id];
      if (byCat[it.cat]) byCat[it.cat].push(it);
    });

    var box = FT.el("div.catalog");
    cats().forEach(function (c, ci) {
      var open = state.openCats[c.key] !== undefined ? state.openCats[c.key] : (ci < 3);
      var group = FT.el("div.cat-group" + (open ? ".open" : ""));
      group.appendChild(FT.el("button.head", {
        onclick: function () {
          state.openCats[c.key] = !open;
          render();
        }
      }, [
        FT.el("span.chev", { html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
        document.createTextNode(c.label),
        FT.el("span.n", null, byCat[c.key].length + " Teile")
      ]));

      var bodyEl = FT.el("div.cat-body");
      byCat[c.key].forEach(function (it) {
        var placedOn = state.placed.indexOf(it.id) >= 0 || state.placedZub.indexOf(it.id) >= 0;
        bodyEl.appendChild(FT.el("button.part" + (placedOn ? ".placed" : ""),
          { onclick: function () { pickItem(it.id); } }, [
            FT.el("span.ic", { html: icon(it.icon, 22) }),
            FT.el("span", null, [
              document.createTextNode(it.short),
              it.spec ? FT.el("small", null, it.spec) : null
            ])
          ]));
      });
      group.appendChild(bodyEl);
      box.appendChild(group);
    });
    panel.appendChild(box);
    return panel;
  }

  /* Erfolgsanzeige */
  function successPanel(r) {
    var solved = !state.tipShown;
    return FT.el("div.success.pop.mt", null, [
      FT.el("div.big", null, solved ? "🎣 Montage fertig!" : "Lösung eingebaut"),
      FT.el("p.mt-sm", null, solved
        ? "Du hast die Montage " + r.id + " waidgerecht aufgebaut."
        : "So sieht die Musterlösung für " + r.id + " aus."),
      FT.el("div.row.mt", { style: "justify-content:center" }, [
        FT.el("button.btn.primary", { onclick: nextRod }, "Nächste Montage →"),
        FT.el("button.btn.ghost", { onclick: function () { openRod(r.id); } }, "Nochmal bauen"),
        FT.el("button.btn.ghost", { onclick: backToGrid }, "Übersicht")
      ])
    ]);
  }

  function streakChip(s) {
    return FT.el("span.streak", null, [
      FT.el("span.flame", null, "🛠️"),
      FT.el("b", null, String(s.cur)),
      document.createTextNode(" Serie"),
      FT.el("span.best", null, "Best: " + s.best)
    ]);
  }

  /* =========================================================================
   * Bauteil-Icons  (originalgetreu portiert aus der Ursprungs-App)
   * Liefert reines SVG-Markup als String. Farben/Pfade unverändert.
   * ======================================================================= */
  function icon(name, sz) {
    sz = sz || 22;
    var S = "#5b6b71", L = "#9aa7ad", W = "#c3ccd0", steel = "#8a969c",
        gold = "#d9a23a", red = "#cf4a3c", green = "#2c7a6b", wood = "#7a5230";

    function svg(children, vb) {
      return '<svg width="' + sz + '" height="' + sz + '" viewBox="' + (vb || "0 0 24 24") +
        '" fill="none" style="display:block">' + children.join("") + "</svg>";
    }
    function ln(d, col, w) {
      return '<path d="' + d + '" stroke="' + (col || S) + '" stroke-width="' + (w || 1.6) +
        '" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    function fillP(d, col) { return '<path d="' + d + '" fill="' + col + '"/>'; }
    function circ(cx, cy, r, col, sw) {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + (sw ? "none" : col) +
        '" stroke="' + (sw ? col : "none") + '" stroke-width="' + (sw || 0) + '"/>';
    }
    function rect(x, y, w, h, rx, attrs) {
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + rx + '" ' + (attrs || "") + "/>";
    }

    switch (name) {
      case "rod": return svg([ ln("M3 20 L20 5", wood, 2.2), ln("M5.5 17.3 l-1.6 -1", S, 1.3), ln("M9 13.8 l-1.5 -1", S, 1.3), ln("M12.5 10.3 l-1.4 -0.9", S, 1.3), circ(4.5, 18.5, 1.7, green), ln("M19 6 q3 1 1.6 3.2", L, 1.4) ]);
      case "reel": return svg([ circ(12, 12, 7, steel, 1.8), circ(12, 12, 2.3, S), ln("M12 5 v-2.2", S, 1.6), circ(18.4, 15, 1.4, L) ]);
      case "flyreel": return svg([ circ(12, 12, 7.5, steel, 1.8), circ(12, 12, 5, L, 1.2), circ(12, 12, 1.6, S), ln("M18 15.5 l2 1.2", S, 1.6) ]);
      case "spool": return svg([ rect(6, 4, 12, 16, 2, 'fill="none" stroke="' + S + '" stroke-width="1.6"'), ln("M6 8 h12 M6 16 h12", L, 1.2), '<path d="M9 8 q3 4 0 8" stroke="' + steel + '" stroke-width="1.2" fill="none"/>' ]);
      case "flyline": return svg([ '<path d="M3 18 q5 -14 9 -7 t9 -3" stroke="' + gold + '" stroke-width="1.8" fill="none"/>' ]);
      case "float": return svg([ ln("M12 2 v6", red, 1.6), fillP("M12 8 c3 0 4 3 4 6 c0 3 -2 6 -4 6 c-2 0 -4 -3 -4 -6 c0 -3 1 -6 4 -6 z", red), fillP("M8.4 15 c1 2 6.2 2 7.2 0 c-0.6 3 -2.4 5 -3.6 5 c-1.2 0 -3 -2 -3.6 -5 z", W), ln("M12 20 v2", S, 1.4) ]);
      case "feeder": return svg([ rect(7, 7, 10, 11, 1.5, 'fill="none" stroke="' + S + '" stroke-width="1.5"'), ln("M9.5 7 v11 M12 7 v11 M14.5 7 v11", L, 1), ln("M7 10 h10 M7 13.5 h10", L, 1), ln("M12 7 v-4", S, 1.4) ]);
      case "stopper": return svg([ ln("M4 12 h16", L, 1.2), rect(9.5, 9, 5, 6, 2.5, 'fill="' + wood + '"') ]);
      case "leadrun": return svg([ ln("M12 3 v18", L, 1.2), fillP("M12 8 c2.4 0 3.5 2 3.5 4.5 c0 2.5 -1.5 4.5 -3.5 4.5 c-2 0 -3.5 -2 -3.5 -4.5 c0 -2.5 1.1 -4.5 3.5 -4.5 z", steel) ]);
      case "shot": return svg([ circ(12, 12, 4.5, steel), circ(10.4, 10.4, 1.1, W) ]);
      case "bead": return svg([ circ(12, 12, 4.5, gold), circ(10.3, 10.3, 1, "#fff"), circ(12, 12, 1.1, "#fff") ]);
      case "leadclaw": return svg([ fillP("M12 4 c2.5 0 4 3 4 6 c0 3 -2 5 -4 5 c-2 0 -4 -2 -4 -5 c0 -3 1.5 -6 4 -6 z", steel), ln("M9 13 q-2 4 -3 6 M12 15 v6 M15 13 q2 4 3 6", S, 1.4) ]);
      case "bell": return svg([ fillP("M12 4 a5 5 0 0 1 5 5 v5 h-10 v-5 a5 5 0 0 1 5 -5 z", gold), ln("M6 14 h12", S, 1.4), circ(12, 18, 1.4, gold), ln("M12 4 v-1.5", S, 1.4) ]);
      case "swivel": return svg([ circ(7.5, 12, 3, steel, 1.6), circ(16.5, 12, 3, steel, 1.6), ln("M10.5 12 h3", S, 1.8) ]);
      case "swivelsea": return svg([ circ(7.5, 12, 3.2, L, 1.8), circ(16.5, 12, 3.2, L, 1.8), ln("M10.7 12 h2.6", S, 2) ]);
      case "wireleader": return svg([ ln("M5 5 q3 2 0 4 q-3 2 0 4 q3 2 0 4", steel, 1.6), circ(5, 4, 1.2, steel), ln("M5 17 q2 3 5 2.5 q3 -0.5 2 -3", S, 1.6) ]);
      case "flyleader": return svg([ '<path d="M5 4 q6 6 7 10 q1 4 5 6" stroke="' + L + '" stroke-width="1.4" fill="none" stroke-dasharray="1 2"/>' ]);
      case "shockline": return svg([ ln("M4 6 h16", steel, 2.4), ln("M4 12 q8 5 16 0", L, 1.6), ln("M4 18 h16", steel, 2.4) ]);
      case "surfrig": return svg([ ln("M5 4 v16", L, 1.4), ln("M5 8 h5 M5 14 h5", S, 1.3), '<path d="M10 8 q3 0 3 3 q0 2 -2 2" stroke="' + S + '" stroke-width="1.3" fill="none"/>', '<path d="M10 14 q3 0 3 3 q0 2 -2 2" stroke="' + S + '" stroke-width="1.3" fill="none"/>' ]);
      case "hooklink": return svg([ ln("M9 3 v9", L, 1.4), '<path d="M9 12 q0 4 3 4 q3 0 3 -3.5" stroke="' + S + '" stroke-width="1.7" fill="none"/>', ln("M15 12.5 l1.4 -1 M15 12.5 l1.3 1.2", S, 1.5) ]);
      case "spoon": return svg([ fillP("M9 4 c5 0 8 5 6 10 c-1.5 3.6 -5 5 -7 4 c-3 -1.5 -3 -7 -1 -11 c0.5 -1.8 1.4 -3 2 -3 z", steel), circ(10, 8, 1, "#fff"), '<path d="M11 18 q1 2 3 2" stroke="' + S + '" stroke-width="1.4" fill="none"/>' ]);
      case "spinner": return svg([ ln("M12 3 v13", S, 1.5), fillP("M12 7 c3 0 4.5 2 4 4.5 c-0.4 2 -2.5 3 -4 2.5 z", steel), circ(11, 6, 1.3, red), '<path d="M12 16 q0 3 2.5 3" stroke="' + S + '" stroke-width="1.4" fill="none"/>' ]);
      case "wobbler": return svg([ fillP("M4 12 c0 -3 3 -4.5 7 -4.5 c4 0 7 1.5 7 4.5 c0 3 -3 4.5 -7 4.5 c-4 0 -7 -1.5 -7 -4.5 z", green), circ(7, 11, 1.2, "#fff"), ln("M18 12 h2.5", S, 1.3), ln("M9 16.5 l-1 2 M13 17 l0.5 2", S, 1.3) ]);
      case "twister": return svg([ fillP("M8 5 c4 0 5 4 4 6 l-1 -0.5 c1 -2 -0.5 -4 -3 -3.5 z", "#d56a3a"), '<path d="M11 11 q4 1 3 5 q-1 3 -4 2 q-2 -1 -1 -3" stroke="#d56a3a" stroke-width="2" fill="none"/>' ]);
      case "pilk": return svg([ fillP("M11 3 l3 0 l1 14 l-2.5 2 l-2.5 -2 z", steel), ln("M12 3 v16", W, 0.8), '<path d="M12 19 q-2 2 -3 1 M12 19 q2 2 3 1" stroke="' + S + '" stroke-width="1.4" fill="none"/>' ]);
      case "dryfly": return svg([ circ(13, 13, 3, "#8a7232"), ln("M13 13 l-6 -5 M13 13 l-5 -7 M13 13 l-7 -3", "#9a8242", 1.1), '<path d="M14 15 q1 3 -1 4 q-2 1 -3 -1" stroke="' + S + '" stroke-width="1.4" fill="none"/>' ]);
      case "wetfly": return svg([ circ(13, 13, 3, "#5e5230"), fillP("M13 13 l-7 -2 l5 4 z", "#6e6238"), '<path d="M14 15 q1 3 -1 4 q-2 1 -3 -1" stroke="' + S + '" stroke-width="1.4" fill="none"/>' ]);
      case "maggot": return svg([ fillP("M7 11 c0 -2 2 -3 4 -3 c3 0 5 2 5 4 c0 2 -2 3 -4 3 c-3 0 -5 -2 -5 -4 z", "#eee4c4"), ln("M9 9.5 v3 M11.5 9 v4 M14 9.5 v3", "#c9bd95", 1) ]);
      case "worm": return svg([ '<path d="M6 16 q-1 -4 3 -4 q4 0 3 -3 q-1 -3 3 -3" stroke="#a8624a" stroke-width="2.6" fill="none" stroke-linecap="round"/>' ]);
      case "lugworm": return svg([ '<path d="M5 17 q2 -3 5 -3 q4 0 5 -4 q1 -3 4 -3" stroke="#9a5a4a" stroke-width="2.8" fill="none" stroke-linecap="round"/>', ln("M6.5 15 l-1 1.5 M9 14 l-0.6 1.6", "#7a463a", 1) ]);
      case "corn": return svg([ fillP("M12 4 c2.5 0 4 2.5 4 6 c0 4 -2 8 -4 8 c-2 0 -4 -4 -4 -8 c0 -3.5 1.5 -6 4 -6 z", "#e7c34a"), ln("M12 5 v12 M10 7.5 q2 1 4 0 M9.5 11 q2.5 1 5 0 M10 14.5 q2 1 4 0", "#b8962f", 0.9) ]);
      case "net": return svg([ '<path d="M6 6 a6 6 0 1 0 8 8 z" fill="none" stroke="' + S + '" stroke-width="1.6"/>', ln("M14 14 l5 5", wood, 2), '<path d="M7 8 l5 5 M10 6.5 l4 4 M6.5 11 l3.5 3.5" stroke="' + L + '" stroke-width="0.9"/>' ]);
      case "gaff": return svg([ ln("M9 21 V8", wood, 2), '<path d="M9 8 q0 -5 5 -5 q4 0 4 3" stroke="' + S + '" stroke-width="1.8" fill="none"/>', ln("M18 6 l1.4 -0.8", S, 1.5) ]);
      case "ruler": return svg([ rect(3, 9, 18, 6, 1, 'fill="none" stroke="' + wood + '" stroke-width="1.5"'), ln("M7 9 v2.5 M11 9 v3.5 M15 9 v2.5 M19 9 v3.5", wood, 1.1) ]);
      case "priest": return svg([ rect(13, 3, 5, 7, 2, 'fill="' + wood + '" transform="rotate(35 15 6)"'), ln("M14 8 L6 19", "#5e4423", 2.4) ]);
      case "knife": return svg([ fillP("M4 15 c5 -1 9 -5 12 -10 c1 2 1 6 -2 9 c-3 3 -8 3 -10 1 z", W), ln("M4 15 l-1.5 1.5", S, 1.6), rect(2, 15.5, 4, 2.4, 1, 'fill="' + wood + '" transform="rotate(45 4 17)"') ]);
      case "disgorger": return svg([ ln("M5 19 L17 7", steel, 1.8), '<path d="M17 7 l3 -1 l-1 3 z" fill="none" stroke="' + steel + '" stroke-width="1.4"/>', circ(5, 19, 1.3, steel) ]);
      case "scissors": return svg([ circ(6, 17, 2.2, S, 1.5), circ(6, 7, 2.2, S, 1.5), ln("M8 15.5 L19 6 M8 8.5 L19 18", S, 1.5) ]);
      case "gag": return svg([ '<path d="M9 4 q-4 4 -4 8 q0 4 4 8" stroke="' + S + '" stroke-width="1.8" fill="none"/>', '<path d="M15 4 q4 4 4 8 q0 4 -4 8" stroke="' + S + '" stroke-width="1.8" fill="none"/>', ln("M9 4 h6 M9 20 h6", S, 1.6) ]);
      case "pliers": return svg([ ln("M7 21 L12 11 M17 21 L12 11", S, 1.8), '<path d="M12 11 l-3 -5 q3 -2 6 0 z" fill="none" stroke="' + S + '" stroke-width="1.6"/>', ln("M9 6 l-1.5 -2 M15 6 l1.5 -2", S, 1.5) ]);
      default: return svg([ circ(12, 12, 5, L, 1.6), ln("M12 9 v6 M9 12 h6", S, 1.4) ]);
    }
  }

  /* ---- Start -------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    root = document.getElementById("app");
    if (!root) return;
    progress = FT.loadProgress();
    render();
  });
})();
