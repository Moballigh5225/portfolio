"use client";
import { useState } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="experience"

      style={{ padding: "6rem 2rem", backgroundColor: "var(--surface)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Where I've worked
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Work{" "}
            <span
              style={{ fontStyle: "italic", color: "var(--text-secondary)" }}
            >
              Experience
            </span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {experience.map((job, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={job.company}
                onClick={() => setOpenIndex(i)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "2rem",
                  paddingBottom: "2rem",
                  position: "relative",
                  cursor: "pointer",
                }}
                className="exp-row"
              >
                <div style={{ paddingTop: "0.15rem" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {job.period}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {job.location}
                  </div>
                </div>

                <div
                  style={{
                    borderLeft: "1px solid var(--border)",
                    paddingLeft: "2rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-5px",
                      top: "6px",
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: isOpen
                        ? "var(--accent)"
                        : "var(--border)",
                      border: `2px solid ${
                        isOpen ? "var(--accent)" : "var(--border)"
                      }`,
                      outline: isOpen
                        ? "3px solid var(--accent-light)"
                        : "none",
                      transition: "all 0.3s ease",
                    }}
                  />

                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.2rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {job.role}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--accent)",
                      fontWeight: 500,
                      marginBottom: "1rem",
                    }}
                  >
                    {job.company}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.4s ease",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div
                        style={{
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen
                            ? "translateY(0)"
                            : "translateY(-6px)",
                          transition:
                            "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
                        }}
                      >
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.65rem",
                            margin: 0,
                          }}
                        >
                          {job.bullets.map((bullet, bi) => (
                            <li
                              key={bi}
                              style={{
                                fontSize: "0.9rem",
                                color: "var(--text-secondary)",
                                lineHeight: 1.7,
                                paddingLeft: "1.25rem",
                                position: "relative",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: "0.5rem",
                                  width: "5px",
                                  height: "5px",
                                  borderRadius: "50%",
                                  backgroundColor: "var(--accent)",
                                  opacity: 0.5,
                                }}
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row {
            grid-template-columns: 1fr !important;
          }

          .exp-row > div:first-child {
            padding-bottom: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
}