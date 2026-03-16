"use client";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{ padding: "4rem 2rem", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                color: "var(--text-muted)",
                fontFamily: "monospace",
                fontWeight: 400,
                fontSize: "0.85em",
              }}
            >
              {"<"}
            </span>
            {" Projects "}
            <span
              style={{
                color: "var(--text-muted)",
                fontFamily: "monospace",
                fontWeight: 400,
                fontSize: "0.85em",
              }}
            >
              {"/>"}
            </span>
          </h2>
          <div
            style={{
              width: "56px",
              height: "3px",
              borderRadius: "2px",
              background: "var(--accent)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          {projects.map((project, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={project.title}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  width: isActive ? "340px" : "200px",
                  backgroundColor: isActive ? "var(--surface)" : "var(--bg)",
                  border: `1px solid ${
                    isActive ? "rgba(200,98,42,0.35)" : "var(--border)"
                  }`,
                  borderRadius: "12px",
                  padding: "1.1rem 1.25rem",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  overflow: "hidden",
                  boxShadow: isActive ? "0 8px 28px rgba(0,0,0,0.07)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: isActive ? "var(--accent)" : "var(--border)",
                    lineHeight: 1,
                    userSelect: "none",
                    display: "block",
                    marginBottom: "0.4rem",
                    transition: "color 0.3s",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.35,
                    margin: 0,
                    marginBottom: isActive ? "1rem" : "0",
                    whiteSpace: isActive ? "normal" : "nowrap",
                    overflow: isActive ? "visible" : "hidden",
                    textOverflow: isActive ? "unset" : "ellipsis",
                    transition: "margin 0.3s",
                  }}
                >
                  {project.title}
                </p>

                <div
                  style={{
                    maxHeight: isActive ? "500px" : "0px",
                    opacity: isActive ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease, opacity 0.25s ease",
                  }}
                >
                  {project.internal && (
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        backgroundColor: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: "100px",
                        padding: "0.15rem 0.6rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        display: "inline-block",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Internal
                    </span>
                  )}

                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      fontWeight: 300,
                      marginBottom: "0.85rem",
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.3rem",
                      marginBottom: "0.85rem",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--accent)",
                          backgroundColor: "var(--accent-light)",
                          borderRadius: "100px",
                          padding: "0.15rem 0.55rem",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.live) && (
                    <div
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-secondary)",
                            textDecoration: "none",
                            fontWeight: 500,
                            border: "1px solid var(--border)",
                            borderRadius: "100px",
                            padding: "0.35rem 0.85rem",
                            transition: "all 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor =
                              "var(--text-primary)";
                            e.currentTarget.style.color =
                              "var(--text-primary)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.color =
                              "var(--text-secondary)";
                          }}
                        >
                          GitHub
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.78rem",
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: 500,
                            backgroundColor: "var(--accent)",
                            borderRadius: "100px",
                            padding: "0.35rem 0.85rem",
                            transition: "background-color 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--accent-hover)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--accent)";
                          }}
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}

                  {project.internal && (
                    <p
                      style={{
                        fontSize: "0.68rem",
                        color: "var(--text-muted)",
                        fontStyle: "italic",
                        marginTop: "0.6rem",
                      }}
                    >
                      Confidential — screenshots available on request.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}