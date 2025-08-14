import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const industryOptions = [
  "Technology",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Finance",
  "Education",
  "Other",
];

const budgetOptions = [
  "< $50,000",
  "$50,000 - $100,000",
  "$100,000 - $300,000",
  "$300,000 - $500,000",
  "> $500,000",
  "Other",
];

const timelineOptions = [
  "Immediately",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "More than 1 year",
  "Other",
];

export default function OnboardingBuyer() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    
    name: "",
    budget: "",
    budgetOther: "",
    industry: "",
    industryOther: "",
    timeline: "",
    timelineOther: "",
    notes: "",
   
    investment_focus: "",
    min_investment: "0",
    max_investment: "0",
    agree: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const nav = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;

    if (name === "budget" && value !== "Other") {
      setForm((f) => ({ ...f, budget: value, budgetOther: "" }));
    } else if (name === "industry" && value !== "Other") {
      setForm((f) => ({ ...f, industry: value, industryOther: "" }));
    } else if (name === "timeline" && value !== "Other") {
      setForm((f) => ({ ...f, timeline: value, timelineOther: "" }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const getActualValue = (field, otherField) =>
    form[field] === "Other" ? form[otherField] : form[field];

  const submit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep((s) => s + 1);
      return;
    }
    setSubmitting(true);

    const newBuyer = {
      id: Date.now().toString(),
      ...form,
      budget: getActualValue("budget", "budgetOther"),
      industry: getActualValue("industry", "industryOther"),
      timeline: getActualValue("timeline", "timelineOther"),
    };

    delete newBuyer.budgetOther;
    delete newBuyer.industryOther;
    delete newBuyer.timelineOther;

   
    const buyers = JSON.parse(localStorage.getItem("buyers") || "[]");
    buyers.unshift(newBuyer);
    localStorage.setItem("buyers", JSON.stringify(buyers));

   
    localStorage.setItem(
      "viewProfile",
      JSON.stringify({ role: "buyer", ...newBuyer })
    );

    setSubmitting(false);
    nav("/profile");
  };

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div className="container onboard">
      <div className="header">
        <h2 style={{ color: "var(--accent)", margin: 0 }}>
          Welcome to DealMatch
        </h2>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Let&apos;s get your profile set up to find the perfect match.
        </p>
      </div>
      <div className="card" style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ padding: "0 1rem 1rem 1rem" }}>
          <h3 style={{ margin: "0 0 12px 0", color: "var(--text-main)" }}>
            {step === 1 && "Step 1: Profile Basics"}
            {step === 2 && "Step 2: Investment Criteria"}
            {step === 3 && "Step 3: Finalize"}
          </h3>
          <div
            style={{
              height: 12,
              background: "var(--tertiary-bg)",
              borderRadius: 999,
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "var(--accent)",
              }}
            />
          </div>
        </div>

        <form
          onSubmit={submit}
          style={{ display: "grid", gap: 12, padding: 16 }}
        >
          {step === 1 && (
            <>
              <div>
                <div className="label">Full name</div>
                <input
                  className="input"
                  name="name"
                  value={form.name}
                  onChange={change}
                  required
                />
              </div>

              <div>
                <div className="label">Budget</div>
                <select
                  className="input"
                  name="budget"
                  value={form.budget}
                  onChange={change}
                  required
                >
                  <option value="">Select budget</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                {form.budget === "Other" && (
                  <input
                    className="input"
                    placeholder="Enter custom budget"
                    name="budgetOther"
                    value={form.budgetOther}
                    onChange={change}
                    required
                    style={{ marginTop: 8 }}
                  />
                )}
              </div>

              <div>
                <div className="label">Industry preferences</div>
                <select
                  className="input"
                  name="industry"
                  value={form.industry}
                  onChange={change}
                  required
                >
                  <option value="">Select industry</option>
                  {industryOptions.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
                {form.industry === "Other" && (
                  <input
                    className="input"
                    placeholder="Enter custom industry"
                    name="industryOther"
                    value={form.industryOther}
                    onChange={change}
                    required
                    style={{ marginTop: 8 }}
                  />
                )}
              </div>

              <div>
                <div className="label">Timeline</div>
                <select
                  className="input"
                  name="timeline"
                  value={form.timeline}
                  onChange={change}
                  required
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {form.timeline === "Other" && (
                  <input
                    className="input"
                    placeholder="Enter custom timeline"
                    name="timelineOther"
                    value={form.timelineOther}
                    onChange={change}
                    required
                    style={{ marginTop: 8 }}
                  />
                )}
              </div>

              <div>
                <div className="label">Notes</div>
                <textarea
                  className="input"
                  name="notes"
                  value={form.notes}
                  onChange={change}
                  rows="4"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <div className="label">Investment Focus</div>
                <textarea
                  className="input"
                  name="investment_focus"
                  placeholder="e.g., B2B SaaS, AI, E-commerce with positive cash flow..."
                  rows="4"
                  value={form.investment_focus}
                  onChange={change}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div>
                  <div className="label">Minimum Investment (USD)</div>
                  <input
                    className="input"
                    type="number"
                    min="0"
                    name="min_investment"
                    value={form.min_investment}
                    onChange={change}
                  />
                </div>
                <div>
                  <div className="label">Maximum Investment (USD)</div>
                  <input
                    className="input"
                    type="number"
                    min={form.min_investment || 0}
                    name="max_investment"
                    value={form.max_investment}
                    onChange={change}
                  />
                  {Number(form.max_investment) <
                    Number(form.min_investment) && (
                    <div
                      style={{ color: "#dc2626", fontSize: 13, marginTop: 6 }}
                    >
                      Maximum investment must be greater than or equal to
                      minimum investment.
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <p style={{ color: "var(--text-secondary)", margin: 0 }}>
                You&apos;re all set!
              </p>
              <label
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  border: `1px solid var(--border)`,
                  padding: "12px 16px",
                  borderRadius: 12,
                }}
              >
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, agree: e.target.checked }))
                  }
                />
                <span>I agree to the terms and conditions</span>
              </label>
            </>
          )}

          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <button
              type="button"
              className="pill"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
            >
              Back
            </button>
            <button
              className="btn"
              disabled={
                submitting ||
                (step === 2 &&
                  Number(form.max_investment) < Number(form.min_investment))
              }
            >
              {step < 3 ? "Next Step" : submitting ? "Finishing…" : "Finish"}
            </button>
          </div>
        </form>
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
