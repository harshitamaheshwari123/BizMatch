import React from "react";
import "./BuyerCard.css";

export default function BuyerCard({ buyer, onAccept, onReject, onView }) {
  return (
    <div className="buyer-card" role="article">
      <div className="buyer-header">
        <div className="buyer-info">
          <div className="buyer-name">{buyer.name}</div>
          <div className="buyer-details">
            {buyer.industry} • {buyer.location || "—"}
          </div>
        </div>
        <div className="buyer-meta">
          <div className="buyer-budget">{buyer.budget}</div>
          <div className="buyer-date">
            {new Date(buyer.created_at).toLocaleDateString()}
          </div>
        </div>
      </div>
      
      {buyer.notes && (
        <p className="buyer-notes">{buyer.notes}</p>
      )}
      
      <div className="buyer-actions">
        <button className="btn-accept" onClick={() => onAccept(buyer.id)}>
          Accept
        </button>
        <button className="btn-reject" onClick={() => onReject(buyer.id)}>
          Reject
        </button>
        <button className="btn-view" onClick={() => onView(buyer)}>
          View
        </button>
      </div>
    </div>
  );
}
