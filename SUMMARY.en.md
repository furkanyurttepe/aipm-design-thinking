# Project Summary — Design Thinking with Claude Code

🇹🇷 [Türkçe sürüm](SUMMARY.tr.md)

> **Note:** all user evidence in this project (interviews, observations,
> tests) is **simulated by AI** for a training exercise and labelled as such.

Each step says briefly **what we did** and **why**.

## What this repository teaches

Using Design Thinking for product discovery, and directing Claude Code as an
**AI Project Manager**: Claude produces the artifacts; the human owns
evidence and decisions.

| Module | Topic |
|---|---|
| 01 | Design processes; Design Thinking vs Double Diamond vs design sprint |
| 02 | Empathise with evidence: evidence log, persona, journey map |
| 03 | Define and ideate: problem statement, POV, How Might We, idea selection |
| 04 | Prototype, test and iterate |
| 05 | Claude Code Skills and subagents |
| 06 | Workshop handout: one full cycle, core outputs, optional extensions |

---

## A. Learning the course

### 1. Reviewed the repository
- **What:** Read every file and worked out the goal.
- **Why:** The first assumption was a data-science project; it is a Design
  Thinking and Claude Code course, so the work had to start from that.

### 2. Answered the review questions (modules 01–05)
- **What:** Answered and corrected each "Check Your Understanding" question.
- **Why:** To settle the concepts used later — evidence vs assumption,
  persona, HMW, prototype fidelity, Skill vs subagent.

### 3. Drew a practice journey map
- **What:** Mapped a newcomer music fan's evening in 5 phases
  → `practice-journey-map.md`
- **Why:** Module 02's exercise. Every row was an **assumption**, which showed
  why real evidence is needed.

---

## B. Main project: the Design Thinking cycle

### 4. Chose and framed the challenge
- **What:** Focus: newcomers **finding someone to talk to about music**; one
  journey, one prototype.
- **Why:** The handout asks for a small, testable journey; a broad problem
  cannot be learned from one prototype.

### 5. Recorded the evidence
- **What:** 8 interview notes and 2 observations → `discovery.md`. The
  evidence was **simulated** by decision and labelled everywhere.
- **Why:** Module 02's rule: raw evidence before synthesis. There was no time
  to reach real people; the label stops it being mistaken for research.

### 6. Configured Claude Code (Skill and 2 subagents)
- **What:** The `design-thinking` Skill plus the `evidence-auditor` and
  `prototype-reviewer` subagents → `.claude/`
- **Why:** The Skill applies the method (evidence rules, approval gates) the
  same way every time. The subagents review the work **independently** of
  the conversation that wrote it — like an external auditor.

### 7. Synthesised and audited
- **What:** Evidence clusters, persona, journey map, POV and HMW; the evidence
  auditor returned 8 findings, each accepted, edited or rejected by the AI PM.
- **Why:** The evidence changed the starting assumption (the problem is not
  finding a companion but conversation not starting). The audit caught wrong
  citations and a hidden solution in the HMW ("shared taste").

### 8. Generated and selected ideas
- **What:** 8 ideas scored on user value, learning value, feasibility and
  risk; the AI PM added an own idea (jam improvisation cards) and chose
  **Jam Prompt Cards** → `decision-log.md`
- **Why:** Module 03: many ideas first, then selection by explicit criteria.
  The matching app was rejected for low learning value.

### 9. Built the prototype
- **What:** Random jam prompts handwritten on faded classic playing cards; a
  conversation question on the back; a Break joker every 8 cards
  → `prototype/index.html`
- **Why:** The learning question: *"Does the question on the back start a
  conversation after playing?"* The prototype was kept just simple enough to
  test it.

### 10. Reviewed and tested
- **What:** Two prototype reviews, then a simulated jam test with a baseline
  set without cards → `test-notes.md`
- **Why:** The handout asks for review before testing. The baseline shows
  whether conversation started because of the cards.

### 11. Iterated on the evidence
- **What:** Music questions on the cards, personal questions on the Break;
  harder genres dealt less often.
- **Why:** In the test, music questions led to longer conversations and hard
  genres were skipped. Each change is linked to an observation.

---

## C. Optional extensions (8/8) → `extensions.md`

| # | What we did | Why |
|---|---|---|
| 1 | Added two rules to the Skill | Claude had cited wrong evidence and put interpretation in an observation table |
| 2 | Widened the auditor's scope | No subagent had caught the mistake in the test notes |
| 3 | Second test | To see whether the first iteration worked |
| 4 | Peer review (AI peer, adapted for one person) | A fresh eye noticed the session log could not measure conversations |
| 5 | Alternative idea (host introductions) | The rejected idea actually had stronger evidence |
| 6 | Accessibility | Low-light readability, small phones, screen readers |
| 7 | Offline recovery | Cards stay readable if the venue has no internet |
| 8 | Decision brief | For a product review; two overconfident sentences were corrected |

---

## D. Wrap-up

### 12. Final audit and reflection
- **What:** Files, evidence, assumptions, risks and 5 reflection questions
  → `ai-collaboration-log.md`
- **Why:** Required by the handout's "Done Means"; it also records 5 times the
  AI PM corrected Claude.

### 13. Summaries and GitHub
- **What:** Turkish and English summaries; git add → commit → push.
- **Why:** To make the project submittable and understandable to others.

---

## E. After the course

### 14. Toolkit repository
- **What:** A copy of the Skill and subagents plus an annotated list of
  plugins, skills and subagents → separate repo
  `claude-skills-subagents-plugins`
- **Why:** To reuse these tools in other projects.

### 15. Prototype v12
- **What:** All 24 keys (easy keys more often), theory-correct chord
  spelling, Roman numerals, "Let your fingers down." on the Break.
- **Why:** More variety and more accurate information for musicians.

### 16. Card Session app → `app/`
- **What:** An installable, offline-capable app: Group Jam (join by code,
  simulated server, musician count), Single Play, metronome, aksak meters
  (9/8, 7/8, 5/8), 5/4 blues, retro look, back button; named
  **Card Session — jam prompts for musicians**.
- **Why:** A phone-ready version was needed to test at a real jam.
- **Note:** These features were added **without user testing**; Group Jam
  does not yet connect separate phones.

### 17. Store notes → `app/STORE-NOTES.md`
- **What:** App Store and Google Play steps, fees, privacy, name check,
  ways to make money.
- **Why:** To record what publishing needs — and that a real-user test comes
  first.

---

## Limits

All evidence is simulated; listeners were not tested; it is unknown whether
conversations continue after the event; features added after the course are
not validated.

## Next step

Two real jam evenings: the host deals the Break card and makes one
introduction during it, compared with cards alone.

## File map

| File | Contents |
|---|---|
| `discovery.md` | Evidence, persona, journey map, POV, HMW, audit decisions |
| `decision-log.md` | Ideas, choice, prototype and app versions, review decisions |
| `test-notes.md` | Two simulated tests, interpretation, iteration |
| `extensions.md` | The 8 optional extensions and the decision brief |
| `ai-collaboration-log.md` | Final audit, collaboration log, reflection |
| `prototype/index.html` | The course prototype |
| `app/` | The Card Session app and store notes |
| `.claude/` | Design Thinking Skill and two subagents |
