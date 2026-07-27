import profile from "../../assets/Bisma.png";

function Profile() {
  return (
    <div className="bg-white w-80 p-6 rounded-xl shadow-lg text-center border border-blue-200">

      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
      />

      <h2 className="text-2xl font-bold mt-4 text-blue-800">
        Bisma Raza
      </h2>

      <p className="text-gray-700 mt-2">
        MERN Stack Intern
      </p>

      <p className="text-gray-600 mt-3">
        Learning React, JavaScript and Tailwind CSS.
      </p>

      <button className="bg-blue-700 text-white px-5 py-2 rounded-lg mt-5 hover:bg-blue-800 shadow-sm">
        Contact Me
      </button>

    </div>
  );
}

export default Profile;