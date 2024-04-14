import React from "react";
import { TbLogout2 } from "react-icons/tb";
const LogoutButton = () => {
  return (
    <>
      <div className="mt-auto ">
        <button>
          <TbLogout2 className="h-8 w-8 hover:text-white " />
        </button>
      </div>
    </>
  );
};

export default LogoutButton;
