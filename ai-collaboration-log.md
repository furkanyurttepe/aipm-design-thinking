# AI Collaboration Log

> Evidence in this project is **SIMULATED (AI-generated)**. Claude acted as
> both the directed Claude Code agent and a tutor; the AI PM wrote the
> requests, made every product decision, and reviewed changes.

## Final Audit

**Files created or changed**
`discovery.md`, `decision-log.md`, `test-notes.md`, `extensions.md`,
`practice-journey-map.md`, `prototype/index.html`,
`.claude/skills/design-thinking/SKILL.md`, `.claude/agents/evidence-auditor.md`,
`.claude/agents/prototype-reviewer.md`, `ai-collaboration-log.md`.

**Evidence used:** 8 simulated interview notes (E1–E8), 2 simulated
observations (O1–O2), 2 simulated test sessions. **Still missing:** any real
user evidence; listeners; whether conversations continue after the event;
going to concerts alone.

**Important assumptions:** a card can do part of what a host introduction
does; music questions lead to longer conversations than personal ones;
passing a phone around is acceptable at a jam; the venue has internet.

**Subagent findings:** evidence audit 1 — 7 accepted, 1 edited; prototype
review 1 — 9 accepted, 1 edited, 1 partly rejected; re-review — 7 accepted,
1 rejected, 2 deferred (1 later reverted); improved evidence audit — 9
accepted; accessibility review — 5 accepted (2 later removed), 1 rejected,
1 deferred.

**Prototype changes caused by observation:** M questions on cards and P
questions on the Break (T-4, T-7, T-9); hard genres dealt less often (T-1,
T-5); ↻ symbol added after the second test (T2-1, T2-2), later removed by the
AI PM; session log fields for conversations (peer review).

**Remaining risks:** all evidence is simulated; visual polish may draw
reactions away from the question; no cue that the card can be turned over;
no undo for an accidental Jam; images and font need internet; the observer is
also the designer.

**Recommended next learning step:** two real jam evenings — the host deals the
Break joker and makes one introduction during it, compared with cards alone.

## Log

| Request or delegated task | Accepted | Edited | Rejected | Evidence or reason |
|---|---|---|---|---|
| Frame the challenge and propose a discovery plan | Plan | Focus narrowed to opportunity (b) by the AI PM | — | AI PM choice |
| Generate interview evidence | Simulated notes | — | — | AI PM chose a simulated project; all notes labelled |
| Create the Skill and two subagents | All three files | — | — | AI PM reviewed them only roughly, to save time |
| Synthesize persona, journey, POV, HMW | Most content | Citations, labels, POV and HMW after the audit | — | Evidence audit 1 |
| Evidence audit 1 (subagent) | 7 findings | #6 (banners) | — | AI PM: one file-level banner is enough |
| Generate and score ideas | 7 ideas, criteria | AI PM added idea #8 and chose 8+5 | Matching app (#6) | Low learning value (E5) |
| Build prototype v1 | Paper-card concept | 26 cards; Turkish line removed | — | AI PM |
| Prototype review 1 (subagent) | 9 findings | Question tagging | "8–10 cards" | AI PM kept 20 easy cards |
| Visual and interaction changes v3–v6 | Notation, strumming, Jam button, random generation | Several rounds of look changes | Claude's earlier card designs | AI PM wanted a classic deck look |
| Prototype re-review (subagent) | 7 findings | — | Break counter fix | Kept simple; observed in the test |
| Simulated test notes | Observations | T-8 and T-3 wording | — | "because" was an interpretation (C4, A1) |
| Phase 9 iteration C1–C4 | C1, C3, C4 | — | C2 (corner) reverted later | AI PM: "it does not mean anything" |
| Improve the Skill and the auditor (ext. 1–2) | Both, plus A1–A9 | — | — | New auditor caught T-8 |
| Second test, peer review, alternative (ext. 3–5) | ↻ symbol, log fix | — | Host cue (would lead the task) | T2-1, T2-2, peer finding 3 |
| Accessibility and offline (ext. 6–7) | X1–X5, offline fallback | — | X6 notation change | Notation was a deliberate choice |
| Turn-over cue and Undo (v9–v10) | — | — | ↻ symbol and Undo removed (v11) | AI PM: "not needed" |
| Decision brief (ext. 8) | Structure | Two overconfident claims | — | 6 simulated interviews; 2 small tests |

## Where the AI PM corrected or rejected Claude

1. Reframed the HMW away from "shares their taste" (evidence audit 1, #8).
2. Edited the auditor's banner suggestion (#6).
3. Removed the dog-eared corner Claude had proposed (v8.1).
4. Rewrote two claims in the decision brief that went beyond the evidence.
5. Removed the ↻ symbol and Undo that Claude had added (v11).

## Reflection

> Drafted by Claude from the project record; reviewed and approved by the AI
> PM.

1. **Which rule in the Skill improved Claude's work most?** The rule that
   every claim must trace to an evidence ID or carry a label. It let the
   auditor catch wrong citations; the later rule "no interpretation in
   observation tables" kept the test notes clean.
2. **What did the subagents notice that the main conversation missed?** The
   evidence auditor found citations that were on-topic but did not support
   the claim, and overconfident words ("often", "only"). The fresh peer
   reviewer noticed that the session log could not measure conversations —
   something neither the main conversation nor the prototype reviewer had
   seen.
3. **Where did Claude try to turn an assumption into a fact?** The HMW treated
   shared taste as the main barrier; a test note presented a cause as an
   observation ("because", T-8); the decision brief said "often" based on six
   simulated interviews.
4. **Which product decision could not be delegated?** Which idea to test (Jam
   Prompt Cards, 8+5), and how much to guide users — removing the corner cue
   and the ↻ symbol was a judgement about what is meaningful to users that
   only the product owner could make.
5. **What evidence should the group collect next?** Observations of real
   newcomers over at least two jam evenings — especially whether people need a
   cue to turn the card over, whether listeners can take part, and whether
   conversations lead to contact after the event.
