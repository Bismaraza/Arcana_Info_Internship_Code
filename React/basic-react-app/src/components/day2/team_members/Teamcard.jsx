
function TeamCard({ name, fathername, GPA }) {
  return (
    <div className="bg-white w-80 p-6 rounded-xl shadow-lg text-center border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-600">{name}</h2>

      <p className="text-gray-700 mt-3">
      ${fathername}
      </p>

      <p className="text-gray-700 mt-2">
        {GPA}
      </p>
    </div>
  );
}

export default TeamCard;