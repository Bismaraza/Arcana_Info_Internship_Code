import { useState } from "react";

function LivePreview() {

  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Live Preview
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <h2 className="text-2xl font-semibold mt-6 text-blue-600">
          Hello, {name}
        </h2>

      </div>

    </div>
  );
}

export default LivePreview;