import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout.jsx";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <>
      <div className="mt-auto ">
        {!loading ? (
          <TbLogout2
            className="h-8 w-8 hover:text-white cursor-pointer"
            onClick={logout}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </div>
    </>
  );
};

export default LogoutButton;
