
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// The 'export' keyword must be here
export async function fetchJSON(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

//  The 'export' keyword must also be here
export async function postJSON(path, body, basicAuth) {
  const headers = { "Content-Type": "application/json" };
  if (basicAuth) {
    headers["Authorization"] =
      "Basic " + btoa(`${basicAuth.user}:${basicAuth.pass}`);
  }
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}