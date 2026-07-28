function StudentStatus({ name, GPA }) {
  return (
    <div className="w-72 p-6 bg-white rounded-xl shadow-lg border border-gray-200">

      <h2 className="text-2xl font-bold text-blue-600">
        {name}
      </h2>

      <p className="mt-3">
        GPA: {GPA}
      </p>

      <h3 className="mt-4 text-xl font-semibold">
        {GPA >= 2.0 ? "✅ Pass" : "❌ Fail"}
      </h3>

    </div>
  );
}

export default StudentStatus;