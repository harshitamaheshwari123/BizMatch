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

const timelineOptions = [
  "Immediately",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "More than 1 year",
  "Other",
];

export default function OnboardingSeller() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    company: "",
    industry: "",
    industryOther: "",
    asking_price: "",
    askingPriceOther: "",
    timeline: "",
    timelineOther: "",
    location: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const nav = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    if (name === "industry" && value !== "Other") {
      setForm((f) => ({ ...f, industry: value, industryOther: "" }));
    } else if (name === "timeline" && value !== "Other") {
      setForm((f) => ({ ...f, timeline: value, timelineOther: "" }));
    } else if (name === "asking_price" && value !== "Other") {
      setForm((f) => ({ ...f, asking_price: value, askingPriceOther: "" }));
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

    const submission = {
      ...form,
      industry: getActualValue("industry", "industryOther"),
      timeline: getActualValue("timeline", "timelineOther"),
      asking_price: getActualValue("asking_price", "askingPriceOther"),
      id: Date.now(),
    };

    delete submission.industryOther;
    delete submission.timelineOther;
    delete submission.askingPriceOther;

    
    const local = JSON.parse(localStorage.getItem("sellers") || "[]");
    local.unshift(submission);
    localStorage.setItem("sellers", JSON.stringify(local));

   
    localStorage.setItem(
      "viewProfile",
      JSON.stringify({ role: "seller", ...submission })
    );


    nav("/profile");
    setSubmitting(false);
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
            {step === 2 && "Step 2: Business Details"}
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
                <div className="label">Company</div>
                <input
                  className="input"
                  name="company"
                  value={form.company}
                  onChange={change}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <div className="label">Industry</div>
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

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div>
                  <div className="label">Asking price</div>
                  <select
                    className="input"
                    name="asking_price"
                    value={form.asking_price}
                    onChange={change}
                  >
                    <option value="">Select asking price</option>
                    <option value="$100,000 - $300,000">
                      $100,000 - $300,000
                    </option>
                    <option value="$300,000 - $500,000">
                      $300,000 - $500,000
                    </option>
                    <option value="$500,000 - $1,000,000">
                      $500,000 - $1,000,000
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  {form.asking_price === "Other" && (
                    <input
                      className="input"
                      placeholder="Enter custom asking price"
                      name="askingPriceOther"
                      value={form.askingPriceOther}
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
              </div>

              <div>
                <div className="label">Location</div>
                <input
                  className="input"
                  name="location"
                  value={form.location}
                  onChange={change}
                />
              </div>
            </>
          )}

          {step === 3 && (
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
          )}

          <div
            style={{ display: "flex", gap: 8, justifyContent: "space-between" }}
          >
            <button
              type="button"
              className="pill"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
            >
              Back
            </button>
            <button className="btn" disabled={submitting}>
              {step < 3 ? "Next Step" : submitting ? "Finishing…" : "Finish"}
            </button>
            <button
              type="button"
              className="pill"
              onClick={() =>
                setForm({
                  name: "",
                  company: "",
                  industry: "",
                  industryOther: "",
                  asking_price: "",
                  askingPriceOther: "",
                  timeline: "",
                  timelineOther: "",
                  location: "",
                  notes: "",
                })
              }
            >
              Reset
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
