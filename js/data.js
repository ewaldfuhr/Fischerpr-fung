/* ============================================================================
 * data.js  —  Alle Lerninhalte des Fischerprüfungs-Trainers NRW
 * ----------------------------------------------------------------------------
 * Diese Datei enthält AUSSCHLIESSLICH Daten (keine Logik, kein DOM).
 * Sie wird vor allen Modul-Skripten geladen und legt drei globale Objekte an:
 *
 *   THEORIE_DATA  – 6 Abschnitte mit 359 Prüfungsfragen
 *   RODS_DATA     – Rutenmontage-Trainer A1–A10 (Bauteile-Katalog + 10 Aufgaben)
 *   FISCH_DATA    – 49 Fischarten der Bildtafeln (Anlage 3 FischprüfungsVO NRW)
 *   FISCH_BILD_BASE – Basis-URL der Fischbilder (extern gehostet)
 *
 * Inhalte 1:1 aus der ursprünglichen App übernommen. Ohne Gewähr.
 * ========================================================================== */

/* ---------------------------------------------------------------------------
 * 1) THEORIE  – Fragenkatalog
 * Aufbau:  [{ id, name, questions:[{ num, q, options:[...], correct, expl }] }]
 *   correct = Index der richtigen Option (0-basiert)
 * ------------------------------------------------------------------------- */
