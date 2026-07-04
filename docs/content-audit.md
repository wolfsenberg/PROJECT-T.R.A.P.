# Internal Content Audit

This file is internal. Do not show this page to students.

## Status Legend

- Not started: content has not been checked against sources.
- Source-backed draft: content has topic-level sources and has passed a general sanity check.
- Verified: content has been reviewed against reliable sources.
- Needs verification: content may be correct, but source support is insufficient or there is ambiguity.
- Fixed: content was corrected after audit.

## Current Topic Status

| Topic | Notes Status | Exam Status | Comments |
| --- | --- | --- | --- |
| IT Fundamentals | Verified | Verified | Verified against PUP/CCIS context where public, official PH law sources, ACM/NIST, Unicode, RFC 20, and Computer History Museum. |
| Data Structures & Algorithms | Verified | Verified | Verified against Open Data Structures and OpenDSA for structures, algorithms, and complexity conventions. |
| Operating Systems | Verified | Verified | Verified against OSTEP, UEFI specifications, and Microsoft boot documentation; scheduling, disk, paging, and boot claims checked. |
| Discrete Structures | Verified | Verified | Verified against Discrete Mathematics: An Open Introduction and MIT OCW; formula-heavy counting, set, relation, function, and logic items checked. |
| Data Communication & Networking | Verified | Verified | Verified against RFC/IANA sources for IP, IPv6, TCP, UDP, ICMP, ARP, private ranges, URI syntax, and port ranges. |
| Web Development | Verified | Verified | Verified against MDN HTML/CSS/JavaScript and PHP Manual. |
| HCI | Verified | Verified | Verified against Nielsen Norman Group, W3C WCAG, and ISO 9241-11 overview. |

## Audit Rules

When auditing an item:

1. Identify the exact claim.
2. Check it against the highest-priority available source.
3. Mark the status.
4. Fix incorrect notes, questions, answers, or explanations.
5. Record the change here.

## Change Log

- Mechanical exam audit completed: all 700 Exam Items have questions, valid answer indices, at least two choices, and explanations.
- Mechanical notes audit completed: all 7 Review Topics have Verified status, 249 table rows total, and 34 topic-level sources total.
- Verification pass completed for all 7 Review Topics; see `docs/verification-report.md`.
- Fixed outdated IT Fundamentals Unicode explanation from older character-count wording to source-aligned "more than 150,000 assigned characters."
- Fixed Networking TCP/IP Internet Layer explanation to avoid incorrectly placing ARP directly in the Internet Layer.
- Removed uncited Forouzan-specific wording from two Networking Exam Items and replaced it with source-neutral wording.
- Added visible Topic sources panels to Exam Mode explanations and answer review, using the same source set as Review Notes.
- Added `docs/exam-source-map.md` to record source families used for each Review Topic.
- Added `CONTEXT.md` to define reviewer-domain terms used by product, content, and audit work.
