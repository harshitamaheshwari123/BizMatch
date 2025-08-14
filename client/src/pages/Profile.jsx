import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
   
    const buyers = [
      {
        id: "b1",
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "buyer",
      },
      { id: "b2", name: "Bob Smith", email: "bob@example.com", role: "buyer" },
    ];

    const sellers = [
      {
        id: "s1",
        name: "Carla Williams",
        company: "Tech Solutions Inc.",
        role: "seller",
      },
      {
        id: "s2",
        name: "David Lee",
        company: "Green Foods Ltd.",
        role: "seller",
      },
    ];

    setProfiles([...buyers, ...sellers]);
  }, []);

  return (
    <div
      className="container"
      style={{
        background: "var(--primary-bg)",
        padding: 20,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>All Registered Buyers & Sellers</h1>
      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", background: "white" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Contact / Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.length === 0 ? (
            <tr>
              <td colSpan="4">No profiles found</td>
            </tr>
          ) : (
            profiles.map(({ id, name, role, email, company }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{role}</td>
                <td>{role === "buyer" ? email : company}</td>
                <td>
                  <Link to={`/profile/${role}/${id}`}>View Profile</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div
        className="home-footer"
        style={{
          marginTop: "auto",
          background: "white",
          padding: "10px 0",
          color: "white",
        }}
      >
        <div
          className="home-footer-inner"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <span>© 2025 BizMatch, Inc. All rights reserved.</span>
          <div
            className="home-footer-links"
            style={{ display: "flex", gap: 20 }}
          >
            <a href="/terms" style={{ color: "black" }}>
              Terms of Service
            </a>
            <a href="/privacy" style={{ color: "black" }}>
              Privacy Policy
            </a>
            <a href="/contact" style={{ color: "black" }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
