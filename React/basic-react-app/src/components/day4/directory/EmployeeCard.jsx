function EmployeeCard({ name, department }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border">

      <h2 className="text-2xl font-bold text-blue-600">
        {name}
      </h2>

      <p className="mt-2 text-gray-600">
        {department}
      </p>

    </div>
  );
}

export default EmployeeCard;