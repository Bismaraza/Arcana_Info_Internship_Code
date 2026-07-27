function StudentCard({ name, age, GPA }) {
  return (
    <div className="w-72 p-6 bg-white rounded-xl shadow-lg border border-gray-200">

      <h2 className="text-2xl font-bold text-blue-600">
        {name}
      </h2>

      <p className="mt-3 text-gray-700">
        Age: {age}
      </p>

      <p className="text-gray-700">
        GPA: {GPA}
      </p>

    </div>
  );
}

export default StudentCard;