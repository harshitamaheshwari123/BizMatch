import React from "react";
import "./FAQ.css";

export default function FAQ() {
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
  ];

  return (
    <div className="container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about BizMatch</p>
      </div>

      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">▼</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <div className="cta-card">
          <h2>Ready to Find Your Match?</h2>
          <p>Join the leading platform for business acquisitions.</p>
          <button className="cta-button">Get Started Now</button>
        </div>
      </div>

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
