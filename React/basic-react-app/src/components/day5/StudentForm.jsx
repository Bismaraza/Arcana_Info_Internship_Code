import { useState } from "react";

function StudentForm({ addStudent }) {

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [gpa, setGpa] = useState("");

  function handleSubmit() {

    if (name === "" || department === "" || gpa === "") {
      alert("Please fill all fields!");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      department,
      gpa,
    };

    addStudent(newStudent);

    setName("");
    setDepartment("");
    setGpa("");
  }

  return (

    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">

      <h2 className="text-2xl font-bold mb-5">
        Add Student
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="GPA"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
          className="border p-3 rounded-lg"
        />

      </div>

      <button
        onClick={handleSubmit}
        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Add Student
      </button>

    </div>
  );
}

export default StudentForm;