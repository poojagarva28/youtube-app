import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col">
        <Sidebar />
        <Outlet />
        {/* <MainContainer />
      <WatchPage /> */}
      </div>
    </>
  );
};

export default Body;
