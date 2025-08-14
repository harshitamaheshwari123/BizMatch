import React, { useState } from "react";

export default function Acquisition() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  // Mock analyze function (no backend)
  const runAnalyze = () => {
    if (!text || text.trim().length < 10) {
      alert("Paste document text (at least 10 chars)");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Mock summary generation
      setSummary("This is a mocked AI summary of the financial document.");
      setLoading(false);
    }, 1000);
  };

  const exportChecklist = () => {
    const checklistItems = [
      "NDA signed",
      "Financials uploaded & summarized",
      "Seller disclosures reviewed",
      "LOI drafted",
      "Due diligence completed",
      "Closing procedures scheduled",
    ];

    const content = `${checklistItems
      .map((item, i) => `${i + 1}. ${item}`)
      .join("\n")}\n\nAI Summary:\n${summary || "No summary available"}`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "acquisition-checklist.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="container"
      style={{ padding: "1rem", fontFamily: "sans-serif" }}
    >
      <div className="header">
        <h2 style={{ color: "#9b59ff" }}>Acquisition Workspace</h2>
        <p style={{ color: "#ccc" }}>
          Use AI to summarize financial docs and follow the checklist to reduce
          friction.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div
          className="card"
          style={{ padding: 16, background: "#111", borderRadius: 8 }}
        >
          <div className="label" style={{ marginBottom: 8 }}>
            Paste financial document text (or copy excerpts)
          </div>
          <textarea
            className="input"
            rows="12"
            style={{
              width: "100%",
              padding: 8,
              borderRadius: 4,
              background: "#222",
              color: "#fff",
              border: "1px solid #444",
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              className="btn"
              onClick={runAnalyze}
              disabled={loading}
              style={{
                background: "#9b59ff",
                color: "#000",
                padding: "0.5rem 1rem",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              {loading ? "Analyzing…" : "Analyze"}
            </button>
          </div>

          {summary && (
            <div
              style={{ marginTop: 12, whiteSpace: "pre-wrap", color: "#ccc" }}
            >
              <h4 style={{ color: "#9b59ff" }}>AI Summary</h4>
              <div style={{ marginTop: 8 }}>{summary}</div>
            </div>
          )}
        </div>

        <div
          className="card"
          style={{ padding: 16, background: "#111", borderRadius: 8 }}
        >
          <h4 style={{ color: "#9b59ff" }}>Acquisition Checklist</h4>
          <ul style={{ color: "#ccc" }}>
            <li>NDA signed</li>
            <li>Financials uploaded & summarized</li>
            <li>Seller disclosures reviewed</li>
            <li>LOI drafted</li>
            <li>Due diligence completed</li>
            <li>Closing procedures scheduled</li>
          </ul>
          <div style={{ marginTop: 12 }}>
            <button
              className="pill"
              onClick={exportChecklist}
              style={{
                background: "#9b59ff",
                color: "#000",
                padding: "0.5rem 1rem",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Export Checklist
            </button>
          </div>
        </div>
      </div>

      <div
        className="home-footer"
        style={{ marginTop: 24, borderTop: "1px solid #333", paddingTop: 12 }}
      >
        <div
          className="home-footer-inner"
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#ccc",
          }}
        >
          <span>© 2025 BizMatch, Inc. All rights reserved.</span>
          <div
            className="home-footer-links"
            style={{ display: "flex", gap: 12 }}
          >
            <a href="/terms" style={{ color: "#9b59ff" }}>
              Terms of Service
            </a>
            <a href="/privacy" style={{ color: "#9b59ff" }}>
              Privacy Policy
            </a>
            <a href="/contact" style={{ color: "#9b59ff" }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
