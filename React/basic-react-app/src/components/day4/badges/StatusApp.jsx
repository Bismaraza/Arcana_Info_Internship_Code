import StatusBadge from "./StatusBadge";

function StatusApp() {

  const students = [

    {
      id: 1,
      name: "Bisma Raza",
      status: true
    },

    {
      id: 2,
      name: "Ali Khan",
      status: false
    },

    {
      id: 3,
      name: "Sara Ahmed",
      status: true
    }

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        Student Status
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          students.map((student) => (

            <StatusBadge
              key={student.id}
              name={student.name}
              status={student.status}
            />

          ))
        }

      </div>

    </div>

  );
}

export default StatusApp;