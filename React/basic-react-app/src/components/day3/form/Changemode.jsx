import { useState } from "react";

function ToggleTheme() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >

      <h1 className="text-4xl font-bold mb-6">
        {darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Toggle Theme
      </button>

    </div>
  );
}

export default ToggleTheme;