window.THEORIE_DATA = [
  {
    "id": "A",
    "name": "Allgemeine Fischkunde",
    "marker": "A. ALLGEMEINE FISCHKUNDE",
    "questions": [
      {
        "num": 1,
        "q": "Welche Aufgaben erfüllen Rücken- und Afterflossen heimischer Fische?",
        "options": [
          "Sie dienen der Fortbewegung",
          "Sie dienen der Steuerung",
          "Sie dienen als Stabilisatoren"
        ],
        "correct": 2,
        "expl": "Rücken- und Afterflosse halten den Fisch aufrecht – sie wirken als Stabilisatoren."
      },
      {
        "num": 2,
        "q": "An welchen Teilen des Fischkörpers kann man das ungefähre Alter des Fisches feststellen?",
        "options": [
          "An der Stärke der Haut und an der Anzahl der Flossenstrahlen",
          "An der Anzahl und Länge der Kiemendorne",
          "An den Schuppen und den Kiemendeckeln"
        ],
        "correct": 2,
        "expl": "Schuppen und Kiemendeckel zeigen Jahresringe, an denen man das Alter abliest."
      },
      {
        "num": 3,
        "q": "Womit nimmt der Fisch Sauerstoff auf?",
        "options": [
          "Mit dem Schlund",
          "Mit den Kiemen",
          "Mit der Seitenlinie"
        ],
        "correct": 1,
        "expl": "Die Sauerstoffaufnahme erfolgt über die Kiemen."
      },
      {
        "num": 4,
        "q": "Welche Aufgabe hat die Niere des erwachsenen Fisches?",
        "options": [
          "Sie dient der Ausscheidung flüssiger Abfallstoffe",
          "Sie regelt den Hormonhaushalt",
          "Sie bildet Verdauungsstoffe"
        ],
        "correct": 0,
        "expl": "Die Niere scheidet flüssige Abfallstoffe aus."
      },
      {
        "num": 5,
        "q": "Wo befindet sich die Seitenlinie des Fisches?",
        "options": [
          "An den Körperflanken",
          "Längs der Bauchkante",
          "Zwischen den paarigen Flossen"
        ],
        "correct": 0,
        "expl": "Die Seitenlinie verläuft an den Körperflanken."
      },
      {
        "num": 6,
        "q": "Warum können Makrelen nicht im Süßwasser leben?",
        "options": [
          "Weil sie als Meeresfische an den Salzgehalt des Meeres gebunden sind",
          "Weil es im Süßwasser zu warm ist",
          "Weil der Sauerstoffgehalt im Süßwasser zu gering ist"
        ],
        "correct": 0,
        "expl": "Makrelen sind Meeresfische und an den Salzgehalt des Meeres gebunden."
      },
      {
        "num": 7,
        "q": "Welche Farbe hat die Leber des gesunden Süßwasserfisches?",
        "options": [
          "Weißlich bis gelblich",
          "Hellrot",
          "Überwiegend dunkelrot"
        ],
        "correct": 2,
        "expl": "Die gesunde Fischleber ist überwiegend dunkelrot. Eine helle, gelbliche oder fleckige Leber deutet auf Krankheit oder Verfettung hin."
      },
      {
        "num": 8,
        "q": "Welche Aufgabe hat die Schleimhaut?",
        "options": [
          "Sie schützt den Fisch gegen äußere Einflüsse und vermindert den Reibungswiderstand des Fischkörpers beim Schwimmen",
          "Sie ist für die Färbung des Fisches verantwortlich",
          "Sie gibt den Schuppen Halt"
        ],
        "correct": 0,
        "expl": "Die Schleimhaut schützt den Fisch und vermindert den Reibungswiderstand."
      },
      {
        "num": 9,
        "q": "Welche der nachstehenden Fische sind hochrückig?",
        "options": [
          "Brassen",
          "Welse",
          "Hechte"
        ],
        "correct": 0,
        "expl": "Brassen sind typische hochrückige Fische."
      },
      {
        "num": 10,
        "q": "Welche Fische haben Schlundzähne?",
        "options": [
          "Forellen, Hechte und Zander",
          "Brassen, Rotfedern und Karpfen",
          "Dorsche, Streber und Barsche"
        ],
        "correct": 1,
        "expl": "Schlundzähne haben die Karpfenartigen: Brassen, Rotfedern, Karpfen."
      },
      {
        "num": 11,
        "q": "Welche Flosse ist beim Fisch paarig vorhanden?",
        "options": [
          "Die Schwanzflosse",
          "Die Fettflosse",
          "Die Brustflosse"
        ],
        "correct": 2,
        "expl": "Die Brustflossen sind paarig vorhanden."
      },
      {
        "num": 12,
        "q": "Wozu dient den Fischen die Seitenlinie?",
        "options": [
          "Als Sinnesorgan",
          "Zur Erhöhung der Sauerstoffaufnahme",
          "Sie hat keine spezielle Funktion"
        ],
        "correct": 0,
        "expl": "Die Seitenlinie ist ein Sinnesorgan (nimmt Druck/Strömung wahr)."
      },
      {
        "num": 13,
        "q": "Welche Funktion hat die Schwimmblase?",
        "options": [
          "Sie dient der Verdauung",
          "Sie dient der Ausscheidung",
          "Sie dient als Auftriebskörper"
        ],
        "correct": 2,
        "expl": "Die Schwimmblase dient als Auftriebskörper."
      },
      {
        "num": 14,
        "q": "Wie kann der Fisch seine Sauerstoffaufnahme vergrößern?",
        "options": [
          "Durch das Spreizen der Flossen",
          "Durch die Vermehrung der Atembewegungen",
          "Durch Abspreizen der Kiemendeckel"
        ],
        "correct": 1,
        "expl": "Durch Vermehrung der Atembewegungen (schnelleres Atmen)."
      },
      {
        "num": 15,
        "q": "Kann ein Fisch Gegenstände außerhalb des Wassers sehen?",
        "options": [
          "Ja, aber mit kleinerem Gesichtsfeld",
          "Ja, das Gesichtsfeld außerhalb des Wassers wird vergrößert",
          "Nein, überhaupt nicht"
        ],
        "correct": 0,
        "expl": "Ja, durch Lichtbrechung sieht der Fisch nach außen, aber mit kleinerem Gesichtsfeld."
      },
      {
        "num": 16,
        "q": "Was ist ein Milchner?",
        "options": [
          "Ein reifer männlicher Fisch",
          "Eine bestimmte Fischart",
          "Eine süddeutsche Karpfenrasse"
        ],
        "correct": 0,
        "expl": "Ein Milchner ist ein reifer männlicher Fisch."
      },
      {
        "num": 17,
        "q": "Was versteht man unter einem Rogner?",
        "options": [
          "Die Larve von Heringsfischen",
          "Den reifen weiblichen Fisch",
          "Ein altes Forellenmännchen"
        ],
        "correct": 1,
        "expl": "Ein Rogner ist der reife weibliche Fisch."
      },
      {
        "num": 18,
        "q": "Welche Bedeutung haben Wasserflöhe, Hüpferlinge und andere Zooplankter für die Fische?",
        "options": [
          "Sie haben keine Bedeutung",
          "Sie sind wichtige Sauerstoffproduzenten",
          "Sie sind wertvolle Fischnahrung"
        ],
        "correct": 2,
        "expl": "Zooplankter (Wasserflöhe u.a.) sind wertvolle Fischnahrung."
      },
      {
        "num": 19,
        "q": "Worauf lässt das oberständige Maul eines Fisches schließen?",
        "options": [
          "Der Fisch frisst Oberflächennahrung",
          "Der Fisch ist ein starker Räuber",
          "Der Fisch ist ein Laichfresser"
        ],
        "correct": 0,
        "expl": "Oberständiges Maul deutet auf Oberflächennahrung hin."
      },
      {
        "num": 20,
        "q": "Wozu kann man bei bestimmten Fischen die Fettflosse heranziehen?",
        "options": [
          "Zur Bestimmung des Geschlechtes beim Döbel",
          "Zur Abschätzung des Ernährungszustandes",
          "Zur Artbestimmung"
        ],
        "correct": 2,
        "expl": "Die Fettflosse hilft bei der Artbestimmung (z.B. Salmoniden)."
      },
      {
        "num": 21,
        "q": "Wo sitzt das Herz der Fische?",
        "options": [
          "In der Kehlgegend",
          "In der Mitte zwischen Kopf und After",
          "Zwischen Rückenflosse und Bauchflosse"
        ],
        "correct": 0,
        "expl": "Das Herz sitzt in der Kehlgegend."
      },
      {
        "num": 22,
        "q": "Welche Bedeutung hat der Dottersack für die geschlüpfte Fischlarve?",
        "options": [
          "Er verhindert, dass sie von der Strömung fortgeschwemmt wird",
          "Er dient zu ihrer Ernährung",
          "Er hat keine Bedeutung"
        ],
        "correct": 1,
        "expl": "Der Dottersack dient der Ernährung der frisch geschlüpften Larve."
      },
      {
        "num": 23,
        "q": "Hören Fische Töne?",
        "options": [
          "Nein",
          "Ja",
          "Nur im flachen Wasser"
        ],
        "correct": 1,
        "expl": "Ja, Fische können Töne hören."
      },
      {
        "num": 24,
        "q": "Bei welchen Altersstadien unserer Fische ist die prozentuale Gewichtszunahme am größten?",
        "options": [
          "Bei den Jungfischen",
          "Bei sehr alten Fischen",
          "Fische wachsen in allen Altersstadien gleichmäßig"
        ],
        "correct": 0,
        "expl": "Die prozentuale Gewichtszunahme ist bei Jungfischen am größten."
      },
      {
        "num": 25,
        "q": "Warum werden Fische als wechselwarme Tiere bezeichnet?",
        "options": [
          "Weil sich ihre Körpertemperatur der jeweiligen Wassertemperatur angleicht",
          "Weil sie ihre Körpertemperatur unabhängig von der Wassertemperatur wechseln können",
          "Weil ihre Körpertemperatur in den verschiedenen Altersstufen wechselt"
        ],
        "correct": 0,
        "expl": "Die Körpertemperatur gleicht sich der Wassertemperatur an (wechselwarm)."
      },
      {
        "num": 26,
        "q": "Ist bei Fischen die Entwicklung der Eier temperaturabhängig?",
        "options": [
          "Ja",
          "Nein",
          "Nur beim Karpfen"
        ],
        "correct": 0,
        "expl": "Ja, die Eientwicklung ist temperaturabhängig."
      },
      {
        "num": 27,
        "q": "Welche der genannten Fische laichen im Winter?",
        "options": [
          "Die Forellen",
          "Die Karpfen",
          "Die Rotaugen (Plötzen)"
        ],
        "correct": 0,
        "expl": "Forellen sind Winterlaicher."
      },
      {
        "num": 28,
        "q": "Was bedeutet es, wenn die Fische mit dem Maul über die Wasseroberfläche drängen?",
        "options": [
          "Das Wasser ist zu kalt",
          "Es besteht Nahrungsmangel",
          "Es besteht Sauerstoffmangel"
        ],
        "correct": 2,
        "expl": "Drängen ans Maul über die Oberfläche zeigt Sauerstoffmangel an."
      },
      {
        "num": 29,
        "q": "Welcher Verdacht besteht, wenn sich in der Leibeshöhle des Karpfens eine starke Flüssigkeitsansammlung befindet?",
        "options": [
          "Der Fisch leidet an einer Nierenerkrankung",
          "Der Fisch ist an Bauchwassersucht erkrankt",
          "Es besteht kein Krankheitsverdacht"
        ],
        "correct": 1,
        "expl": "Flüssigkeit in der Leibeshöhle deutet auf Bauchwassersucht hin."
      },
      {
        "num": 30,
        "q": "Wozu gehört die Karpfenlaus?",
        "options": [
          "Zu den Spinnen",
          "Zu den Krebsen",
          "Zu den Insekten"
        ],
        "correct": 1,
        "expl": "Die Karpfenlaus gehört zu den Krebsen."
      },
      {
        "num": 31,
        "q": "Welche der aufgeführten Parasiten sind Außenparasiten?",
        "options": [
          "Die Karpfenlaus und der Fischegel",
          "Die Bandwürmer",
          "Die Fadenwürmer"
        ],
        "correct": 0,
        "expl": "Außenparasiten: Karpfenlaus und Fischegel."
      },
      {
        "num": 32,
        "q": "Welche der aufgeführten Parasiten sind Innenparasiten?",
        "options": [
          "Der Fischegel",
          "Die Bandwürmer",
          "Die Karpfenlaus"
        ],
        "correct": 1,
        "expl": "Innenparasiten: die Bandwürmer."
      },
      {
        "num": 33,
        "q": "Welche Fische erkranken vornehmlich an Fleckenseuche?",
        "options": [
          "Hechte und Aale",
          "Forellen und Saiblinge",
          "Flussbarsche und Zander"
        ],
        "correct": 0,
        "expl": "Die Fleckenseuche befällt vornehmlich Hechte und Aale. (unsicher – bitte prüfen)"
      },
      {
        "num": 34,
        "q": "Auf welchem Organ parasitiert der Ergasilus?",
        "options": [
          "Auf der Haut",
          "Auf der Leber",
          "Auf den Kiemen"
        ],
        "correct": 2,
        "expl": "Der Ergasilus parasitiert auf den Kiemen."
      },
      {
        "num": 35,
        "q": "Wozu gehört der Ergasilus?",
        "options": [
          "Zu den Egeln",
          "Zu den Bakterien",
          "Zu den Kleinkrebsen"
        ],
        "correct": 2,
        "expl": "Der Ergasilus gehört zu den Kleinkrebsen."
      },
      {
        "num": 36,
        "q": "Was sind Parasiten?",
        "options": [
          "Schmarotzer, die andere lebende Tiere oder Pflanzen befallen und ihnen Nährstoffe für ihren eigenen Lebensbedarf entziehen",
          "Tiere, die ihren Wirten Nährstoffe liefern, die diese nicht selbst produzieren können",
          "Tiere, die gelegentlich einem Wirt Nährstoffe entziehen, um Geschlechtsprodukte bilden zu können"
        ],
        "correct": 0,
        "expl": "Parasiten sind Schmarotzer, die Wirten Nährstoffe entziehen."
      },
      {
        "num": 37,
        "q": "Wodurch kommt es in der Regel bei Fischen zu Verpilzungen?",
        "options": [
          "Durch Verletzung der Schleimhaut",
          "Durch hohes Alter der Fische",
          "Durch falsche Ernährung"
        ],
        "correct": 0,
        "expl": "Verpilzungen entstehen meist durch Verletzung der Schleimhaut."
      },
      {
        "num": 38,
        "q": "Wodurch werden bakterielle Infektionen wie z.B. die Furunkulose oder die Fleckenseuche begünstigt?",
        "options": [
          "Durch stark organisch belastete Gewässer",
          "Durch Eisbildung",
          "Nicht durch äußere Faktoren, da die Krankheitserreger in jedem Fisch vorhanden sind"
        ],
        "correct": 0,
        "expl": "Stark organisch belastete Gewässer begünstigen bakterielle Infektionen."
      },
      {
        "num": 39,
        "q": "Wodurch können Viruserkrankungen bei Fischen übertragen werden?",
        "options": [
          "Durch die Transport- und Fanggeräte, durch das Transportwasser, durch Kontakte von Fisch zu Fisch",
          "Durch Menschen, wenn diese solche Fische verzehren",
          "Durch Fischbandwürmer"
        ],
        "correct": 0,
        "expl": "Übertragung durch Geräte, Transportwasser und Fisch-zu-Fisch-Kontakt."
      },
      {
        "num": 40,
        "q": "Wodurch werden die Drehbewegungen der an der Drehkrankheit infizierten Fische hervorgerufen?",
        "options": [
          "Durch Ermüdungserscheinungen des erkrankten Fisches",
          "Durch Einlagerung von abgekapselten Sporen im Gleichgewichtsorgan der Fische",
          "Durch das Bemühen der Fische, sich durch Bewegungen der Parasiten zu entledigen"
        ],
        "correct": 1,
        "expl": "Abgekapselte Sporen im Gleichgewichtsorgan verursachen das Drehen."
      },
      {
        "num": 41,
        "q": "Warum können große Weißfische kaum noch an einem Befall mit dem Riemenbandwurm erkranken?",
        "options": [
          "Weil der Riemenbandwurm bereits aus dem Fisch ausgeschieden wurde",
          "Weil die großen Fische genügend Abwehrstoffe gegen den Parasiten haben",
          "Weil große Weißfische Cyclops-Arten (Hüpferlinge) nicht mehr als Nahrung aufnehmen"
        ],
        "correct": 2,
        "expl": "Große Weißfische nehmen Cyclops (Hüpferlinge) nicht mehr als Nahrung auf."
      },
      {
        "num": 42,
        "q": "Wo befinden sich Fischegel am befallenen Fisch?",
        "options": [
          "In der Leibeshöhle",
          "In der Schwimmblase",
          "Auf dem Körper"
        ],
        "correct": 2,
        "expl": "Fischegel sitzen außen auf dem Körper."
      },
      {
        "num": 43,
        "q": "Bei welchem Fisch tritt die ansteckende Bauchwassersucht am häufigsten auf?",
        "options": [
          "Beim Hecht",
          "Beim Karpfen",
          "Beim Aal"
        ],
        "correct": 1,
        "expl": "Die ansteckende Bauchwassersucht tritt am häufigsten beim Karpfen auf."
      },
      {
        "num": 44,
        "q": "Auf welchem Organ parasitiert die Karpfenlaus?",
        "options": [
          "Auf der Leber",
          "Auf den Kiemen",
          "Auf der Haut"
        ],
        "correct": 2,
        "expl": "Die Karpfenlaus parasitiert auf der Haut."
      },
      {
        "num": 45,
        "q": "Wie sollen die Organe in einem gesunden Süßwasserfisch aussehen?",
        "options": [
          "Die Leber - gelblich marmoriert, die Niere - wässrig aufgehellt",
          "Die Leber - dunkelrot, die Niere - dunkelrot",
          "Die Leber - hellgelb, die Niere - ausgezackt"
        ],
        "correct": 1,
        "expl": "Gesunde Organe sind gut durchblutet – Leber und Niere dunkelrot. (unsicher – bitte prüfen)"
      },
      {
        "num": 46,
        "q": "Welche Symptome sind besonders charakteristisch für die Forellenseuche?",
        "options": [
          "Der Körper des erkrankten Fisches ist mit Geschwüren bedeckt",
          "Der erkrankte Fisch weist zahlreiche kommaförmige Blutergüsse in der Muskulatur auf, hat blutarme Kiemen und Glotzaugen",
          "Der befallene Fisch weist eine Schwarzfärbung im letzten Drittel des Schwanzstückes auf, das zudem oft verkrüppelt ist"
        ],
        "correct": 1,
        "expl": "Forellenseuche (VHS): kommaförmige Blutergüsse, blutarme Kiemen, Glotzaugen."
      },
      {
        "num": 47,
        "q": "Was befähigt Fische zum Hören?",
        "options": [
          "Die Schleimhaut",
          "Ein inneres Hörorgan",
          "Die Kiemendeckel"
        ],
        "correct": 1,
        "expl": "Fische hören über ein inneres Hörorgan."
      },
      {
        "num": 48,
        "q": "Welche Gruppe unserer Fischfauna hat die meisten Fischarten?",
        "options": [
          "Die Lachsartigen",
          "Die Barschartigen",
          "Die Karpfenartigen"
        ],
        "correct": 2,
        "expl": "Die meisten Arten haben die Karpfenartigen."
      },
      {
        "num": 49,
        "q": "Wie viele heimische Süßwasserfischarten kommen etwa in Deutschland vor?",
        "options": [
          "10 Arten",
          "30 Arten",
          "80 Arten"
        ],
        "correct": 2,
        "expl": "In Deutschland kommen etwa 80 heimische Süßwasserfischarten vor. (unsicher – bitte prüfen)"
      },
      {
        "num": 50,
        "q": "Welcher in NRW vorkommende Fisch hat zu einer Haftscheibe verwachsene Bauchflossen?",
        "options": [
          "Groppe (Mühlkoppe)",
          "Marmorgrundel",
          "Bachneunauge"
        ],
        "correct": 1,
        "expl": "Grundeln wie die Marmorgrundel haben zu einer Haftscheibe verwachsene Bauchflossen."
      },
      {
        "num": 51,
        "q": "Der Atlantische Stör ist in NRW",
        "options": [
          "seit der letzten Novellierung der Landesfischereiverordnung nicht mehr geschont",
          "ausgestorben",
          "die zweithäufigste Fischart"
        ],
        "correct": 1,
        "expl": "Der Atlantische Stör ist in NRW ausgestorben."
      },
      {
        "num": 52,
        "q": "Welche Fische wandern im Fließgewässer über längere Strecken?",
        "options": [
          "Rotfeder und Rotauge",
          "Flussbarsch und Zander",
          "Nase und Barbe"
        ],
        "correct": 2,
        "expl": "Nase und Barbe wandern über längere Strecken."
      },
      {
        "num": 53,
        "q": "Welchem Zweck können Fischwanderungen dienen?",
        "options": [
          "Den Besatzort möglichst schnell zu verlassen",
          "Laichplätze, Nahrungsgründe oder Winterruheeinstände aufzusuchen",
          "Die Kondition zu verbessern"
        ],
        "correct": 1,
        "expl": "Wanderungen dienen dem Aufsuchen von Laichplätzen, Nahrungsgründen und Winterruhe."
      }
    ]
  },
  {
    "id": "B",
    "name": "Spezielle Fischkunde",
    "marker": "B. SPEZIELLE FISCHKUNDE",
    "questions": [
      {
        "num": 1,
        "q": "Welche Arten gehören zu den Rundmäulern?",
        "options": [
          "Weißfische, Barsche und Forellen",
          "Bach- und Flussneunaugen",
          "Störe"
        ],
        "correct": 1,
        "expl": "Zu den Rundmäulern gehören Bach- und Flussneunaugen."
      },
      {
        "num": 2,
        "q": "Welcher Fisch hat keine Bauchflosse?",
        "options": [
          "Der Aal",
          "Die Quappe (Rutte)",
          "Die Koppe"
        ],
        "correct": 0,
        "expl": "Der Aal hat keine Bauchflosse."
      },
      {
        "num": 3,
        "q": "Wie verhalten sich Stichlinge während der Laichphase?",
        "options": [
          "Sie legen ihre Eier in Muscheln ab",
          "Die Männchen bauen ein Nest, in das mehrere Weibchen ihre Eier ablegen",
          "Sie legen ihre Eier an der Unterseite großblättriger Wasserpflanzen ab"
        ],
        "correct": 1,
        "expl": "Das Stichlingsmännchen baut ein Nest für die Eier mehrerer Weibchen."
      },
      {
        "num": 4,
        "q": "Welche Fischarten sind Kieslaicher?",
        "options": [
          "Die Brasse und der Hecht",
          "Der Bachsaibling und die Bachforelle",
          "Der Wels und der Aal"
        ],
        "correct": 1,
        "expl": "Kieslaicher sind Bachsaibling und Bachforelle."
      },
      {
        "num": 5,
        "q": "Zu welcher Maulform sind folgende Fischarten richtig eingeordnet?",
        "options": [
          "Endständiges Maul: Flussbarsch, Zander und Ukelei",
          "Unterständiges Maul: Nase, Barbe und Gründling",
          "Oberständiges Maul: Karpfen, Schleie und Zander"
        ],
        "correct": 1,
        "expl": "Unterständiges Maul: Nase, Barbe und Gründling."
      },
      {
        "num": 6,
        "q": "Welche Fischarten haben keine Schwimmblase?",
        "options": [
          "Die Mühlkoppe und die Makrele",
          "Der Hecht und der Flussbarsch",
          "Der Karpfen und der Zander"
        ],
        "correct": 0,
        "expl": "Mühlkoppe (Groppe) und Makrele haben keine Schwimmblase."
      },
      {
        "num": 7,
        "q": "Welcher Fisch hat eine zweikammerige Schwimmblase?",
        "options": [
          "Das Rotauge (Plötze)",
          "Der Hecht",
          "Die Regenbogenforelle"
        ],
        "correct": 0,
        "expl": "Das Rotauge hat als Karpfenfisch eine zweikammerige Schwimmblase."
      },
      {
        "num": 8,
        "q": "Welche der genannten Fischarten hat den höchsten Sauerstoffbedarf?",
        "options": [
          "Die Bachforelle",
          "Der Aal",
          "Die Schleie"
        ],
        "correct": 0,
        "expl": "Die Bachforelle hat den höchsten Sauerstoffbedarf."
      },
      {
        "num": 9,
        "q": "Welche der drei Merkmalsgruppen trifft auf unsere karpfenartigen Fische zu?",
        "options": [
          "Kopf mit Schuppen, bezahnte Kiefer, Schlundzähne, zweikammerige Schwimmblase",
          "Kopf schuppenlos, Kiefer unbezahnt, Schlundzähne vorhanden, zweikammerige Schwimmblase",
          "Fettflosse vorhanden, Kiemenreusendornen sehr zahlreich, Pflugscharbein bezahnt, Kopf schuppenlos"
        ],
        "correct": 1,
        "expl": "Karpfenartige: Kopf schuppenlos, Kiefer unbezahnt, Schlundzähne, zweikammerige Schwimmblase."
      },
      {
        "num": 10,
        "q": "Wie kann man aufgrund der äußeren Merkmale Karpfen und Karauschen eindeutig unterscheiden?",
        "options": [
          "An der Beschuppung",
          "An der Länge der Rückenflosse",
          "Der Karpfen hat Bartfäden, die Karausche keine"
        ],
        "correct": 2,
        "expl": "Der Karpfen hat Bartfäden, die Karausche keine."
      },
      {
        "num": 11,
        "q": "Welcher Fisch besitzt nur einen Bartfaden?",
        "options": [
          "Die Barbe",
          "Die Quappe (Rutte)",
          "Die Schleie"
        ],
        "correct": 1,
        "expl": "Die Quappe (Rutte) hat nur einen Bartfaden."
      },
      {
        "num": 12,
        "q": "Welcher Fisch hat vier Bartfäden?",
        "options": [
          "Die Barbe",
          "Die Karausche",
          "Die Schleie"
        ],
        "correct": 0,
        "expl": "Die Barbe hat vier Bartfäden."
      },
      {
        "num": 13,
        "q": "Wieviel Bartfäden hat der Europäische Wels?",
        "options": [
          "Acht",
          "Sechs",
          "Vier"
        ],
        "correct": 1,
        "expl": "Der Europäische Wels hat sechs Bartfäden."
      },
      {
        "num": 14,
        "q": "Welche der folgenden Fischgruppen gehört zu den Karpfenartigen?",
        "options": [
          "Gründling, Elritze, Barbe",
          "Zander, Aland, Schleie",
          "Nase, Karpfen, Quappe (Rutte)"
        ],
        "correct": 0,
        "expl": "Gründling, Elritze und Barbe gehören zu den Karpfenartigen."
      },
      {
        "num": 15,
        "q": "An welchen äußeren Merkmalen kann man bei der Schleie das Geschlecht eindeutig erkennen, nachdem sie fortpflanzungsfähig geworden ist?",
        "options": [
          "An der Färbung",
          "An der Rückenflosse",
          "An den Bauchflossen"
        ],
        "correct": 2,
        "expl": "Beim Schleienmännchen sind die Bauchflossen verdickt/vergrößert."
      },
      {
        "num": 16,
        "q": "Wieviel Bartfäden hat die Schleie?",
        "options": [
          "Vier",
          "Zwei",
          "Keine"
        ],
        "correct": 1,
        "expl": "Die Schleie hat zwei Bartfäden."
      },
      {
        "num": 17,
        "q": "Wo hält sich die Schleie vorzugsweise auf, nachdem sie fortpflanzungsfähig geworden ist?",
        "options": [
          "An der Oberfläche",
          "Im Freiwasserraum",
          "Zwischen Pflanzen am Bodengrund"
        ],
        "correct": 2,
        "expl": "Die Schleie hält sich zwischen Pflanzen am Bodengrund auf."
      },
      {
        "num": 18,
        "q": "Wann laichen Schleien?",
        "options": [
          "Von Oktober bis Dezember",
          "Von Mai bis Juli",
          "Von Januar bis Februar"
        ],
        "correct": 1,
        "expl": "Schleien laichen von Mai bis Juli."
      },
      {
        "num": 19,
        "q": "Wann laichen Karpfen?",
        "options": [
          "Von Oktober bis Dezember",
          "Von Januar bis März",
          "Von Mai bis Juli"
        ],
        "correct": 2,
        "expl": "Karpfen laichen von Mai bis Juli."
      },
      {
        "num": 20,
        "q": "Wieviel Eier hat der Karpfen pro kg Körpergewicht?",
        "options": [
          "1 500 bis 2 500 Stück",
          "20 000 bis 50 000 Stück",
          "100 000 bis 300 000 Stück"
        ],
        "correct": 2,
        "expl": "Der Karpfen hat 100.000 bis 300.000 Eier pro kg."
      },
      {
        "num": 21,
        "q": "Wohin legt der Karpfen seine Eier ab?",
        "options": [
          "Bei kiesigem Boden in Laichgruben",
          "In Nester aus Pflanzenteilen",
          "An Pflanzen"
        ],
        "correct": 2,
        "expl": "Der Karpfen legt seine Eier an Pflanzen ab (Krautlaicher)."
      },
      {
        "num": 22,
        "q": "Welcher Fisch betreibt eine besonders intensive Brutpflege?",
        "options": [
          "Die Elritze",
          "Der Stichling",
          "Der Aland"
        ],
        "correct": 1,
        "expl": "Der Stichling betreibt intensive Brutpflege (Nestbau, Bewachung)."
      },
      {
        "num": 23,
        "q": "Welche Fische gehören zu den Schmerlenartigen?",
        "options": [
          "Der Gründling und die Elritze",
          "Die Barbe und die Mühlkoppe",
          "Der Schlammpeitzger und der Steinbeißer"
        ],
        "correct": 2,
        "expl": "Schmerlenartige: Schlammpeitzger und Steinbeißer."
      },
      {
        "num": 24,
        "q": "Wohin legen die Bitterlinge ihre Eier?",
        "options": [
          "Sie legen die Eier in ein Nest aus Wasserpflanzen",
          "Sie legen keine Eier, weil sie lebendgebärend sind",
          "Sie legen die Eier in Großmuscheln ab"
        ],
        "correct": 2,
        "expl": "Bitterlinge legen ihre Eier in Großmuscheln ab."
      },
      {
        "num": 25,
        "q": "Zu welcher Verwandtschaft gehört die Quappe (Rutte)?",
        "options": [
          "Zu den Welsartigen",
          "Zu den Dorschartigen",
          "Zu den Schmerlen"
        ],
        "correct": 1,
        "expl": "Die Quappe gehört zu den Dorschartigen."
      },
      {
        "num": 26,
        "q": "Welches Merkmal ist typisch für barschartige Fische?",
        "options": [
          "Die erste Rückenflosse hat kräftige Stachelstrahlen",
          "Die zweite Rückenflosse hat kräftige Stachelstrahlen",
          "Die Bauchflossen sind kehlständig und mit vier starken Dornen versehen"
        ],
        "correct": 0,
        "expl": "Barschartige: erste Rückenflosse mit kräftigen Stachelstrahlen."
      },
      {
        "num": 27,
        "q": "Wie ist die Schwimmblase der Barsche gebaut?",
        "options": [
          "Sie ist einkammerig mit Luftgang",
          "Sie ist zweikammerig mit Luftgang",
          "Sie ist einkammerig ohne Luftgang"
        ],
        "correct": 2,
        "expl": "Die Barsch-Schwimmblase ist einkammerig ohne Luftgang."
      },
      {
        "num": 28,
        "q": "Wie legt der Flussbarsch seine Eier ab?",
        "options": [
          "Er legt die Eier in flachen Gruben ab",
          "Er klebt die Eier einzeln an Pflanzen",
          "Er legt die Eier in langen Bändern ab"
        ],
        "correct": 2,
        "expl": "Der Flussbarsch legt seine Eier in langen Bändern ab."
      },
      {
        "num": 29,
        "q": "Wann laicht der Zander?",
        "options": [
          "Von Januar bis März",
          "Von April bis Mai",
          "Von Oktober bis Dezember"
        ],
        "correct": 1,
        "expl": "Der Zander laicht von April bis Mai."
      },
      {
        "num": 30,
        "q": "Wieviel Eier hat die Bachforelle pro kg Körpergewicht?",
        "options": [
          "1 500 bis 2 500 Stück",
          "20 000 bis 50 000 Stück",
          "100 000 bis 300 000 Stück"
        ],
        "correct": 0,
        "expl": "Die Bachforelle hat 1.500 bis 2.500 Eier pro kg."
      },
      {
        "num": 31,
        "q": "Wodurch kann man einsömmrige Flussbarsche von einsömmrigen Zandern unterscheiden?",
        "options": [
          "Der Flussbarsch hat breitere Querstreifen",
          "Der Flussbarsch hat einen schwarzen Fleck am Ende der ersten Rückenflosse",
          "Der Zander hat dunkle Längsstreifen"
        ],
        "correct": 1,
        "expl": "Der Flussbarsch hat einen schwarzen Fleck am Ende der ersten Rückenflosse."
      },
      {
        "num": 32,
        "q": "Was bedeutet die Bezeichnung Spitzkopfaal?",
        "options": [
          "Sie kennzeichnet eine besondere Aalart",
          "Sie verweist auf eine ernährungsbedingte Kopfform",
          "Sie wird für Aale verwendet, die nur in Bächen leben"
        ],
        "correct": 1,
        "expl": "Spitzkopfaal bezeichnet eine ernährungsbedingte Kopfform."
      },
      {
        "num": 33,
        "q": "Ist die Größe beim Aal vom Geschlecht abhängig?",
        "options": [
          "Nein, beide Geschlechter sind gleich groß",
          "Ja, das Männchen ist größer",
          "Ja, das Weibchen ist größer"
        ],
        "correct": 2,
        "expl": "Beim Aal ist das Weibchen größer als das Männchen."
      },
      {
        "num": 34,
        "q": "Wo laicht der Europäische Aal?",
        "options": [
          "Im Mündungsbereich der Flüsse",
          "Im Golf von Biskaya",
          "In der Sargasso-See"
        ],
        "correct": 2,
        "expl": "Der Europäische Aal laicht in der Sargasso-See."
      },
      {
        "num": 35,
        "q": "Was ist ein Glasaal?",
        "options": [
          "Die Aallarve unmittelbar nach dem Schlüpfen",
          "Der Jungaal nach Umwandlung der Larve",
          "Der Jungaal nach der Pigmentierung"
        ],
        "correct": 1,
        "expl": "Der Glasaal ist der Jungaal nach Umwandlung der Larve."
      },
      {
        "num": 36,
        "q": "Welcher Fisch hat glatte, runde Schuppen?",
        "options": [
          "Der Wels",
          "Der Zander",
          "Der Döbel"
        ],
        "correct": 2,
        "expl": "Der Döbel (Karpfenfisch) hat glatte, runde (Rund-)Schuppen."
      },
      {
        "num": 37,
        "q": "Welche Fische haben Kammschuppen?",
        "options": [
          "Aal und Güster",
          "Zander und Flussbarsch",
          "Döbel und Karausche"
        ],
        "correct": 1,
        "expl": "Zander und Flussbarsch haben Kammschuppen (Ctenoidschuppen)."
      },
      {
        "num": 38,
        "q": "Wann tritt beim Hechtweibchen in der Regel die Laichreife ein?",
        "options": [
          "Nach Vollendung des ersten Lebensjahres",
          "Nach Vollendung des zweiten Lebensjahres",
          "Nach Vollendung des dritten Lebensjahres"
        ],
        "correct": 2,
        "expl": "Das Hechtweibchen wird in der Regel nach dem dritten Lebensjahr laichreif. (unsicher – bitte prüfen)"
      },
      {
        "num": 39,
        "q": "Wann laicht der Hecht?",
        "options": [
          "Von Oktober bis Dezember",
          "Von Februar bis Mai",
          "Von Juli bis September"
        ],
        "correct": 1,
        "expl": "Der Hecht laicht von Februar bis Mai."
      },
      {
        "num": 40,
        "q": "Wo laicht der Hecht?",
        "options": [
          "Über kiesigem Grund",
          "An flachen verkrauteten Uferstellen",
          "In tieferen Bereichen"
        ],
        "correct": 1,
        "expl": "Der Hecht laicht an flachen, verkrauteten Uferstellen."
      },
      {
        "num": 41,
        "q": "Wieviel Eier hat der Hecht pro kg Körpergewicht?",
        "options": [
          "1 500 bis 2 500 Stück",
          "20 000 bis 50 000 Stück",
          "100 000 bis 300 000 Stück"
        ],
        "correct": 1,
        "expl": "Der Hecht hat 20.000 bis 50.000 Eier pro kg."
      },
      {
        "num": 42,
        "q": "Für welche Salmoniden sind rote Punkte im Farbkleid typisch?",
        "options": [
          "Für die Äsche",
          "Für die Bachforelle",
          "Für die Kleine Maräne"
        ],
        "correct": 1,
        "expl": "Rote Punkte im Farbkleid sind typisch für die Bachforelle."
      },
      {
        "num": 43,
        "q": "Welche Fischart erreicht Stückgewichte von mehr als 10 kg?",
        "options": [
          "Der Seesaibling",
          "Die Seeforelle",
          "Die Äsche"
        ],
        "correct": 1,
        "expl": "Die Seeforelle erreicht Gewichte über 10 kg."
      },
      {
        "num": 44,
        "q": "Bei welcher Fischart besteht die Hauptnahrung aus tierischem Plankton (Wasserflöhe u. ä.)?",
        "options": [
          "Bei der Kleinen Maräne",
          "Bei der Äsche",
          "Bei der Bachforelle"
        ],
        "correct": 0,
        "expl": "Die Kleine Maräne ernährt sich hauptsächlich von tierischem Plankton."
      },
      {
        "num": 45,
        "q": "Welche Fischart wurde aus Nordamerika eingeführt?",
        "options": [
          "Der Seesaibling",
          "Die Regenbogenforelle",
          "Die Seeforelle"
        ],
        "correct": 1,
        "expl": "Die Regenbogenforelle wurde aus Nordamerika eingeführt."
      },
      {
        "num": 46,
        "q": "Welche Art gehört zu den Wanderfischen (Wechsel zwischen Meer und Süßwasser)?",
        "options": [
          "Der Huchen",
          "Der Bachsaibling",
          "Der Lachs"
        ],
        "correct": 2,
        "expl": "Der Lachs ist ein Wanderfisch zwischen Meer und Süßwasser."
      },
      {
        "num": 47,
        "q": "Bei welcher Art liegt die Eigröße über 4 mm?",
        "options": [
          "Bei der Bachforelle",
          "Bei der Äsche",
          "Bei der Kleinen Maräne"
        ],
        "correct": 0,
        "expl": "Bei der Bachforelle liegt die Eigröße über 4 mm."
      },
      {
        "num": 48,
        "q": "Welches äußere Merkmal ist bei der männlichen Äsche besonders auffällig?",
        "options": [
          "Ein großes Maul",
          "Eine fahnenförmige Rückenflosse",
          "Kehlständige Bauchflossen"
        ],
        "correct": 1,
        "expl": "Die männliche Äsche hat eine auffällige fahnenförmige Rückenflosse."
      },
      {
        "num": 49,
        "q": "Welche Fische sind Sommerlaicher?",
        "options": [
          "Die Karpfenartigen",
          "Die Salmoniden",
          "Die Hechtartigen"
        ],
        "correct": 0,
        "expl": "Sommerlaicher sind die Karpfenartigen."
      },
      {
        "num": 50,
        "q": "Welcher Fisch hat eine Schwimmblase ohne Luftgang?",
        "options": [
          "Der Karpfen",
          "Die Mühlkoppe",
          "Der Flussbarsch"
        ],
        "correct": 2,
        "expl": "Der Flussbarsch hat eine Schwimmblase ohne Luftgang."
      },
      {
        "num": 51,
        "q": "Welche Fische haben keinen Magen?",
        "options": [
          "Zander, Hecht",
          "Schleie, Karausche",
          "Zwergwels, Forellenbarsch"
        ],
        "correct": 1,
        "expl": "Schleie und Karausche (Karpfenfische) haben keinen Magen."
      },
      {
        "num": 52,
        "q": "Welcher mitteleuropäische Fisch ist der größte Raubfisch?",
        "options": [
          "Der Wels",
          "Der Hecht",
          "Der Lachs"
        ],
        "correct": 0,
        "expl": "Der Wels ist der größte mitteleuropäische Raubfisch."
      },
      {
        "num": 53,
        "q": "Wie oft laicht der Aal in seinem Leben?",
        "options": [
          "Nur einmal",
          "Jedes Jahr",
          "Nur dreimal"
        ],
        "correct": 0,
        "expl": "Der Aal laicht nur einmal in seinem Leben."
      },
      {
        "num": 54,
        "q": "Was versteht man unter Blankaalen?",
        "options": [
          "Geräucherte Aale",
          "Zum Laichen abwandernde Aale",
          "Aale aus Seen"
        ],
        "correct": 1,
        "expl": "Blankaale sind zum Laichen abwandernde Aale."
      },
      {
        "num": 55,
        "q": "Welche Fischarten bewachen ihre Eier?",
        "options": [
          "Rotauge und Rotfeder",
          "Zander und Wels",
          "Flussbarsch und Hecht"
        ],
        "correct": 1,
        "expl": "Zander und Wels bewachen ihre Eier."
      },
      {
        "num": 56,
        "q": "Welche Fische gehören zu den Dorschartigen?",
        "options": [
          "Der Kabeljau, die Quappe und der Seelachs",
          "Die Makrele, der Knurrhahn und der Hering",
          "Das Petermännchen, die Seezunge und der Stint"
        ],
        "correct": 0,
        "expl": "Dorschartige: Kabeljau, Quappe und Seelachs."
      },
      {
        "num": 57,
        "q": "Sind Makrelen",
        "options": [
          "Uferfische?",
          "Bodenfische?",
          "Freiwasserfische?"
        ],
        "correct": 2,
        "expl": "Makrelen sind Freiwasserfische."
      },
      {
        "num": 58,
        "q": "Woran sind die Dorschartigen im Allgemeinen zu erkennen?",
        "options": [
          "Sie haben keine Schuppen",
          "Sie haben in der Regel einen Bartfaden",
          "Sie haben keine Schwimmblase"
        ],
        "correct": 1,
        "expl": "Dorschartige haben in der Regel einen Bartfaden (Kinnbartel)."
      },
      {
        "num": 59,
        "q": "Welcher Fisch steigt zur Laichzeit vom Meer in das Süßwasser auf?",
        "options": [
          "Der Aal",
          "Der Lachs",
          "Der Zander"
        ],
        "correct": 1,
        "expl": "Der Lachs steigt zur Laichzeit vom Meer ins Süßwasser auf."
      },
      {
        "num": 60,
        "q": "Bei welchen Fischarten zieht man die Bartfäden zur Artbestimmung heran?",
        "options": [
          "Bei den Cypriniden",
          "Bei den Salmoniden",
          "Bei den barschartigen Fischen"
        ],
        "correct": 0,
        "expl": "Bei den Cypriniden (Karpfenfischen) helfen Bartfäden bei der Artbestimmung."
      },
      {
        "num": 61,
        "q": "Bei welchem Fisch spielt die zusätzliche Darmatmung eine bedeutende Rolle?",
        "options": [
          "Beim Hecht",
          "Beim Hering",
          "Beim Schlammpeitzger"
        ],
        "correct": 2,
        "expl": "Beim Schlammpeitzger spielt die Darmatmung eine bedeutende Rolle."
      },
      {
        "num": 62,
        "q": "Wo legen Forellen ihre Eier ab?",
        "options": [
          "In Kiesmulden am Gewässerboden",
          "An untergetauchten Grashalmen",
          "In selbstgebauten Nestern aus Pflanzenteilen"
        ],
        "correct": 0,
        "expl": "Forellen legen ihre Eier in Kiesmulden am Gewässerboden ab."
      },
      {
        "num": 63,
        "q": "Welcher einheimische Fisch frisst neben Wasserpflanzen auch Schwebalgen?",
        "options": [
          "Der Karpfen",
          "Der Döbel",
          "Die Rotfeder"
        ],
        "correct": 2,
        "expl": "Die Rotfeder frisst auch Schwebalgen neben Wasserpflanzen."
      },
      {
        "num": 64,
        "q": "Welcher der genannten Fische hat einen Kiemendeckeldorn?",
        "options": [
          "Flussbarsch",
          "Wels",
          "Kleine Maräne"
        ],
        "correct": 0,
        "expl": "Der Flussbarsch hat einen Kiemendeckeldorn."
      },
      {
        "num": 65,
        "q": "Bei welchen Fischen sind die Schlundzähne besonders stark entwickelt?",
        "options": [
          "Beim Zander und beim Hecht",
          "Bei den Stichlingen",
          "Bei den Karpfenartigen"
        ],
        "correct": 2,
        "expl": "Bei den Karpfenartigen sind die Schlundzähne besonders stark entwickelt."
      },
      {
        "num": 66,
        "q": "Welcher der genannten Fische kann sein Maul rüsselartig vorstrecken?",
        "options": [
          "Die Brasse",
          "Der Hecht",
          "Der Stichling"
        ],
        "correct": 0,
        "expl": "Die Brasse kann ihr Maul rüsselartig vorstrecken."
      },
      {
        "num": 67,
        "q": "Welche Fischarten gelten in NRW als nicht einheimisch?",
        "options": [
          "Schleie, Aland, Brassen",
          "Bachneunauge, Schneider, Quappe",
          "Bachsaibling, Regenbogenforelle, Sonnenbarsch"
        ],
        "correct": 2,
        "expl": "Nicht einheimisch: Bachsaibling, Regenbogenforelle, Sonnenbarsch."
      },
      {
        "num": 68,
        "q": "Lassen sich abwandernde Junglachse (Smolts) von etwa gleichgroßen Bachforellen unterscheiden?",
        "options": [
          "Nein, beide sehen völlig gleich aus",
          "Es gibt nur undeutliche Unterschiede",
          "Ja, man kann die Junglachse an ihren Brustflossen und an ihrer Färbung erkennen"
        ],
        "correct": 2,
        "expl": "Ja, Junglachse sind an Brustflossen und Färbung erkennbar."
      },
      {
        "num": 69,
        "q": "Der Maifisch gehört zur Ordnung der",
        "options": [
          "Karpfenartigen",
          "Heringsartigen",
          "Lachsartigen"
        ],
        "correct": 1,
        "expl": "Der Maifisch gehört zu den Heringsartigen."
      },
      {
        "num": 70,
        "q": "Wann darf der Maifisch geangelt werden?",
        "options": [
          "Während der Laichzeit im Mai",
          "Nur nach der Laichzeit ab Mitte Juni",
          "Gar nicht, der Maifisch steht unter Artenschutz"
        ],
        "correct": 2,
        "expl": "Der Maifisch steht unter Artenschutz und darf nicht geangelt werden."
      },
      {
        "num": 71,
        "q": "Woher hat der Maifisch seinen Namen?",
        "options": [
          "Nur im Mai ist dieser genießbar",
          "Seine Laichzeit liegt im Mai",
          "Nur im Mai darf er gefangen werden"
        ],
        "correct": 1,
        "expl": "Der Maifisch ist nach seiner Laichzeit im Mai benannt."
      },
      {
        "num": 72,
        "q": "Welche Krebsart gilt in NRW als einheimisch?",
        "options": [
          "Kamberkrebs",
          "Signalkrebs",
          "Europäischer Flusskrebs (Edelkrebs)"
        ],
        "correct": 2,
        "expl": "Einheimisch ist der Europäische Flusskrebs (Edelkrebs)."
      },
      {
        "num": 73,
        "q": "Wodurch ist der Bestand des Europäischen Flusskrebses gefährdet?",
        "options": [
          "Überfischung",
          "Krebspest",
          "Querbauwerke in Fließgewässern"
        ],
        "correct": 1,
        "expl": "Die Krebspest gefährdet den Bestand des Europäischen Flusskrebses."
      }
    ]
  },
  {
    "id": "C",
    "name": "Gewässerkunde und Fischhege",
    "marker": "C. GEWÄSSERKUNDE UND FISCHHEGE",
    "questions": [
      {
        "num": 1,
        "q": "Ist der Sauerstoffgehalt in fließenden Gewässern gewöhnlich höher oder niedriger als in stehenden Gewässern?",
        "options": [
          "Es besteht kein Unterschied, da die Aufnahmefähigkeit des Wassers für Sauerstoff immer gleich ist",
          "Er ist niedriger wegen der höheren Wassertemperatur",
          "Er ist höher, da durch die Verwirbelung des Wassers mit der Luft ständig Sauerstoff aufgenommen und bis zum Grund verteilt wird"
        ],
        "correct": 2,
        "expl": "In Fließgewässern ist der Sauerstoffgehalt durch Verwirbelung höher."
      },
      {
        "num": 2,
        "q": "Wie ist die richtige Reihenfolge der fischereibiologischen Regionen der Fließgewässer?",
        "options": [
          "Forellenregion - Barbenregion - Kaulbarsch/ Flunderregion - Äschenregion - Brassenregion",
          "Forellenregion - Äschenregion - Barbenregion - Brassenregion - Kaulbarsch/Flunderregion",
          "Äschenregion - Barbenregion - Brassenregion - Forellenregion - Kaulbarsch/Flunderregion"
        ],
        "correct": 1,
        "expl": "Reihenfolge: Forellen-, Äschen-, Barben-, Brassen-, Kaulbarsch/Flunderregion."
      },
      {
        "num": 3,
        "q": "Reagiert die Tierwelt der Bäche besonders empfindlich auf Sauerstoffmangel?",
        "options": [
          "Ja, weil sie an die in Bächen gewöhnlich hohe Sauerstoffkonzentration angepasst ist",
          "Nein, weil sie sich auch bei Sauerstoffmangel ungehindert vermehren kann",
          "Ja, weil bei Sauerstoffmangel die pH-Werte zu sehr steigen"
        ],
        "correct": 0,
        "expl": "Ja, die Bachtierwelt ist an hohe Sauerstoffkonzentration angepasst."
      },
      {
        "num": 4,
        "q": "Wo leben die Fischnährtiere der Gebirgsbäche?",
        "options": [
          "Im Wasser schwimmend",
          "Auf, zwischen und unter den Steinen",
          "An der Oberfläche des Wassers"
        ],
        "correct": 1,
        "expl": "Fischnährtiere der Gebirgsbäche leben auf, zwischen und unter den Steinen."
      },
      {
        "num": 5,
        "q": "Hat die Gestalt des Bodenuntergrundes fischereibiologische Bedeutung?",
        "options": [
          "Nein",
          "Ja, da unregelmäßiger Untergrund, Untiefen und Kolke vor allem Parasiten geeigneten Unterschlupf bieten",
          "Ja, da unregelmäßiger Untergrund, Untiefen, Kolke und Lücken zwischen den Steinen für bodenbesiedelnde Lebewesen vielfältige Entwicklungsmöglichkeiten bieten"
        ],
        "correct": 2,
        "expl": "Unregelmäßiger Untergrund bietet bodenbesiedelnden Lebewesen viele Möglichkeiten."
      },
      {
        "num": 6,
        "q": "Wie gelangen unter natürlichen Verhältnissen die meisten Pflanzennährstoffe in die Fließgewässer?",
        "options": [
          "Mit dem Quellwasser aus dem Erdinneren",
          "Durch Auswaschung aus landwirtschaftlichen Nutzflächen",
          "Sie entstehen im Gewässer von selbst"
        ],
        "correct": 1,
        "expl": "Die meisten Pflanzennährstoffe gelangen durch Auswaschung aus Nutzflächen ins Wasser."
      },
      {
        "num": 7,
        "q": "Haben die Pflanzennährstoffe in Gewässern fischereibiologische Bedeutung?",
        "options": [
          "Ja, sie sind Vorbedingung der Pflanzenentwicklung, diese wiederum ist Grundlage der Tierernährung",
          "Nein, sie haben keine Bedeutung, da sie für die Fische wertlos sind",
          "Ja, Pflanzennährstoffe wirken auch in geringer Konzentration auf Fische nachteilig"
        ],
        "correct": 0,
        "expl": "Pflanzennährstoffe sind Vorbedingung der Pflanzen- und damit Tierernährung."
      },
      {
        "num": 8,
        "q": "Womit beginnt die Nahrungskette in Gewässern?",
        "options": [
          "Mit einzelligen Algen, mehrzelligen Algen und Unterwasserpflanzen",
          "Mit kleinen Fischarten",
          "Mit den Insektenlarven der Forellenregion"
        ],
        "correct": 0,
        "expl": "Die Nahrungskette beginnt mit Algen und Unterwasserpflanzen."
      },
      {
        "num": 9,
        "q": "Können Abwassereinleitungen biologische Schäden in Gewässern verursachen?",
        "options": [
          "Ja, weil die Tier- und Pflanzenwelt vor allem kleinerer Gewässer auf Umweltveränderungen besonders empfindlich reagiert",
          "Nein, weil die Selbstreinigungskraft der Gewässer unbegrenzt ist",
          "Nein, weil sich Tiere und Pflanzen daran anpassen"
        ],
        "correct": 0,
        "expl": "Ja, kleinere Gewässer reagieren besonders empfindlich auf Umweltveränderungen."
      },
      {
        "num": 10,
        "q": "Welche biologische Funktion hat der im Wasser gelöste Sauerstoff?",
        "options": [
          "Er wird für die Atmung der Wasserorganismen benötigt",
          "Er neutralisiert alkalische Abwässer",
          "Er neutralisiert saure Abwässer"
        ],
        "correct": 0,
        "expl": "Gelöster Sauerstoff wird für die Atmung der Wasserorganismen benötigt."
      },
      {
        "num": 11,
        "q": "In welchen Zonen stehender Gewässer kommt es am ehesten zu Sauerstoffmangel?",
        "options": [
          "Im Uferbereich",
          "In der Tiefe",
          "An der Oberfläche"
        ],
        "correct": 1,
        "expl": "Sauerstoffmangel tritt am ehesten in der Tiefe auf."
      },
      {
        "num": 12,
        "q": "Welche höheren Wasserpflanzen sind besonders günstig für die Sauerstoffversorgung stehender Gewässer?",
        "options": [
          "Die untergetauchte \"weiche\" Flora (Laichkräuter, Tausendblatt, Wasserpest)",
          "Die Schwimmblattpflanzen (z.B. Seerosen)",
          "Die \"harte\" Flora (Schilf, Rohr)"
        ],
        "correct": 0,
        "expl": "Die untergetauchte weiche Flora ist besonders günstig für die Sauerstoffversorgung."
      },
      {
        "num": 13,
        "q": "Wie gelangt Sauerstoff in das Wasser?",
        "options": [
          "Durch Verwitterung der Bodenteilchen",
          "Durch Sauerstoffabgabe der grünen Pflanzen und durch Sauerstoffaufnahme aus der Luft",
          "Durch Fäulnis abgestorbener Organismen"
        ],
        "correct": 1,
        "expl": "Sauerstoff stammt aus Pflanzen und aus der Aufnahme aus der Luft."
      },
      {
        "num": 14,
        "q": "Warum kann es besonders in stehenden Gewässern unter dem Eis zum Ersticken der Fische kommen?",
        "options": [
          "Weil die Wassertemperaturen zu niedrig sind",
          "Weil der Stickstoffgehalt zu hoch wird",
          "Weil die Sauerstoffaufnahme aus der Luft unmöglich ist"
        ],
        "correct": 2,
        "expl": "Unter Eis ist die Sauerstoffaufnahme aus der Luft unmöglich."
      },
      {
        "num": 15,
        "q": "Was ist Voraussetzung für die Sauerstoffentwicklung durch grüne Pflanzen?",
        "options": [
          "Das Sonnenlicht",
          "Eine Wassertemperatur über l0°C",
          "Ein hoher Nährstoffgehalt"
        ],
        "correct": 0,
        "expl": "Voraussetzung für die Sauerstoffbildung der Pflanzen ist Sonnenlicht."
      },
      {
        "num": 16,
        "q": "Welche Organismen können Sauerstoff abgeben?",
        "options": [
          "Das tierische Plankton",
          "Die grünen Pflanzen",
          "Die Insektenlarven"
        ],
        "correct": 1,
        "expl": "Sauerstoff geben die grünen Pflanzen ab."
      },
      {
        "num": 17,
        "q": "Welche Stoffe haben besondere Bedeutung als Pflanzennährstoffe in Gewässern?",
        "options": [
          "Wasserstoff und Sauerstoff",
          "Sand und Kies",
          "Phosphor und Stickstoff"
        ],
        "correct": 2,
        "expl": "Phosphor und Stickstoff sind die wichtigsten Pflanzennährstoffe."
      },
      {
        "num": 18,
        "q": "Warum bildet sich in stehenden Gewässern eine Temperaturschichtung der Wassermassen?",
        "options": [
          "Weil das auf l8°C erwärmte Wasser schwerer ist als kälteres",
          "Weil das Tiefenwasser durch die Erdwärme aufgeheizt wird",
          "Weil das erwärmte Oberflächenwasser leichter ist"
        ],
        "correct": 2,
        "expl": "Erwärmtes Oberflächenwasser ist leichter – daraus entsteht die Schichtung."
      },
      {
        "num": 19,
        "q": "Welche Organismen können auch in den lichtlosen Tiefenzonen von Seen dauernd leben?",
        "options": [
          "Bakterien",
          "Höhere Wasserpflanzen",
          "Pflanzliches Plankton"
        ],
        "correct": 0,
        "expl": "In lichtlosen Tiefenzonen können dauerhaft nur Bakterien leben."
      },
      {
        "num": 20,
        "q": "Durch welche natürlichen Vorgänge kann der Sauerstoffgehalt in stehenden Gewässern unter das für Fische erträgliche Maß absinken?",
        "options": [
          "Durch Sauerstoffverbrauch bei Nacht infolge starker Pflanzenatmung (Dissimilation)",
          "Durch massenhaftes Ausschlüpfen von Wasserinsekten",
          "Durch erhöhten Sauerstoffverbrauch beim Ablaichen der Fische"
        ],
        "correct": 0,
        "expl": "Nachts verbrauchen Pflanzen bei der Atmung Sauerstoff (Dissimilation)."
      },
      {
        "num": 21,
        "q": "Durch welche Witterungsverhältnisse wird Fischsterben infolge Sauerstoffmangels in stark verkrauteten Teichen begünstigt?",
        "options": [
          "Durch starke Regen- und Schneefälle",
          "Durch plötzliches Aufklaren in Vollmondnächten",
          "Durch windstille, warme Nächte"
        ],
        "correct": 2,
        "expl": "Windstille, warme Nächte begünstigen Sauerstoffmangel in verkrauteten Teichen."
      },
      {
        "num": 22,
        "q": "Bis zu welcher Tiefe in Seen können grüne Pflanzen dauernd leben?",
        "options": [
          "Der Pflanzenwuchs ist unabhängig von der Tiefe",
          "Soweit genügend Licht eindringt",
          "Soweit der Wasserdruck nicht zu stark ist"
        ],
        "correct": 1,
        "expl": "Grüne Pflanzen leben so tief, wie noch genügend Licht eindringt."
      },
      {
        "num": 23,
        "q": "In welcher Reihenfolge wachsen Pflanzen vom Ufer aus gesehen?",
        "options": [
          "Schwimmblattpflanzen - Laichkräuter - Röhricht - unterseeische Wiesen",
          "Röhricht - Schwimmblattpflanzen - Laichkräuter - unterseeische Wiesen",
          "Laichkräuter - unterseeische Wiesen - Röhricht - Schwimmblattpflanzen"
        ],
        "correct": 1,
        "expl": "Vom Ufer aus: Röhricht, Schwimmblatt, Laichkräuter, unterseeische Wiesen."
      },
      {
        "num": 24,
        "q": "Was ist ein eutrophes Gewässer?",
        "options": [
          "Es ist reich an Nährstoffen",
          "Es ist arm an Nährstoffen",
          "Es ist ein saures Gewässer"
        ],
        "correct": 0,
        "expl": "Ein eutrophes Gewässer ist reich an Nährstoffen."
      },
      {
        "num": 25,
        "q": "Was ist mit dem Begriff \"Wasserblüte\" gemeint?",
        "options": [
          "Eine Verfärbung des Wassers durch Abwässer",
          "Eine Verfärbung des Wassers durch chemische Einflüsse",
          "Eine Verfärbung des Wassers durch übermäßige Algenentwicklung"
        ],
        "correct": 2,
        "expl": "Wasserblüte ist eine Verfärbung durch übermäßige Algenentwicklung."
      },
      {
        "num": 26,
        "q": "Beeinflusst die Wassertemperatur die Löslichkeit für Sauerstoff?",
        "options": [
          "Nein",
          "Ja, kaltes Wasser nimmt mehr Sauerstoff auf als warmes",
          "Ja, warmes Wasser enthält mehr Sauerstoff"
        ],
        "correct": 1,
        "expl": "Ja, kaltes Wasser kann mehr Sauerstoff aufnehmen als warmes."
      },
      {
        "num": 27,
        "q": "Was wirkt sich negativ auf die normale Tier- und Pflanzenwelt in Talsperrengewässern aus?",
        "options": [
          "Die intensive Sonneneinstrahlung",
          "Die häufige Änderung des Wasserstandes",
          "Die starke Abkühlung im Winter"
        ],
        "correct": 1,
        "expl": "Die häufige Änderung des Wasserstandes wirkt sich in Talsperren negativ aus."
      },
      {
        "num": 28,
        "q": "Was sind die fischereilichen Besonderheiten junger Baggergewässer?",
        "options": [
          "Geringer Nährstoffgehalt",
          "Hohe Wassertemperaturen im Sommer",
          "Geringer Sauerstoffgehalt in der Oberflächenzone"
        ],
        "correct": 0,
        "expl": "Junge Baggergewässer haben einen geringen Nährstoffgehalt."
      },
      {
        "num": 29,
        "q": "Wonach sollten sich Besatzmaßnahmen richten?",
        "options": [
          "Nach den finanziellen Möglichkeiten",
          "Nach ökologischen und fischereibiologischen Faktoren",
          "Nach den Wünschen der Mehrheit der Vereinsmitglieder"
        ],
        "correct": 1,
        "expl": "Besatzmaßnahmen richten sich nach ökologischen und fischereibiologischen Faktoren."
      },
      {
        "num": 30,
        "q": "Durch welche Abwässer kann im Gewässer Sauerstoffmangel entstehen?",
        "options": [
          "Durch organische, fäulnisfähige Abwässer",
          "Durch Betonschwemmwässer",
          "Durch saure Abwässer"
        ],
        "correct": 0,
        "expl": "Sauerstoffmangel entsteht durch organische, fäulnisfähige Abwässer."
      },
      {
        "num": 31,
        "q": "Warum wirken fäulnisfähige, organische Abwässer auf Gewässer und ihre Lebewelt schädlich?",
        "options": [
          "Weil die Eisbildung verzögert wird",
          "Weil bei ihrer Fäulnis Sauerstoff verbraucht wird",
          "Weil die Gewässerfarbe verändert wird"
        ],
        "correct": 1,
        "expl": "Bei der Fäulnis organischer Abwässer wird Sauerstoff verbraucht."
      },
      {
        "num": 32,
        "q": "Auf welche Art der Abwassereinwirkung deutet der Verlust der Schleimhaut bei Fischen hin?",
        "options": [
          "Auf Abwässer mit Schwebstoffen",
          "Auf ätzende Abwässer",
          "Auf organische Abwässer"
        ],
        "correct": 1,
        "expl": "Verlust der Schleimhaut deutet auf ätzende Abwässer hin."
      },
      {
        "num": 33,
        "q": "Warum sind landwirtschaftliche Abwässer für Fische schädlich?",
        "options": [
          "Weil ihr Abbau im Gewässer sehr viel Sauerstoff bindet",
          "Weil sie giftige Schwermetalle enthalten",
          "Weil sie erwärmt sind"
        ],
        "correct": 0,
        "expl": "Der Abbau landwirtschaftlicher Abwässer bindet sehr viel Sauerstoff."
      },
      {
        "num": 34,
        "q": "Welches Wasser ist meist sauerstoffarm?",
        "options": [
          "Das Quellwasser",
          "Das Teichwasser",
          "Das Flusswasser"
        ],
        "correct": 0,
        "expl": "Quellwasser ist meist sauerstoffarm."
      },
      {
        "num": 35,
        "q": "Warum sind Baustellenabwässer (Zement-, Beton- und Baukalkwässer) fischereischädlich?",
        "options": [
          "Weil sie stark alkalisch sind und die Kiemen verkleben",
          "Weil sie das Wasser stark trüben",
          "Weil sie Säuren enthalten"
        ],
        "correct": 0,
        "expl": "Baustellenabwässer sind stark alkalisch und verkleben die Kiemen."
      },
      {
        "num": 36,
        "q": "Was ist als erstes zu tun, wenn ein Fischsterben bemerkt wird?",
        "options": [
          "Der Gewässereigentümer ist mit Einschreibebrief zu benachrichtigen",
          "Die Polizei/Feuerwehr sowie das Ordnungsamt/Untere Wasserbehörde sind zu benachrichtigen",
          "Gar nichts, denn nur die Behörden sind berechtigt zu handeln"
        ],
        "correct": 1,
        "expl": "Zuerst Polizei/Feuerwehr sowie Ordnungsamt/Untere Wasserbehörde benachrichtigen."
      },
      {
        "num": 37,
        "q": "Wo müssen bei einem Fischsterben in einem Fließgewässer Wasserproben entnommen werden?",
        "options": [
          "Dicht über dem Grunde des Gewässers",
          "Nur in der Gewässermitte",
          "Zwischen den toten Fischen, aus verdächtigen Einleitungen sowie unterhalb und oberhalb derselben"
        ],
        "correct": 2,
        "expl": "Proben: zwischen toten Fischen, aus Einleitungen sowie ober- und unterhalb."
      },
      {
        "num": 38,
        "q": "Welchen Zweck hat die Entnahme von Wasserproben bei Fischsterben?",
        "options": [
          "Sie hat keinen Zweck",
          "Sie dient zur Ermittlung von Ursachen und Verursachern",
          "Sie dient der Beruhigung der Öffentlichkeit"
        ],
        "correct": 1,
        "expl": "Wasserproben dienen der Ermittlung von Ursachen und Verursachern."
      },
      {
        "num": 39,
        "q": "Welche Wassermenge je Probe ist für eine Untersuchung mindestens notwendig?",
        "options": [
          "1 Liter",
          "0,025 Liter",
          "10 Liter"
        ],
        "correct": 0,
        "expl": "Mindestens 1 Liter je Probe ist notwendig."
      },
      {
        "num": 40,
        "q": "Dürfen Fischeingeweide ins Wasser geworfen werden?",
        "options": [
          "Ja, weil Fische Eingeweide fressen",
          "Ja, denn hierdurch wird der Nährstoffgehalt des Wassers angereichert",
          "Nein"
        ],
        "correct": 2,
        "expl": "Nein, Fischeingeweide dürfen nicht ins Wasser geworfen werden."
      },
      {
        "num": 41,
        "q": "Welche Gewässer sind durch natürliche Säuren gefährdet?",
        "options": [
          "Solche, die durch Zuflüsse aus kalkarmen Gebieten, aus Fichtenbeständen oder aus Mooren gespeist werden",
          "Steinbruchgewässer und Kiesgruben",
          "Zu stark mit Fischen besetzte Gewässer"
        ],
        "correct": 0,
        "expl": "Gefährdet sind Gewässer aus kalkarmen Gebieten, Fichtenbeständen oder Mooren."
      },
      {
        "num": 42,
        "q": "Was sollte mit krankheitsverdächtigen toten Fischen geschehen?",
        "options": [
          "Sie sollten gekühlt und möglichst umgehend zu einer Untersuchungsstelle gebracht werden",
          "Sie sollten wegen der Ansteckungsgefahr nicht berührt werden",
          "Sie sind nicht weiter zu beachten"
        ],
        "correct": 0,
        "expl": "Verdächtige tote Fische gekühlt und rasch zur Untersuchungsstelle bringen."
      },
      {
        "num": 43,
        "q": "Was besagt der pH-Wert einer Wasserprobe?",
        "options": [
          "Er zeigt den Grad der Verschmutzung durch organische Stoffe an",
          "Er zeigt an, ob das Wasser sauer, neutral oder alkalisch reagiert",
          "Er zeigt den Phenolgehalt an"
        ],
        "correct": 1,
        "expl": "Der pH-Wert zeigt an, ob Wasser sauer, neutral oder alkalisch ist."
      },
      {
        "num": 44,
        "q": "Welche pH-Werte sind für unsere einheimischen Fische unbedenklich?",
        "options": [
          "3,5 bis 5",
          "6,5 bis 8,5",
          "9 bis 11 ,5"
        ],
        "correct": 1,
        "expl": "pH-Werte von 6,5 bis 8,5 sind für heimische Fische unbedenklich."
      },
      {
        "num": 45,
        "q": "Sind stark durch Lehm- und Tontrübe verschmutzte Abwässer von Baustellen fischereischädlich?",
        "options": [
          "Nein, sie sind unschädlich",
          "Ja, die Funktion der Kiemen kann durch Trübungsstoffe beeinträchtigt werden und den Erstickungstod herbeiführen",
          "Ja, weil solche Abwässer stark faulen"
        ],
        "correct": 1,
        "expl": "Ja, Trübungsstoffe können die Kiemenfunktion beeinträchtigen (Erstickung)."
      },
      {
        "num": 46,
        "q": "Welche chemischen Wasseruntersuchungen sollte ein Fischereiverein mindestens durchführen können?",
        "options": [
          "Gesamt-Phosphor-Gehalt, Eisengehalt",
          "pH-Wert, Sauerstoffgehalt, Temperatur",
          "Stickstoff-, Chrom- und Ammoniakgehalt"
        ],
        "correct": 1,
        "expl": "Mindestens pH-Wert, Sauerstoffgehalt und Temperatur."
      },
      {
        "num": 47,
        "q": "Hat die Kleintierlebewelt im Gewässer einen Nutzen, gegebenenfalls welchen?",
        "options": [
          "Nein",
          "Ja, sie ist die Ernährungsgrundlage u. a. für Fische",
          "Ja, sie versorgt das Wasser mit Sauerstoff"
        ],
        "correct": 1,
        "expl": "Ja, die Kleintierwelt ist die Ernährungsgrundlage u.a. für Fische."
      },
      {
        "num": 48,
        "q": "In welcher Fischregion der Fließgewässer sind regelmäßig die meisten Fischarten vorhanden?",
        "options": [
          "Äschenregion",
          "Brassenregion",
          "Barbenregion"
        ],
        "correct": 2,
        "expl": "Die meisten Fischarten kommen regelmäßig in der Barbenregion vor."
      },
      {
        "num": 49,
        "q": "Was ist ein Altwasser?",
        "options": [
          "Ein früherer (alter), als solcher erkennbarer Abschnitt eines Fließgewässers, der wassergefüllt ist",
          "Ein Gewässer, dessen Wasser gealtert ist",
          "Ein Gewässer mit überaltertem Fischbestand"
        ],
        "correct": 0,
        "expl": "Ein Altwasser ist ein erkennbarer, wassergefüllter alter Flussabschnitt."
      },
      {
        "num": 50,
        "q": "Können Fische aus einem durch Abwasser verursachten Fischsterben oder solche, die einen fremdartigen Geruch ausströmen, Pilzbefall oder Hautrötungen zeigen, gegessen oder verfüttert werden?",
        "options": [
          "Gegen den Genuss bestehen für Mensch und Tier keine Bedenken",
          "Der Genuss ist nur für den Menschen schädlich",
          "Die Fische sind ungenießbar für Mensch und Tier"
        ],
        "correct": 2,
        "expl": "Solche Fische sind für Mensch und Tier ungenießbar."
      },
      {
        "num": 51,
        "q": "Welche Angaben sind für die Fangstatistik wichtig?",
        "options": [
          "Fangdatum, Art, Länge und Gewicht des Fisches",
          "Witterung, Wassertemperatur und Köder",
          "Form und Färbung des Fisches sowie Dauer des Drills"
        ],
        "correct": 0,
        "expl": "Wichtig: Fangdatum, Art, Länge und Gewicht des Fisches."
      },
      {
        "num": 52,
        "q": "Wozu dient die Fangstatistik?",
        "options": [
          "Um Fänge besonders großer Fische nachzuweisen",
          "Als Unterlage für die fischereiliche Bewirtschaftung und für Schadenersatzforderung",
          "Sie dient keinem Zweck"
        ],
        "correct": 1,
        "expl": "Die Fangstatistik dient der Bewirtschaftung und Schadenersatzforderungen."
      },
      {
        "num": 53,
        "q": "Was ist beim Aussetzen von Fischen besonders zu beachten?",
        "options": [
          "Man muss geeignete Stellen auswählen; vor dem Aussetzen müssen die Fische temperiert werden",
          "Man muss die Einwilligung der Ober- und Unterlieger einholen",
          "Man muss Schaulustige fernhalten"
        ],
        "correct": 0,
        "expl": "Geeignete Stellen wählen und die Fische vor dem Aussetzen temperieren."
      },
      {
        "num": 54,
        "q": "Was ist beim Kauf der Satzfische vor allem zu beachten?",
        "options": [
          "Die Fische müssen frei von Parasiten und erkennbaren Krankheitserscheinungen sein",
          "Die Fische sollen gleiche Größe und gleiches Gewicht haben",
          "Die Fische müssen preiswert sein"
        ],
        "correct": 0,
        "expl": "Satzfische müssen frei von Parasiten und Krankheitserscheinungen sein."
      },
      {
        "num": 55,
        "q": "Was verbirgt sich hinter dem Wort Wasserpest?",
        "options": [
          "Eine Wasservergiftung",
          "Eine Fischkrankheit",
          "Eine Wasserpflanzenart"
        ],
        "correct": 2,
        "expl": "Die Wasserpest ist eine Wasserpflanzenart."
      },
      {
        "num": 56,
        "q": "Wodurch kann das biologische Gleichgewicht in Gewässern u. a. gestört werden?",
        "options": [
          "Durch das Vorkommen von Raubfischen",
          "Durch einseitigen Fischbesatz",
          "Durch Verbot des Angelns mit Köderfischen"
        ],
        "correct": 1,
        "expl": "Einseitiger Fischbesatz kann das biologische Gleichgewicht stören."
      },
      {
        "num": 57,
        "q": "Können frisch ausgekieste Baggerseen schon fischereilich genutzt werden?",
        "options": [
          "Ja, ohne Einschränkung",
          "Nein, erst nach Entwicklung des tierischen und pflanzlichen Lebens",
          "Ja, sofort nach Durchführung eines starken Fischbesatzes"
        ],
        "correct": 1,
        "expl": "Nein, erst nach Entwicklung des tierischen und pflanzlichen Lebens."
      },
      {
        "num": 58,
        "q": "Welches Merkmal kennzeichnet ein fruchtbares, stehendes Gewässer?",
        "options": [
          "Klares Wasser (große Sichttiefe)",
          "Starker Überwasserpflanzenwuchs",
          "Durch Plankton getrübtes Wasser (geringe Sichttiefe)"
        ],
        "correct": 2,
        "expl": "Ein fruchtbares Gewässer ist durch Plankton getrübt (geringe Sichttiefe)."
      },
      {
        "num": 59,
        "q": "Sind Altarme eines Gewässers ökologisch besonders wertvoll?",
        "options": [
          "Nein, weil sie zur Verlandung neigen und nur noch wenigen Tieren und Pflanzen geeigneten Lebensraum bieten",
          "Ja, weil sie für Fische, Amphibien und Vögel geeignete Lebensbedingungen bieten",
          "Ja, weil ihr Wasser leicht zur Versauerung neigt"
        ],
        "correct": 1,
        "expl": "Ja, Altarme bieten Fischen, Amphibien und Vögeln Lebensraum."
      },
      {
        "num": 60,
        "q": "Haben flache Ufer in einem Gewässer eine besondere fischereiliche Bedeutung?",
        "options": [
          "Nein, weil die Fische dort besonders gut von fischfressenden Vögeln erbeutet werden können",
          "Ja, weil sich die Fische hier gerne aufhalten, um zu überwintern",
          "Ja, weil sie eine sehr starke Fischnährtierproduktion aufweisen und für viele Fische und andere Tierarten ideale Fortpflanzungs- und Aufwuchszonen bilden"
        ],
        "correct": 2,
        "expl": "Flache Ufer sind wichtige Nährtier- und Fortpflanzungszonen."
      },
      {
        "num": 61,
        "q": "Welche fischereiliche Bedeutung haben Kolke und Gumpen in fließenden Gewässern?",
        "options": [
          "Sie können sich nachteilig auswirken, weil in ihnen das Wasser sauerstoffarm wird",
          "Sie werden von Fischen gemieden",
          "Sie sind bevorzugte Standplätze der Fische"
        ],
        "correct": 2,
        "expl": "Kolke und Gumpen sind bevorzugte Standplätze der Fische."
      },
      {
        "num": 62,
        "q": "Warum ist in einigen Fällen bei nachhaltiger Nutzung des Fischbestands künstlicher Fischbesatz erforderlich?",
        "options": [
          "Weil zu viele Jungfische durch Raubfische gefressen werden",
          "Weil durch die von Menschenhand vorgenommenen Veränderungen an und in den Gewässern viele natürliche Laich- und Aufwuchsplätze zerstört worden sind",
          "Weil die Mehrzahl der Laichfische gefangen wird und somit keine ausreichende Vermehrung mehr möglich ist"
        ],
        "correct": 1,
        "expl": "Besatz ist nötig, weil natürliche Laich- und Aufwuchsplätze zerstört wurden."
      },
      {
        "num": 63,
        "q": "Welche Hegemaßnahme ist zu treffen, wenn in einem Gewässer der Bestand an Weißfischen und Flussbarschen überhandnimmt?",
        "options": [
          "Verstärkter Besatz mit den gleichen Arten",
          "Intensives Befischen und Besatz mit geeigneten Raubfischen",
          "Nichts, denn der Bestand geht ohnehin wegen \"Degeneration\" zugrunde"
        ],
        "correct": 1,
        "expl": "Intensiv befischen und mit geeigneten Raubfischen besetzen."
      },
      {
        "num": 64,
        "q": "Wie soll sich der Fischer verhalten, wenn er einen krankheitsverdächtigen Fisch fängt?",
        "options": [
          "Er soll den Fisch nach Möglichkeit dem zuständigen Gewässerwart oder Fischereiaufseher zwecks weiterer Veranlassung übergeben",
          "Er soll den Fisch töten und vergraben",
          "Er soll den Fisch möglichst schnell wieder in das Gewässer zurücksetzen, damit dieser keinen weiteren Schaden erleidet"
        ],
        "correct": 0,
        "expl": "Den Fisch dem Gewässerwart oder Fischereiaufseher übergeben."
      },
      {
        "num": 65,
        "q": "Was ist typisch für das stehende Zandergewässer?",
        "options": [
          "Es ist tief, klar und nahrungsarm",
          "Es ist flach, hartgründig und sommertrüb",
          "Es ist klein, stark verkrautet und recht warm"
        ],
        "correct": 1,
        "expl": "Das Zandergewässer ist flach, hartgründig und sommertrüb."
      },
      {
        "num": 66,
        "q": "Ist es sinnvoll, in einem Gewässer große Hechte zu schonen?",
        "options": [
          "Ja, denn große Fische ergeben größere Erträge pro ha Gewässerfläche",
          "Die Größe der Fische spielt keine Rolle",
          "Nein, denn größere Fische sind schlechte Futterverwerter"
        ],
        "correct": 2,
        "expl": "Nein, größere Hechte sind schlechte Futterverwerter. (unsicher – bitte prüfen)"
      },
      {
        "num": 67,
        "q": "Ist das Einbringen großer Mengen Anfuttermittel schädlich?",
        "options": [
          "Nein, die Fische wachsen dadurch besser ab",
          "Nein, es wird ohne Folgen für das Gewässer zersetzt",
          "Ja, es fördert die Eutrophierung des Gewässers"
        ],
        "correct": 2,
        "expl": "Ja, große Mengen Anfutter fördern die Eutrophierung."
      },
      {
        "num": 68,
        "q": "Können eingebrachte Laichhilfen als sinnvoll angesehen werden?",
        "options": [
          "Nein, sie werden von den Fischen grundsätzlich nicht angenommen",
          "Ja, wenn aufgrund der Strukturarmut des Gewässers ein Mangel an natürlichen Laichplätzen besteht",
          "Nein, sie verrotten und belasten das Gewässer mit fäulnisfähigen Stoffen"
        ],
        "correct": 1,
        "expl": "Ja, bei Strukturarmut und Mangel an natürlichen Laichplätzen sinnvoll."
      },
      {
        "num": 69,
        "q": "Wozu dient der Hegeplan?",
        "options": [
          "Zur Festlegung fischereilicher Maßnahmen an einem Gewässer unter ökologischen Gesichtspunkten",
          "Zur finanziellen Gleichbehandlung der Genossenschaftsmitglieder",
          "Zur Erhöhung der Fangausbeute"
        ],
        "correct": 0,
        "expl": "Der Hegeplan legt fischereiliche Maßnahmen unter ökologischen Gesichtspunkten fest."
      },
      {
        "num": 70,
        "q": "Welche fischereilichen Maßnahmen sollten an Wasserkraftanlagen getroffen werden?",
        "options": [
          "Keine, weil Wasserkraft eine umweltfreundliche Technologie ist",
          "Der Betreiber der Anlage sollte ausreichend Fischbesatz tätigen",
          "Für Fischwanderwege, ausreichende Restwassermengen sowie eine Schutzvorrichtung vor den Turbinen sollte gesorgt sein"
        ],
        "correct": 2,
        "expl": "Nötig sind Fischwanderwege, ausreichende Restwassermengen und Turbinenschutz."
      },
      {
        "num": 71,
        "q": "Können Steinschüttungen zur Uferbefestigung ein Problem für Fische sein?",
        "options": [
          "Ja, denn sie verhindern die natürliche seitliche Verlagerung und Gestaltung des Gewässers",
          "Nein, denn sie schaffen Unterstände für gefährdete Arten und verhindern, dass unterspülte Bäume ins Wasser fallen",
          "Ja, denn sie werden von den Jugendstadien zahlreicher Fischparasiten bewohnt"
        ],
        "correct": 0,
        "expl": "Ja, Steinschüttungen verhindern die natürliche seitliche Gewässergestaltung."
      },
      {
        "num": 72,
        "q": "Können Querbauwerke wie Wehre und Sohlabstürze in Fließgewässern Fischbestände beeinträchtigen?",
        "options": [
          "Ja, denn an diesen Stellen wird Sauerstoff ins Wasser eingebracht",
          "Ja, denn sie behindern den Fischwechsel",
          "Nein, Querbauwerke sind sogar von Vorteil, denn sie verhindern, dass Besatzfische den Gewässerabschnitt verlassen"
        ],
        "correct": 1,
        "expl": "Ja, Querbauwerke behindern den Fischwechsel."
      },
      {
        "num": 73,
        "q": "Woran erkennt man ein Fischsterben, das durch eine Krankheit hervorgerufen wird?",
        "options": [
          "Das Fischsterben vernichtet meist alle im Gewässer vorkommenden Fische innerhalb kurzer Zeit",
          "Das Fischsterben ist in der Regel schleichend und erfasst nur eine oder miteinander verwandte Fischarten",
          "Das Fischsterben erstreckt sich nur auf die am Boden des Gewässers lebenden Fische"
        ],
        "correct": 1,
        "expl": "Krankheitsbedingtes Sterben ist schleichend und betrifft meist verwandte Arten."
      },
      {
        "num": 74,
        "q": "Woran erkennt man ein Fischsterben, das durch Abwässer hervorgerufen wird?",
        "options": [
          "Das Fischsterben vernichtet meist alle im Gewässer vorkommenden Fische innerhalb kurzer Zeit",
          "Das Fischsterben ist meistens schleichend und erfasst in der Regel nur bestimmte Fischarten",
          "Das Fischsterben erstreckt sich nur auf die am Boden des Gewässers lebenden Fische"
        ],
        "correct": 0,
        "expl": "Abwasserbedingtes Sterben vernichtet meist alle Fische in kurzer Zeit."
      },
      {
        "num": 75,
        "q": "Wozu dient ein Umgehungsgerinne?",
        "options": [
          "Sauerstoff in das Gewässer einzutragen",
          "Kanusportler um ein Laichschongebiet herumzuführen",
          "Ein Querbauwerk für wandernde Fische durchgängig zu machen"
        ],
        "correct": 2,
        "expl": "Ein Umgehungsgerinne macht ein Querbauwerk für wandernde Fische durchgängig."
      },
      {
        "num": 76,
        "q": "Wie soll mit gefangenen Fischen verfahren werden, die eine Farbmarkierung aufweisen oder mit einem Sender versehen sind?",
        "options": [
          "Der Fisch soll schonend zurückgesetzt werden. Angaben zu Fischart, Länge und Fangort sollen wenn möglich mit Foto den Fischereibehörden oder –verbänden gemeldet werden",
          "Der Fisch soll als Kuriosum sofort der örtlichen Tageszeitung gemeldet werden",
          "Der Fisch soll unbedingt entnommen und tiefgekühlt dem Fischgesundheitsdienst übergeben werden"
        ],
        "correct": 0,
        "expl": "Schonend zurücksetzen und Daten (Art, Länge, Fangort, Foto) melden."
      },
      {
        "num": 77,
        "q": "Was soll für Fischwanderhilfen gelten?",
        "options": [
          "Die Sohle muss möglichst glatt sein, damit die Fische keine Flossenverletzungen erleiden",
          "Die Wasserführung muss ausreichend sein, damit sich eine starke Leitströmung ergibt",
          "Die Wanderhilfe darf auf keinen Fall länger als 20 m sein"
        ],
        "correct": 1,
        "expl": "Die Wasserführung muss eine ausreichende Leitströmung erzeugen."
      }
    ]
  },
  {
    "id": "D",
    "name": "Natur- und Tierschutz",
    "marker": "D. NATUR- UND TIERSCHUTZ",
    "questions": [
      {
        "num": 1,
        "q": "Was ist unter Fluchtdistanz zu verstehen?",
        "options": [
          "Die Entfernung, ab welcher ein Tier vor einem wirklichen oder vermeintlichen Feind flüchtet",
          "Die von einem gehakten Fisch während der Drillphase zurückgelegte Distanz",
          "Die im Castingsport beim Werfen erzielte Weite"
        ],
        "correct": 0,
        "expl": "Fluchtdistanz: Entfernung, ab der ein Tier vor einem Feind flüchtet."
      },
      {
        "num": 2,
        "q": "Welche Maßnahmen sind u. a. für den Schutz des Eisvogels erforderlich?",
        "options": [
          "Besatz aller Gewässer mit kleinen Goldorfen",
          "Einbringen von Pfählen ins Wasser, damit der Vogel dort auf Beute lauern kann",
          "Schaffung von Steilufern und Schutz geeigneter Nistbereiche"
        ],
        "correct": 2,
        "expl": "Steilufer schaffen und geeignete Nistbereiche des Eisvogels schützen."
      },
      {
        "num": 3,
        "q": "Welche Wasserinsektenart ist gesetzlich geschützt?",
        "options": [
          "Die Rote Zuckmückenlarve",
          "Der Kolbenwasserkäfer",
          "Keine"
        ],
        "correct": 2,
        "expl": "Keine der genannten Wasserinsektenarten ist gesetzlich geschützt."
      },
      {
        "num": 4,
        "q": "Was hat nach dem Landen eines maßigen und verwertbaren Fisches sofort zu geschehen?",
        "options": [
          "Wiegen und Längenmessung",
          "Entfernen des Angelhakens",
          "Betäuben und Töten"
        ],
        "correct": 2,
        "expl": "Ein maßiger, verwertbarer Fisch ist sofort zu betäuben und zu töten."
      },
      {
        "num": 5,
        "q": "Wie wird der Fisch waidgerecht getötet?",
        "options": [
          "Der Fisch bleibt auf dem Land, bis er erstickt ist",
          "Durch Einschnitt an der Schwanzwurzel",
          "Durch einen Schlag auf den Gehirnschädel und durch Herzstich"
        ],
        "correct": 2,
        "expl": "Waidgerecht: Schlag auf den Gehirnschädel (Betäubung) und Herzstich."
      },
      {
        "num": 6,
        "q": "Welches Instrument wird zur Tötung des Fisches benutzt?",
        "options": [
          "Jeder beliebige Gegenstand",
          "Ein Stein",
          "Schlagholz und Messer"
        ],
        "correct": 2,
        "expl": "Verwendet werden Schlagholz und Messer."
      },
      {
        "num": 7,
        "q": "Gefährden Molchlarven und Kaulquappen Fischbrut?",
        "options": [
          "Ja, sie leben ausschließlich von Fischbrut",
          "Ja, sie übertragen gefährliche Außenparasiten",
          "Nein"
        ],
        "correct": 2,
        "expl": "Nein, Molchlarven und Kaulquappen gefährden die Fischbrut nicht."
      },
      {
        "num": 8,
        "q": "Was tut man, wenn der Fisch den Angelhaken zu tief geschluckt hat?",
        "options": [
          "Der Haken wird unter Kraftaufwendung aus dem Fisch entfernt",
          "Der Fisch wird sofort waidgerecht getötet",
          "Der Haken wird im Fischkörper belassen, bis der Fisch erstickt ist"
        ],
        "correct": 1,
        "expl": "Bei tief geschlucktem Haken ist der Fisch sofort waidgerecht zu töten."
      },
      {
        "num": 9,
        "q": "Was macht man, wenn man einen untermaßigen Fisch gefangen hat?",
        "options": [
          "Man schneidet die Schnur durch und lässt den Fisch frei",
          "Man löst den Fisch vorsichtig mit nassen Händen vom Haken und setzt ihn ins Wasser zurück",
          "Man hält den Fisch mit einem trockenen Tuch und löst ihn vorsichtig vom Haken"
        ],
        "correct": 1,
        "expl": "Untermaßigen Fisch mit nassen Händen lösen und zurücksetzen."
      },
      {
        "num": 10,
        "q": "Was ist zu tun, wenn sich in einem Gewässer große Bestände der Weißen Seerose oder der Gelben Teichrose angesiedelt haben?",
        "options": [
          "Die Bestände dieser Pflanze sind zu entfernen",
          "Die genannten Pflanzen sind gesetzlich geschützt und dürfen nicht entfernt werden",
          "Das Gedeihen dieser Pflanzen ist durch Düngung zu fördern"
        ],
        "correct": 1,
        "expl": "See- und Teichrose sind gesetzlich geschützt und dürfen nicht entfernt werden."
      },
      {
        "num": 11,
        "q": "Welche der genannten Vogelarten sind stark gefährdet?",
        "options": [
          "Zwergtaucher und Großer Brachvogel",
          "Stockente und Lachmöwe",
          "Höckerschwan und Blessralle"
        ],
        "correct": 0,
        "expl": "Stark gefährdet: Zwergtaucher und Großer Brachvogel."
      },
      {
        "num": 12,
        "q": "Wo kann man sich informieren, welche Tiere und Pflanzen in Nordrhein-Westfalen gefährdet sind?",
        "options": [
          "In der sogenannten Roten Liste",
          "Im Landesfischereigesetz",
          "In der Landesfischereiverordnung"
        ],
        "correct": 0,
        "expl": "Auskunft gibt die sogenannte Rote Liste."
      },
      {
        "num": 13,
        "q": "Wie wird der untermaßige Fisch behandelt?",
        "options": [
          "Man fasst ihn mit nassen Händen an, entfernt den Haken vorsichtig und setzt den Fisch ins Wasser zurück",
          "Man nimmt ihn schnell vom Haken und wirft ihn ins Wasser zurück",
          "Man setzt ihn vorerst in einen Setzkescher"
        ],
        "correct": 0,
        "expl": "Mit nassen Händen anfassen, Haken vorsichtig lösen und zurücksetzen."
      },
      {
        "num": 14,
        "q": "Wo legen Molche ihre Eier ab?",
        "options": [
          "In großen Flüssen und Kanälen",
          "In feuchten Laubwäldern",
          "In Tümpeln und Gräben"
        ],
        "correct": 2,
        "expl": "Molche legen ihre Eier in Tümpeln und Gräben ab."
      },
      {
        "num": 15,
        "q": "Ist die Beseitigung von Tümpeln und anderen Kleingewässern eine naturfeindliche Maßnahme?",
        "options": [
          "Nein, weil hierdurch gefährliche Brutstätten von Stechmücken vernichtet werden",
          "Ja, weil der Lebensraum für viele Tiere und Pflanzen zerstört wird",
          "Nein, weil wertvolle landwirtschaftliche Produktionsflächen gewonnen werden"
        ],
        "correct": 1,
        "expl": "Ja, die Beseitigung zerstört Lebensraum für viele Tiere und Pflanzen."
      },
      {
        "num": 16,
        "q": "Warum suchen Kröten im Frühjahr kleine Gewässer auf?",
        "options": [
          "Weil sie wenig standorttreu sind",
          "Weil sie in der sommerlichen Hitze vertrocknen würden",
          "Weil sie im Wasser ihren Laich absetzen wollen"
        ],
        "correct": 2,
        "expl": "Kröten suchen kleine Gewässer auf, um dort ihren Laich abzusetzen."
      },
      {
        "num": 17,
        "q": "Welche Reptilienart ist auf Gewässer und Feuchtgebiete angewiesen?",
        "options": [
          "Die Sandviper",
          "Die Zaun- und Smaragdeidechse",
          "Die Ringelnatter"
        ],
        "correct": 2,
        "expl": "Die Ringelnatter ist auf Gewässer und Feuchtgebiete angewiesen."
      },
      {
        "num": 18,
        "q": "Welche der aufgeführten Maßnahmen ist als naturfeindlich anzusehen?",
        "options": [
          "Überbesatz mit Fischen",
          "Erstbepflanzung eines Gewässers mit Unterwasser- und Schwimmblattpflanzen",
          "Bau von Fischaufstiegen an Wehren"
        ],
        "correct": 0,
        "expl": "Überbesatz mit Fischen ist eine naturfeindliche Maßnahme."
      },
      {
        "num": 19,
        "q": "Wie kann ein sinnvoller Beitrag zur Hebung des Krötenbestandes geleistet werden?",
        "options": [
          "Durch Importieren von Kröten aus außereuropäischen Ländern",
          "Durch Schutz der für die Krötenvermehrung geeigneten Laichgewässer",
          "Durch starken Fischbesatz in Laichgewässern"
        ],
        "correct": 1,
        "expl": "Durch Schutz der für die Krötenvermehrung geeigneten Laichgewässer."
      },
      {
        "num": 20,
        "q": "Warum sollte sich der Angler in Uferbereichen mit Schilf und Röhricht besonders umsichtig verhalten?",
        "options": [
          "Weil die Angelschnur in den Pflanzen hängen bleiben kann",
          "Weil der Drill und die Landung des gehakten Fisches schwierig werden könnten",
          "Weil dort Wasservögel nisten oder nach Nahrung suchen und die Anwesenheit eines Anglers die Tiere beunruhigen könnte"
        ],
        "correct": 2,
        "expl": "Dort nisten Wasservögel oder suchen Nahrung – der Angler könnte sie stören."
      },
      {
        "num": 21,
        "q": "Sollten Baggerseen Flachwasserzonen mit Unterwasserpflanzen, Schwimmblattpflanzen und Schilfgürteln aufweisen?",
        "options": [
          "Ja, sie fördern das Aufkommen von Fischnährtieren und Fischbrut, dienen als Laichplatz für Fische und Amphibien sowie für andere Wassertiere und bieten der Vogelwelt Nistplätze, Schutz und Nahrung",
          "Nein, denn sie verkleinern die befischbare Wasserfläche, fördern die Bildung von Faulschlamm und beschatten das Gewässer",
          "Nein, denn in solchen Zonen vermehren sich vorwiegend Raubfische"
        ],
        "correct": 0,
        "expl": "Ja, Flachwasserzonen fördern Nährtiere, Brut, Laich- und Nistplätze."
      },
      {
        "num": 22,
        "q": "In welcher Reihenfolge muss nach dem Landen des Fisches vorgegangen werden?",
        "options": [
          "Betäuben, töten, Haken entfernen, messen",
          "Messen, betäuben, töten, Haken entfernen",
          "Betäuben, messen, töten, Haken entfernen"
        ],
        "correct": 0,
        "expl": "Reihenfolge: Betäuben, töten, Haken entfernen, messen."
      },
      {
        "num": 23,
        "q": "Wie lange soll ein gehakter Fisch gedrillt werden?",
        "options": [
          "Solange wie nötig, um ihn schonend zu landen",
          "Bis der Angler ermüdet",
          "Mindestens 10 Minuten"
        ],
        "correct": 0,
        "expl": "So lange wie nötig, um den Fisch schonend zu landen."
      },
      {
        "num": 24,
        "q": "In welcher Zeit ist an den Gewässern besondere Rücksicht auf Wasservögel zu nehmen?",
        "options": [
          "Während der Morgen- und Abenddämmerung",
          "An trüben Tagen wegen der geringen Sichtweite der Vögel",
          "Während der Brut und Aufzucht der Jungvögel im Frühjahr und Frühsommer"
        ],
        "correct": 2,
        "expl": "Während Brut und Aufzucht der Jungvögel im Frühjahr und Frühsommer."
      },
      {
        "num": 25,
        "q": "Wann sind einige Wasservögel infolge der Mauser flugunfähig?",
        "options": [
          "Wenn die Gewässer zugefroren sind",
          "Während der Brut",
          "Meistens im Juli bis September"
        ],
        "correct": 2,
        "expl": "Durch die Mauser sind einige Wasservögel meist von Juli bis September flugunfähig."
      },
      {
        "num": 26,
        "q": "Warum muss bei der Hechtangelei ein Stahlvorfach eingesetzt werden?",
        "options": [
          "Damit der Köder besser geführt werden kann",
          "Damit der gehakte Hecht die Schnur nicht durchbeißen kann",
          "Es muss kein Stahlvorfach eingesetzt werden"
        ],
        "correct": 1,
        "expl": "Das Stahlvorfach verhindert, dass der Hecht die Schnur durchbeißt."
      },
      {
        "num": 27,
        "q": "Warum ist ein maßiger und verwertbarer Fisch nach dem Fang sofort zu töten?",
        "options": [
          "Damit der Fisch nicht an Gewicht verliert",
          "Damit der Fisch ordentlich gemessen werden kann",
          "Damit dem Fisch unnötiges Leiden erspart bleibt"
        ],
        "correct": 2,
        "expl": "Sofortiges Töten erspart dem Fisch unnötiges Leiden."
      },
      {
        "num": 28,
        "q": "Was bedeutet waidgerechtes Angeln?",
        "options": [
          "Eine spezielle Methode, unter Weiden zu angeln",
          "Waidgerechtigkeit ist ein Begriff aus der Jägersprache und hat mit dem Angeln nichts zu tun",
          "Das Fangen, Töten, Versorgen und Verwerten der Fische im Sinne des Tierschutzgesetzes"
        ],
        "correct": 2,
        "expl": "Waidgerecht: Fangen, Töten, Versorgen und Verwerten im Sinne des Tierschutzes."
      },
      {
        "num": 29,
        "q": "Ist es richtig, sich seinen Angelplatz in der Nähe einer Eisvogelniströhre zu wählen?",
        "options": [
          "Ja, wo Eisvögel nisten, gibt es auch viele Fische",
          "Nein, das Angeln an Steilwänden ist gefährlich und daher generell untersagt",
          "Nein, Niströhren von Eisvögeln sind weiträumig zu umgehen, um das Brutgeschäft nicht zu stören"
        ],
        "correct": 2,
        "expl": "Nein, Eisvogel-Niströhren sind weiträumig zu umgehen."
      },
      {
        "num": 30,
        "q": "Warum sollte die Angelschnur immer frei von schadhaften Stellen sein?",
        "options": [
          "Damit die Fische schnell und sicher gelandet werden können",
          "Damit die Hersteller und Händler gute Geschäfte machen",
          "Damit die Rolle nicht beschädigt wird"
        ],
        "correct": 0,
        "expl": "Eine intakte Schnur sichert ein schnelles, sicheres Landen des Fisches."
      },
      {
        "num": 31,
        "q": "Müssen ausgelegte Angeln ständig überwacht werden?",
        "options": [
          "Nein, der Fisch hakt sich oft selber",
          "Ja, damit der Fisch nicht durch anhaltende, erfolglose Fluchtversuche Stress erleidet",
          "Ja, damit sie nicht gestohlen werden"
        ],
        "correct": 1,
        "expl": "Ja, sonst erleidet der Fisch durch erfolglose Fluchtversuche Stress."
      },
      {
        "num": 32,
        "q": "Bezieht sich das Tierschutzgesetz auch auf Fische?",
        "options": [
          "Nein, es bezieht sich nur auf Säugetiere",
          "Nein, im Wasser lebende Organismen sind davon nicht betroffen",
          "Ja, auch Fischen dürfen nicht ohne vernünftigen Grund Schmerzen, Leiden oder Schäden zugefügt werden"
        ],
        "correct": 2,
        "expl": "Ja, auch Fischen dürfen nicht ohne vernünftigen Grund Leiden zugefügt werden."
      },
      {
        "num": 33,
        "q": "Welche Wasserpflanzen sind gesetzlich geschützt und dürfen nicht entfernt werden?",
        "options": [
          "Teichlinsen und Rohrkolben",
          "Weiße See- und Gelbe Teichrose",
          "Wasserpest, Schilf und Tausendblatt"
        ],
        "correct": 1,
        "expl": "Geschützt sind Weiße See- und Gelbe Teichrose."
      },
      {
        "num": 34,
        "q": "An welchen Gewässern und Gewässerabschnitten kann man die Wasseramsel beobachten?",
        "options": [
          "An Kiesgruben mit seichten Ufern",
          "Im Mündungsbereich der Flüsse",
          "Im Quellbereich und an Bächen der Mittelgebirge"
        ],
        "correct": 2,
        "expl": "Die Wasseramsel lebt im Quellbereich und an Bächen der Mittelgebirge."
      },
      {
        "num": 35,
        "q": "Welche der genannten Tierarten gehören zu den Amphibien?",
        "options": [
          "Wasserschildkröte und Griechische Landschildkröte",
          "Kreuzotter und Würfelnatter",
          "Wasserfrosch und Gelbbauchunke"
        ],
        "correct": 2,
        "expl": "Amphibien: Wasserfrosch und Gelbbauchunke."
      },
      {
        "num": 36,
        "q": "Wovon ernähren sich Libellen hauptsächlich?",
        "options": [
          "Von Fischbrut",
          "Von Insekten",
          "Von Wasserpflanzen"
        ],
        "correct": 1,
        "expl": "Libellen ernähren sich hauptsächlich von Insekten."
      },
      {
        "num": 37,
        "q": "Kann es in Naturschutzgebieten sinnvoll sein, das Angeln zu beschränken?",
        "options": [
          "Nein, ein Angler stellt für Tiere und Pflanzen niemals eine Störung dar",
          "Ja, wenn der besondere Schutzzweck nur so erreichbar ist",
          "Nein, Angeln ist an allen Gewässern erlaubt"
        ],
        "correct": 1,
        "expl": "Ja, wenn der besondere Schutzzweck nur so erreichbar ist."
      },
      {
        "num": 38,
        "q": "Ist regelmäßiger Fischbesatz zur Bestandserhaltung notwendig?",
        "options": [
          "Ja, denn Fischpopulationen unterliegen keiner natürlichen Regulation",
          "Nein, wenn ein natürliches Brutaufkommen und die Nahrungsverhältnisse im Gewässer eine normale Entwicklung des Fischbestandes ermöglichen",
          "Ja, sonst stirbt der Fischbestand aus"
        ],
        "correct": 1,
        "expl": "Nein, wenn natürliche Vermehrung und Nahrung eine normale Entwicklung erlauben."
      },
      {
        "num": 39,
        "q": "Sollen Kleinfische zum Besatz bei Wiederansiedlungsmaßnahmen aus demselben Gewässersystem stammen?",
        "options": [
          "Nein, damit es nicht zu Inzucht kommt",
          "Ja, damit die genetische Identität der lokalen Bestände erhalten bleibt",
          "Die Wahl der Besatzfische sollte sich nach dem Preis richten"
        ],
        "correct": 1,
        "expl": "Ja, damit die genetische Identität der lokalen Bestände erhalten bleibt."
      },
      {
        "num": 40,
        "q": "Gefährden weggeworfene Schnurreste die Umwelt?",
        "options": [
          "Nein, denn die Schnur verrottet sehr schnell",
          "Nein, weggeworfene Schnurreste verschandeln nur die Landschaft",
          "Ja, sie sind eine Gefahr für die Tierwelt"
        ],
        "correct": 2,
        "expl": "Ja, Schnurreste sind eine Gefahr für die Tierwelt."
      },
      {
        "num": 41,
        "q": "Was ist beim Kauf von Satzfischen vor allem zu beachten?",
        "options": [
          "Das Geschlechterverhältnis muss 1:1 betragen, damit eine erfolgreiche Fortpflanzung gewährleistet ist",
          "Die Fische sollen gleiche Größe und gleiches Gewicht haben, damit sie sich nicht gegenseitig Konkurrenz machen",
          "Die Fische sollten möglichst aus demselben Gewässersystem (Einzugsgebiet) stammen, in dem das zu besetzende Gewässer liegt"
        ],
        "correct": 2,
        "expl": "Satzfische sollten aus demselben Gewässersystem stammen."
      },
      {
        "num": 42,
        "q": "Wie lange dauert die Brutzeit des Eisvogels?",
        "options": [
          "Februar bis Mai",
          "März bis Juni",
          "März bis September"
        ],
        "correct": 2,
        "expl": "Die Brutzeit des Eisvogels reicht von März bis September. (unsicher – bitte prüfen)"
      },
      {
        "num": 43,
        "q": "Sie wollen an einem See einen Angelplatz schaffen. Dürfen Sie zu diesem Zweck eine Schneise in einem ausgedehnten Schilfgürtel freischneiden?",
        "options": [
          "Ja, da Sie als zur Ausübung der Fischerei Berechtigter das Uferbenutzungsrecht haben",
          "Nein",
          "Nur außerhalb von Natur- und Landschaftsschutzgebieten"
        ],
        "correct": 1,
        "expl": "Nein, einen Schilfgürtel darf man dafür nicht freischneiden."
      },
      {
        "num": 44,
        "q": "Welche Tätigkeiten sind nach dem Fang eines maßigen, verwertbaren Fisches vorzunehmen?",
        "options": [
          "landen, wiegen, fotografieren, töten",
          "landen, Haken lösen, Wunden versorgen, zurücksetzen",
          "landen, betäuben, töten, Haken lösen"
        ],
        "correct": 2,
        "expl": "Reihenfolge: landen, betäuben, töten, Haken lösen."
      },
      {
        "num": 45,
        "q": "Wie ist ein Fisch waidgerecht zu töten?",
        "options": [
          "Er wird unmittelbar nach dem Fang ohne vorherige Betäubung durch einen Herzstich getötet",
          "Er wird mit einem Schlagholz durch einen Schlag auf den Kopf betäubt und dann durch einen Herzstich getötet",
          "Er wird an der Luft aufbewahrt, bis keine Kiemendeckelbewegung mehr erkennbar ist, und dann ausgeweidet"
        ],
        "correct": 1,
        "expl": "Mit dem Schlagholz auf den Kopf betäuben, dann durch Herzstich töten."
      }
    ]
  },
  {
    "id": "E",
    "name": "Gerätekunde",
    "marker": "E. GERÄTEKUNDE",
    "questions": [
      {
        "num": 1,
        "q": "Welche Eigenschaften sollte eine Angelrute haben?",
        "options": [
          "Sie muss einen extrem langen Korkgriff haben",
          "Sie muss grundsätzlich eine weiche Spitzenaktion haben",
          "Man muss mit ihr gut werfen und den Fisch sicher landen können"
        ],
        "correct": 2,
        "expl": "Mit der Rute muss man gut werfen und den Fisch sicher landen können."
      },
      {
        "num": 2,
        "q": "Welcher Schnurring einer Rute ist am stärksten belastet?",
        "options": [
          "Der Spitzenring",
          "Alle Ringe",
          "Der erste Ring nach der Rolle"
        ],
        "correct": 0,
        "expl": "Der Spitzenring ist am stärksten belastet."
      },
      {
        "num": 3,
        "q": "Wodurch unterscheidet sich der Rutengriff einer Spinnrute von einer Fliegenrute?",
        "options": [
          "Durch eine Ausbuchtung für den Daumen",
          "Durch unterschiedliche Längen",
          "Durch die Anbringung des Rollenhalters vor oder hinter der Wurfhand"
        ],
        "correct": 2,
        "expl": "Unterschied: Rollenhalter vor oder hinter der Wurfhand."
      },
      {
        "num": 4,
        "q": "Welche der drei Rollentypen (Stationär-, Multi-, Nottinghamrolle) werden heute noch verwendet?",
        "options": [
          "Alle drei",
          "Die Stationär- und die Nottinghamrolle",
          "Die Multirolle"
        ],
        "correct": 0,
        "expl": "Alle drei Rollentypen werden heute noch verwendet."
      },
      {
        "num": 5,
        "q": "Wodurch unterscheidet sich die Stationärrolle von der Multi- und der Nottinghamrolle?",
        "options": [
          "Durch ihr Gewicht",
          "Durch größeres Schnurfassungsvermögen",
          "Die Rollenachse steht parallel zum Rutenschaft"
        ],
        "correct": 2,
        "expl": "Bei der Stationärrolle steht die Achse parallel zum Rutenschaft."
      },
      {
        "num": 6,
        "q": "Für welche Fangmethoden eignet sich die Stationärrolle besonders gut?",
        "options": [
          "Sie eignet sich gleich gut für alle Fangmethoden",
          "Für das Fliegenfischen",
          "Für die leichte und mittlere Spinnfischerei und für das Grundangeln"
        ],
        "correct": 2,
        "expl": "Stationärrolle: leichte/mittlere Spinnfischerei und Grundangeln."
      },
      {
        "num": 7,
        "q": "Für welche Angelmethoden eignet sich die Multirolle?",
        "options": [
          "Sie eignet sich gleich gut für alle",
          "Für die Stippangelei",
          "Für die schwere Spinnfischerei, für das Schlepp- und für das Grundangeln"
        ],
        "correct": 2,
        "expl": "Multirolle: schwere Spinnfischerei, Schlepp- und Grundangeln."
      },
      {
        "num": 8,
        "q": "Für welche Angelmethoden sind Multi- und Stationärrollen nicht geeignet?",
        "options": [
          "Für die Flugangelei",
          "Für die Grundangelei",
          "Für die Stippangelei"
        ],
        "correct": 2,
        "expl": "Für die Stippangelei sind Multi- und Stationärrolle nicht geeignet."
      },
      {
        "num": 9,
        "q": "Welchen Einfluss haben Knoten auf die Reißfestigkeit der Schnur?",
        "options": [
          "Sie haben keinen Einfluss",
          "Sie sind besonders reißfest",
          "Sie vermindern die Reißfestigkeit"
        ],
        "correct": 2,
        "expl": "Knoten vermindern die Reißfestigkeit der Schnur."
      },
      {
        "num": 10,
        "q": "Wodurch entsteht hauptsächlich Schnurdrall?",
        "options": [
          "Durch ständiges Werfen",
          "Nur durch Stationärrollen",
          "Durch stark wirbelnde Köder"
        ],
        "correct": 2,
        "expl": "Schnurdrall entsteht hauptsächlich durch stark wirbelnde Köder."
      },
      {
        "num": 11,
        "q": "Wann soll die Tragfähigkeit der Angelschnur durch eine Knotenprobe geprüft werden?",
        "options": [
          "Vor jedem Angeln",
          "Nach einem Jahr",
          "Niemals"
        ],
        "correct": 0,
        "expl": "Die Knotenprobe sollte vor jedem Angeln erfolgen."
      },
      {
        "num": 12,
        "q": "Angelschnur welcher Tragkraft sollte in der Regel beim Fang von Rotaugen, Rotfedern und Brassen verwendet werden?",
        "options": [
          "2 bis 6 kg",
          "6 bis 9 kg",
          "9 bis 17 kg"
        ],
        "correct": 0,
        "expl": "Für Rotaugen, Rotfedern und Brassen: 2 bis 6 kg."
      },
      {
        "num": 13,
        "q": "Angelschnur welcher Tragkraft sollte in der Regel beim Fang von Karpfen, Hecht und Aal verwendet werden?",
        "options": [
          "2 bis 6 kg",
          "6 bis 9 kg",
          "9 bis 17 kg"
        ],
        "correct": 1,
        "expl": "Für Karpfen, Hecht und Aal: 6 bis 9 kg. (unsicher – bitte prüfen)"
      },
      {
        "num": 14,
        "q": "Angelschnur welcher Tragkraft sollte in der Regel beim Fang von Flussbarschen verwendet werden?",
        "options": [
          "5 bis 6 kg",
          "6 bis 9 kg",
          "9 bis 17 kg"
        ],
        "correct": 0,
        "expl": "Für Flussbarsche: 5 bis 6 kg. (unsicher – bitte prüfen)"
      },
      {
        "num": 15,
        "q": "Wonach hat sich die Bremseinstellung an der Rolle zu richten?",
        "options": [
          "Nach der Schwere des zu erwartenden Fisches",
          "Nach der Größe der Rollenspule",
          "Nach der Tragfähigkeit der Schnur"
        ],
        "correct": 2,
        "expl": "Die Bremse richtet sich nach der Tragfähigkeit der Schnur."
      },
      {
        "num": 16,
        "q": "Wie lang soll das Stahlvorfach (cm) bei der Hechtfischerei mit totem Köderfisch sein?",
        "options": [
          "Mindestens 40",
          "Mindestens 20",
          "Mindestens 10"
        ],
        "correct": 0,
        "expl": "Bei totem Köderfisch mindestens 40 cm Stahlvorfach. (unsicher – bitte prüfen)"
      },
      {
        "num": 17,
        "q": "Was ist ein Drilling?",
        "options": [
          "Drei hintereinander an einer Schnur befestigte Haken",
          "Der Fang von drei Fischen zur gleichen Zeit",
          "Ein Haken mit drei Spitzen"
        ],
        "correct": 2,
        "expl": "Ein Drilling ist ein Haken mit drei Spitzen."
      },
      {
        "num": 18,
        "q": "Welche verschiedenen Hakenformen gibt es zum Anbinden beim Einzelhaken?",
        "options": [
          "Plättchen- und Öhrhaken",
          "Dick- oder dünnschenklige Haken",
          "Flach- und Rundstahlhaken"
        ],
        "correct": 0,
        "expl": "Einzelhaken gibt es als Plättchen- und Öhrhaken."
      },
      {
        "num": 19,
        "q": "Auf welche Hakenform werden Fliegen gebunden?",
        "options": [
          "Auf Plättchenhaken",
          "Auf Öhrhaken",
          "Auf Spezialhaken mit eingebundenem Vorfach"
        ],
        "correct": 1,
        "expl": "Fliegen werden auf Öhrhaken gebunden."
      },
      {
        "num": 20,
        "q": "Was bedeutet die Hakenskala von 1 bis 18?",
        "options": [
          "18 ist der größte Haken",
          "1 ist der größte Haken",
          "Von 1 bis 9 ist das Hakenöhr nach oben, von 10 bis 18 nach unten gebogen"
        ],
        "correct": 1,
        "expl": "Bei der Hakenskala ist 1 der größte Haken."
      },
      {
        "num": 21,
        "q": "Welche wesentliche Aufgabe hat bei der Spinnfischerei ein vorgeschalteter Wirbel?",
        "options": [
          "Er hat das Wasser mit Sauerstoff anzureichern",
          "Er erhöht den Anreiz zum Anbiss für den Raubfisch",
          "Er verhindert ein Verdrallen der Schnur"
        ],
        "correct": 2,
        "expl": "Der Wirbel verhindert ein Verdrallen der Schnur."
      },
      {
        "num": 22,
        "q": "Was ist ein Laufblei?",
        "options": [
          "Ein Lochblei",
          "Ein Lotblei",
          "Ein Vorlaufblei vor einem künstlichen Köder"
        ],
        "correct": 0,
        "expl": "Ein Laufblei ist ein Lochblei (läuft auf der Schnur)."
      },
      {
        "num": 23,
        "q": "Was ist eine Rachensperre?",
        "options": [
          "Eine Fischkrankheit",
          "Ein Hilfsgerät bei der Fischerei auf Hecht und Zander",
          "Spezialblinker für große Zander"
        ],
        "correct": 1,
        "expl": "Die Rachensperre ist ein Hilfsgerät beim Fang von Hecht und Zander."
      },
      {
        "num": 24,
        "q": "Was ist eine Senke?",
        "options": [
          "Ein Gerät zur Tiefenmessung",
          "Ein Netz zur Aufbewahrung von Köderfischen",
          "Ein Netz zum Köderfischfang"
        ],
        "correct": 2,
        "expl": "Die Senke ist ein Netz zum Köderfischfang."
      },
      {
        "num": 25,
        "q": "Wodurch unterscheidet sich ein Spinner von einem Blinker?",
        "options": [
          "Der Spinner ist leichter als ein Blinker",
          "Das Blatt des Spinners dreht sich um eine Achse",
          "Der Spinner ist farbiger als ein Blinker"
        ],
        "correct": 1,
        "expl": "Beim Spinner dreht sich das Blatt um eine Achse."
      },
      {
        "num": 26,
        "q": "Was ist ein Wobbler?",
        "options": [
          "Ein Gerät zum waidgerechten Töten gefangener Fische",
          "Ein künstlicher Köder für den Fang von Raubfischen",
          "Ein halbautomatisches Anfütterungsgerät für Weißfische"
        ],
        "correct": 1,
        "expl": "Ein Wobbler ist ein künstlicher Köder für Raubfische."
      },
      {
        "num": 27,
        "q": "Was ist ein typisches Merkmal eines Spinners?",
        "options": [
          "Er dreht sich um eine Achse",
          "Er taumelt",
          "Er ist farbiger als ein Blinker"
        ],
        "correct": 0,
        "expl": "Typisch für den Spinner: er dreht sich um eine Achse."
      },
      {
        "num": 28,
        "q": "Was ist ein Pilker?",
        "options": [
          "Ein schwerer Metallköder",
          "Eine seltene Wurmart",
          "Ein Landegerät"
        ],
        "correct": 0,
        "expl": "Ein Pilker ist ein schwerer Metallköder."
      },
      {
        "num": 29,
        "q": "Was bedeutet der Begriff \"Nassfischen\" bei der Flugangelei?",
        "options": [
          "Watfischen",
          "Fischen im Regen",
          "Fischen mit künstlicher Fliege unter Wasser"
        ],
        "correct": 2,
        "expl": "Nassfischen heißt Fischen mit künstlicher Fliege unter Wasser."
      },
      {
        "num": 30,
        "q": "Wie lang ist eine Spinnrute zum Fang von Flussbarschen?",
        "options": [
          "1,8 bis 2,7 m",
          "2,7 bis 3,5 m",
          "3,5 bis 5,0 m"
        ],
        "correct": 0,
        "expl": "Spinnrute für Flussbarsche: 1,8 bis 2,7 m."
      },
      {
        "num": 31,
        "q": "Welches Zubehör muss der Angler unbedingt beim Angeln bei sich haben?",
        "options": [
          "Unterfangkescher, Zentimetermaß, Schlagholz, Messer, Hakenlöser",
          "Ersatzrute, Regenzeug, Rutenhalter",
          "Ersatzposen, Drahtsetzkescher, Ersatzrolle"
        ],
        "correct": 0,
        "expl": "Unbedingt dabei: Kescher, Maß, Schlagholz, Messer, Hakenlöser."
      },
      {
        "num": 32,
        "q": "Wie lang ist eine Spinnrute zum Fang von Hechten?",
        "options": [
          "2,1 bis 3,0 m",
          "3,5 bis 5,0 m",
          "1,5 bis 2,0 m"
        ],
        "correct": 0,
        "expl": "Spinnrute für Hechte: 2,1 bis 3,0 m."
      },
      {
        "num": 33,
        "q": "Was muss vor dem Angeln u. a. am Gerät überprüft werden?",
        "options": [
          "Die Schnurführungsringe auf Risse, die Schnur auf Tragfähigkeit und die Rolle auf Bremszug",
          "Die Fischwaage und die Entfettung der Rolle",
          "Die Menge des Ködermaterials und die Qualität desselben"
        ],
        "correct": 0,
        "expl": "Prüfen: Ringe auf Risse, Schnur auf Tragfähigkeit, Rolle auf Bremszug."
      },
      {
        "num": 34,
        "q": "Welche allgemeine Regel gilt bei der waidgerechten Zusammenstellung: Haken, Schnur, Rute?",
        "options": [
          "Großer Haken, starke Schnur und steife Rutenspitze, kleiner Haken, dünne Schnur und weiche Rutenspitze",
          "Großer Haken, dünne Schnur und steife Rute",
          "Kleiner Haken, starke Schnur und weiche Rute"
        ],
        "correct": 0,
        "expl": "Großer Haken/starke Schnur/steife Spitze – bzw. klein/dünn/weich."
      },
      {
        "num": 35,
        "q": "Darf beim Friedfischangeln ein Zwillings- oder ein Drillingshaken be- nutzt werden?",
        "options": [
          "Nur bei bestimmten Fischarten",
          "Niemals",
          "Nur bei Verwendung eines Kartoffelköders"
        ],
        "correct": 1,
        "expl": "Beim Friedfischangeln niemals Zwillings- oder Drillingshaken."
      },
      {
        "num": 36,
        "q": "Was ist ein Twister?",
        "options": [
          "Ein Angelköder, der Geräusche erzeugt",
          "Ein Angelköder aus weichem Kunststoff",
          "Eine aus China importierte Fliegenmade"
        ],
        "correct": 1,
        "expl": "Ein Twister ist ein Köder aus weichem Kunststoff."
      },
      {
        "num": 37,
        "q": "Wozu dient die Feederrute?",
        "options": [
          "Sie federt die Flucht eines Fisches besser ab",
          "Zur Fischerei mit einem Futterkorb auf Weißfische",
          "Sie ermöglicht besonders weite Würfe"
        ],
        "correct": 1,
        "expl": "Die Feederrute dient der Fischerei mit Futterkorb auf Weißfische."
      },
      {
        "num": 38,
        "q": "Was sind Jerks, Popper und Twister?",
        "options": [
          "Nicht einheimische Fischarten",
          "Randgruppen der Gesellschaft",
          "Moderne Kunstköder für den Fang von Raubfischen"
        ],
        "correct": 2,
        "expl": "Jerks, Popper und Twister sind moderne Kunstköder für Raubfische."
      },
      {
        "num": 39,
        "q": "Wozu braucht man Streamer und Nymphen?",
        "options": [
          "Zum Trockenfischen bei der Flugangelei",
          "Zum Nassfischen bei der Flugangelei",
          "Zum Anfüttern"
        ],
        "correct": 1,
        "expl": "Streamer und Nymphen dienen dem Nassfischen bei der Flugangelei."
      },
      {
        "num": 40,
        "q": "Wie lang soll das Stahlvorfach (cm) bei der Hechtfischerei mit dem künstlichen Köder sein?",
        "options": [
          "Mindestens 40",
          "Mindestens 20",
          "Mindestens 10"
        ],
        "correct": 1,
        "expl": "Bei künstlichem Köder mindestens 20 cm Stahlvorfach."
      },
      {
        "num": 41,
        "q": "Was sind Popper, Jerkbaits, Stickbaits und Twitchbaits?",
        "options": [
          "Spezielle Lockmittel für das Angeln von Friedfischen",
          "Spezielle Köder für das Angeln von Raubfischen",
          "Spezielle Bissanzeiger zum Karpfenangeln"
        ],
        "correct": 1,
        "expl": "Popper, Jerkbaits, Stickbaits und Twitchbaits sind Köder für Raubfische."
      }
    ]
  },
  {
    "id": "F",
    "name": "Gesetzeskunde",
    "marker": "F. GESETZESKUNDE",
    "questions": [
      {
        "num": 1,
        "q": "Was versteht man unter einem Mindestmaß?",
        "options": [
          "Die Länge der Satzfische",
          "Die Länge der Laichfische",
          "Die Länge der Fische, ab welcher diese gefangen werden dürfen"
        ],
        "correct": 2,
        "expl": "Mindestmaß: Länge, ab der ein Fisch gefangen werden darf."
      },
      {
        "num": 2,
        "q": "Welcher Grundsatz sollte für den Umgang mit Fischen gelten?",
        "options": [
          "Keinem Fisch dürfen ohne vernünftigen Grund Schmerzen und/oder Leiden zugefügt werden",
          "Zur Schonung der Fische sollten diese nach der Anlandung grundsätzlich nur mit einem trockenen Tuch angefasst werden",
          "Für Fische gilt das Tierschutzgesetz nicht"
        ],
        "correct": 0,
        "expl": "Keinem Fisch dürfen ohne vernünftigen Grund Schmerzen/Leiden zugefügt werden."
      },
      {
        "num": 3,
        "q": "Welches Mindestmaß hat der Aal?",
        "options": [
          "Das Mindestmaß beträgt 50 cm",
          "Das Mindestmaß beträgt 35 cm",
          "Das Mindestmaß beträgt 25 cm"
        ],
        "correct": 0,
        "expl": "Das Mindestmaß des Aals beträgt 50 cm."
      },
      {
        "num": 4,
        "q": "Kann einer Person vor Vollendung des 14. Lebensjahres der Fischereischein ausgestellt werden?",
        "options": [
          "Nein, nur der Jugendfischereischein",
          "Ja, wenn der Fischfang in Anwesenheit eines Erwachsenen ausgeübt werden soll",
          "Ja, ohne Beschränkung"
        ],
        "correct": 0,
        "expl": "Vor dem 14. Lebensjahr gibt es nur den Jugendfischereischein."
      },
      {
        "num": 5,
        "q": "Wer stellt einen Fischereierlaubnisschein aus?",
        "options": [
          "Die Fischereibehörde",
          "Das Landesamt für Naturschutz, Umwelt und Verbraucherschutz",
          "Der Fischereiberechtigte oder der Fischereipächter"
        ],
        "correct": 2,
        "expl": "Den Fischereierlaubnisschein stellt der Fischereiberechtigte oder -pächter aus."
      },
      {
        "num": 6,
        "q": "Darf ein Fischereiberechtigter oder Pächter die Fischerei an einem mehr als 0,5 ha großen Gewässer allein ausüben?",
        "options": [
          "Ja, ohne Einschränkung",
          "Nein, er muss eine angemessene Zahl Erlaubnisscheine ausstellen",
          "Ja, wenn das Gewässer umzäunt ist und nicht zum Haus- und Hofbereich gehört"
        ],
        "correct": 1,
        "expl": "Nein, er muss eine angemessene Zahl Erlaubnisscheine ausstellen."
      },
      {
        "num": 7,
        "q": "Darf man an einem Gewässer, in dem man nicht fischereiausübungsberechtigt ist, Fischereigeräte mit sich führen?",
        "options": [
          "Ja, ohne Einschränkung",
          "Ja, im verpackten, d. h. nicht gebrauchsfähigen Zustand",
          "Nein"
        ],
        "correct": 1,
        "expl": "Ja, aber nur im verpackten, nicht gebrauchsfähigen Zustand."
      },
      {
        "num": 8,
        "q": "Ist die Fischerei mit elektrischen Geräten verboten?",
        "options": [
          "Nur in fließenden Gewässern",
          "Nein, sie ist ohne Einschränkung gestattet",
          "Ja, jedoch kann sie unter Auflagen und Bedingungen genehmigt werden"
        ],
        "correct": 2,
        "expl": "Elektrofischerei ist verboten, kann aber unter Auflagen genehmigt werden."
      },
      {
        "num": 9,
        "q": "Welche Aufgaben hat ein amtlich verpflichteter Fischereiaufseher?",
        "options": [
          "Er hat zu überprüfen, ob die Fischerei nach den gesetzlichen Vorschriften erfolgt",
          "Er hat darauf zu achten, dass die Angler in möglichst weitem Abstand voneinander fischen",
          "Er hat dem Fischereiberechtigten oder -pächter monatlich mitzuteilen, wieviel Personen die Fischerei ausgeübt haben"
        ],
        "correct": 0,
        "expl": "Der Fischereiaufseher prüft, ob nach gesetzlichen Vorschriften gefischt wird."
      },
      {
        "num": 10,
        "q": "Darf sich der Eigentümer oder Nutzungsberechtigte überfluteter Grundstücke auf diesen Grundstücken Fische aneignen?",
        "options": [
          "Nein",
          "Ja, sobald das Wasser auf dem überfluteten Grundstück länger als eine Woche mit dem Fluss nicht mehr in Verbindung steht",
          "Ja, aber nur mit Genehmigung der örtlichen Ordnungsbehörde"
        ],
        "correct": 1,
        "expl": "Ja, sobald die Verbindung zum Fluss länger als eine Woche unterbrochen ist."
      },
      {
        "num": 11,
        "q": "Was ist beim Ablassen eines Gewässers nach dem Landesfischereigesetz zu beachten?",
        "options": [
          "Der zum Ablassen Berechtigte ist verpflichtet, die Fische zu bergen",
          "Der zum Ablassen Berechtigte muss das Ablassen dem Fischereiberechtigten in der Regel eine Woche vorher schriftlich anzeigen",
          "Das Ablassen muss durch die Fischereigenossenschaft vorher genehmigt werden"
        ],
        "correct": 1,
        "expl": "Das Ablassen ist dem Fischereiberechtigten i.d.R. eine Woche vorher schriftlich anzuzeigen."
      },
      {
        "num": 12,
        "q": "Wer wählt den Vorstand der Fischereigenossenschaft?",
        "options": [
          "Der Oberkreisdirektor",
          "Die zur Genossenschaft gehörenden Fischereiberechtigten",
          "Die Fischereivereine"
        ],
        "correct": 1,
        "expl": "Den Vorstand wählen die zur Genossenschaft gehörenden Fischereiberechtigten."
      },
      {
        "num": 13,
        "q": "Kann einer Person vor Vollendung des 10. Lebensjahres der Jugendfischereischein ausgestellt werden?",
        "options": [
          "Nein",
          "Ja, ohne Einschränkung",
          "Ja, wenn diese einem Fischereiverein angehört"
        ],
        "correct": 0,
        "expl": "Nein, vor dem 10. Lebensjahr gibt es keinen Jugendfischereischein."
      },
      {
        "num": 14,
        "q": "Für welche Grundstücke gilt das Uferbetretungsrecht des Fischereiausübungsberechtigten nicht?",
        "options": [
          "Für Campingplätze",
          "Für eingezäunte Koppeln und Viehweiden",
          "Für Gebäude und zum unmittelbaren Haus-, Wohn- und Hofbereich gehörende Grundstücksteile"
        ],
        "correct": 2,
        "expl": "Nicht für Gebäude und den unmittelbaren Haus-, Wohn- und Hofbereich."
      },
      {
        "num": 15,
        "q": "Was versteht man unter \"Hegepflicht\"?",
        "options": [
          "Das Ruhenlassen der Fischerei, damit sich die Fische stark vermehren können",
          "Die Pflicht, einen den Gewässerverhältnissen entsprechenden Fischbestand zu hegen und zu erhalten",
          "Das Verscheuchen fischfressender Vögel"
        ],
        "correct": 1,
        "expl": "Hegepflicht: einen gewässergerechten Fischbestand zu hegen und zu erhalten."
      },
      {
        "num": 16,
        "q": "Welche Voraussetzung muss grundsätzlich erfüllt sein, um einen Fischereischein erwerben zu können?",
        "options": [
          "Ein gültiger Pachtvertrag",
          "Die Mitgliedschaft in einem Fischereiverein",
          "Das Bestehen der Fischerprüfung"
        ],
        "correct": 2,
        "expl": "Grundvoraussetzung ist das Bestehen der Fischerprüfung."
      },
      {
        "num": 17,
        "q": "In welchen Fällen wird zur Ausübung der Fischerei ein Fischereierlaubnisschein erforderlich?",
        "options": [
          "Wenn der Ausübende nicht selbst Fischereiberechtigter oder Fischereipächter ist",
          "Wenn während der Schonzeit gefischt werden soll",
          "Wenn der Ausübende keine Fischerprüfung abgelegt hat"
        ],
        "correct": 0,
        "expl": "Nötig, wenn der Ausübende nicht selbst Berechtigter oder Pächter ist."
      },
      {
        "num": 18,
        "q": "Was sind verbotene Fangmittel?",
        "options": [
          "Aalreusen, Handangeln, Grundbleiangeln mit Seitenarmen",
          "Künstliches Licht, explodierende, betäubende und giftige Stoffe",
          "Spinnangeln und Aalkörbe"
        ],
        "correct": 1,
        "expl": "Verboten: künstliches Licht, explodierende, betäubende und giftige Stoffe."
      },
      {
        "num": 19,
        "q": "Was gilt nicht als eingefriedetes Grundstück?",
        "options": [
          "Ein Grundstück, dessen Zaun leicht überklettert werden kann",
          "Ein Grundstück, dessen Betreten durch Schilder untersagt ist",
          "Eingezäunte Viehweiden"
        ],
        "correct": 2,
        "expl": "Eingezäunte Viehweiden gelten nicht als eingefriedetes Grundstück – das Uferbetretungsrecht gilt dort."
      },
      {
        "num": 20,
        "q": "Warum werden Schonzeiten festgelegt?",
        "options": [
          "Um ein ungestörtes Ablaichen der Fische zu ermöglichen",
          "Damit die Fische schwerer werden",
          "Damit die Fische in Ruhe fressen können"
        ],
        "correct": 0,
        "expl": "Schonzeiten ermöglichen ein ungestörtes Ablaichen der Fische."
      },
      {
        "num": 21,
        "q": "Welche Ausweise sind zur Ausübung des Fischfanges in Binnengewässern gesetzlich vorgeschrieben?",
        "options": [
          "Die Vereinsgewässerordnung und der Fischerpass",
          "Der Fischereischein und der Fischereierlaubnisschein",
          "Die Vereinssatzung und der Mitgliedsausweis"
        ],
        "correct": 1,
        "expl": "Vorgeschrieben: Fischereischein und Fischereierlaubnisschein."
      },
      {
        "num": 22,
        "q": "Wonach muss sich der Fischereiausübungsberechtigte unbedingt erkundigen, nachdem er die Erlaubnis, fremdes Gewässer zu beangeln, erhalten hat?",
        "options": [
          "Nach guten Angelstellen, besten Fangzeiten und bewährten Ködern",
          "Nach besonderen Auflagen, die Schonzeiten und die Mindestmaße betreffend, und nach den Gesetzen, innerhalb derer er die Fischerei ausüben darf",
          "Nach den Fischereikontrollen und den Strafen für Übertretungen"
        ],
        "correct": 1,
        "expl": "Nach Auflagen, Schonzeiten, Mindestmaßen und geltenden Gesetzen erkundigen."
      },
      {
        "num": 23,
        "q": "Was versteht man unter Zugang zu Gewässern?",
        "options": [
          "Das Betreten eingefriedeter Grundstücke zum Zwecke des Angelns",
          "Das Betreten von Ufern und Grundstücken in dem für die Fischerei notwendigen Umfang",
          "Das Betreten von Fabrikgrundstücken mit dem Ziel, an das Gewässer zu gelangen"
        ],
        "correct": 1,
        "expl": "Zugang: Betreten von Ufern/Grundstücken im für die Fischerei nötigen Umfang."
      },
      {
        "num": 24,
        "q": "Wem steht ein Uferbetretungsrecht zu?",
        "options": [
          "Dem Fischereiausübungsberechtigten",
          "Jedem Inhaber eines Fischereischeins",
          "Dem Fischereiausübungsberechtigten und seinen Angehörigen"
        ],
        "correct": 0,
        "expl": "Das Uferbetretungsrecht steht dem Fischereiausübungsberechtigten zu."
      },
      {
        "num": 25,
        "q": "Müssen einem amtlich verpflichteten Fischereiaufseher die Fischereipapiere ausgehändigt werden?",
        "options": [
          "Nur, wenn er sich in Begleitung des Fischereiberechtigten befindet",
          "Nein",
          "Ja"
        ],
        "correct": 2,
        "expl": "Ja, dem amtlichen Fischereiaufseher sind die Papiere auszuhändigen."
      },
      {
        "num": 26,
        "q": "Für welche Maßnahmen im Rahmen der Hege und Pflege des Fischbestands ist eine behördliche Genehmigung erforderlich?",
        "options": [
          "Für die Ausübung der Elektrofischerei",
          "Für die Reusenfischerei",
          "Für die Stellnetzfischerei"
        ],
        "correct": 0,
        "expl": "Genehmigungspflichtig ist die Ausübung der Elektrofischerei."
      },
      {
        "num": 27,
        "q": "Darf die Elektrofischerei von jedermann ausgeübt werden?",
        "options": [
          "Nein, nur vom Fischereiberechtigten im eigenen Gewässer",
          "Nein, ausschließlich von Personen, die den Bedienungsschein besitzen",
          "Ja, wenn ein Fischereierlaubnisschein für das zu befischende Gewässer vorliegt"
        ],
        "correct": 1,
        "expl": "Elektrofischerei nur durch Personen mit Bedienungsschein."
      },
      {
        "num": 28,
        "q": "Wer ist die obere Fischereibehörde?",
        "options": [
          "Das Umweltministerium",
          "Der Oberkreisdirektor",
          "Die Bezirksregierung"
        ],
        "correct": 2,
        "expl": "Obere Fischereibehörde ist die Bezirksregierung."
      },
      {
        "num": 29,
        "q": "Kann ein Fischereiverein Mitglied der Fischereigenossenschaft sein?",
        "options": [
          "Ja, sofern er eine Fischereipacht im Gebiet der Genossenschaft hat",
          "Ja, wenn er im Gebiet der Genossenschaft ein eigenes Fischereirecht besitzt",
          "Nein"
        ],
        "correct": 1,
        "expl": "Ja, wenn der Verein im Gebiet ein eigenes Fischereirecht besitzt."
      },
      {
        "num": 30,
        "q": "Wo gilt das am 1. Januar 1973 in Kraft getretene Landesfischereigesetz?",
        "options": [
          "Im Bundesgebiet",
          "Im Land Nordrhein-Westfalen",
          "In den ehemals preußischen Landesteilen"
        ],
        "correct": 1,
        "expl": "Das Landesfischereigesetz gilt im Land Nordrhein-Westfalen."
      },
      {
        "num": 31,
        "q": "Gelten die in den anderen Bundesländern ausgestellten Fischereischeine auch im Land Nordrhein-Westfalen?",
        "options": [
          "Nein",
          "Ja, wenn dies durch Bundesgesetz geregelt ist",
          "Ja, wenn der Inhaber des Fischereischeines seinen Wohnsitz zum Zeitpunkt der Ausstellung dieses Scheins nicht in Nordrhein-Westfalen hatte"
        ],
        "correct": 2,
        "expl": "Ja, wenn der Inhaber zur Ausstellungszeit nicht in NRW wohnte. (unsicher – bitte prüfen)"
      },
      {
        "num": 32,
        "q": "Wozu dient die mit dem Fischereischein erhobene Fischereiabgabe?",
        "options": [
          "Zum Bau von Fischerhütten",
          "Als Prämie für Fischereiaufseher",
          "Zur Förderung der Fischerei"
        ],
        "correct": 2,
        "expl": "Die Fischereiabgabe dient der Förderung der Fischerei."
      },
      {
        "num": 33,
        "q": "Wozu dient ein Laichschonbezirk?",
        "options": [
          "Zum Schutz des Fischwechsels",
          "Zum Schutz der Gelege der Wasservögel",
          "Zum ungestörten Ablaichen"
        ],
        "correct": 2,
        "expl": "Ein Laichschonbezirk dient dem ungestörten Ablaichen."
      },
      {
        "num": 34,
        "q": "Was sind Fischwege?",
        "options": [
          "Im Gewässer für die Wanderungen der Fische bevorzugte Strecken",
          "Vorrichtungen, die den Fischen die Überwindung von Stauanlagen im Gewässer ermöglichen",
          "Zugangswege der Angler zum Gewässer"
        ],
        "correct": 1,
        "expl": "Fischwege ermöglichen Fischen die Überwindung von Stauanlagen."
      },
      {
        "num": 35,
        "q": "Ist der Fischfang in Fischwegen erlaubt?",
        "options": [
          "Ja, da die Fangmöglichkeiten besonders gut sind",
          "Nein, er ist grundsätzlich verboten",
          "Ja, aber nur am unteren Ende des Fischweges"
        ],
        "correct": 1,
        "expl": "Nein, der Fischfang in Fischwegen ist grundsätzlich verboten."
      },
      {
        "num": 36,
        "q": "Welche gesetzliche Bestimmung regelt das Fischen mit 2 Handangeln?",
        "options": [
          "Das Landesfischereigesetz",
          "Die Landesfischereiverordnung",
          "Ist gesetzlich nicht geregelt"
        ],
        "correct": 1,
        "expl": "Das Fischen mit 2 Handangeln regelt die Landesfischereiverordnung."
      },
      {
        "num": 37,
        "q": "Welche der genannten Tierarten sind zum Fang oder Abschuss durch Berechtigte freigegeben?",
        "options": [
          "Der Eisvogel",
          "Der Bisam",
          "Die Wasseramsel"
        ],
        "correct": 1,
        "expl": "Zum Fang/Abschuss freigegeben ist der Bisam."
      },
      {
        "num": 38,
        "q": "Für welchen Zeitraum sind in der Regel Fischereipachtverträge mindestens abzuschließen?",
        "options": [
          "9 Jahre",
          "10 Jahre",
          "12 Jahre"
        ],
        "correct": 2,
        "expl": "Fischereipachtverträge sind in der Regel auf mindestens 12 Jahre abzuschließen."
      },
      {
        "num": 39,
        "q": "In welcher Form muss ein Fischereipachtvertrag abgeschlossen werden?",
        "options": [
          "Es genügt eine mündliche Abmachung",
          "In schriftlicher Form",
          "In schriftlicher, notariell beglaubigter Form"
        ],
        "correct": 1,
        "expl": "Ein Fischereipachtvertrag muss schriftlich abgeschlossen werden."
      },
      {
        "num": 40,
        "q": "Unter welchen Voraussetzungen kann die Fischereibehörde die Genehmigung von Pachtverträgen versagen?",
        "options": [
          "Wenn der Pächter nicht die Gewähr für eine ordnungsgemäße Hege bietet",
          "Wenn mehrere Bewerber in Frage kommen",
          "Wenn der Pächter nicht im gleichen Kreis seinen Wohnsitz hat"
        ],
        "correct": 0,
        "expl": "Versagung, wenn der Pächter keine Gewähr für ordnungsgemäße Hege bietet."
      },
      {
        "num": 41,
        "q": "Auf welche Weise darf man einen im flachen Wasser laichenden Hecht erbeuten?",
        "options": [
          "Mit einem Kescher",
          "Er darf wegen der Schonzeit grundsätzlich nicht gefangen werden",
          "Mit einem Wobbler"
        ],
        "correct": 1,
        "expl": "Wegen der Schonzeit darf der laichende Hecht grundsätzlich nicht gefangen werden."
      },
      {
        "num": 42,
        "q": "Ist das Aussetzen nicht einheimischer Fischarten z.B. aus Aquarien oder Gartenteichen erlaubt?",
        "options": [
          "Nein, es ist nach der Landesfischereiverordnung verboten",
          "Ja, es erhöht die Artenvielfalt unserer Gewässer",
          "Ja, denn sie haben es in einem großen Gewässer allemal besser als in einem Gartenteich"
        ],
        "correct": 0,
        "expl": "Nein, das Aussetzen nicht einheimischer Arten ist nach der LFischVO verboten."
      },
      {
        "num": 43,
        "q": "Darf der Grasfisch in stehende Gewässer eingesetzt werden?",
        "options": [
          "Nein, er darf nur in fließende Gewässer eingesetzt werden",
          "Nein, er ist keine einheimische Fischart",
          "Ja, als Pflanzenfresser vermindert er die unerwünschte Verkrautung stehender Gewässer"
        ],
        "correct": 1,
        "expl": "Nein, der Grasfisch ist keine einheimische Fischart. (unsicher – bitte prüfen)"
      },
      {
        "num": 44,
        "q": "Wer stellt Fischereischeine aus?",
        "options": [
          "Der Angelverein",
          "Die Gemeinde",
          "Die Fischereigenossenschaft"
        ],
        "correct": 1,
        "expl": "Fischereischeine stellt die Gemeinde aus."
      },
      {
        "num": 45,
        "q": "Dürfen zum Angeln lebende Köderfische benutzt werden?",
        "options": [
          "Nur an stehenden Gewässern",
          "Nur wenn die Gewässerordnung des Vereins es gestattet",
          "Nein"
        ],
        "correct": 2,
        "expl": "Nein, lebende Köderfische sind nicht erlaubt."
      },
      {
        "num": 46,
        "q": "Aus welchen Mitgliedern besteht eine Fischereigenossenschaft?",
        "options": [
          "Aus den Angelvereinen, die sich ein stehendes Gewässer teilen",
          "Aus den Fischereiberechtigten, deren Fischereirechte zu einem gemeinschaft- lichen Fischereibezirk gehören",
          "Aus Privatpersonen, die zusammen fischen"
        ],
        "correct": 1,
        "expl": "Mitglieder sind die Fischereiberechtigten eines gemeinschaftlichen Fischereibezirks."
      },
      {
        "num": 47,
        "q": "Wer bekommt einen Jugendfischereischein?",
        "options": [
          "Angler unter 18 Jahren, die die Fischerprüfung bestanden haben",
          "Angler zwischen 16 und 18 Jahren, die noch keine Fischerprüfung bestanden haben",
          "Angler zwischen 10 und 16 Jahren, die noch keine Fischerprüfung abgelegt haben"
        ],
        "correct": 2,
        "expl": "Den Jugendfischereischein erhalten 10- bis 16-Jährige ohne Fischerprüfung."
      },
      {
        "num": 48,
        "q": "Wer schlägt den Fischereiberater vor?",
        "options": [
          "Die untere Fischereibehörde",
          "Der Fischereiverband Nordrhein-Westfalen e.V.",
          "Die Fischereigenossenschaft"
        ],
        "correct": 1,
        "expl": "Den Fischereiberater schlägt der Fischereiverband NRW e.V. vor."
      },
      {
        "num": 49,
        "q": "Wer beruft den Fischereiberater?",
        "options": [
          "Die untere Fischereibehörde",
          "Der Fischereiverband Nordrhein-Westfalen e.V.",
          "Die Fischereigenossenschaft"
        ],
        "correct": 0,
        "expl": "Den Fischereiberater beruft die untere Fischereibehörde."
      },
      {
        "num": 50,
        "q": "Wann dürfen Wettfischen durchgeführt werden?",
        "options": [
          "Wenn mindestens 10 Angelvereine teilnehmen",
          "Wenn zu viele Weißfische vorhanden sind",
          "Wettfischen sind verboten"
        ],
        "correct": 2,
        "expl": "Wettfischen sind verboten."
      },
      {
        "num": 51,
        "q": "Zu welchem Zweck kann die obere Fischereibehörde Fischschonbezirke ausweisen?",
        "options": [
          "Um den betreffenden Gewässerabschnitt vor Verunreinigungen zu schützen",
          "Zur Erhaltung von bedrohten Fischarten, ihrer Laichplätze oder Winterlager",
          "Um Friedfische vor Raubfischen zu schützen"
        ],
        "correct": 1,
        "expl": "Fischschonbezirke schützen bedrohte Arten, Laichplätze und Winterlager."
      },
      {
        "num": 52,
        "q": "Welche Papiere benötigt der Gastangler an Privatgewässern?",
        "options": [
          "Keine",
          "Einen gültigen Fischereischein",
          "Personalausweis oder Reisepass"
        ],
        "correct": 1,
        "expl": "Der Gastangler benötigt einen gültigen Fischereischein."
      },
      {
        "num": 53,
        "q": "Welche der genannten Arten sind ganzjährig geschützt?",
        "options": [
          "Lachs und Meerforelle",
          "Bach- und Seeforelle",
          "Hasel und Ukelei"
        ],
        "correct": 0,
        "expl": "Ganzjährig geschützt: Lachs und Meerforelle."
      },
      {
        "num": 54,
        "q": "Dürfen ganzjährig geschützte Fischarten, die aus anderen Bundesländern stammen, in Nordrhein-Westfalen ausgesetzt werden?",
        "options": [
          "Nur in stehende Gewässer ohne Zu- und Abfluss",
          "Nur mit Genehmigung der oberen Fischereibehörde",
          "Nein"
        ],
        "correct": 2,
        "expl": "Nein, auch aus anderen Bundesländern dürfen sie nicht ausgesetzt werden."
      },
      {
        "num": 55,
        "q": "Welche Maßnahmen gelten für einen neu entstandenen Baggersee?",
        "options": [
          "Er muss unmittelbar nach Beendigung der Baggerarbeiten mit Forellen besetzt werden",
          "Während der Entstehungsphase und drei Jahre danach ruht die Fischerei",
          "Es muss ein Naturschutzgebiet ausgewiesen werden"
        ],
        "correct": 1,
        "expl": "Während der Entstehungsphase und drei Jahre danach ruht die Fischerei."
      },
      {
        "num": 56,
        "q": "Welchem Zweck dient die Landesfischereiverordnung?",
        "options": [
          "Sie regelt das Gemeinschaftsleben der Angler",
          "Sie regelt Fang, Verwertung und Untersuchung des Fischbestandes",
          "Sie regelt die Belange der Berufsfischerei und der Fischerzünfte"
        ],
        "correct": 1,
        "expl": "Die LFischVO regelt Fang, Verwertung und Untersuchung des Fischbestandes."
      },
      {
        "num": 57,
        "q": "Gilt die Landesfischereiverordnung losgelöst vom Landesfischereigesetz?",
        "options": [
          "Ja, sie setzt vorrangig das Tierschutzgesetz um",
          "Ja, sie ist eigenständiges Recht, das vom Fischereigesetz nicht berührt wird",
          "Nein, sie gilt nur im Rahmen des Landesfischereigesetzes"
        ],
        "correct": 2,
        "expl": "Nein, die LFischVO gilt nur im Rahmen des Landesfischereigesetzes."
      },
      {
        "num": 58,
        "q": "Ist die Landesfischereiverordnung verbindlich für jeden Angler?",
        "options": [
          "Ja, jeder Angler ist grundsätzlich daran gebunden",
          "Nein, die Landesfischereiverordnung gilt nicht für Angler, die gleichzeitig Gewässereigentümer sind",
          "Nein, die Landesfischereiverordnung gilt nicht für jugendliche Angler"
        ],
        "correct": 0,
        "expl": "Ja, jeder Angler ist grundsätzlich an die LFischVO gebunden."
      },
      {
        "num": 59,
        "q": "Können Angelvereine weitere Schonbestimmungen für Fische in ihrem gepachteten Gewässer einführen?",
        "options": [
          "Ja, denn die Landesfischereiverordnung setzt nur einen Mindeststandard zum Schutz der Fische fest",
          "Nein, denn die Landesfischereiverordnung setzt gesetzliche Standards fest, die nicht von Vereinen verschärft werden können",
          "Nein, denn dies würde der gesetzlichen Hegepflicht widersprechen"
        ],
        "correct": 0,
        "expl": "Ja, die LFischVO setzt nur einen Mindeststandard fest."
      },
      {
        "num": 60,
        "q": "Wo können die zuständigen Behörden im Einzelfall die Angelfischerei zum Schutz von Pflanzen und Tieren beschränken?",
        "options": [
          "In Naturschutzgebieten",
          "In Landschaftsschutzgebieten",
          "Überall"
        ],
        "correct": 2,
        "expl": "Behörden können die Angelfischerei zum Arten-/Pflanzenschutz überall beschränken."
      },
      {
        "num": 61,
        "q": "Welche Behörde ist für Naturschutzgebiete zuständig?",
        "options": [
          "Die Fischereibehörde",
          "Die Landschaftsbehörde",
          "Das Bauamt"
        ],
        "correct": 1,
        "expl": "Für Naturschutzgebiete ist die Landschaftsbehörde zuständig."
      },
      {
        "num": 62,
        "q": "Darf die Malermuschel als Köder für den Fang von Karpfen verwendet werden?",
        "options": [
          "Ja, sie ist dafür hervorragend geeignet",
          "Nein, sie ist gesetzlich geschützt",
          "Ja, aber nur dann, wenn sie aus demselben Gewässer stammt, in dem geangelt wird"
        ],
        "correct": 1,
        "expl": "Nein, die Malermuschel ist gesetzlich geschützt."
      },
      {
        "num": 63,
        "q": "Ist der Fang des Europäischen Flusskrebses erlaubt?",
        "options": [
          "Nein, er unterliegt einer ganzjährigen Schonzeit",
          "Ja, er ist eine Delikatesse",
          "Ja, sobald er eine Länge von 12 cm erreicht hat"
        ],
        "correct": 0,
        "expl": "Nein, der Europäische Flusskrebs hat eine ganzjährige Schonzeit."
      },
      {
        "num": 64,
        "q": "Sind künstlich genetisch veränderte Fische als Besatzmaterial geeignet?",
        "options": [
          "Ja, da sie besonders großwüchsig sind",
          "Nein",
          "Ja, wenn der Nachweis erbracht wird, dass sie eine hohe Vermehrungsrate aufweisen"
        ],
        "correct": 1,
        "expl": "Nein, genetisch veränderte Fische sind als Besatz nicht geeignet."
      },
      {
        "num": 65,
        "q": "Wer darf in einem Vereinsgewässer Molche fangen?",
        "options": [
          "Nur Vereinsmitglieder",
          "Jeder",
          "Niemand, Molche stehen unter Artenschutz"
        ],
        "correct": 2,
        "expl": "Niemand – Molche stehen unter Artenschutz."
      },
      {
        "num": 66,
        "q": "Was ist beim Einsatz toter Köderfische zu beachten?",
        "options": [
          "Die toten Köderfische dürfen nur in dem Gewässer verwendet werden, aus dem sie stammen",
          "Es dürfen ausschließlich geschützte Kleinfischarten verwendet werden",
          "Tote Köderfische müssen mindestens eine Größe von 15 cm aufweisen"
        ],
        "correct": 0,
        "expl": "Tote Köderfische nur in dem Gewässer verwenden, aus dem sie stammen."
      },
      {
        "num": 67,
        "q": "Dürfen Kinder unter 10 Jahren angeln?",
        "options": [
          "Ja, in Begleitung eines erwachsenen Fischereischeininhabers mit Einschränkungen",
          "Ja, wenn der Vater dabei ist und die gefangenen Fische ausnimmt",
          "Nein"
        ],
        "correct": 0,
        "expl": "Ja, in Begleitung eines erwachsenen Scheininhabers mit Einschränkungen. (unsicher – bitte prüfen)"
      },
      {
        "num": 68,
        "q": "Welches Messer darf beim Angeln mitgeführt werden?",
        "options": [
          "Ein Springmesser mit zweiseitig geschliffener Klinge",
          "Ein Fallmesser aus Militärbeständen",
          "Ein feststehendes Messer mit 12 cm langer Klinge"
        ],
        "correct": 2,
        "expl": "Erlaubt ist ein feststehendes Messer mit 12 cm langer Klinge."
      },
      {
        "num": 69,
        "q": "Hat das Tierschutzgesetz Bedeutung für die Angelfischerei?",
        "options": [
          "Nein, es hat keine Bedeutung",
          "Ja, denn es verbietet, Fische über eine bestimmte Stückzahl hinaus zu fangen",
          "Ja, denn es verbietet, einem Tier ohne vernünftigen Grund Schmerzen, Leiden oder Schäden zuzufügen"
        ],
        "correct": 2,
        "expl": "Ja, es verbietet, einem Tier ohne vernünftigen Grund Leiden zuzufügen."
      },
      {
        "num": 70,
        "q": "Welches Mindestmaß hat der Lachs?",
        "options": [
          "Der Lachs besitzt kein Mindestmaß, da er ganzjährig geschützt ist und nicht gefangen werden darf",
          "Das Mindestmaß von 50 cm",
          "Das Mindestmaß von 100 cm"
        ],
        "correct": 0,
        "expl": "Der Lachs ist ganzjährig geschützt und hat daher kein Mindestmaß."
      }
    ]
  }
];

