# Decision Log

> Evidence base is **SIMULATED (AI-generated)** — see `discovery.md`.

## HMW

How might we help newcomers who love music start and continue a music
conversation when they are at, or just leaving, a music event?

## Ideas (generated before evaluation)

| # | Idea | Type | Inspired by |
|---|---|---|---|
| 1 | Host introduction ritual — the host introduces each newcomer to one regular | Process | E6, O2 |
| 2 | Taste badge — sticker or wristband showing a favourite genre | Physical cue | E4 |
| 3 | After-jam table — a fixed 20-minute "stay after" moment nearby | Place and time | E1 |
| 4 | Pre-event thread — attendees say "I'm coming" online before the event | Digital, online first | E8, E7 |
| 5 | Conversation cards — question cards on tables | Physical, low-tech | O1, E1 |
| 6 | Music-taste matching app (parked idea from practice map) | Digital product | E3 (E5 caution) |
| 7 | Newcomer buddy — a volunteer regular accompanies a newcomer for one night | Community | E6, O2 |
| 8 | Jam improvisation cards — chord progression, rhythm, tempo, genre, and a lyric theme + opening line *(proposed by the AI PM)* | Physical, creative | E1, E2 |

## Selection Criteria

Scored 1–3: user value, learning value, feasibility, risk (3 = low risk).

| # | User value | Learning value | Feasibility | Risk | Total |
|---|---|---|---|---|---|
| 1 | 3 | 2 | 3 | 2 | 10 |
| 2 | 2 | 3 | 3 | 2 | 10 |
| 3 | 2 | 2 | 2 | 3 | 9 |
| 4 | 2 | 3 | 2 | 2 | 9 |
| 5 | 2 | 2 | 3 | 3 | 10 |
| 6 | 2 | 1 | 1 | 1 | 5 |
| 7 | 3 | 2 | 2 | 2 | 9 |
| 8 | 2 | 2 | 3 | 2 | 9 |
| **8 + 5** | **3** | **3** | **3** | **2** | **11** |

## Decision

**Selected: 8 + 5 combined — "Jam Prompt Cards".** Front: an improvisation
prompt (progression, rhythm, tempo, genre, lyric theme and opening line).
Back: a question to talk about the music just made.

**Reason (AI PM):** The cards prompt a song and then a conversation about the
music that was made, because what is played at a jam otherwise "stays in the
air" and is never discussed *(E1)*.

## Rejected or Deferred Options

| # | Reason |
|---|---|
| 6 Matching app | Low learning value and feasibility; general apps were abandoned *(E5)*. Kept parked. |
| 1, 7 Host ritual / buddy | Strong but depend on hosts and volunteers; candidate for a later test. |
| 2 Taste badge | Addresses recognising taste, which the audit showed is not the main barrier. |
| 3, 4 | Deferred; 4 may suit online-first newcomers *(E8)*. |

## Known Limitation

The cards mainly serve **players** (P1, P4); listeners (P2, P3, P5, P6) are
not directly addressed.

## Learning Question (Phase 7)

When newcomers play from a Jam Prompt Card, does the back-side question lead
them to **start and continue** a conversation about the music after playing?

## Prototype

- **v1 format:** Printable paper cards, delivered as one HTML page
  (`prototype/index.html`). Cards flip on screen; printing produces fronts and
  backs to cut out.
- **Why this fidelity:** The learning question is about behaviour after
  playing, not about an interface. Paper cards are the lowest fidelity that can
  be used in a real jam.
- **v1 → v1.1 (AI PM decision):** Expanded from 6 to 26 cards; removed the
  Turkish opening line so all cards use one language.
- **v2 format (AI PM decision):** 20 cards shown as an **on-screen deck** —
  one card at a time, tap to turn over, "Previous" / "Next card" to skip a card.
  Printing is kept as an option. *Side effect:* the test moves from paper cards
  to a phone or tablet passed around at the jam; this may change behaviour.

- **v3 (AI PM decisions):**
  - Time signature shown in music notation (stacked), tempo as a metronome
    mark (♩ = 72), swing noted where relevant.
  - A suggested guitar strumming pattern per card, aligned to the count.
  - Classic playing-card look (corner indices and a faint suit watermark),
    kept subtle so it stays in the background.
  - Endless random deck: the 20 prompts are reshuffled whenever all have been
    dealt; no prompt repeats twice in a row.
  - A **Break joker** after every 8 prompts: instruments down for a few
    minutes, with a question on the back.
  - *Fidelity note:* the strumming and notation support the learning question
    (cards must be playable to reach the back). The playing-card look is
    **visual polish** chosen by the AI PM; during the test, watch whether
    people react to the look rather than to the prompt and question.

