import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProfileDashboard() {
  const { role, id } = useParams();


  const profiles = {
    buyer: [
      {
        id: "b1",
        name: "Alice Johnson",
        email: "alice@example.com",
        interest: "Tech & AI",
      },
      {
        id: "b2",
        name: "Bob Smith",
        email: "bob@example.com",
        interest: "Real Estate",
      },
    ],
    seller: [
      {
        id: "s1",
        name: "Carla Williams",
        company: "Tech Solutions Inc.",
        product: "Software Solutions",
      },
      {
        id: "s2",
        name: "David Lee",
        company: "Green Foods Ltd.",
        product: "Organic Food",
      },
    ],
  };

  const profile = profiles[role]?.find((p) => p.id === id);

  if (!profile) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Profile Not Found</h2>
        <Link to="/profiles">Back to Profiles</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{profile.name}</h1>
      {role === "buyer" ? (
        <>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Interest:</strong> {profile.interest}
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Company:</strong> {profile.company}
          </p>
          <p>
            <strong>Product/Service:</strong> {profile.product}
          </p>
        </>
      )}
      <Link to="/profiles">Back to Profiles</Link>
    </div>
  );
}
