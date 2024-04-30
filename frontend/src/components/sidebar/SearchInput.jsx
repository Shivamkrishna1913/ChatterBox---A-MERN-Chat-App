import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";

import useGetConversations from "../../hooks/useGetConversations";

import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <div className=" m-2">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Search.."
          className="input  input-bordered rounded-md w-9/12 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
