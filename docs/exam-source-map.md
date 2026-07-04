# Exam Source Map

This file maps each exam topic to source families used to back its exam questions and explanations. User-facing citations are topic-level, matching the source policy.

## Audit Status

- Mechanical audit completed: all 700 exam items have questions, valid answer indices, at least two choices, and explanations.
- Topic-level source coverage exists for all 7 Review Topics.
- Verification pass completed for all 7 Review Topics. Status is now Verified in `docs/content-audit.md` and `src/data/notes.ts`.

## Source Map

| Review Topic | Source Families | Current Status |
| --- | --- | --- |
| IT Fundamentals | PUP CCIS context, official Philippine laws, NPC, ACM ethics, NIST glossary, Unicode, RFC 20, Computer History Museum | Verified |
| Data Structures & Algorithms | Open Data Structures, OpenDSA | Verified |
| Operating Systems | OSTEP, UEFI specifications, Microsoft boot documentation | Verified |
| Discrete Structures | Discrete Mathematics: An Open Introduction, MIT OCW Mathematics for Computer Science | Verified |
| Data Communication & Networking | RFC 791, RFC 8200, RFC 9293, RFC 768, RFC 1918, RFC 826, RFC 792, RFC 3986, IANA port registry | Verified |
| Web Development | MDN HTML/CSS/JavaScript, PHP Manual | Verified |
| Human-Computer Interaction | Nielsen Norman Group, W3C WCAG, ISO 9241-11 overview | Verified |

## Verification Rules

When an Exam Item is checked:

1. Match its claim to the highest-priority source available.
2. Recalculate formula and algorithm questions independently.
3. Correct question wording, answer index, choices, and explanation if needed.
4. Record corrections in `docs/content-audit.md`.
5. Keep a topic Verified only while its notes and exam items remain aligned with the mapped sources.
