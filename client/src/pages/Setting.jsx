import React, { useState } from "react";
import "./Setting.css";

export default function SettingsPage() {
  const [form, setForm] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    companyName: "Innovate Inc.",
  });

  const [notifications, setNotifications] = useState({
    buyerMatches: true,
    newMessages: true,
    dealProgress: false,
    weeklySummary: true,
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToggle = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const saveChanges = () => {
    alert("Changes saved!");
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <p className="subtitle">
        Manage your account settings and notification preferences.
      </p>

      <div className="settings-grid">
        {/* Profile Section */}
        <div className="settings-card">
          <h2>Profile</h2>
          <p>Update your personal and company information.</p>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleFormChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleFormChange}
          />
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleFormChange}
          />
          <button className="save-btn" onClick={saveChanges}>
            Save Changes
          </button>
        </div>

        {/* Notifications Section */}
        <div className="settings-card">
          <h2>Notifications</h2>
          <p>Choose how you want to be notified.</p>
          <div className="toggle-row">
            <div>
              <strong>New Buyer Matches</strong>
              <p>When a new potential buyer matches your criteria.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.buyerMatches}
                onChange={() => handleToggle("buyerMatches")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="toggle-row">
            <div>
              <strong>New Messages</strong>
              <p>When you receive a new message from a buyer or seller.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.newMessages}
                onChange={() => handleToggle("newMessages")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="toggle-row">
            <div>
              <strong>Deal Progress Updates</strong>
              <p>When a milestone in your active deal is updated.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.dealProgress}
                onChange={() => handleToggle("dealProgress")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="toggle-row">
            <div>
              <strong>Weekly Summary</strong>
              <p>Receive a weekly digest of your activity and updates.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.weeklySummary}
                onChange={() => handleToggle("weeklySummary")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
