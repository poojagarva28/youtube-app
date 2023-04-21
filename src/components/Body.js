import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <>
      <Header />
      <div>
        {/* <div className="grid grid-flow-col"> */}
        <Sidebar />
        <Outlet />
        {/* <MainContainer />
      <WatchPage /> */}
      </div>
      <Footer />
    </>
  );
};

export default Body;
