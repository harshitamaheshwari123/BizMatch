export async function fetchBuyers() {
  const res = await fetch("/api/buyers");
  if (!res.ok) throw new Error("Failed to fetch buyers");
  return res.json();
}
export async function createBuyer(payload) {
  const res = await fetch("/api/buyers", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create buyer");
  return res.json();
}
export async function fetchSellers() {
  const res = await fetch("/api/sellers");
  if (!res.ok) throw new Error("Failed to fetch sellers");
  return res.json();
}
export async function createSeller(payload) {
  const res = await fetch("/api/sellers", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create seller");
  return res.json();
}
export async function postMatch(seller_id, buyer_id) {
  const res = await fetch("/api/match", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ seller_id, buyer_id }),
  });
  return res.json();
}
export async function postReject(seller_id, buyer_id, reason = "pass") {
  const res = await fetch("/api/reject", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ seller_id, buyer_id, reason }),
  });
  return res.json();
}
export async function analyzeText(text) {
  const res = await fetch("/api/analyze", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
}
