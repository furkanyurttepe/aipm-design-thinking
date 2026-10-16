# Project Summary — Design Thinking with Claude Code

🇹🇷 [Türkçe sürüm](SUMMARY.tr.md)

> **Note:** all user evidence in this project (interviews, observations,
> tests) is **simulated by AI** for a training exercise and labelled as such.

## 1. What this repository teaches

A Markdown learning path on using Design Thinking for product discovery, and
on directing Claude Code as an **AI Project Manager**: Claude produces the
artifacts, the human owns evidence and decisions.

| Module | Topic |
|---|---|
| 01 | Why design processes exist; Design Thinking vs Double Diamond vs design sprint |
| 02 | Empathise with evidence: evidence log, personas, journey maps |
| 03 | Define and ideate: problem statement, POV, How Might We, idea selection |
| 04 | Prototype, test and iterate: fidelity, neutral test tasks, evidence-based changes |
| 05 | Claude Code Skills (reusable method) and subagents (isolated reviewers) |
| 06 | Workshop handout: one complete cycle, core outputs, optional extensions |

## 2. The challenge

**Newcomers to a city who love music want to meet people to talk about
music with.** Focus: helping them start — and continue — a music
conversation at or just after a music event.

## 3. What we did, step by step

1. **Review questions (modules 01–05)** answered one by one, plus a practice
   journey map → `practice-journey-map.md`.
2. **Framing:** chose the challenge and narrowed the focus.
3. **Evidence:** 8 simulated interviews and 2 simulated observations →
   `discovery.md`.
4. **Configure Claude Code:** a Design Thinking Skill and two read-only
   subagents (evidence auditor, prototype reviewer) → `.claude/`.
5. **Synthesis:** evidence clusters, persona, journey map, POV and HMW; the
   evidence auditor found wrong citations and solution leakage; the AI PM
   accepted, edited or rejected each finding.
6. **Ideation:** 8 ideas scored on user value, learning value, feasibility
   and risk; the AI PM added an own idea and chose **Jam Prompt Cards** →
   `decision-log.md`.
7. **Prototype:** a web deck of jam cards — random genre, key, chords, rhythm
   with guitar strumming, theme and opening line on faded classic playing
   cards; a question on the back; a Break joker every 8 cards.
8. **Review and test:** two prototype reviews, then a simulated jam test with
   a baseline set → `test-notes.md`.
9. **Iteration:** music questions on cards, personal questions on the Break;
   harder genres dealt less often.

## 4. Optional extensions (all 8)

Improved the Skill and the auditor after real mistakes · ran a second test ·
cross-group review (AI peer, adapted for a solo participant) · explored the
host-introduction alternative · accessibility fixes · offline fallback ·
decision brief → `extensions.md`.

## 5. The prototype

Open `prototype/index.html` in a browser. Press **♫ Jam** for a new card, tap
the card to turn it over, and use **Export session log** after a session.
Card images and the handwriting font load from the internet.

## 6. Key decisions and corrections by the AI PM

- Reframed the HMW away from "shares their taste".
- Removed visual cues Claude had added (dog-eared corner, ↻ symbol) and the
  Undo button.
- Rewrote two claims in the decision brief that went beyond the evidence.
- Known trade-offs: no cue that a card can be turned over; no undo; needs
  internet.

## 7. Limits

All evidence is simulated; listeners were not tested; it is unknown whether
conversations continue after the event.

## 8. File map

| File | Contents |
|---|---|
| `discovery.md` | Evidence, persona, journey map, POV, HMW, audit decisions |
| `decision-log.md` | Ideas, criteria, choice, prototype versions, review decisions, test plan |
| `test-notes.md` | Two simulated tests, interpretation, approved iteration |
| `extensions.md` | The 8 optional extensions and the decision brief |
| `ai-collaboration-log.md` | Final audit, collaboration log, reflection |
| `prototype/index.html` | The Jam Prompt Cards prototype |
| `.claude/` | Design Thinking Skill and two subagents |

## 9. Next step

Two real jam evenings: the host deals the Break joker and makes one
introduction during it, compared with cards alone.