- **v4 (AI PM decisions):**
  - Cozy, bohemian look: warm wooden table, lamp glow, earthy colours.
  - Prompts are "handwritten in pen" on a standard playing card (corner
    indices and faint standard pip layout); the playing card itself is drawn
    at random from a shuffled 52-card deck, independently of the prompt.
  - Card backs look like a classic playing-card back; the question is
    handwritten on a taped kraft label.
  - "Previous" / "Next" replaced by one central **♫ Jam** button (no going
    back; press Jam again to skip a card).
  - Card numbers removed. *This reverses review finding 5;* observers log
    cards by genre instead (each genre is unique).
  - Fixed a bug where the front text could show through when the card was
    turned over.
  - *Fidelity note:* all v4 visual changes are polish chosen by the AI PM.

- **v5 (AI PM decisions):**
  - Prompts are **generated** on every Jam instead of drawn from 20 fixed
    cards: genre, key, progression, tempo, theme + opening line, and back-side
    question are picked independently at random.
  - Rhythm, time signature, feel and strumming stay tied to the genre; the key
    is one the genre is commonly played in, and the progression is transposed
    into it (e.g. flamenco: Andalusian cadence in Am, Em or Dm).
  - Opening lines are tied to their theme, so a line always fits its theme.
  - Round Jam button; faint corner indices; more traditional card faces
    (ornate ace of spades, double-framed court cards); bright red card back.
  - Observers now log **genre, key and question** for each card, since cards
    are no longer fixed.

