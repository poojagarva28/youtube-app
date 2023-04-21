import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="col-span-11 my-4 maincontainer">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
