import StudentRow from "./StudentRow";

function StudentTable({ students, deleteStudent }) {
  return (
    <table className="w-full bg-white shadow-lg border-collapse">

      <thead>

        <tr className="bg-blue-600 text-white">

          <th className="border p-3">Name</th>
          <th className="border p-3">Department</th>
          <th className="border p-3">GPA</th>
          <th className="border p-3">Status</th>
          <th className="border p-3">Action</th>

        </tr>

      </thead>

      <tbody>

        {students.map((student) => (

          <StudentRow
            key={student.id}
            student={student}
            deleteStudent={deleteStudent}
          />

        ))}

      </tbody>

    </table>
  );
}

export default StudentTable;