import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className=" m-2">
      <form className="">
        <input
          type="text"
          placeholder="Search.."
          className="input  input-bordered rounded-md w-9/12 text-white"
        />

        <button
          type="submit"
          className="btn btn-square rounded-md  text-white w-3/12  "
        >
          <FaSearch className=" outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
