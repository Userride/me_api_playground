import React from "react";

export default function SearchBar({ q, onQuery, skill, onSkill }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        margin: "16px 0",
        padding: 12,
        borderRadius: 12,
        background: "linear-gradient(135deg, #fafafa 0%, #f1f1f1 100%)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <input
        // --- UPDATED LINE ---
        placeholder="Search by keyword OR paste a full API URL..."
        value={q}
        onChange={(e) => onQuery(e.target.value)}
        style={{
          flex: 1,
          padding: 10,
          borderRadius: 6,
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
      <input
        placeholder="Filter by skill (e.g., React)"
        value={skill}
        onChange={(e) => onSkill(e.target.value)}
        style={{
          width: 220,
          padding: 10,
          borderRadius: 6,
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
    </div>
  );
}