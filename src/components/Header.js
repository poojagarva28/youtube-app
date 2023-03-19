import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col py-2 shadow-md items-center">
      <div className="flex col-span-1">
        <img
          className="h-12 pl-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <a href="">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="youtube app"
            className="h-12 ml-2"
          />
        </a>
      </div>
      <div className="col-span-10 px-44">
        <input
          type="text"
          className="w-4/5 border border-gray-400 rounded-l-full p-1 px-4"
        />
        <button className="border border-gray-900 p-1 px-4 rounded-r-full bg-gray-100 text-white">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="user"
          className="h-12"
        />
      </div>
    </div>
  );
};

export default Header;
