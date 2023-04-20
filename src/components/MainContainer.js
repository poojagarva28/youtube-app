import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 my-4 maincontainer">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
