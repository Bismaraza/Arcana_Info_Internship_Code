import StudentCard from "./StudentCard";

function StudentList() {

  const students = [

    {
      id: 1,
      name: "Bisma Raza",
      department: "Computer Science",
      GPA: 3.9
    },

    {
      id: 2,
      name: "Ali Khan",
      department: "Software Engineering",
      GPA: 3.2
    },

    {
      id: 3,
      name: "Sara Ahmed",
      department: "Information Technology",
      GPA: 3.8
    }

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        Student List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {students.map((student) => (

          <StudentCard
            key={student.id}
            name={student.name}
            department={student.department}
            GPA={student.GPA}
          />

        ))}

      </div>

    </div>

  );
}

export default StudentList;