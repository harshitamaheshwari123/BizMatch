import React, { useEffect, useState } from "react";
import "./Home.css";
import "./FAQ.css";

export default function Home() {
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    // Instead of backend, use sample data
    const dummyBuyers = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Priya Sharma", email: "priya@example.com" },
      { id: 3, name: "Michael Lee", email: "michael@example.com" },
    ];
    setBuyers(dummyBuyers);
    setLoading(false);
  }, []);

  const faqs = [
    {
      question: "How is my data protected?",
      answer:
        "We use enterprise-grade encryption and security measures to protect all your business data. Our platform is SOC 2 compliant and follows industry best practices for data security.",
    },
    {
      question: "What are the fees for using BizMatch?",
      answer:
        "We offer transparent pricing with no hidden fees. Our standard plan starts at $99/month, with enterprise plans available for larger organizations. Contact our sales team for custom pricing.",
    },
    {
      question: "How long does the average deal take to close?",
      answer:
        "The average deal closure time varies by industry and complexity, but typically ranges from 3-6 months. Our streamlined platform helps reduce this timeline significantly.",
    },
    {
      question: "Can I invite my team to collaborate?",
      answer:
        "Yes. You can add teammates to your workspace to share notes, manage tasks, and collaborate with role-based permissions.",
    },
    {
      question: "Do you support international deals?",
      answer:
        "Yes. BizMatch supports cross-border acquisitions with multi-currency listings and guidance on regional compliance.",
    },
  ];

  // Graph data
  const graphData = [
    { month: "Jan", value: 4 },
    { month: "Feb", value: 3 },
    { month: "Mar", value: 5 },
    { month: "Apr", value: 4 },
    { month: "May", value: 6 },
    { month: "Jun", value: 5 },
  ];

  return (
    <div className="container">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Acquisition Dashboard</h1>
          <p className="dashboard-subtitle">
            Streamline your business acquisitions from start to finish.
          </p>
        </div>
        <button className="analyze-btn">
          <span>📄</span>
          Analyze Document
        </button>
      </div>

      {/* Key Metrics */}
      <div className="metrics-section">
        <div className="metric-card">
          <div className="metric-header">
            <h3>Total Revenue</h3>
            <span className="metric-icon">💰</span>
          </div>
          <div className="metric-value">$45,231.89</div>
          <div className="metric-change positive">+20.1% from last month</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3>Potential Buyers</h3>
            <span className="metric-icon">👥</span>
          </div>
          <div className="metric-value">+23</div>
          <div className="metric-change positive">+5 from last week</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3>Active Deals</h3>
            <span className="metric-icon">📈</span>
          </div>
          <div className="metric-value">+12</div>
          <div className="metric-change positive">+2 since yesterday</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3>Response Rate</h3>
            <span className="metric-icon">📊</span>
          </div>
          <div className="metric-value">78%</div>
          <div className="metric-change negative">-2% from last month</div>
        </div>
      </div>

      {/* Deal Flow */}
      <div className="dashboard-row">
        <div className="graph-card">
          <div className="graph-header">
            <div>
              <h2 className="graph-title">Deal Flow Overview</h2>
              <p className="graph-subtitle">Monthly deal progression.</p>
            </div>
          </div>
          <div className="graph-container">
            <div className="graph-y-axis">
              <span>8</span>
              <span>6</span>
              <span>4</span>
              <span>2</span>
              <span>0</span>
            </div>
            <div className="graph-bars">
              {graphData.map((data, index) => (
                <div
                  key={index}
                  className="graph-bar"
                  style={{
                    height: `${(data.value / 8) * 220}px`,
                    backgroundColor:
                      index % 2 === 0 ? "var(--accent)" : "var(--accent-light)",
                  }}
                >
                  <span className="graph-bar-label">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TaskList />
      </div>

      {/* Why BizMatch */}
      <div className="why-section">
        <h2 className="section-title">Why BizMatch?</h2>
        <div className="features-section">
          <div className="feature-card float1">
            <div className="icon">💼</div>
            <h3>Simplified Deal Flow</h3>
            <p>
              Manage your acquisition pipeline with intuitive tools and a clear
              overview of every stage.
            </p>
          </div>
          <div className="feature-card float2">
            <div className="icon">⚡</div>
            <h3>AI-Powered Matching</h3>
            <p>
              Our intelligent algorithms connect you with the most compatible
              buyers or sellers.
            </p>
          </div>
          <div className="feature-card float3">
            <div className="icon">🔒</div>
            <h3>Secure Data Rooms</h3>
            <p>
              Share sensitive documents with confidence in our secure and
              encrypted data rooms.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="how-cards">
        <h2 className="section-title">How It Works</h2>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-icon">👤</div>
            <h3>Create Your Profile</h3>
            <p>
              Whether you're selling your business or looking to acquire, a
              detailed profile is your first step to finding the perfect match.
            </p>
          </div>
          <div className="how-card">
            <div className="how-icon">🔎</div>
            <h3>Discover Opportunities</h3>
            <p>
              Browse curated listings or get matched by our AI with buyers and
              sellers that fit your exact criteria.
            </p>
          </div>
          <div className="how-card">
            <div className="how-icon">🛡️</div>
            <h3>Close with Confidence</h3>
            <p>
              Utilize our secure platform for communication, due diligence, and
              closing the deal.
            </p>
          </div>
        </div>
      </div>

      {/* Buyers Section */}
      <section className="buyers-section">
        <h2>Potential Buyers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              name: "John Doe",
              company: "Tech Ventures",
              industry: "Software",
            },
            {
              id: 2,
              name: "Jane Smith",
              company: "Green Energy Ltd.",
              industry: "Renewables",
            },
            {
              id: 3,
              name: "Alex Johnson",
              company: "Urban Eats",
              industry: "Food & Beverage",
            },
          ].map((buyer) => (
            <div key={buyer.id} className="buyer-card">
              <h3>{buyer.name}</h3>
              <p>{buyer.company}</p>
              <p>{buyer.industry}</p>
              <div className="actions">
                <button className="accept">Accept</button>
                <button className="reject">Reject</button>
                <button className="pass">Pass</button>
              </div>
            </div>
          ))}
        </div>
      </section>



      

      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about BizMatch</p>
      </div>

      <div className="faq-section">
        {faqs.map((faq, index) => {
          const isOpen = expandedFAQ === index;
          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "expanded" : ""}`}
              onClick={() => setExpandedFAQ(isOpen ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{isOpen ? "▲" : "▼"}</span>
              </div>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-card">
          <h2>Ready to Find Your Match?</h2>
          <p>Join the leading platform for business acquisitions.</p>
          <button
            className="cta-button"
            onClick={() => (window.location.href = "/onboarding-seller")}
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="home-footer">
        <div className="home-footer-inner">
          <span>© 2025 DealMatch, Inc. All rights reserved.</span>
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

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review new buyer profiles", done: false },
    { id: 2, text: "Follow up with 'Innovate Inc.'", done: false },
    { id: 3, text: "Schedule due diligence call", done: true },
    {
      id: 4,
      text: "Analyze financial statement from 'Synergy Corp'",
      done: false,
    },
    { id: 5, text: "Prepare offer for 'Momentum Ventures'", done: false },
  ]);

  const toggle = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  return (
    <div className="task-card">
      <div className="task-header">
        <div>
          <h2 className="task-title">Task List</h2>
          <p className="task-subtitle">Your immediate action items.</p>
        </div>
      </div>
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id} className={`task-item ${t.done ? "done" : ""}`}>
            <button
              className="task-checkbox"
              onClick={() => toggle(t.id)}
              aria-label="toggle task"
            />
            <span className="task-text">{t.text}</span>
            <button className="task-menu" aria-label="more">
              ⋯
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
