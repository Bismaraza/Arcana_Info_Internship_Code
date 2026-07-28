import { useState } from "react";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin() {

    if (email === "" || password === "") {
      setMessage("❌ Please fill all fields.");
    }
    else {
      setMessage("✅ Login Successful!");
    }

  }

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login Form
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-5 text-center font-semibold">
          {message}
        </p>

      </div>

    </div>

  );
}

export default LoginForm;