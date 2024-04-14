import React from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="p-4 w-full flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 rounded">
            <span className="'label-text">To:</span>
            <span className="text-gray-900 font-bold">Shivam maurya</span>
          </div>
          <div className="divider my-0 py-0 h-1" />
          <Messages />

          <div className="divider my-0 py-0 h-1" />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-lg text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 shivam maurya </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
