# Optional Extensions

> Evidence base is **SIMULATED (AI-generated)** — see `discovery.md` and
> `test-notes.md`. Extensions were done one at a time, after the core
> prototype had been tested and iterated once.

## 1. Improve the Design Thinking Skill

- **Weakness observed:** Claude broke the evidence rules twice while following
  the Skill — it cited evidence IDs that did not support the claim (evidence
  audit, finding 1) and wrote a "because" interpretation into an observation
  table (`test-notes.md`, T-8). The Skill did not forbid either explicitly.
- **Instruction changed (`.claude/skills/design-thinking/SKILL.md`, Evidence
  rules):**
  - Before citing an evidence ID, re-read it and check that it actually
    supports the claim; drop citations that only relate to the topic.
  - Observation tables record only what happened. Words such as "because",
    "so", "seems" or "probably" belong in an Interpretation section.
- **Difference in output:** with the new rules, the T-8 cause moved to the
  Interpretation section (I7), and test-note results that went beyond the
  observation (T-3 "Hesitated") were rewritten.
- **Keep?** Yes — both rules address mistakes that actually happened.

## 2. Improve a Subagent (evidence-auditor)

- **Issue:** the auditor only read `discovery.md`, so the interpretation in
  `test-notes.md` (T-8) was caught by the AI PM, not by any subagent.
