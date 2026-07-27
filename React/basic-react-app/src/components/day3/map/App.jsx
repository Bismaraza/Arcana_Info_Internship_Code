import StudentCard from "./Student";

function MapApp() {

  const students = [
    {
      id: 1,
      name: "Bisma Raza",
      age: 22,
      GPA: 3.9,
    },

    {
      id: 2,
      name: "Ali Khan",
      age: 21,
      GPA: 3.5,
    },

    {
      id: 3,
      name: "Sara Ahmed",
      age: 23,
      GPA: 3.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Student List
      </h1>

      <div className="flex flex-wrap justify-center gap-6">

        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            GPA={student.GPA}
          />
        ))}

      </div>

    </div>
  );
}

export default MapApp;