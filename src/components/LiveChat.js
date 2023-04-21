import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateMessage, generateNames } from "../utils/helper";
import { Send } from "react-feather";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const myInterval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateNames(),
          message: generateMessage(15),
        })
      );
      //api polling
    }, 2000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const chatMessageHandler = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: generateNames(),
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="p-5 bg-white">
      <h3 className="bg-[#ffdb58] px-2 py-1 mb-2 font-bold">
        <span className="animate-pulse">🔴</span> Live 💬
      </h3>
      <div className="h-[476px] bg-[#ffdb58] mb-2  p-2 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((item, i) => (
          <ChatMessage key={i} name={item.name} message={item.message} />
        ))}
      </div>

      <form className="flex mt-4" onSubmit={chatMessageHandler}>
        <input
          className=" placeholder:text-white w-[82%] h-10 px-2 mt-0 bg-[#c4a1ff] text-white font-bold border-none focus:border-none focus:outline-none focus:shadow-none focus:bg-purple-400"
          type="text"
          placeholder="Enter your message"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />

        <button
          onSubmit={() => setLiveMessage(liveMessage)}
          className="bg-[#a388ee] px-3 h-10 ml-2 mt-0 mr-0 p-0 text-white"
        >
          <Send />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
