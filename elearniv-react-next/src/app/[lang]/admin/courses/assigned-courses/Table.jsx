"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import StudentModal from "./StudentModal";


const Table = ({ courses, students, lang }) => {
	const router = useRouter();
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [assignedStudents, setAssignedStudents] = useState([]);

    useEffect(() => {
		const fetchAssignedStudents = async (courseId) => {
		  try {
			const response = await axios.get(`/api/admin/assigned-students/${courseId}`);
			setAssignedStudents(response.data.assignedStudents.map(student => student.userId));
		  } catch (error) {
			console.error("Error fetching assigned students", error);
		  }
		};
	
		if (selectedCourse) {
		  fetchAssignedStudents(selectedCourse);
		}
	  }, [selectedCourse]);

	const handleAssignCourse = async (userId, courseId) => {
		try {
			const response = await axios.post("/api/admin/assign-course", {
			  courseId,
			  assignedUserId: userId,
			});
			console.log(courseId, userId)
	  
			if (response.data.alreadyAssigned) {
				toast.error("User is already assigned to this course.");
			} else {
				toast.success("Course assigned successfully!");
				setAssignedStudents((prev) => [...prev, userId]);

			}
		  } catch (error) {
			console.error("Error assigning course", error);
			toast.error("Failed to assign course.");
		  }
		};
	const openModal = (courseId) => {
		setSelectedCourse(courseId);
		setIsModalOpen(true);
	};

	return (
		<div className="table-responsive">
			
			<table className="table align-middle table-hover fs-14">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Price</th>
						<th scope="col">Category</th>
						<th scope="col">Instructor</th>
						<th scope="col">Videos</th>
						<th scope="col">Assign to Student</th>
					</tr>
				</thead>
				<tbody>
					{courses.length > 0 ? (
						courses.map((course) => (
							<tr key={course.id}>
								<td>{course.title}</td>
								<td>{course.regular_price}</td>
								<td>{course.category ? course.category.name : 'N/A'}</td>
								<td>{course.user.name}</td>
								<td>{course.videos ? course.videos.length : 0}</td>
								<td>
									<button
										className="btn btn-primary"
										onClick={() => openModal(course.id)}
									>
										Assign to Student
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="6" className="text-center py-3">
								Empty!
							</td>
						</tr>
					)}
				</tbody>
			</table>
			<StudentModal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				students={students}
				onAssign={(userId) => handleAssignCourse(userId, selectedCourse)}
				assignedStudents={assignedStudents}


			/>
		</div>
	);
};

export default Table;

