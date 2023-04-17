import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex mb-2 ">
      <div>
        <img
          src="https://yt3.ggpht.com/rsWNoodBkJEZR0kENtj_8f33YnYGqyZrbYIs8Yj88wh_VEcoazw8WuvIZgy8t9hWYnWVtHVlI5A=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="chat message icon"
          width={25}
          height={25}
        />
      </div>
      <div>
        <span className="font-bold mx-2">{name}</span>
        <span className="font-base">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
