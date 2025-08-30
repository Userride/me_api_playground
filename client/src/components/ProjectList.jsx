import React from "react";

export default function ProjectList({ projects }) {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 12,
        background: "linear-gradient(135deg, #fdfbfb 0%, #f1f1f1 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Projects ({projects.length})</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
        {projects.map((p) => (
          <li
            key={p._id}
            style={{
              padding: 12,
              marginBottom: 12,
              borderRadius: 10,
              background: "#ffffff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontWeight: 600 }}>{p.title}</div>
            <div style={{ color: "#444", margin: "4px 0 8px" }}>
              {p.description}
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {(p.skills || []).map((s, i) => (
                <span
                  key={i}
                  style={{
                    padding: "2px 8px",
                    borderRadius: 999,
                    background: "#e8f5e9",
                    color: "#2e7d32",
                    fontSize: 12,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 6 }}>
              {p.links?.demo && (
                <a href={p.links.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}{" "}
              {p.links?.repo && (
                <a href={p.links.repo} target="_blank" rel="noreferrer">
                  Repo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
