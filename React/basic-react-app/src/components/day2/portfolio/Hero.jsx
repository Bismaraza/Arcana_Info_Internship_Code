import profile from "../../../assets/Bisma.png";

function Hero() {
  return (
    <section className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white w-full max-w-125 p-8 rounded-2xl shadow-xl text-center">

        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto border-4 border-blue-600"
        />

        <h1 className="text-4xl font-bold mt-6">
          Hi, I'm <span className="text-blue-600">Bisma Raza</span> 👋
        </h1>

        <h2 className="text-xl text-gray-600 mt-3">
          MERN Stack Intern
        </h2>

        <p className="text-gray-500 mt-5">
          Passionate about building modern, responsive and user-friendly web applications using React, JavaScript and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Hire Me
          </button>

          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;