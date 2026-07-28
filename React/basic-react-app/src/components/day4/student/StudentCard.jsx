function StudentCard({ name, department, GPA }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">

      <h2 className="text-2xl font-bold text-blue-600">
        {name}
      </h2>

      <p className="mt-2">
        Department: {department}
      </p>

      <p className="mt-2">
        GPA: {GPA}
      </p>

    </div>
  );
}

export default StudentCard;