/* ---------------------------------------------------------------------------
 * 2) RUTENMONTAGE (Gerätebau A1–A10)
 * Aufbau:
 *   categories – Bauteil-Kategorien (Filter im Katalog)
 *   catalog    – { id: { name, short, spec, cat, icon, provides:[...] } }
 *                provides = welche Anschlüsse ein Teil bereitstellt (z.B. "schnur")
 *   rods       – die 10 Aufgaben; je Rute:
 *                chain[] = geordnete Pflicht-Bauschritte
 *                          { need:Anschluss-den-es-braucht|null, accept:[erlaubte Teile], optional }
 *                zub[]   = Pflicht-Zubehör; jeder Eintrag = Liste gleichwertiger Alternativen
 * ------------------------------------------------------------------------- */
window.RODS_DATA = {
  "laender": [
    {
      "code": "NW",
      "name": "Nordrhein-Westfalen",
      "active": true
    }
  ],
  "categories": [
    {
      "key": "rute",
      "label": "Angelruten"
    },
    {
      "key": "rolle",
      "label": "Rollen"
    },
    {
      "key": "schnur",
      "label": "Schnüre"
    },
    {
      "key": "montage",
      "label": "Posen, Blei & Montage"
    },
    {
      "key": "vorfach",
      "label": "Vorfächer, Wirbel & Haken"
    },
    {
      "key": "kunstkoeder",
      "label": "Kunstköder & Fliegen"
    },
    {
      "key": "koeder",
      "label": "Naturköder"
    },
    {
      "key": "zubehoer",
      "label": "Zubehör"
    }
  ],
  "catalog": {
    "teleskoprute-wurfgewicht-bis-20g-laenge-4-": {
      "id": "teleskoprute-wurfgewicht-bis-20g-laenge-4-",
      "name": "Teleskoprute (Wurfgewicht: bis 20g, Länge: 4–7m)",
      "short": "Teleskoprute",
      "spec": "Wurfgewicht: bis 20g, Länge: 4–7m",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "kleine-stationaerrolle": {
      "id": "kleine-stationaerrolle",
      "name": "kleine Stationärrolle",
      "short": "kleine Stationärrolle",
      "spec": "",
      "cat": "rolle",
      "icon": "reel",
      "provides": []
    },
    "schnur-tk-2-6-kg-3-4kg": {
      "id": "schnur-tk-2-6-kg-3-4kg",
      "name": "Schnur TK: 2-6 kg (3,4kg)",
      "short": "Schnur TK: 2-6 kg",
      "spec": "3,4kg",
      "cat": "schnur",
      "icon": "spool",
      "provides": [
        "schnur"
      ]
    },
    "feststellpose-1-3-5g": {
      "id": "feststellpose-1-3-5g",
      "name": "Feststellpose (1 – 3,5g)",
      "short": "Feststellpose",
      "spec": "1 – 3,5g",
      "cat": "montage",
      "icon": "float",
      "provides": []
    },
    "bleischrot": {
      "id": "bleischrot",
      "name": "Bleischrot",
      "short": "Bleischrot",
      "spec": "",
      "cat": "montage",
      "icon": "shot",
      "provides": []
    },
    "kleiner-wirbel": {
      "id": "kleiner-wirbel",
      "name": "kleiner Wirbel",
      "short": "kleiner Wirbel",
      "spec": "",
      "cat": "vorfach",
      "icon": "swivel",
      "provides": [
        "wirbel"
      ]
    },
    "vorfach-mit-hakengroesse-10-und-kleiner": {
      "id": "vorfach-mit-hakengroesse-10-und-kleiner",
      "name": "Vorfach mit Hakengröße 10 und kleiner",
      "short": "Vorfach mit Hakengröße 10 und kleiner",
      "spec": "",
      "cat": "vorfach",
      "icon": "hooklink",
      "provides": [
        "haken"
      ]
    },
    "made": {
      "id": "made",
      "name": "Made",
      "short": "Made",
      "spec": "",
      "cat": "koeder",
      "icon": "maggot",
      "provides": []
    },
    "unterfangnetz": {
      "id": "unterfangnetz",
      "name": "Unterfangnetz",
      "short": "Unterfangnetz",
      "spec": "",
      "cat": "zubehoer",
      "icon": "net",
      "provides": []
    },
    "metermass": {
      "id": "metermass",
      "name": "Metermaß",
      "short": "Metermaß",
      "spec": "",
      "cat": "zubehoer",
      "icon": "ruler",
      "provides": []
    },
    "schlagholz": {
      "id": "schlagholz",
      "name": "Schlagholz",
      "short": "Schlagholz",
      "spec": "",
      "cat": "zubehoer",
      "icon": "priest",
      "provides": []
    },
    "messer": {
      "id": "messer",
      "name": "Messer",
      "short": "Messer",
      "spec": "",
      "cat": "zubehoer",
      "icon": "knife",
      "provides": []
    },
    "stabhakenloeser": {
      "id": "stabhakenloeser",
      "name": "Stabhakenlöser",
      "short": "Stabhakenlöser",
      "spec": "",
      "cat": "zubehoer",
      "icon": "disgorger",
      "provides": []
    },
    "loeseschere": {
      "id": "loeseschere",
      "name": "Löseschere",
      "short": "Löseschere",
      "spec": "",
      "cat": "zubehoer",
      "icon": "scissors",
      "provides": []
    },
    "steckrute-mit-schwingspitze-wurfgewicht-bi": {
      "id": "steckrute-mit-schwingspitze-wurfgewicht-bi",
      "name": "Steckrute mit Schwingspitze (Wurfgewicht: bis 80g, Länge: 2,7–3,0m",
      "short": "Steckrute mit Schwingspitze",
      "spec": "Wurfgewicht: bis 80g, Länge: 2,7–3,0m",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "futterkorb": {
      "id": "futterkorb",
      "name": "Futterkorb",
      "short": "Futterkorb",
      "spec": "",
      "cat": "montage",
      "icon": "feeder",
      "provides": []
    },
    "gummiperle": {
      "id": "gummiperle",
      "name": "Gummiperle",
      "short": "Gummiperle",
      "spec": "",
      "cat": "montage",
      "icon": "bead",
      "provides": []
    },
    "teleskoprute-wurfgewicht-20-60g-laenge-3-3": {
      "id": "teleskoprute-wurfgewicht-20-60g-laenge-3-3",
      "name": "Teleskoprute (Wurfgewicht: 20-60g, Länge: 3,3–3,9m)",
      "short": "Teleskoprute",
      "spec": "Wurfgewicht: 20-60g, Länge: 3,3–3,9m",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "grosse-stationaerrolle": {
      "id": "grosse-stationaerrolle",
      "name": "große Stationärrolle",
      "short": "große Stationärrolle",
      "spec": "",
      "cat": "rolle",
      "icon": "reel",
      "provides": []
    },
    "schnur-tk-9-17-kg-11-3kg": {
      "id": "schnur-tk-9-17-kg-11-3kg",
      "name": "Schnur TK: 9-17 kg (11,3kg)",
      "short": "Schnur TK: 9-17 kg",
      "spec": "11,3kg",
      "cat": "schnur",
      "icon": "spool",
      "provides": [
        "schnur"
      ]
    },
    "stopper": {
      "id": "stopper",
      "name": "Stopper",
      "short": "Stopper",
      "spec": "",
      "cat": "montage",
      "icon": "stopper",
      "provides": []
    },
    "laufpose-7-5-12-5g": {
      "id": "laufpose-7-5-12-5g",
      "name": "Laufpose (7,5 - 12,5g)",
      "short": "Laufpose",
      "spec": "7,5 - 12,5g",
      "cat": "montage",
      "icon": "float",
      "provides": []
    },
    "grosser-wirbel": {
      "id": "grosser-wirbel",
      "name": "großer Wirbel",
      "short": "großer Wirbel",
      "spec": "",
      "cat": "vorfach",
      "icon": "swivel",
      "provides": [
        "wirbel"
      ]
    },
    "vorfach-mit-hakengroesse-6-und-groesser": {
      "id": "vorfach-mit-hakengroesse-6-und-groesser",
      "name": "Vorfach mit Hakengröße 6 und größer",
      "short": "Vorfach mit Hakengröße 6 und größer",
      "spec": "",
      "cat": "vorfach",
      "icon": "hooklink",
      "provides": [
        "haken"
      ]
    },
    "mais": {
      "id": "mais",
      "name": "Mais",
      "short": "Mais",
      "spec": "",
      "cat": "koeder",
      "icon": "corn",
      "provides": []
    },
    "steckrute-wurfgewicht-40-80g-laenge-2-0-2-": {
      "id": "steckrute-wurfgewicht-40-80g-laenge-2-0-2-",
      "name": "Steckrute (Wurfgewicht: 40-80g, Länge: 2,0-2,7 m)",
      "short": "Steckrute",
      "spec": "Wurfgewicht: 40-80g, Länge: 2,0-2,7 m",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "glocke": {
      "id": "glocke",
      "name": "Glocke",
      "short": "Glocke",
      "spec": "",
      "cat": "montage",
      "icon": "bell",
      "provides": []
    },
    "laufblei-ca-60g": {
      "id": "laufblei-ca-60g",
      "name": "Laufblei ca 60g",
      "short": "Laufblei ca 60g",
      "spec": "",
      "cat": "montage",
      "icon": "leadrun",
      "provides": []
    },
    "tauwurm": {
      "id": "tauwurm",
      "name": "Tauwurm",
      "short": "Tauwurm",
      "spec": "",
      "cat": "koeder",
      "icon": "worm",
      "provides": []
    },
    "steckrute-wurfgewicht-40-80g-laenge-2-4-3-": {
      "id": "steckrute-wurfgewicht-40-80g-laenge-2-4-3-",
      "name": "Steckrute (Wurfgewicht:40–80g, Länge: 2,4–3,0 m )",
      "short": "Steckrute",
      "spec": "Wurfgewicht:40–80g, Länge: 2,4–3,0 m",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "stahlvorfach-40-cm-tk-12-kg": {
      "id": "stahlvorfach-40-cm-tk-12-kg",
      "name": "Stahlvorfach 40 cm (TK: 12 kg)",
      "short": "Stahlvorfach 40 cm",
      "spec": "TK: 12 kg",
      "cat": "vorfach",
      "icon": "wireleader",
      "provides": [
        "stahlvorfach"
      ]
    },
    "grosser-blinker": {
      "id": "grosser-blinker",
      "name": "Großer Blinker",
      "short": "Großer Blinker",
      "spec": "",
      "cat": "kunstkoeder",
      "icon": "spoon",
      "provides": []
    },
    "grosser-spinner": {
      "id": "grosser-spinner",
      "name": "Großer Spinner",
      "short": "Großer Spinner",
      "spec": "",
      "cat": "kunstkoeder",
      "icon": "spinner",
      "provides": []
    },
    "grosser-wobbler": {
      "id": "grosser-wobbler",
      "name": "Großer Wobbler",
      "short": "Großer Wobbler",
      "spec": "",
      "cat": "kunstkoeder",
      "icon": "wobbler",
      "provides": []
    },
    "rachensperre": {
      "id": "rachensperre",
      "name": "Rachensperre",
      "short": "Rachensperre",
      "spec": "",
      "cat": "zubehoer",
      "icon": "gag",
      "provides": []
    },
    "loesezange": {
      "id": "loesezange",
      "name": "Lösezange",
      "short": "Lösezange",
      "spec": "",
      "cat": "zubehoer",
      "icon": "pliers",
      "provides": []
    },
    "steckrute-wurfgewicht-10-30g-laenge-bis-2-": {
      "id": "steckrute-wurfgewicht-10-30g-laenge-bis-2-",
      "name": "Steckrute (Wurfgewicht: 10-30g, Länge: bis 2,1m)",
      "short": "Steckrute",
      "spec": "Wurfgewicht: 10-30g, Länge: bis 2,1m",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "mittlere-stationaerrolle": {
      "id": "mittlere-stationaerrolle",
      "name": "mittlere Stationärrolle",
      "short": "mittlere Stationärrolle",
      "spec": "",
      "cat": "rolle",
      "icon": "reel",
      "provides": []
    },
    "schnur-tk-5-6-kg-5-4kg": {
      "id": "schnur-tk-5-6-kg-5-4kg",
      "name": "Schnur TK: 5-6 kg (5,4kg)",
      "short": "Schnur TK: 5-6 kg",
      "spec": "5,4kg",
      "cat": "schnur",
      "icon": "spool",
      "provides": [
        "schnur"
      ]
    },
    "stahlvorfach-40-cm-tk-5-kg": {
      "id": "stahlvorfach-40-cm-tk-5-kg",
      "name": "Stahlvorfach 40 cm (TK: 5 kg)",
      "short": "Stahlvorfach 40 cm",
      "spec": "TK: 5 kg",
      "cat": "vorfach",
      "icon": "wireleader",
      "provides": [
        "stahlvorfach"
      ]
    },
    "kleiner-twister": {
      "id": "kleiner-twister",
      "name": "kleiner Twister",
      "short": "kleiner Twister",
      "spec": "",
      "cat": "kunstkoeder",
      "icon": "twister",
      "provides": []
    },
    "kleiner-wobbler": {
      "id": "kleiner-wobbler",
      "name": "kleiner Wobbler",
      "short": "kleiner Wobbler",
      "spec": "",
      "cat": "kunstkoeder",
      "icon": "wobbler",
      "provides": []
    },
    "kleiner-spinner": {
      "id": "kleiner-spinner",
      "name": "kleiner Spinner",
      "short": "kleiner Spinner",
      "spec": "",
      "cat": "kunstkoeder",
      "icon": "spinner",
      "provides": []
    },
    "fliegenrute-laenge-2-4-2-7m-klasse-5-6": {
      "id": "fliegenrute-laenge-2-4-2-7m-klasse-5-6",
      "name": "Fliegenrute (Länge: 2,4-2,7m) (Klasse 5-6)",
      "short": "Fliegenrute",
      "spec": "Länge: 2,4-2,7m Klasse 5-6",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "fliegenrolle": {
      "id": "fliegenrolle",
      "name": "Fliegenrolle",
      "short": "Fliegenrolle",
      "spec": "",
      "cat": "rolle",
      "icon": "flyreel",
      "provides": []
    },
    "schwimmende-fliegenschnur-hell": {
      "id": "schwimmende-fliegenschnur-hell",
      "name": "schwimmende Fliegenschnur (hell)",
      "short": "schwimmende Fliegenschnur",
      "spec": "hell",
      "cat": "schnur",
      "icon": "flyline",
      "provides": [
        "fliegenschnur"
      ]
    },
    "fliegenvorfach-1-50-3-00m-schwimmend": {
      "id": "fliegenvorfach-1-50-3-00m-schwimmend",
      "name": "Fliegenvorfach 1,50-3,00m (schwimmend)",
      "short": "Fliegenvorfach 1,50-3,00m",
      "spec": "schwimmend",
      "cat": "vorfach",
      "icon": "flyleader",
      "provides": [
        "fliegenvorfach"
      ]
    },
    "trockenfliege": {
      "id": "trockenfliege",
      "name": "Trockenfliege",
      "short": "Trockenfliege",
      "spec": "",
      "cat": "kunstkoeder",
      "icon": "dryfly",
      "provides": []
    },
    "watkescher": {
      "id": "watkescher",
      "name": "Watkescher",
      "short": "Watkescher",
      "spec": "",
      "cat": "zubehoer",
      "icon": "net",
      "provides": []
    },
    "sinkende-fliegenschnur-dunkel": {
      "id": "sinkende-fliegenschnur-dunkel",
      "name": "sinkende Fliegenschnur (dunkel)",
      "short": "sinkende Fliegenschnur",
      "spec": "dunkel",
      "cat": "schnur",
      "icon": "flyline",
      "provides": [
        "fliegenschnur"
      ]
    },
    "fliegenvorfach-1-50-3-00m-sinkend": {
      "id": "fliegenvorfach-1-50-3-00m-sinkend",
      "name": "Fliegenvorfach 1,50-3,00m (sinkend)",
      "short": "Fliegenvorfach 1,50-3,00m",
      "spec": "sinkend",
      "cat": "vorfach",
      "icon": "flyleader",
      "provides": [
        "fliegenvorfach"
      ]
    },
    "nassfliege": {
      "id": "nassfliege",
      "name": "Nassfliege",
      "short": "Nassfliege",
      "spec": "",
      "cat": "kunstkoeder",
      "icon": "wetfly",
      "provides": []
    },
    "steckrute-wurfgewicht-100-200g-laenge-2-0-": {
      "id": "steckrute-wurfgewicht-100-200g-laenge-2-0-",
      "name": "Steckrute (Wurfgewicht: 100-200g, Länge: 2,0-3,0m)",
      "short": "Steckrute",
      "spec": "Wurfgewicht: 100-200g, Länge: 2,0-3,0m",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "schwere-stationaerrolle": {
      "id": "schwere-stationaerrolle",
      "name": "schwere Stationärrolle",
      "short": "schwere Stationärrolle",
      "spec": "",
      "cat": "rolle",
      "icon": "reel",
      "provides": []
    },
    "multirolle": {
      "id": "multirolle",
      "name": "Multirolle",
      "short": "Multirolle",
      "spec": "",
      "cat": "rolle",
      "icon": "reel",
      "provides": []
    },
    "schnur-tk-19-21-kg-19kg": {
      "id": "schnur-tk-19-21-kg-19kg",
      "name": "Schnur TK: 19-21 kg (19kg)",
      "short": "Schnur TK: 19-21 kg",
      "spec": "19kg",
      "cat": "schnur",
      "icon": "spool",
      "provides": [
        "schnur"
      ]
    },
    "meereswirbel-silber": {
      "id": "meereswirbel-silber",
      "name": "Meereswirbel (silber)",
      "short": "Meereswirbel",
      "spec": "silber",
      "cat": "vorfach",
      "icon": "swivelsea",
      "provides": [
        "meereswirbel"
      ]
    },
    "pilker-100-250g": {
      "id": "pilker-100-250g",
      "name": "Pilker (100-250g)",
      "short": "Pilker",
      "spec": "100-250g",
      "cat": "kunstkoeder",
      "icon": "pilk",
      "provides": []
    },
    "gaff": {
      "id": "gaff",
      "name": "Gaff",
      "short": "Gaff",
      "spec": "",
      "cat": "zubehoer",
      "icon": "gaff",
      "provides": []
    },
    "steckrute-wurfgewicht-100-250g-laenge-3-6-": {
      "id": "steckrute-wurfgewicht-100-250g-laenge-3-6-",
      "name": "Steckrute (Wurfgewicht: 100-250g, Länge: 3,6–5,0m)",
      "short": "Steckrute",
      "spec": "Wurfgewicht: 100-250g, Länge: 3,6–5,0m",
      "cat": "rute",
      "icon": "rod",
      "provides": [
        "rute"
      ]
    },
    "schnur-tk-6-14-kg-16-4kg": {
      "id": "schnur-tk-6-14-kg-16-4kg",
      "name": "Schnur TK: 6-14 kg (16,4kg)",
      "short": "Schnur TK: 6-14 kg",
      "spec": "16,4kg",
      "cat": "schnur",
      "icon": "spool",
      "provides": [
        "schnur"
      ]
    },
    "schlagschnur-4-00-8-00m-tk-15-30kg": {
      "id": "schlagschnur-4-00-8-00m-tk-15-30kg",
      "name": "Schlagschnur (4,00-8,00m/TK: 15-30kg)",
      "short": "Schlagschnur",
      "spec": "4,00-8,00m/TK: 15-30kg",
      "cat": "vorfach",
      "icon": "shockline",
      "provides": [
        "schlagschnur"
      ]
    },
    "brandungsvorfach-mit-harkengroesse-1-0-und": {
      "id": "brandungsvorfach-mit-harkengroesse-1-0-und",
      "name": "Brandungsvorfach mit Harkengröße 1/0 und größer",
      "short": "Brandungsvorfach mit Harkengröße 1/0 und größer",
      "spec": "",
      "cat": "vorfach",
      "icon": "surfrig",
      "provides": [
        "vorfach",
        "haken"
      ]
    },
    "wattwurm": {
      "id": "wattwurm",
      "name": "Wattwurm",
      "short": "Wattwurm",
      "spec": "",
      "cat": "koeder",
      "icon": "lugworm",
      "provides": []
    },
    "brandungsblei-80-100-g": {
      "id": "brandungsblei-80-100-g",
      "name": "Brandungsblei 80–100 g",
      "short": "Brandungsblei 80–100 g",
      "spec": "",
      "cat": "montage",
      "icon": "leadclaw",
      "provides": []
    }
  },
  "rods": [
    {
      "id": "A1",
      "no": 1,
      "title": "Teleskoprute – Posenmontage",
      "target": "Rotauge · Rotfeder · Brasse",
      "task": "Baue eine leichte Posenmontage zum Fang von Rotaugen, Rotfedern und Brassen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "teleskoprute-wurfgewicht-bis-20g-laenge-4-"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "kleine-stationaerrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schnur-tk-2-6-kg-3-4kg"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "feststellpose-1-3-5g"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "bleischrot"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "kleiner-wirbel"
          ],
          "optional": false
        },
        {
          "need": "wirbel",
          "accept": [
            "vorfach-mit-hakengroesse-10-und-kleiner"
          ],
          "optional": false
        },
        {
          "need": "haken",
          "accept": [
            "made"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "unterfangnetz"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "stabhakenloeser",
          "loeseschere"
        ]
      ]
    },
    {
      "id": "A2",
      "no": 2,
      "title": "Steckrute mit Schwingspitze",
      "target": "Rotauge · Rotfeder · Brasse",
      "task": "Baue eine Grund-/Feedermontage zum Fang von Friedfischen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "steckrute-mit-schwingspitze-wurfgewicht-bi"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "kleine-stationaerrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schnur-tk-2-6-kg-3-4kg"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "futterkorb"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "gummiperle"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "kleiner-wirbel"
          ],
          "optional": false
        },
        {
          "need": "wirbel",
          "accept": [
            "vorfach-mit-hakengroesse-10-und-kleiner"
          ],
          "optional": false
        },
        {
          "need": "haken",
          "accept": [
            "made"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "unterfangnetz"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "stabhakenloeser",
          "loeseschere"
        ]
      ]
    },
    {
      "id": "A3",
      "no": 3,
      "title": "Teleskoprute – Laufpose",
      "target": "Karpfen",
      "task": "Baue eine Laufposenmontage zum Fang von Karpfen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "teleskoprute-wurfgewicht-20-60g-laenge-3-3"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "grosse-stationaerrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schnur-tk-9-17-kg-11-3kg"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "stopper"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "gummiperle"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "laufpose-7-5-12-5g"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "bleischrot"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "grosser-wirbel"
          ],
          "optional": false
        },
        {
          "need": "wirbel",
          "accept": [
            "vorfach-mit-hakengroesse-6-und-groesser"
          ],
          "optional": false
        },
        {
          "need": "haken",
          "accept": [
            "mais"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "unterfangnetz"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "stabhakenloeser",
          "loeseschere"
        ]
      ]
    },
    {
      "id": "A4",
      "no": 4,
      "title": "Steckrute – Grundmontage",
      "target": "Aal",
      "task": "Baue eine Grundmontage zum Fang von Aalen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "steckrute-wurfgewicht-40-80g-laenge-2-0-2-"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "glocke"
          ],
          "optional": true
        },
        {
          "need": "rute",
          "accept": [
            "grosse-stationaerrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schnur-tk-9-17-kg-11-3kg"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "laufblei-ca-60g"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "gummiperle"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "grosser-wirbel"
          ],
          "optional": false
        },
        {
          "need": "wirbel",
          "accept": [
            "vorfach-mit-hakengroesse-6-und-groesser"
          ],
          "optional": false
        },
        {
          "need": "haken",
          "accept": [
            "tauwurm"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "unterfangnetz"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "stabhakenloeser",
          "loeseschere"
        ]
      ]
    },
    {
      "id": "A5",
      "no": 5,
      "title": "Spinnrute – Stahlvorfach",
      "target": "Hecht",
      "task": "Baue eine Spinnmontage mit Stahlvorfach zum Fang von Hechten waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "steckrute-wurfgewicht-40-80g-laenge-2-4-3-"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "grosse-stationaerrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schnur-tk-9-17-kg-11-3kg"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "stahlvorfach-40-cm-tk-12-kg"
          ],
          "optional": false
        },
        {
          "need": "stahlvorfach",
          "accept": [
            "grosser-blinker",
            "grosser-spinner",
            "grosser-wobbler"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "unterfangnetz"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "rachensperre"
        ],
        [
          "loesezange"
        ]
      ]
    },
    {
      "id": "A6",
      "no": 6,
      "title": "Leichte Spinnrute",
      "target": "Barsch",
      "task": "Baue eine leichte Spinnmontage zum Fang von Barschen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "steckrute-wurfgewicht-10-30g-laenge-bis-2-"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "mittlere-stationaerrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schnur-tk-5-6-kg-5-4kg"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "stahlvorfach-40-cm-tk-5-kg"
          ],
          "optional": false
        },
        {
          "need": "stahlvorfach",
          "accept": [
            "kleiner-twister",
            "kleiner-wobbler",
            "kleiner-spinner"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "unterfangnetz"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "rachensperre"
        ],
        [
          "loesezange"
        ]
      ]
    },
    {
      "id": "A7",
      "no": 7,
      "title": "Fliegenrute – Trockenfliege",
      "target": "Forelle",
      "task": "Baue eine Fliegenmontage zum Trockenfischen auf Forellen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "fliegenrute-laenge-2-4-2-7m-klasse-5-6"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "fliegenrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schwimmende-fliegenschnur-hell"
          ],
          "optional": false
        },
        {
          "need": "fliegenschnur",
          "accept": [
            "fliegenvorfach-1-50-3-00m-schwimmend"
          ],
          "optional": false
        },
        {
          "need": "fliegenvorfach",
          "accept": [
            "trockenfliege"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "watkescher"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "loeseschere"
        ]
      ]
    },
    {
      "id": "A8",
      "no": 8,
      "title": "Fliegenrute – Nassfliege",
      "target": "Forelle",
      "task": "Baue eine Fliegenmontage zum Nassfischen auf Forellen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "fliegenrute-laenge-2-4-2-7m-klasse-5-6"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "fliegenrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "sinkende-fliegenschnur-dunkel"
          ],
          "optional": false
        },
        {
          "need": "fliegenschnur",
          "accept": [
            "fliegenvorfach-1-50-3-00m-sinkend"
          ],
          "optional": false
        },
        {
          "need": "fliegenvorfach",
          "accept": [
            "nassfliege"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "watkescher"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "loeseschere"
        ]
      ]
    },
    {
      "id": "A9",
      "no": 9,
      "title": "Pilkrute",
      "target": "Dorsch",
      "task": "Baue eine Pilkmontage zum Fang von Dorschen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "steckrute-wurfgewicht-100-200g-laenge-2-0-"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schwere-stationaerrolle",
            "multirolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schnur-tk-19-21-kg-19kg"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "meereswirbel-silber"
          ],
          "optional": false
        },
        {
          "need": "meereswirbel",
          "accept": [
            "pilker-100-250g"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "gaff"
        ],
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "loesezange"
        ]
      ]
    },
    {
      "id": "A10",
      "no": 10,
      "title": "Brandungsrute",
      "target": "Plattfisch",
      "task": "Baue eine Brandungsmontage zum Fang von Plattfischen waidgerecht auf.",
      "chain": [
        {
          "need": null,
          "accept": [
            "steckrute-wurfgewicht-100-250g-laenge-3-6-"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schwere-stationaerrolle"
          ],
          "optional": false
        },
        {
          "need": "rute",
          "accept": [
            "schnur-tk-6-14-kg-16-4kg"
          ],
          "optional": false
        },
        {
          "need": "schnur",
          "accept": [
            "schlagschnur-4-00-8-00m-tk-15-30kg"
          ],
          "optional": false
        },
        {
          "need": "schlagschnur",
          "accept": [
            "meereswirbel-silber"
          ],
          "optional": false
        },
        {
          "need": "meereswirbel",
          "accept": [
            "brandungsvorfach-mit-harkengroesse-1-0-und"
          ],
          "optional": false
        },
        {
          "need": "haken",
          "accept": [
            "wattwurm"
          ],
          "optional": false
        },
        {
          "need": "vorfach",
          "accept": [
            "brandungsblei-80-100-g"
          ],
          "optional": false
        }
      ],
      "zub": [
        [
          "metermass"
        ],
        [
          "schlagholz"
        ],
        [
          "messer"
        ],
        [
          "loesezange"
        ]
      ]
    }
  ]
};

