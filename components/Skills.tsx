"use client";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "4rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
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
            <span style={{ color: "var(--text-muted)", fontFamily: "monospace", fontWeight: 400, fontSize: "0.85em" }}>{"<"}</span>
            {" Skills "}
            <span style={{ color: "var(--text-muted)", fontFamily: "monospace", fontWeight: 400, fontSize: "0.85em" }}>{"/>"}</span>
          </h2>
          <div style={{ width: "56px", height: "3px", borderRadius: "2px", background: "var(--accent)" }} />
        </div>

        {/* Skills rows — category label left, tags right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "1rem",
                alignItems: "center",
                padding: "0.75rem 0",
                borderBottom: i < skills.length - 1 ? "1px solid var(--border)" : "none",
              }}
              className="skill-row"
            >
              {/* Category label */}
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {group.category}
              </span>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      backgroundColor: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "100px",
                      padding: "0.2rem 0.7rem",
                      fontWeight: 400,
                      lineHeight: 1.6,
                      transition: "all 0.15s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skill-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
}