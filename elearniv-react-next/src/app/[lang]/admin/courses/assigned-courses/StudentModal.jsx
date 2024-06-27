"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import StudentRow from "@/components/Admin/AssignStudentToCourse";

const StudentModal = ({ isOpen, onRequestClose, students, onAssign, assignedStudents }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const modalStyle = {
    background: 'rgba(255, 255, 255, 1)',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '80%',
    maxHeight: '80%', // Adjusted to be more flexible
    width: '60%',
    height : "65%",
    margin: 'auto',
    position: 'fixed',
    top: '-20%',
    left: '50%',
    transform: 'translate(-50%, 0)', // Centered in both directions
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Ensure the button is always at the bottom

  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    padding: '20px',
  };

  const studentListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginLeft: "2%",
    marginRight: "2%",
    maxHeight: '350px',
    overflowY: 'auto',
    marginTop: '15px',
    marginBottom : "15px",
    flexGrow: 1, // Ensures the list grows to take available space
  };

  const buttonStyle = {
    backgroundColor: '#6c757d',
    color: '#fff',
    height : '55px',
    border: 'none',
    padding: '10px',
    borderRadius: '0.5rem', // Adjusted border radius
    cursor: 'pointer',
    marginTop: '10px',
    marginBottom: '-10px', // Ensure it stays at the bottom
   
  };

  

  const buttonHoverStyle = {
    backgroundColor: '#5a6268'
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Assign to Student"
      ariaHideApp={false}
      style={{ content: modalStyle, overlay: overlayStyle }}
    >
      <h2 style={{ marginBottom: '10px', textAlign: 'center' }}>Assign to Student</h2>
      <input 
        type="text" 
        placeholder="Search students..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ 
          marginLeft : "2%", 
          marginRight : "2%", 
          maxWidth : "98%", 
          marginTop: "15px",  
          marginBottom: "15px", 
          padding: '15px', // Increased padding for taller input
          width: '100%', 
          borderRadius: '12px', 
          border: '1px solid #ccc' 
        }}
      />
      <div style={studentListStyle}>
        {filteredStudents.map((student, index) => (
              <StudentRow
            key={student.id}
            id={student.id}
            name={student.name}
            email={student.email}
            image={student.image}
            isAssigned={assignedStudents.includes(student.id)}
            onAssign={(userId, action) => onAssign(userId, action)}

          />
        ))}
      </div>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={onRequestClose}
      >
        Close
      </button>
    </Modal>
  );
};

export default StudentModal;
