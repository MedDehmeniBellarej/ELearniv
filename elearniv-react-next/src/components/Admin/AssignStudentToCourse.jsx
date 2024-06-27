"use client";

import React from "react";

const StudentRow = ({ id, name, email, image, isAssigned, onAssign }) => {
  const studentItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 10px",
    backgroundColor: "#fff",
    maxWidth: "100%",
  };

  const studentAvatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "15px",
  };

  const studentInfoStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };
  const checkboxStyle = {
    width: "20px", // Adjust the size of the checkbox
    height: "20px",
    cursor: "pointer",
    border: "2px solid #666", // Add a solid border
    appearance: "none", // Remove default appearance
    borderRadius: "3px", // Optional: add some border radius
    outline: "none", // Remove default outline on focus
  };

  const handleCheckboxChange = () => {
    onAssign(id, isAssigned ? 'unassign' : 'assign');
  };

  return (
    <div style={studentItemStyle}>
      <img src={image || "/images/avatar.jpg"} alt={name} style={studentAvatarStyle} />
      <div style={studentInfoStyle}>
        <p style={{ margin: 0 }}>{name}</p>
        <p style={{ margin: 0, fontSize: "0.8em", color: "#666" }}>{email}</p>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id={`flexCheck${id}`} 
          checked={isAssigned} 
          onChange={handleCheckboxChange}
          style={checkboxStyle}
          
        />
       {/* <label className="form-check-label" htmlFor={`flexCheck${id}`}>
          {isAssigned ? "Assigned" : "Assign"}
        </label>*/}
      </div>
    </div>
  );
};

export default StudentRow;



