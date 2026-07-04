# Verification Report

Date: 2026-07-04

This report records the verification pass for the PUP CCIS mock test reviewer platform.

## Scope

- 7 Review Topics
- 249 Review Notes table rows
- 700 Exam Items
- 34 visible topic-level sources

## Verification Standard

Content is marked Verified when:

1. The topic has reliable source coverage under `docs/source-policy.md`.
2. Notes and Exam Items align with the mapped sources.
3. Mechanical checks pass for question text, choices, answer index, and explanation.
4. Incorrect or ambiguous wording found during audit is corrected.

## Source Families

| Review Topic | Verification Sources |
| --- | --- |
| IT Fundamentals | PUP CCIS context, National Privacy Commission, Official Gazette RA 10173/8792/10175, ACM Code of Ethics, NIST CSRC Glossary, Unicode Standard, RFC 20, Computer History Museum |
| Data Structures & Algorithms | Open Data Structures, OpenDSA |
| Operating Systems | Operating Systems: Three Easy Pieces, UEFI Specifications, Microsoft Windows boot documentation |
| Discrete Structures | Discrete Mathematics: An Open Introduction, MIT OCW Mathematics for Computer Science |
| Data Communication & Networking | RFC 791, RFC 8200, RFC 9293, RFC 768, RFC 1918, RFC 826, RFC 792, RFC 3986, IANA port registry |
| Web Development | MDN HTML, MDN CSS, MDN JavaScript Guide, PHP Manual |
| HCI | Nielsen Norman Group usability heuristics, Nielsen Norman Group 5-user testing article, W3C WCAG overview, ISO 9241-11 overview |

## Corrections Made

| Area | Correction |
| --- | --- |
| IT Fundamentals | Updated Unicode explanation from an older "over 143,000 characters" claim to "more than 150,000 assigned characters." |
| Networking | Clarified that ARP is usually treated as link-layer address resolution that supports IPv4, not simply an Internet Layer protocol. |
| Networking | Removed uncited "According to Forouzan" wording from two Exam Items and kept the concepts in source-neutral form. |
| Networking | Added IANA and additional RFC sources for ports, private address ranges, ARP, ICMP, and URI syntax. |
| IT Fundamentals | Added Unicode, RFC 20 ASCII, and Computer History Museum sources for character encoding and computer-history coverage. |

## Mechanical Check

The latest mechanical audit reports:

- 700 Exam Items
- 0 missing questions
- 0 invalid answer indices
- 0 invalid/empty choices
- 0 missing explanations
- 249 Review Notes rows
- 34 topic-level sources

## Current Status

All 7 Review Topics are Verified.

Future edits must be rechecked against this report, `docs/source-policy.md`, and `docs/content-audit.md` before keeping a Verified badge.
