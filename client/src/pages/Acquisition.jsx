import React, { useState } from "react";
import { analyzeText } from "../api";

export default function Acquisition() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const runAnalyze = async () => {
    if (!text || text.trim().length < 10) {
      alert("Paste document text (at least 10 chars)");
      return;
    }
    setLoading(true);
    try {
      const res = await analyzeText(text);
      setSummary(res.summary || "No summary returned");
    } catch (e) {
      setSummary("Analyze failed: " + e.message);
    } finally {
      setLoading(false);
    }
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

    // Join checklist items
    const checklistContent = checklistItems
      .map((item, i) => `${i + 1}. ${item}`)
      .join("\n");

    // Include the AI-generated summary below the checklist
    const content = `${checklistContent}\n\nAI Summary:\n${
      summary || "No summary available"
    }`;

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
    <div className="container">
      <div className="header">
        <h2 style={{ color: "var(--accent)" }}>Acquisition Workspace</h2>
        <p style={{ color: "var(--muted)" }}>
          Use AI to summarize financial docs and follow the checklist to reduce
          friction.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div className="card">
          <div className="label">
            Paste financial document text (or copy excerpts)
          </div>
          <textarea
            className="input"
            rows="12"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "flex-end",
              gap: 8,
            }}
          >
            <button className="btn" onClick={runAnalyze} disabled={loading}>
              {loading ? "Analyzing…" : "Analyze"}
            </button>
          </div>

          {summary && (
            <div
              style={{
                marginTop: 12,
                whiteSpace: "pre-wrap",
                color: "var(--muted)",
              }}
            >
              <h4 style={{ color: "var(--accent)" }}>AI Summary</h4>
              <div style={{ marginTop: 8 }}>{summary}</div>
            </div>
          )}
        </div>

        <div className="card">
          <h4 style={{ color: "var(--accent)" }}>Acquisition Checklist</h4>
          <ul style={{ color: "var(--muted)" }}>
            <li>NDA signed</li>
            <li>Financials uploaded & summarized</li>
            <li>Seller disclosures reviewed</li>
            <li>LOI drafted</li>
            <li>Due diligence completed</li>
            <li>Closing procedures scheduled</li>
          </ul>
          <div style={{ marginTop: 12 }}>
            <button className="pill" onClick={exportChecklist}>
              Export Checklist
            </button>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-footer-inner">
          <span>© 2025 BizMatch, Inc. All rights reserved.</span>
          <div className="home-footer-links">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
