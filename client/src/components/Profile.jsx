import React from "react";

export default function Profile({ profile }) {
  if (!profile)
    return (
      <div
        style={{
          padding: 16,
          borderRadius: 12,
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        No profile yet. Seed the DB.
      </div>
    );

  return (
    <div
      style={{
        padding: 16,
        borderRadius: 12,
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Profile</h2>
      <div>
        <strong>{profile.name}</strong> — {profile.email}
      </div>
      <p>{profile.summary}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {(profile.skills || []).map((s, i) => (
          <span
            key={i}
            style={{
              padding: "4px 10px",
              borderRadius: 999,
              background: "#e3f2fd",
              color: "#1565c0",
              fontSize: 13,
            }}
          >
            {s.name}
          </span>
        ))}
      </div>
      {profile.links && (
        <p style={{ marginTop: 8 }}>
          {profile.links.github && (
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}{" "}
          {profile.links.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}{" "}
          {profile.links.portfolio && (
            <a href={profile.links.portfolio} target="_blank" rel="noreferrer">
              Portfolio
            </a>
          )}
        </p>
      )}
    </div>
  );
}
