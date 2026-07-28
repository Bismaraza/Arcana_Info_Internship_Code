function FormStyling() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login Form
        </h1>

        <label className="block font-semibold">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 rounded-lg mt-2 mb-5"
        />

        <label className="block font-semibold">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border p-3 rounded-lg mt-2"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default FormStyling;