import React, { useEffect, useState } from "react";
import { fetchJSON } from "./api";
import Profile from "./components/Profile";
import ProjectList from "./components/ProjectList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skill, setSkill] = useState("");
  const [q, setQ] = useState("");
  const [rawQuery, setRawQuery] = useState("");

  // Fetch profile once
  useEffect(() => {
    fetchJSON("/profile")
      .then(setProfile)
      .catch((err) => {
        console.error("Failed to fetch profile:", err);
        setProfile(null);
      });
  }, []);

  // Fetch projects when skill or q changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (skill.trim()) params.set("skill", skill.trim());
    if (q.trim()) params.set("q", q.trim());

    fetchJSON(`/projects?${params.toString()}`)
      .then(setProjects)
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setProjects([]);
      });
  }, [skill, q]);

  // Handle main search bar input
  const handleQueryChange = (inputValue) => {
    setRawQuery(inputValue);

    try {
      const url = new URL(inputValue);

      
      // This now correctly checks if the pasted URL is your actual API URL
      if (
        inputValue.startsWith(import.meta.env.VITE_API_URL) &&
        url.pathname.endsWith("/projects")
      ) {
        const queryParam = url.searchParams.get("q") || "";
        const skillParam = url.searchParams.get("skill") || "";
        setQ(queryParam);
        setSkill(skillParam);
        return;
      }
    } catch (error) {
     
    }

   
    setQ(inputValue);
    setSkill("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "linear-gradient(135deg, #828390 0%, #e8f2eb 100%)",
        padding: "40px 16px",
      }}
    >
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          width: "100%",
          maxWidth: 900,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          padding: 24,
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>Prince-API Playground</h1>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          UI to search by skill, list projects, and view profile.
        </p>

        <SearchBar
          q={rawQuery}
          onQuery={handleQueryChange}
          skill={skill}
          onSkill={setSkill}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
            marginTop: "24px",
          }}
        >
          <Profile profile={profile} />
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
}