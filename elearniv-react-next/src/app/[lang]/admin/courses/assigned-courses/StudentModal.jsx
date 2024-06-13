"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import StudentRow from "@/components/Admin/AssignStudentToCourse";

const StudentModal = ({ isOpen, onRequestClose, students, onAssign, assignedStudents }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const modalStyle = {
    background: 'rgba(239, 245, 249, 0.95)',
    padding: '20px',
    borderRadius: '12px',
    maxWidth: '500px',
    maxHeight:'500px',
    width: '90%',
    margin: 'auto',
    position: 'fixed',
    top: '-20%',
    left: '40%',
    transform: 'translate(-50%, 0)',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
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
    zIndex: 999
  };

  const studentListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxHeight: '300px',
    overflowY: 'auto',
    marginTop: '10px'
  };

  const buttonStyle = {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '12px',
    cursor: 'pointer',
    marginTop: '10px'
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
        style={{ padding: '10px', width: '100%', borderRadius: '12px', border: '1px solid #ccc' }}
      />
      <div style={studentListStyle}>
        {filteredStudents.map((student) => (
          <StudentRow
            key={student.id}
            id={student.id}
            name={student.name}
            email={student.email}
            image={student.image}
            isAssigned={assignedStudents.includes(student.id)}
            onAssign={onAssign}
          />
        ))}
      </div>
      <button
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        onClick={onRequestClose}
      >
        Close
      </button>
    </Modal>
  );
};

export default StudentModal;
