"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { quizTopics } from "@/data";
import { notesByTopic } from "@/data/notes";
import { ArrowLeftIcon, BookIcon, ClipboardIcon, InfoIcon, PencilIcon, iconMap } from "@/components/Icons";
import XPTaskbar from "@/components/XPTaskbar";

export default function NotesPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const topic = quizTopics.find((t) => t.id === topicId);
  const notes = notesByTopic[topicId];
  const IconComponent = topic ? iconMap[topic.icon] : BookIcon;

  if (!topic || !notes) {
    return (
      <div className="xp-desktop">
        <div className="flex-1 flex items-start sm:items-center justify-center p-2 sm:p-4 pb-14">
          <div className="xp-window w-80">
            <div className="xp-titlebar">
              <BookIcon className="xp-titlebar-icon text-white" />
              <span className="xp-titlebar-text">Notes</span>
              <div className="xp-titlebar-buttons">
                <div className="xp-titlebar-btn xp-btn-close" onClick={() => router.push("/")}>
                  <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2"/></svg>
                </div>
              </div>
            </div>
            <div className="xp-body text-center py-6">
              <p className="text-[12px] text-[#9c0006] font-bold mb-3">Notes not found</p>
              <button onClick={() => router.push("/")} className="xp-button-primary cursor-pointer">Go Back</button>
            </div>
          </div>
        </div>
        <XPTaskbar />
      </div>
    );
  }

  return (
    <div className="xp-desktop">
      <div className="flex-1 flex items-start justify-center p-2 sm:p-4 pb-14 overflow-auto">
        <div className="xp-window w-full max-w-4xl">
          <div className="xp-titlebar">
            <IconComponent className="xp-titlebar-icon text-white" />
            <span className="xp-titlebar-text">{notes.title}</span>
            <div className="xp-titlebar-buttons">
              <div className="xp-titlebar-btn xp-btn-minimize">
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><rect x="1" y="7" width="8" height="2" fill="white"/></svg>
              </div>
              <div className="xp-titlebar-btn xp-btn-maximize">
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><rect x="1" y="1" width="8" height="8" fill="none" stroke="white" strokeWidth="2"/></svg>
              </div>
              <div className="xp-titlebar-btn xp-btn-close" onClick={() => router.push("/")}>
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2"/></svg>
              </div>
            </div>
          </div>

          <div className="xp-toolbar flex-wrap">
            <Link href="/" className="xp-button text-[10px] flex items-center gap-1 no-underline">
              <ArrowLeftIcon className="w-3 h-3" /> Back to Topics
            </Link>
            <Link href={`/quiz/${topic.id}`} className="xp-button-primary text-[10px] flex items-center gap-1 no-underline">
              <PencilIcon className="w-3 h-3" /> Answer Exam
            </Link>
            <span className="text-[11px] text-[#444] ml-auto">{topic.questions.length} exam items aligned</span>
          </div>

          <div className="xp-body">
            <div className="xp-infobox mb-4">
              <InfoIcon className="w-5 h-5 text-[#0054e3] flex-shrink-0" />
              <div>
                <p className="text-[12px] font-bold text-[#003c74] mb-1">{topic.title}</p>
                <p className="text-[12px] text-[#000] leading-relaxed">{notes.summary}</p>
                <p className="notes-status-badge mt-2">{notes.verificationStatus}</p>
              </div>
            </div>

            <div className="notes-layout">
              <aside className="notes-sidebar">
                <div className="notes-panel">
                  <div className="notes-panel-title">
                    <ClipboardIcon className="w-4 h-4" />
                    Exam Focus
                  </div>
                  <ul className="notes-list">
                    {notes.examFocus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="notes-panel">
                  <div className="notes-panel-title">
                    <BookIcon className="w-4 h-4" />
                    Sources
                  </div>
                  <div className="space-y-2">
                    {notes.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="notes-source-link"
                      >
                        <span>{source.label}</span>
                        <span className="notes-source-url">{source.url}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              <main className="notes-main">
                {notes.tables.map((table) => (
                  <section key={table.heading} className="notes-table-section">
                    <div className="notes-table-title">
                      <ClipboardIcon className="w-4 h-4" />
                      <h2>{table.heading}</h2>
                    </div>
                    <div className="notes-table-wrap">
                      <table className="notes-table">
                        <thead>
                          <tr>
                            <th>Term</th>
                            <th>Definition</th>
                            <th>Remember</th>
                            <th>Common Mistake</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row) => (
                            <tr key={`${table.heading}-${row.term}`}>
                              <td data-label="Term">{row.term}</td>
                              <td data-label="Definition">{row.meaning}</td>
                              <td data-label="Remember">{row.memory}</td>
                              <td data-label="Common Mistake">{row.trap}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                ))}

                {notes.sections.map((section, index) => (
                  <section key={section.heading} className="notes-section">
                    <div className="notes-section-header">
                      <span className="notes-section-number">{index + 1}</span>
                      <div>
                        <h2>{section.heading}</h2>
                        <p>{section.memory}</p>
                      </div>
                    </div>
                    <ul className="notes-list notes-list-roomy">
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </section>
                ))}

                <section className="notes-section">
                  <div className="notes-section-header">
                    <span className="notes-section-number">Q</span>
                    <div>
                      <h2>Quick Drills</h2>
                      <p>Use these before taking the exam mode.</p>
                    </div>
                  </div>
                  <ul className="notes-list notes-list-roomy">
                    {notes.quickDrills.map((drill) => (
                      <li key={drill}>{drill}</li>
                    ))}
                  </ul>
                </section>
              </main>
            </div>
          </div>

          <div className="xp-statusbar">
            <span>Review Notes</span>
            <span className="ml-auto">Sources included for verification</span>
          </div>
        </div>
      </div>

      <XPTaskbar />
    </div>
  );
}