/* ---------------------------------------------------------------------------
 * 3) FISCHARTEN
 * Aufbau: [{ id, name, group, bild, merkmale:[...], schon, laich }]
 *   bild leer ("") = kein Bild verfügbar (Platzhalter im Quiz)
 * ------------------------------------------------------------------------- */
window.FISCH_DATA = [
  {
    "id": "hecht",
    "name": "Hecht",
    "group": "raubfisch",
    "bild": "63-DAFV-Hecht-Esox-lucius2.jpg",
    "merkmale": [
      "Lang gestreckter, walzenförmiger Körper",
      "Entenschnabelartiges, flaches Maul mit vielen Fangzähnen",
      "Rückenflosse weit hinten, nahe der Schwanzflosse",
      "Grün-gelbe Marmorierung an den Flanken"
    ],
    "schon": "50 cm",
    "laich": "Februar–April"
  },
  {
    "id": "zander",
    "name": "Zander",
    "group": "raubfisch",
    "bild": "17-DAFV-Zander-Sander-lucioperca.jpg",
    "merkmale": [
      "Schlanker Raubfisch mit zwei getrennten Rückenflossen",
      "Erste Rückenflosse stachelig, mit dunklen Punktreihen",
      "Kräftige Fangzähne (Hundszähne)",
      "Glasige Augen, dunkle Querbinden"
    ],
    "schon": "50 cm",
    "laich": "April–Juni"
  },
  {
    "id": "barsch",
    "name": "Flussbarsch",
    "group": "raubfisch",
    "bild": "26-DAFV-Flussbarsch-Perca-fluviatilis.jpg",
    "merkmale": [
      "Hochrückiger Körper mit 6–9 dunklen Querbinden",
      "Zwei Rückenflossen, die erste hart bestachelt",
      "Dunkler Fleck am Ende der ersten Rückenflosse",
      "Rötliche Bauch- und Afterflossen"
    ],
    "schon": "—",
    "laich": "März–Mai"
  },
  {
    "id": "kaulbarsch",
    "name": "Kaulbarsch",
    "group": "raubfisch",
    "bild": "4-DAFV-Kaulbarsch-Gymnocephalus-cernua.jpg",
    "merkmale": [
      "Kleiner Barschartiger mit verwachsener Rückenflosse",
      "Schleimiger Körper, große Schleimgruben am Kopf",
      "Dunkle Punkte auf Rücken und Flossen",
      "Stachelige erste Rückenflosse"
    ],
    "schon": "—",
    "laich": "März–Mai"
  },
  {
    "id": "rapfen",
    "name": "Rapfen",
    "group": "raubfisch",
    "bild": "11-DAFV-Rapfen-Aspius-aspius.jpg",
    "merkmale": [
      "Großer, raubender Karpfenfisch (Schied)",
      "Schlanker, kräftiger Körper, silbrige Flanken",
      "Großes, oberständiges Maul mit vorstehender Unterlippe",
      "Jagt im Freiwasser nach Kleinfischen"
    ],
    "schon": "—",
    "laich": "April–Mai"
  },
  {
    "id": "wels",
    "name": "Wels (Waller)",
    "group": "raubfisch",
    "bild": "44-DAFV-Europaeischer-Wels-Silurus-glanis.jpg",
    "merkmale": [
      "Sehr großer, schuppenloser Körper",
      "Breites Maul mit zwei langen und vier kurzen Barteln",
      "Sehr lange Afterflosse bis zur Schwanzflosse",
      "Kleine Augen, dunkel marmorierte Haut"
    ],
    "schon": "—",
    "laich": "Mai–Juli"
  },
  {
    "id": "karpfen",
    "name": "Karpfen",
    "group": "friedfisch",
    "bild": "14-DAFV-Karpfen-Cyprinus-carpio.jpg",
    "merkmale": [
      "Hochrückiger, kräftiger Körper",
      "Vier Barteln am rüsselartig vorstülpbaren Maul",
      "Lange Rückenflosse mit gesägtem Hartstrahl",
      "Voll beschuppt (Wildform), Spiegel- oder Lederkarpfen"
    ],
    "schon": "—",
    "laich": "Mai–Juni"
  },
  {
    "id": "karausche",
    "name": "Karausche",
    "group": "friedfisch",
    "bild": "28-DAFV-Karausche-Carassius-carassius.jpg",
    "merkmale": [
      "Hochrückiger Körper ohne Barteln",
      "Abgerundete, nach außen gewölbte Rückenflosse",
      "Dunkler Fleck am Schwanzstiel",
      "Messingfarbene bis goldene Flanken"
    ],
    "schon": "—",
    "laich": "Mai–Juni"
  },
  {
    "id": "giebel",
    "name": "Giebel",
    "group": "friedfisch",
    "bild": "57-DAFV-Giebel-Carassius-gibelio.jpg",
    "merkmale": [
      "Karauschenähnlich, aber ohne Barteln",
      "Rückenflosse gerade bis leicht eingebuchtet",
      "Silbergraue Färbung, dunkles Bauchfell",
      "Schwarzer Fleck am Schwanzstiel fehlt meist"
    ],
    "schon": "—",
    "laich": "Mai–Juni"
  },
  {
    "id": "schleie",
    "name": "Schleie",
    "group": "friedfisch",
    "bild": "64-DAFV-Schleie-tinca-tinca2.jpg",
    "merkmale": [
      "Gedrungener Körper mit sehr kleinen Schuppen, schleimig",
      "Abgerundete Flossen",
      "Je ein kurzes Bartel im Mundwinkel",
      "Dunkelgrün-goldene Färbung, rote Augen"
    ],
    "schon": "—",
    "laich": "Mai–Juli"
  },
  {
    "id": "brasse",
    "name": "Brasse (Blei)",
    "group": "friedfisch",
    "bild": "24-DAFV-Brassen-Abramis-brama_scan.jpg",
    "merkmale": [
      "Hochrückiger, seitlich stark abgeflachter Körper",
      "Lange Afterflosse",
      "Rüsselartig vorstülpbares Maul",
      "Graue, schleimige Flanken, dunkle Flossen"
    ],
    "schon": "—",
    "laich": "April–Juni"
  },
  {
    "id": "guester",
    "name": "Güster",
    "group": "friedfisch",
    "bild": "32-DAFV-Guester-Blicca-bjoerkna.jpg",
    "merkmale": [
      "Brassenähnlich, aber kleinere, größere Schuppen",
      "Rötlich angelaufene Brust- und Bauchflossen",
      "Große Augen",
      "Große Augen, silbrige (nicht graue) Flanken"
    ],
    "schon": "—",
    "laich": "Mai–Juni"
  },
  {
    "id": "rotauge",
    "name": "Rotauge (Plötze)",
    "group": "friedfisch",
    "bild": "33-DAFV-Rotauge-Rutilus-rutilus.jpg",
    "merkmale": [
      "Silbriger, mäßig hochrückiger Körper",
      "Rote Iris (rotes Auge)",
      "Rückenflossenansatz über dem Bauchflossenansatz",
      "Endständiges Maul"
    ],
    "schon": "—",
    "laich": "April–Mai"
  },
  {
    "id": "rotfeder",
    "name": "Rotfeder",
    "group": "friedfisch",
    "bild": "16-DAFV-Rotfeder-Scardinius-erythrophthalmus.jpg",
    "merkmale": [
      "Oberständiges, nach oben gerichtetes Maul",
      "Leuchtend rote Flossen",
      "Rückenflosse deutlich hinter dem Bauchflossenansatz",
      "Goldglänzende Flanken"
    ],
    "schon": "—",
    "laich": "April–Juni"
  },
  {
    "id": "aland",
    "name": "Aland (Nerfling)",
    "group": "friedfisch",
    "bild": "25-DAFV-Aland-Leuciscus-idus.jpg",
    "merkmale": [
      "Kräftiger, leicht hochrückiger Körper",
      "Kleines, endständiges Maul",
      "Rötliche Bauch- und Afterflossen",
      "Nach innen gewölbte (konkave) Afterflosse"
    ],
    "schon": "—",
    "laich": "April–Mai"
  },
  {
    "id": "doebel",
    "name": "Döbel (Aitel)",
    "group": "friedfisch",
    "bild": "12-DAFV-Doebel-Squalius-cephalus.jpg",
    "merkmale": [
      "Walzenförmiger Körper mit großen Schuppen",
      "Breiter, stumpfer Kopf, großes endständiges Maul",
      "Nach außen gewölbte (konvexe) Afterflosse",
      "Dunkel gesäumte Schuppen"
    ],
    "schon": "—",
    "laich": "April–Juni"
  },
  {
    "id": "hasel",
    "name": "Hasel",
    "group": "friedfisch",
    "bild": "51-DAFV-Hasel-Leuciscus-leuciscus.jpg",
    "merkmale": [
      "Schlanker, gestreckter Körper, silbrig",
      "Kleines, leicht unterständiges Maul",
      "Nach innen gewölbte (konkave) Afterflosse",
      "Gelblich angelaufene Flossen"
    ],
    "schon": "—",
    "laich": "März–April"
  },
  {
    "id": "nase",
    "name": "Nase",
    "group": "friedfisch",
    "bild": "1-DAFV-Nase-Chondrostoma-nasus.jpg",
    "merkmale": [
      "Unterständiges Maul mit scharfkantiger, verhornter Lippe",
      "Nasenartig vorspringende Schnauze",
      "Schlanker Körper, dunkler Rücken, silbrige Flanken",
      "Schabt Algen von Steinen ab"
    ],
    "schon": "ganzjährig geschont",
    "laich": "März–April"
  },
  {
    "id": "barbe",
    "name": "Barbe",
    "group": "friedfisch",
    "bild": "9-DAFV-Barbe-Barbus-barbus.jpg",
    "merkmale": [
      "Lang gestreckter Körper, unterständiges Maul",
      "Vier Barteln an der Oberlippe",
      "Stark gesägter Hartstrahl in der Rückenflosse",
      "Lebt am Grund schnell fließender Gewässer"
    ],
    "schon": "40 cm",
    "laich": "Mai–Juni"
  },
  {
    "id": "gruendling",
    "name": "Gründling",
    "group": "friedfisch",
    "bild": "3-DAFV-Gruendling-Gobio-gobio.jpg",
    "merkmale": [
      "Kleiner, grundnaher Fisch, walzenförmig",
      "Zwei Barteln in den Mundwinkeln",
      "Reihe dunkler Flecken entlang der Seitenlinie",
      "Unterständiges Maul"
    ],
    "schon": "—",
    "laich": "Mai–Juni"
  },
  {
    "id": "ukelei",
    "name": "Ukelei (Laube)",
    "group": "friedfisch",
    "bild": "42-DAFV-Ukelei-Alburnus-alburnus.jpg",
    "merkmale": [
      "Schlanker, oberflächennaher Schwarmfisch",
      "Stark silbrig glänzende Flanken",
      "Oberständiges Maul",
      "Lange Afterflosse"
    ],
    "schon": "—",
    "laich": "Mai–Juni"
  },
  {
    "id": "schneider",
    "name": "Schneider",
    "group": "friedfisch",
    "bild": "38-DAFV-Schneider-Alburnoides-bipunctatus.jpg",
    "merkmale": [
      "Kleiner, schlanker Schwarmfisch",
      "Dunkle Doppellinie entlang der Seitenlinie",
      "Silbrige Flanken, fettig glänzend",
      "Leicht oberständiges Maul"
    ],
    "schon": "ganzjährig geschont",
    "laich": "April–Juni"
  },
  {
    "id": "elritze",
    "name": "Elritze",
    "group": "friedfisch",
    "bild": "30-DAFV-Elritze-Phoxinus-phoxinus.jpg",
    "merkmale": [
      "Sehr kleiner Schwarmfisch sauberer Bäche",
      "Walzenförmiger Körper, winzige Schuppen",
      "Reihe dunkler Querflecken / dunkles Längsband",
      "Männchen zur Laichzeit rot gefärbt"
    ],
    "schon": "ganzjährig geschont",
    "laich": "April–Juni"
  },
  {
    "id": "moderlieschen",
    "name": "Moderlieschen",
    "group": "friedfisch",
    "bild": "34-DAFV-Moderlieschen-Leucaspius-delineatus.jpg",
    "merkmale": [
      "Sehr kleiner, schlanker Oberflächenfisch",
      "Stark oberständiges Maul",
      "Glänzendes blaues Längsband an den Flanken",
      "Unvollständige Seitenlinie"
    ],
    "schon": "—",
    "laich": "April–Juni"
  },
  {
    "id": "bitterling",
    "name": "Bitterling",
    "group": "friedfisch",
    "bild": "52-DAFV-Bitterling-Rhodeus-amarus.jpg",
    "merkmale": [
      "Kleiner, hochrückiger Karpfenfisch",
      "Blaugrün schillerndes Längsband am Schwanzstiel",
      "Laicht in Teich- und Flussmuscheln",
      "Männchen zur Laichzeit prächtig gefärbt"
    ],
    "schon": "ganzjährig geschont",
    "laich": "April–Juni"
  },
  {
    "id": "aal",
    "name": "Aal",
    "group": "aal",
    "bild": "2-DAFV-Europaeischer-Aal-Anguilla-anguilla.jpg",
    "merkmale": [
      "Schlangenförmiger, langer Körper",
      "Rücken-, Schwanz- und Afterflosse zu einem Saum verwachsen",
      "Sehr kleine, in die Haut eingebettete Schuppen",
      "Bauchflossen fehlen vollständig"
    ],
    "schon": "50 cm",
    "laich": "Sargassosee (Atlantik)"
  },
  {
    "id": "quappe",
    "name": "Quappe (Rutte/Trüsche)",
    "group": "grundfisch",
    "bild": "49-DAFV-Quappe-Lota-lota.jpg",
    "merkmale": [
      "Einziger heimischer Dorschartiger im Süßwasser",
      "Ein einzelnes Bartel am Kinn",
      "Lange zweite Rücken- und Afterflosse",
      "Marmorierter, schlangenartiger Hinterkörper"
    ],
    "schon": "—",
    "laich": "Dezember–März"
  },
  {
    "id": "schmerle",
    "name": "Schmerle (Bachschmerle)",
    "group": "grundfisch",
    "bild": "19-DAFV-Bachschmerle-Barbatula-barbatula.jpg",
    "merkmale": [
      "Kleiner, grundnaher Fisch, walzenförmig",
      "Sechs Barteln um das unterständige Maul",
      "Marmorierte, schuppenlos wirkende Haut",
      "Lebt in sauberen, sauerstoffreichen Bächen"
    ],
    "schon": "—",
    "laich": "April–Juni"
  },
  {
    "id": "schlammpeitzger",
    "name": "Schlammpeitzger",
    "group": "grundfisch",
    "bild": "15-DAFV-Europaeischer-Schlammpeitzger-Misgurnus-fossilis.jpg",
    "merkmale": [
      "Langgestreckter, aalähnlicher Körper",
      "Zehn Barteln um das Maul",
      "Längsstreifen an den Flanken",
      "Kann Darmatmung betreiben (Wetterfisch)"
    ],
    "schon": "ganzjährig geschont",
    "laich": "April–Juni"
  },
  {
    "id": "steinbeisser",
    "name": "Steinbeißer",
    "group": "grundfisch",
    "bild": "10-DAFV-Steinbeisser-Cobitis-taenia.jpg",
    "merkmale": [
      "Kleiner, seitlich abgeflachter Grundfisch",
      "Reihen dunkler Flecken entlang der Flanken",
      "Aufrichtbarer Dorn unter dem Auge",
      "Sechs kurze Barteln"
    ],
    "schon": "ganzjährig geschont",
    "laich": "April–Juni"
  },
  {
    "id": "muehlkoppe",
    "name": "Mühlkoppe (Groppe)",
    "group": "grundfisch",
    "bild": "18-DAFV-Muehlkoppe-Cottus-gobio.jpg",
    "merkmale": [
      "Großer, breiter, abgeflachter Kopf",
      "Schuppenloser, grundnaher Körper",
      "Große, fächerartige Brustflossen",
      "Keine Schwimmblase – lebt am Gewässergrund"
    ],
    "schon": "ganzjährig geschont",
    "laich": "Februar–April"
  },
  {
    "id": "kesslergrundel",
    "name": "Kessler-Grundel",
    "group": "grundfisch",
    "bild": "47-DAFV-Kesslergrundel-Ponticola-kessleri.jpg",
    "merkmale": [
      "Eingewanderte Grundel, grundnah",
      "Zu einer Saugscheibe verwachsene Bauchflossen",
      "Zwei getrennte Rückenflossen",
      "Marmorierte Färbung mit Querbinden"
    ],
    "schon": "—",
    "laich": "März–Mai"
  },
  {
    "id": "stichling3",
    "name": "Dreistachliger Stichling",
    "group": "grundfisch",
    "bild": "13-DAFV-Dreistachliger-Stichling-Gasterosteus-aculeatus.jpg",
    "merkmale": [
      "Kleiner Fisch mit drei freien Rückenstacheln",
      "Knochenplatten statt Schuppen an den Flanken",
      "Schlanker Schwanzstiel",
      "Männchen zur Laichzeit rote Kehle"
    ],
    "schon": "—",
    "laich": "April–Juli"
  },
  {
    "id": "zwergstichling",
    "name": "Zwergstichling (Neunstachliger St.)",
    "group": "grundfisch",
    "bild": "56-DAFV-Neunstachliger-Stichling-Pungitius-pungitius.jpg",
    "merkmale": [
      "Sehr kleiner Fisch mit mehreren (7–11) Rückenstacheln",
      "Schmaler Schwanzstiel mit Kiel",
      "Keine durchgehenden Knochenplatten",
      "Lebt in krautreichen Kleingewässern"
    ],
    "schon": "—",
    "laich": "April–Juni"
  },
  {
    "id": "bachforelle",
    "name": "Bachforelle",
    "group": "salmonide",
    "bild": "65-DAFV-Bachforelle-Salmo-trutta-fario2.jpg",
    "merkmale": [
      "Fettflosse zwischen Rücken- und Schwanzflosse",
      "Rote, hell umrandete Tupfen an den Flanken",
      "Spindelförmiger Körper, kräftiges Maul",
      "Keine deutliche Schwanzbinde"
    ],
    "schon": "25 cm",
    "laich": "Oktober–Januar"
  },
  {
    "id": "meerforelle",
    "name": "Meerforelle",
    "group": "salmonide",
    "bild": "27-DAFV-Meerforelle-Salmo-trutta-forma-trutta.jpg",
    "merkmale": [
      "Fettflosse vorhanden, kräftiger silbriger Körper",
      "Schwarze x- oder punktförmige Flecken oberhalb der Seitenlinie",
      "Wenige/keine roten Tupfen",
      "Wanderform der Forelle (zieht ins Meer)"
    ],
    "schon": "40 cm",
    "laich": "Oktober–Januar"
  },
  {
    "id": "lachs",
    "name": "Lachs",
    "group": "salmonide",
    "bild": "35-DAFV-Atlantischer-Lachs-Salmo-salar.jpg",
    "merkmale": [
      "Fettflosse vorhanden, schlanker Schwanzstiel",
      "Schwarze Flecken meist oberhalb der Seitenlinie",
      "Spitzer Kopf, Oberkiefer bis unter das Auge",
      "Tief gegabelte Schwanzflosse"
    ],
    "schon": "ganzjährig geschont",
    "laich": "Oktober–Januar"
  },
  {
    "id": "bachsaibling",
    "name": "Bachsaibling",
    "group": "salmonide",
    "bild": "41-DAFV-Bachsaibling-Salvelinus-fontinalis.jpg",
    "merkmale": [
      "Fettflosse vorhanden",
      "Helle Tupfen und wurmartige Marmorierung auf dem Rücken",
      "Weiß gesäumte Vorderkanten der unteren Flossen",
      "Stammt aus Nordamerika"
    ],
    "schon": "25 cm",
    "laich": "Oktober–Februar"
  },
  {
    "id": "regenbogenforelle",
    "name": "Regenbogenforelle",
    "group": "salmonide",
    "bild": "29-DAFV-Regenbogenforelle-Oncorhynchus-mykiss.jpg",
    "merkmale": [
      "Fettflosse vorhanden",
      "Breites, schillernd rosa-violettes Längsband",
      "Schwarze Punkte auch auf Rücken- und Schwanzflosse",
      "Stammt aus Nordamerika"
    ],
    "schon": "25 cm",
    "laich": "Frühjahr (Dez–Mai)"
  },
  {
    "id": "aesche",
    "name": "Äsche",
    "group": "salmonide",
    "bild": "46-DAFV-Europaeische-Aesche-Thymallus-thymallus.jpg",
    "merkmale": [
      "Fettflosse vorhanden",
      "Auffällig große, fahnenartige Rückenflosse",
      "Schlanker, silbriger Körper mit feinen Längslinien",
      "Kleines, leicht unterständiges Maul"
    ],
    "schon": "30 cm",
    "laich": "März–Mai"
  },
  {
    "id": "maifisch",
    "name": "Maifisch",
    "group": "meeresfisch",
    "bild": "60-DAFV-Maifisch-Alosa-alosa.jpg",
    "merkmale": [
      "Heringsartiger, seitlich abgeflachter Wanderfisch",
      "Stark silbrige Flanken, gekielter Bauch",
      "Meist ein dunkler Schulterfleck hinter dem Kiemendeckel",
      "Zieht zum Laichen flussaufwärts"
    ],
    "schon": "ganzjährig geschont",
    "laich": "Mai–Juni"
  },
  {
    "id": "dorsch",
    "name": "Kabeljau (Dorsch)",
    "group": "meeresfisch",
    "bild": "45-DAFV-Dorsch-Gadus-morhua.jpg",
    "merkmale": [
      "Drei Rücken- und zwei Afterflossen",
      "Deutliches Kinnbartel",
      "Helle, geschwungene Seitenlinie",
      "Oberkiefer überragt den Unterkiefer"
    ],
    "schon": "—",
    "laich": "Dezember–März"
  },
  {
    "id": "neunauge",
    "name": "Bach-/Flussneunauge",
    "group": "neunauge",
    "bild": "23-DAFV-Bachneunauge-Lampetra-planeri.jpg",
    "merkmale": [
      "Aalähnlicher, kieferloser Rundmaul-Körper",
      "Runder Saugmund statt Kiefer",
      "Sieben Kiemenöffnungen hinter dem Auge",
      "Keine paarigen Flossen, kein Schuppenkleid"
    ],
    "schon": "ganzjährig geschont",
    "laich": "März–April"
  },
  {
    "id": "zaehrte",
    "name": "Zährte",
    "group": "friedfisch",
    "bild": "",
    "merkmale": [
      "Karpfenfisch mit vorspringender, nasenartiger Schnauze",
      "Unterständiges Maul",
      "Schlanker, silbriger Körper",
      "Zur Laichzeit dunkler Rücken und Bauch"
    ],
    "schon": "—",
    "laich": "Mai–Juni"
  },
  {
    "id": "makrele",
    "name": "Makrele",
    "group": "meeresfisch",
    "bild": "",
    "merkmale": [
      "Spindelförmiger, schnellschwimmender Meeresfisch",
      "Grünblauer Rücken mit dunklen Wellenlinien",
      "Mehrere kleine Flösselchen vor der Schwanzflosse",
      "Keine Schwimmblase"
    ],
    "schon": "—",
    "laich": "Mai–Juli"
  },
  {
    "id": "flunder",
    "name": "Flunder",
    "group": "meeresfisch",
    "bild": "",
    "merkmale": [
      "Plattfisch, meist rechtsäugig (Augen auf der Oberseite)",
      "Raue Knochenhöcker entlang Seitenlinie und Flossenansätzen",
      "Bräunlich getarnte Oberseite",
      "Wandert auch in Flussmündungen ein"
    ],
    "schon": "—",
    "laich": "Februar–Mai"
  },
  {
    "id": "nordseeschnaepel",
    "name": "Nordseeschnäpel",
    "group": "salmonide",
    "bild": "",
    "merkmale": [
      "Lachsartiger mit Fettflosse",
      "Vorspringende, spitze Schnauze",
      "Silbriger, schlanker Körper",
      "Wanderfisch zwischen Nordsee und Flüssen"
    ],
    "schon": "ganzjährig geschont",
    "laich": "November–Dezember"
  },
  {
    "id": "edelkrebs",
    "name": "Edelkrebs",
    "group": "krebs",
    "bild": "",
    "merkmale": [
      "Heimischer Flusskrebs mit kräftigen Scheren",
      "Rotbraune bis dunkelbraune Färbung, Scheren-Unterseite rötlich",
      "Zwei Höckerpaare hinter der Nackenfurche",
      "Lebt in sauberen, kühlen Gewässern"
    ],
    "schon": "—",
    "laich": "Oktober–November (Paarung)"
  },
  {
    "id": "kamberkrebs",
    "name": "Amerikanischer Flusskrebs",
    "group": "krebs",
    "bild": "",
    "merkmale": [
      "Eingeschleppter Flusskrebs (Kamberkrebs)",
      "Rotbraune Querbinden auf dem Hinterleib",
      "Kräftige Dornen seitlich am Kopfbrustpanzer",
      "Überträgt die Krebspest"
    ],
    "schon": "—",
    "laich": "Frühjahr / Herbst"
  }
];

/* Basis-URL der Fischbilder (Dateinamen stehen in FISCH_DATA[].bild) */
window.FISCH_BILD_BASE = "https://asv-dringenberg.de/wp-content/gallery/dafv-fischbilder/";
