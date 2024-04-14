import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";

const Login = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <>
      <div className="  min-h-screen flex items-center justify-center  ">
        <div className="max-w-md w-full   shadow-md rounded-xl px-8 pt-6 pb-8 bg-[#e6ffda]">
          <h2
            className="text-2xl mb-4 text-center text-gray-700 font-bold"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            SignUp for ChatterBox
          </h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 "
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline text-white"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 "
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3     leading-tight focus:outline-none focus:shadow-outline text-white"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3     leading-tight focus:outline-none focus:shadow-outline text-white"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold  mb-2"
                htmlFor="Confirm-Password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-white"
                id="Confirm-Password"
                type="password"
                placeholder="Confirm-Password"
              />
            </div>
            <GenderCheckbox />
            <hr />
            <a
              href="/login"
              className="text-sm hover:underline hover:text-blue-400 inline-block"
            >
              Already have an account?
            </a>
            <hr className="mb-3" />
            <div className="flex justify-center">
              <button
                className="bg-[#42b72a] text-xl hover:bg-[#389e24] text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
