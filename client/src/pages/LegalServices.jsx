import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./LegalServices.css"; // Import CSS file

export default function LegalServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Non-Disclosure Agreements (NDAs)",
      content:
        "An NDA is a legal contract that protects confidential information from being disclosed to unauthorized parties.",
    },
    {
      title: "Due Diligence checklists",
      content:
        "Due diligence involves verifying all material facts regarding a transaction to ensure informed decision-making.",
    },
    {
      title: "Letter of Intent (LOI)",
      content:
        "An LOI outlines the key terms and conditions of a deal before a legally binding agreement is finalized.",
    },
    {
      title: "Purchase Agreement",
      content:
        "A purchase agreement is a final contract that specifies all terms of a business sale.",
    },
  ];

  return (
    <div className="legal-container">
      {/* Main Content */}
      <div className="content">
        <h1 className="page-title">Legal Services</h1>
        <p className="page-subtitle">
          Navigating the legal complexities of a business acquisition.
        </p>

        <div className="card">
          <h2 className="card-title">Connecting You with Experts</h2>
          <p className="card-text">
            While DealMatch provides the platform to connect buyers and sellers,
            the acquisition process involves critical legal steps. We strongly
            recommend engaging with qualified legal professionals. Below are
            common areas where legal expertise is essential.
          </p>

          <div className="accordion">
            {sections.map((section, index) => (
              <div
                key={index}
                className="accordion-item"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="accordion-header">
                  <span>{section.title}</span>
                  {openIndex === index ? (
                    <ChevronUp className="chevron" />
                  ) : (
                    <ChevronDown className="chevron" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="accordion-content">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Cards */}
        <div className="footer-cards">
          <div className="footer-card">
            <div className="footer-icon">💼</div>
            <h3>Find an Attorney</h3>
            <p>We can help you find experienced M&A attorneys in your area.</p>
          </div>
          <div className="footer-card">
            <div className="footer-icon">📄</div>
            <h3>Document Review</h3>
            <p>Have your legal documents reviewed by experts before signing.</p>
          </div>
          <div className="footer-card">
            <div className="footer-icon">🛡️</div>
            <h3>Ensure Compliance</h3>
            <p>Navigate regulatory and compliance issues with confidence.</p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        © 2025 BizMatch, Inc. All rights reserved. &nbsp;
        <a href="#">Terms of Service</a> &nbsp; | &nbsp;
        <a href="#">Privacy Policy</a> &nbsp; | &nbsp;
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
