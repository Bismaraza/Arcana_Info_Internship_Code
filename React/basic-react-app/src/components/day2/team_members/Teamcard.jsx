function TeamCard({ name, fathername, GPA }) {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center border border-gray-200">

      {/* Avatar */}
      <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
        {name.charAt(0)}
      </div>

      {/* Name */}
      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        {name}
      </h2>

      {/* Father Name */}
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Father:</span> {fathername}
      </p>

      {/* GPA */}
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">GPA:</span> {GPA}
      </p>

      {/* Button */}
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        View Profile
      </button>

    </div>
  );
}

export default TeamCard;