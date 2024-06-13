"use client";

import React from "react";

const StudentRow = ({ id, name, email, image, isAssigned, onAssign }) => {
  const studentItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const studentAvatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const studentInfoStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const buttonStyle = {
    padding: "5px 10px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: isAssigned ? "#6c757d" : "#0070f3",
    color: "#fff",
    cursor: isAssigned ? "default" : "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#005bb5",
  };

  return (
    <div style={studentItemStyle}>
      <img src={image || "/images/avatar.jpg"} alt={name} style={studentAvatarStyle} />
      <div style={studentInfoStyle}>
        <p style={{ margin: 0 }}>{name}</p>
        <p style={{ margin: 0, fontSize: "0.8em", color: "#666" }}>{email}</p>
      </div>
      <button
        style={buttonStyle}
        onMouseOver={(e) => !isAssigned && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => !isAssigned && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => !isAssigned && onAssign(id)}
      >
        {isAssigned ? "Assigned" : "Assign"}
      </button>
    </div>
  );
};

export default StudentRow;

