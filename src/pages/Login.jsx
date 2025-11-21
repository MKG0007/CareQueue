import React, { useState } from "react";

export default function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section className="min-h-[85vh] flex justify-center items-center px-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-10 rounded-md shadow-md border border-gray-300"
      >
        {/* Classic Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 text-center tracking-wide">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h1>

        <p className="text-center text-gray-600 mt-2 text-sm tracking-wide">
          {state === "Sign Up" ? "Sign up to continue" : "Log in to continue"}
        </p>

        {/* Inputs */}
        <div className="mt-8 flex flex-col gap-4">
          {state === "Sign Up" && (
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 tracking-wide">Full Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                placeholder="John Doe"
                className="w-full p-3 rounded border border-gray-400 focus:ring-1 focus:ring-gray-600 outline-none text-sm"
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="example@mail.com"
              className="w-full p-3 rounded border border-gray-400 focus:ring-1 focus:ring-gray-600 outline-none text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 tracking-wide">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Enter Password"
              className="w-full p-3 rounded border border-gray-400 focus:ring-1 focus:ring-gray-600 outline-none text-sm"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-primary text-white py-3 rounded tracking-wide text-sm font-medium hover:bg-blue-600 transition"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Switch Between Login & Signup */}
        <p className="text-center mt-5 text-sm text-gray-700 tracking-wide">
          {state === "Sign Up" ? (
            <>
              Already have an account?{' '}
              <span
                className="text-black font-medium cursor-pointer underline"
                onClick={() => setState("Login")}
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                className="text-black font-medium cursor-pointer underline"
                onClick={() => setState("Sign Up")}
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </form>
    </section>
  );
}