import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateMessage, generateNames } from "../utils/helper";

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
    <>
      <div className="border border-gray-500 w-[300px] h-[460px] bg-[#69d2e7]  p-2 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((item, i) => (
          <ChatMessage key={i} name={item.name} message={item.message} />
        ))}
      </div>

      <div className="flex">
        <form onSubmit={chatMessageHandler}>
          <input
            className="border border-slate-500 placeholder:text-white w-full h-10 px-2 mt-0 bg-[#c4a1ff] text-white font-bold border-none focus:border-none focus:outline-none focus:shadow-none focus:bg-purple-400"
            type="text"
            placeholder="Enter your message"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
        </form>
        <button className="bg-[#a388ee] px-3 h-10 mt-0 ml-0 mr-0 p-0 text-white">
          Submit
        </button>
      </div>
    </>
  );
};

export default LiveChat;
