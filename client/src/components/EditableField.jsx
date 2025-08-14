import React, { useEffect, useState } from "react";

export default function EditableField({
  label,
  value = "",
  onSave,
  type = "text",
}) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value || "");

  useEffect(() => {
    setVal(value || "");
  }, [value]);

  const save = () => {
    if (onSave) onSave(val);
    setEditing(false);
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <label
        style={{ display: "block", color: "var(--muted)", marginBottom: 6 }}
      >
        {label}
      </label>
      {editing ? (
        <>
          {type === "textarea" ? (
            <textarea
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="input"
              rows={4}
            />
          ) : (
            <input
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="input"
            />
          )}
          <div style={{ marginTop: 6 }}>
            <button className="btn" onClick={save}>
              Save
            </button>
            <button
              className="btn"
              onClick={() => {
                setVal(value || "");
                setEditing(false);
              }}
              style={{ marginLeft: 8 }}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ color: value ? "white" : "var(--muted)" }}>
            {value || "—"}
          </div>
          <button
            className="btn"
            onClick={() => setEditing(true)}
            style={{ marginLeft: "auto" }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
