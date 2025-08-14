import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

export default function ProfileDashboard() {
  const { role, id } = useParams();
  const navigate = useNavigate();

  const profiles = {
    buyer: [
      {
        id: "b1",
        name: "Alice Johnson",
        email: "alice@example.com",
        interest: "Tech & AI",
        photo: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: "b2",
        name: "Bob Smith",
        email: "bob@example.com",
        interest: "Real Estate",
        photo: "https://i.pravatar.cc/150?img=2",
      },
    ],
    seller: [
      {
        id: "s1",
        name: "Carla Williams",
        company: "Tech Solutions Inc.",
        product: "Software Solutions",
        photo: "https://i.pravatar.cc/150?img=3",
      },
      {
        id: "s2",
        name: "David Lee",
        company: "Green Foods Ltd.",
        product: "Organic Food",
        photo: "https://i.pravatar.cc/150?img=4",
      },
    ],
  };

  const profileData = profiles[role]?.find((p) => p.id === id);
  const [profile, setProfile] = useState(profileData);
  const [isEditing, setIsEditing] = useState(false);

  if (!profile) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Profile Not Found</h2>
        <Link to="/profiles">Back to Profiles</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    
    alert("Profile saved successfully!");
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "20px auto",
        padding: 20,
        background: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: 10,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <img
          src={profile.photo}
          alt={profile.name}
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 10,
          }}
        />
        {isEditing ? (
          <input
            type="text"
            name="photo"
            value={profile.photo}
            onChange={handleChange}
            placeholder="Photo URL"
            style={{ width: "80%" }}
          />
        ) : null}
        <h2>{profile.name}</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {role === "buyer" ? (
          <>
            <div>
              <strong>Email: </strong>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                profile.email
              )}
            </div>
            <div>
              <strong>Interest: </strong>
              {isEditing ? (
                <input
                  type="text"
                  name="interest"
                  value={profile.interest}
                  onChange={handleChange}
                />
              ) : (
                profile.interest
              )}
            </div>
          </>
        ) : (
          <>
            <div>
              <strong>Company: </strong>
              {isEditing ? (
                <input
                  type="text"
                  name="company"
                  value={profile.company}
                  onChange={handleChange}
                />
              ) : (
                profile.company
              )}
            </div>
            <div>
              <strong>Product/Service: </strong>
              {isEditing ? (
                <input
                  type="text"
                  name="product"
                  value={profile.product}
                  onChange={handleChange}
                />
              ) : (
                profile.product
              )}
            </div>
          </>
        )}
      </div>

      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        {isEditing ? (
          <button
            onClick={handleSave}
            style={{
              padding: "8px 16px",
              background: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: "8px 16px",
              background: "#2196F3",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        )}
        <button
          onClick={() => navigate("/profile")} 
          style={{
            padding: "8px 16px",
            background: "#f44336",
            color: "#fff",
            borderRadius: 5,
            border: "none",
            cursor: "pointer",
          }}
        >
          Back to Profiles
        </button>
      </div>
    </div>
  );
}
