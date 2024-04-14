import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";
const Home = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex sm:h-[400px] md:h-[500px] sm:w-[500px] md:w-[800px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <div className="w-10 bg-gray-900"></div>
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
