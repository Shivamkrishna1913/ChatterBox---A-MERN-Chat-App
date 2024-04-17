import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { loading, login } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(inputs);
    await login(inputs);
  };

  return (
    <>
      <div className="  min-h-screen flex items-center justify-center  ">
        <div className="max-w-md w-full   shadow-md rounded-xl px-8 pt-6 pb-8 bg-[#e6ffda]">
          <h2
            className="text-2xl mb-4 text-center text-gray-700 font-bold"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Welcome to ChatterBox
          </h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline text-white"
                id="username"
                type="text"
                placeholder="Username"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
            <div className="mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3   mb-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                id="password"
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <hr />
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-blue-400 inline-block"
            >
              Don't have an account?
            </Link>
            <hr className="mb-3" />
            <div className="flex justify-center">
              <button
                className="bg-[#42b72a] text-xl hover:bg-[#389e24] text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Log In"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
