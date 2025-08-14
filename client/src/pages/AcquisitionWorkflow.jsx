import React, { useState } from "react";
import "./AcquisitionWorkflow.css";

export default function AcquisitionWorkflow() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    "Initial Discussion",
    "Share Documents",
    "Negotiation",
    "Due Diligence",
    "Deal Closure",
  ];

  return (
    <div className="workflow-container">
      <h2 className="workflow-title">Acquisition Process Workflow</h2>

     
      <div className="chat-section">
        <h3>Post-Match Chat Room</h3>
        <div className="chat-box">
          <div className="chat-message buyer">
            Buyer: Hi, I’m interested in your business.
          </div>
          <div className="chat-message seller">
            Seller: Great! Let’s discuss the details.
          </div>
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          className="chat-input"
        />
        <button className="send-btn">Send</button>
      </div>

      
      <div className="steps-section">
        <h3>Deal Progress Steps</h3>
        <ul className="steps-list">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step-item ${
                activeStep === index + 1 ? "active" : ""
              }`}
              onClick={() => setActiveStep(index + 1)}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="upload-section">
        <h3>Upload Deal Documents</h3>
        <input type="file" className="file-input" />
        <button className="upload-btn">Upload</button>
      </div>
    </div>
  );
}
