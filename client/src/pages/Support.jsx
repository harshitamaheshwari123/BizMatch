import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./Support.css";

const faqs = [
  {
    question: "How do I update my company profile?",
    answer:
      "To update your company profile, go to 'Settings' → 'Company Profile', make the necessary changes, and click 'Save'.",
  },
  {
    question: "What are the fees for using DealMatch?",
    answer:
      "DealMatch charges a small transaction fee per successful deal. You can view the latest fee structure in your billing settings.",
  },
  {
    question: "How is my data protected?",
    answer:
      "We use industry-standard encryption and secure servers to store and protect your data.",
  },
  {
    question: "How does the AI matching work?",
    answer:
      "Our AI uses advanced algorithms to match you with the most relevant buyers and sellers based on your preferences.",
  },
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="support-page">
      
      <h1>Support</h1>
      <p className="subtitle">
        We're here to help. Find answers to common questions or get in touch
        with our team.
      </p>

      
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

     
      <div className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
