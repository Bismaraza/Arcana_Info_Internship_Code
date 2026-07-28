function StudentRow({ student, deleteStudent }) {
  return (
    <tr>

      <td className="border p-3 text-center">
        {student.name}
      </td>

      <td className="border p-3 text-center">
        {student.department}
      </td>

      <td className="border p-3 text-center">
        {student.gpa}
      </td>

      <td className="border p-3 text-center">

        {student.gpa >= 3 ? (
          <span className="bg-green-500 text-white px-3 py-1 rounded-full">
            Pass
          </span>
        ) : (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full">
            Fail
          </span>
        )}

      </td>

      <td className="border p-3 text-center">

        <button
          onClick={() => deleteStudent(student.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>

      </td>

    </tr>
  );
}

export default StudentRow;