- **Change (`.claude/agents/evidence-auditor.md`):** scope now includes
  `test-notes.md` and observation IDs (T-#, S-#); new check 6,
  "Interpretation in observation tables".
- **Same review, before vs after** (run on a copy of the notes with the old
  T-8 wording):

  | Issue | Old auditor | New auditor |
  |---|---|---|
  | "because" in T-8 | Not checked (out of scope) | **Caught** |
  | T-3 result "Hesitated" not observed | Not checked | **Caught** |
  | Session-log counts not traceable to observations | Not checked | **Caught** |

- **Other findings from the new run, accepted by the AI PM (A1–A9):** T-3
  result rewritten; note that summary counts come from the session log;
  conversation lengths marked as estimates; participants renamed N1–N4 to
  avoid confusion with T-# IDs; journey row 5 uses E1's own wording; row 4
  "only" softened and introductions marked jam-only; cluster C3 marked as
  partly single-participant; open question added about going to concerts
  alone.
- **More focused, not more verbose?** Yes — one added check, one added file;
  the report stayed under 300 words.

## 3. Run a Second Test and Iteration

- Comparable task with new (simulated) participants on v8.1; details in
  `test-notes.md` → "Second Test".
- **Result:** fewer skipped cards (5/14 → 1/9) after harder genres were dealt
  less often; fewer cards turned over (75% → 56%) after the corner cue was
  removed.
- **Next smallest change:** standard ↻ turn-over symbol on each front —
  implemented (v9), later **removed by the AI PM** (v11, "not needed").

## 4. Cross-Group Review (adapted for a solo participant)

> **Adaptation:** there is no second group, so a fresh AI agent that had not
> seen this project acted as the peer. It received only what the handout
> allows: `discovery.md`, the learning question and the prototype. This is an
> **AI peer review, not a review by people.**

| Asked for | Peer finding | AI PM decision |
|---|---|---|
| One strong link between evidence and design | Question on the back, *after* playing, ties to E1 and O1; the Break lands on the between-sets gap (O1). | Noted — keeps the core design. |
| One claim that needs better evidence | "A card can stand in for an introduction" — C2 rests on one T-shirt case and on human hosts (E4, E6, O2). | Accepted as an open question; informs extension 5. |
| One part that does not answer the learning question | Session log marked every flipped card "played" and had no field for whether a conversation happened. | **Accepted and fixed** (v9 log fields). |
| One question to investigate next | Does a back-side conversation ever lead to contact after the event? Can listeners take part at all? | Added to next steps. |

**Compared with the subagent reviews:** neither `prototype-reviewer` nor
`evidence-auditor` noticed that the session log could not answer the learning
question. A reviewer with no project history saw it at once.

## 5. Explore an Alternative Direction (rejected idea #1: host ritual)

**Smallest representation — a five-line host script:**

1. Greet each newcomer at the door.
2. Ask what they play or listen to.
3. Introduce them to one regular, naming one thing they share.
4. After the set, check in with both together.
5. Tell them when the next jam is.

| | Jam Prompt Cards | Host ritual |
|---|---|---|
| Evidence | E1, O1 (gap after playing) | **Stronger:** introductions led to conversation twice (E6, O2) |
| Answers the current learning question? | Yes | No — it does not test the back-side question |
| Depends on | Phone, internet | A willing host (hard to scale) |
| Listeners | Not covered | Partly (greeting at the door) |

**Does the original decision hold?** Yes, for the current learning question.
But the evidence for human introductions is stronger than for cards (see the
peer review). **Next experiment:** combine them — the host deals the Break
joker and makes one introduction during it.

## 6. Deepen Accessibility and Inclusion

The `prototype-reviewer` ran an accessibility and inclusion review (keyboard,
clarity, contrast, error recovery, assumptions about abilities). Its findings
are critique, not user evidence. The AI PM selected:

| # | Concern | Change (v10) | Decision |
|---|---|---|---|
| X1 | Reading in low light | Card art faded further (veil 70% → 80%); legend and counts fully opaque | Accepted |
| X2 | Jam button below the fold on small phones | Card sized to the screen height; Jam and Undo stay visible | Accepted |
| X3 | Undo unclear; restored card loses its flip; shortcuts fire anywhere | Visible "Undo" label; undo keeps the flipped state; keyboard shortcuts only when no button has focus | Accepted; **Undo later removed by the AI PM** (v11); shortcut fix kept |
| X4 | No role for people without an instrument | "No instrument? Clap, hum or sing along." on every card | Accepted |
| X5 | Screen readers miss the ↻ hint | Neutral description "Tap to turn over." | Accepted; **removed with the ↻ symbol** (v11) |
| X6 | Notation terms (♩., swing, 16ths) assume musical skill | — | Rejected — notation was a deliberate AI PM choice |
| X7 | Needs internet | — | Deferred — partly handled in extension 7 |

**Verified directly:** no text overflows on any genre/key at 1024, 375 and
360 px widths; on a 360 × 640 phone the Jam button ends at 608 px, inside the
screen. (Undo and the ↻ description were verified in v10, then removed in v11.)
**Not verified:** with people who have the relevant access needs.

## 7. Add a Failure or Recovery Journey — "No internet at the venue"

| Step | What happens |
|---|---|
| 1 | Jam is pressed, but the playing-card image does not load. |
| 2 | Before the fix: the card looks like a blank cream box; the playing-card feel is lost. |
| 3 | The handwriting font also fails; a system font is used (text stays readable). |
| 4 | People may think the deck is broken. |

**Approved recovery behaviour:** if a card image cannot load, the card index
(e.g. **7♥**, **JOKER**) appears as text in the corners, and the card back
falls back to plain red — the card still reads as a playing card.
**Tested:** forced a missing image; the card switched to the fallback and
showed the text index.

## 8. Decision Brief

> Every claim below is limited by the evidence: **all evidence is simulated.**

- **Problem:** In our simulated interviews, some newcomers who love music did
  not manage to get a conversation going at music events; in the simulated evidence the gap was *after*
  playing (E1, O1), and introductions helped in a few cases (E4, E6, O2).
- **Chosen direction:** Jam Prompt Cards — a prompt to play together, then a
  question about the music that was just made.
- **Prototype (v11):** random prompts on faded classic playing cards; music
  questions on the back; a Break joker with a personal question after every
  8 cards; session log for observers.
- **What two simulated tests suggested (low confidence):** music questions
  were followed by longer conversations than personal ones (3/4 vs 0/2);
  dealing hard genres less often may reduce skipping; without a cue, fewer
  cards were turned over, mostly by regulars.
- **Remaining uncertainty:** no real users yet; listeners not tested; unknown
  whether conversations continue after the event; whether a card can do what
  a host introduction does.
- **Recommended next experiment:** with real people, 2 jam evenings: the host
  deals the Break joker and makes one introduction during it; compare with
  cards alone, using the session log plus observer notes.

**AI PM review of the brief:** two claims were more confident than the
evidence. "often do not get a conversation going" became "some … did not
manage" (6 simulated interviews cannot support a frequency claim), and
"reduced skipping" became "may reduce skipping" (two small simulated tests).
