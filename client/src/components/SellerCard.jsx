import React from "react";

export default function SellerCard({ seller, onView }) {
  if (!seller) {
    return (
      <div style={{ padding: 16, color: "var(--muted)" }}>
        Seller data not available
      </div>
    );
  }

  const {
    name = "No name provided",
    company = "No company info",
    asking_price = "N/A",
    industry = "Industry not specified",
    notes = "",
  } = seller;

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontWeight: 700, color: "var(--accent)" }}>{name}</div>
          <div style={{ color: "var(--muted)" }}>{company}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 700 }}>{asking_price}</div>
          <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
            {industry}
          </div>
        </div>
      </div>
      <p style={{ marginTop: 8, color: "var(--muted)" }}>{notes}</p>
      <div
        style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}
      >
        <button className="pill" onClick={() => onView(seller)}>
          View
        </button>
      </div>
    </div>
  );
}
