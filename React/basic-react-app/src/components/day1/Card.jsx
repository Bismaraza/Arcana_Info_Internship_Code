function Card() {
  return (
    <div className="bg-white w-80 p-6 rounded-xl shadow-lg text-center border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-500">
        React Course
      </h2>

      <p className="text-gray-700 mt-3">
        Learn React & Tailwind CSS
      </p>

      <button className="bg-blue-700 text-white px-5 py-2 rounded-lg mt-5 hover:bg-blue-800 shadow-sm">
        Learn More
      </button>
    </div>
  );
}

export default Card;