import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx";
import useSignup from "../../hooks/useSignup.jsx";
const Login = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(inputs);
    await signup(inputs);
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
                htmlFor="fullname"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline text-white"
                id="fullname"
                type="text"
                placeholder="Name"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
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
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
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
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
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
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
            <hr />
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-400 inline-block"
            >
              Already have an account?
            </Link>
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
