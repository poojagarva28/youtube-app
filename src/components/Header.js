import React, { useEffect, useState } from "react";
import { Menu, User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { setSearchItem, setSearchVideos } from "../utils/searchItemSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);
  // console.log(searchCache, "searchCache");
  useEffect(() => {
    // make API call in every key stroker but if the difference between keystroke is <200 ms, DECLINE the API call

    /* 
      {
        "ip":["iphone","iphone 12"]
      }
    */

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]); // make API call every time when seatch query changes

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1], "search suggestion");
    setSuggestions(json[1]);
    // update cache
    // console.log({ [searchQuery]: json[1] }, "[searchQuery]:json[1]");
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getVideos = async (suggestion) => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        suggestion +
        "&key=" +
        GOOGLE_API_KEY
      // {
      //   headers: {
      //     Authorization: `Bearer ${GOOGLE_API_KEY}`,
      //     Accept: "application/json",
      //   },
      // }
    );
    // console.log(data, "data");
    const json = await data.json();
    // console.log(json?.items, "json.itemsjson.items");
    dispatch(setSearchVideos(json.items));
  };
  // console.log(searchQuery);

  const suggestionHandler = (suggestion) => {
    dispatch(setSearchItem(suggestion));
    getVideos(suggestion);
    setShowSuggestions(false);
    if (pathname !== "/") {
      navigate("/youtube-app");
    }
  };

  return (
    <div className="grid grid-flow-col py-2 shadow-md items-center bg-[#69d2e7]">
      <div className="flex col-span-1">
        {/* <img
          className="h-12 pl-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="menu"
          onClick={toggleMenuHandler}
        /> */}
        <Menu
          className="w-20 h-12 p-1 text-white cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <Link to="/youtube-app">
          {/* <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="youtube app"
            className="h-12 ml-2"
          /> */}
          {/* <Video className="w-20 h-12 p-1 text-white" />  */}
          <h4 className="text-white font-extrabold text-2xl mt-2">
            {" "}
            Video App
          </h4>
        </Link>
      </div>
      <div className="col-span-10 px-44">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            setShowSuggestions(false);
            setSuggestions([]);
          }}
          className="w-4/5   p-1 px-4 bg-[#daf5f0] font-bold focus:border-none focus:outline-none focus:shadow-none focus:bg-[#a7dbd8]"
        />
        {suggestions?.length > 0 && showSuggestions && (
          <div
            className="bg-[#fff] py-3 px-2 w-[38rem] shadow-2xl absolute z-10 mt-2"
            onClick={() => setShowSuggestions(false)}
          >
            <ul>
              {suggestions.map((suggestion, i) => (
                <li
                  className="py-2 px-2 shadow-sm hover:bg-[#daf5f0] font-bold cursor-pointer"
                  key={i}
                  onMouseDown={() => suggestionHandler(suggestion)}
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="border border-none p-1 px-4  bg-[#daf5f0] text-white ml-2 hover:bg-[#a7dbd8]">
          🔍
        </button>
      </div>

      <div className="col-span-1">
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="user"
          className="h-12"
        /> */}
        <User className="w-20 h-12 p-1 text-white" />
      </div>
    </div>
  );
};

export default Header;
