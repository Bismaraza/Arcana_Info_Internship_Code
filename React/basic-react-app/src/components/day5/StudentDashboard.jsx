import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

function StudentDashboard() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Bisma Raza",
      department: "Computer Science",
      gpa: 3.9,
    },
    {
      id: 2,
      name: "Ali Khan",
      department: "Software Engineering",
      gpa: 3.6,
    },
  ]);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Student Dashboard
      </h1>

      <StudentForm addStudent={addStudent} />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
      />

    </div>
  );
}

export default StudentDashboard;