const API_BASE = "http://192.168.0.33:4000/api";

export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