- **v6 (AI PM decision):** The hand-drawn card faces were replaced with a
  classic illustrated deck — **SVG-cards** by David Bellot and Huub de Beer
  (LGPL-2.1, https://github.com/htdebeer/SVG-cards), loaded unmodified from
  the jsDelivr CDN. Fronts and the joker are faded (~30%) behind the
  handwriting; the back uses the deck's red card back. Credit shown on the
  page. *Limitation:* card images and the handwriting font need an internet
  connection.

- **v7:** pre-test fixes from the second review (see "Prototype Re-review
  Decisions").
- **v8 (Phase 9 iteration, evidence-based):** M questions on prompt cards, P
  questions on the Break joker; corner nudge; harder genres dealt half as
  often. See `test-notes.md` → "Approved Iteration".
- **v8.1 (AI PM decision):** Removed the dog-eared corner and its nudge — the
  AI PM judged that it carries no meaning for users. This reverses re-review
  finding 5 and iteration C2; "turned over" in the session log now also
  reflects whether people discover the back on their own.
- **v9 (AI PM decisions after the second test and peer review):**
  - A standard turn-over symbol (↻) at the bottom of each front (second test:
    only 56% of played cards were turned over).
  - Session log no longer labels flipped cards as "played"; it records only
    what the page knows (turned over yes/no; outcome: current / moved on /
    undone) and adds empty columns for observers: conversation started,
    minutes, notes (peer review finding 3).
- **v10 (optional extensions 6–7):** accessibility fixes X1–X5 and an offline
  fallback for card images; see `extensions.md`.
- **v11 (AI PM decision):** removed the ↻ turn-over symbol (and its
  screen-reader description) and the Undo button — "not needed". The card
  again has no turn-over cue (see second test, T2-1); an accidental Jam can no
  longer be undone. Both are recorded as known trade-offs.
- **v12 (AI PM decisions):**
  - Break card text changed from "Put your instruments down for a few
    minutes." to "Let your fingers down."
  - Keys: all 12 major and 12 minor keys, dealt at random; open-chord keys
    (C, G, D, A, E, Am, Em, Dm) come twice as often. *This partly reverses
    re-review finding 2* (open-chord keys only) — harder keys such as E♭ minor
    or F♯ major now appear, which may lead to more skipped cards.
  - Chords are spelled by music theory from the key (e.g. C major ♭VII = B♭,
    E♭ minor ♭VI = C♭); verified for all 444 genre × key × progression
    combinations.
  - Each card also shows the progression in Roman numerals (e.g.
    i – ♭VII – ♭VI – V).
  - Legend lines shortened to fit small phones.
- **v13 — "Card Session" app (AI PM decisions, added without user testing):**
  `app/` is an installable, offline-capable version of the prototype; the
  course deliverable in `prototype/` stays unchanged.
  - PWA: manifest, ♫ icon, service worker; card images and font bundled
    locally (~2.3 MB); the page itself loads network-first so updates arrive
    at once.
  - Start screen: **Group Jam** (Create → 6-digit code; Join → enter the code;
    same card for everyone, the creator deals, musician count shown) and
    **Single Play** (cards do not turn over, no question, button reads
    "Next").
  - **Simulated server** for Group Jam: tabs in one browser really share
    cards; simulated musicians join over time; separate phones do not
    connect yet.
  - Metronome in the card's tempo and meter, with group accents.
  - New meters: Karşılama 9/8, Aksak 7/8, Aksak 5/8 (Turkish aksak) and
    5/4 Blues.
  - Retro, bohemian look with raised buttons; a back button top-left replaces
    the "Leave" and "Change" links.
  - Name: **Card Session — jam prompts for musicians** ("Riffle" rejected:
    taken by a music platform). Playing-card look kept so the card's number
    and suit can carry meaning later.
  - Store, privacy, naming and monetisation notes: `app/STORE-NOTES.md`.

## Prototype Review Decisions

Review run by the `prototype-reviewer` subagent on v1.1 (26 cards).

| # | Finding | Decision | Reason |
|---|---|---|---|
| 1 | About half the back questions are not about the music just played | **Edited** | Kept both types but tagged them (table below) so the test can compare which type opens conversation. |
| 2 | Some cards are hard to play (high tempo / advanced technique) | Accepted | Removed Jazz swing, Salsa, Punk, Surf rock, Ska, Metal → 20 cards. |
| 3 | White-on-navy backs may print blank | Accepted | Printed backs use dark text on white. |
| 4 | Front and back pages do not line up when printed double-sided | Accepted | Backs mirrored per row. |
| 5 | No card IDs for observers | Accepted | Card number on both sides. |
| 6 | Screen readers announce only the genre | Accepted | Removed aria-label override; hidden face is aria-hidden. |
| 7 | Text too small for jam lighting | Accepted | Minimum ~1rem. |
| 8 | "After you play" label explains the back side | Accepted | Removed. |
| 9 | Header instruction is leading | Accepted | Removed; title only. |
| 10 | No baseline: players may chat anyway | Accepted | Added baseline set to the test plan. |
| — | Reviewer suggested 8–10 cards | **Rejected (partly)** | AI PM kept 20 easy cards so players can skip cards they do not like. |

## Prototype Re-review Decisions (v6 → v7)

Second review by the `prototype-reviewer` subagent on v6, before testing.

| # | Finding | Decision | Reason / change |
|---|---|---|---|
| 1 | No record of which cards were dealt; observers may miss data | Accepted | Hidden session log (time, card, genre, key, chords, theme, question, M/P/J type, turned over, outcome) with "Export session log" as CSV. |
| 2 | Some keys are hard for newcomers (Bm, F, B♭, maj7 in flat keys) | Accepted | Keys limited to open-chord keys: C, G, D, A, E, Am, Em, Dm. |
| 3 | Skipped cards count towards the Break | Rejected | Kept simple; observed during the test instead. |
| 4 | Images and font need internet | Deferred | Known limitation; offline copy would require downloading files. |
| 5 | Nothing shows the card can be turned over | **Accepted, later reverted** | Dog-eared corner added in v7; removed in v8.1 by the AI PM (no meaning for users). |
| 6 | An accidental Jam loses the card | Accepted | ↶ button brings back the last card (one step). |
| 7 | Legend and counts ~14px on narrow phones | Accepted | Minimum 1rem. |
| 8 | Credit text low contrast | Accepted | Larger, full-cream text with shadow. |
| 9 | aria-label on plain elements may not be announced | Accepted | Replaced with visually hidden text. |
| 10 | Playing-card look may suggest a card game is starting | Observe | Added to what to watch in the test. |
| 11 | Print sheet changes on every load | Deferred | The test uses the on-screen deck. |

## Question Types

Not printed on the cards, so participants are not led by it.
**M** = about the music just played (12) · **P** = personal / getting to know
you (9). Since v8, prompt cards use only M questions and the Break joker uses
only P questions.

| Question | Type |
|---|---|
| Which song did this progression remind you of? | M |
| What would you change if we played it again? | M |
| What did the other player do that you liked? | M |
| What story did the song tell you? | M |
| What feeling did we create together? | M |
| Which line would you keep if we wrote it down? | M |
| What would you write about next? | M |
| Which instrument would you add next time? | M |
| What did you hear that surprised you? | M |
| What would you name this song? | M |
| What image came to mind while playing? | M |
| What other song does this rhythm remind you of? | M |
| Where did you first hear music like this? | P |
| Who should we invite to play this with next time? | P |
| Which local spot would you play this at? | P |
| Who brought you to music? | P |
| What's the last song you had on repeat? | P |
| Which band got you into music? | P |
| Who would you play this song for? | P |
| What's the first album you ever bought? | P |
| What has been your favourite moment tonight? | P |

**J** = Break joker, dealt after every 8 prompts. It creates a planned gap
between playing — the moment where newcomers were seen standing alone
*(O1, E3)* — so the test can observe whether conversation starts during it.

## Test Plan

1. **Baseline:** Observe one set **without** cards. Note whether players talk
   after the set, for how long, and about what.
2. **Card set:** Hand the deck to a group. Task (neutral): "Use this however
   you like during the next set." Do not explain the back side.
3. **Observe:** Which cards were skipped; whether the card was turned over;
   whether a conversation started after playing, how long it lasted, and
   whether it was about the music (M) or personal (P).
4. **Break joker:** What happens during the break — do people talk, and with
   whom? Does a newcomer stay alone?
5. **Also watch:** whether people discover that the card can be turned over;
   whether the playing-card look makes anyone expect a card game; how
   skipping affects when the Break arrives.
6. **After the session:** export the session log and attach it to
   `test-notes.md`.
