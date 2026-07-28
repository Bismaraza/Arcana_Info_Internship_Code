function StatusBadge({ name, status }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border">

      <h2 className="text-2xl font-bold">
        {name}
      </h2>

      {
        status ? (
          <span className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-full">
            Active
          </span>
        ) : (
          <span className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded-full">
            Inactive
          </span>
        )
      }

    </div>
  );
}

export default StatusBadge;