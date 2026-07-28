import StudentStatus from "./StudentStatus";

function StudentApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center gap-6 flex-wrap">

      <StudentStatus
        name="Bisma"
        GPA={3.9}
      />

      <StudentStatus
        name="Ali"
        GPA={1.8}
      />

      <StudentStatus
        name="Sara"
        GPA={3.2}
      />

    </div>
  );
}

export default StudentApp;