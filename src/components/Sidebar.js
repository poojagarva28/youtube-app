import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; //early return

  return (
    <div className="p-5 shadow-lg col-span-1 h-screen fixed bg-[#9723c9] z-10  w-[15%] pl-10 -mt-6">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h3 className="font-extrabold pt-5">List</h3>
      <ul>
        <li>Naruto</li>
        <li>Ghibli Movies</li>
        <li>Jujutsu Kaisen</li>
        <li>Haikyuu</li>
      </ul>
    </div>
  );
};

export default Sidebar;
