import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import { setSearchVideos } from "../utils/searchItemSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const appSearchText = useSelector((store) => store.searchItem.searchText);
  const appVideos = useSelector((store) => store.searchItem.searchVideos);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        appSearchText +
        "&key=" +
        GOOGLE_API_KEY
    );
    console.log(data, "data");
    const json = await data.json();
    console.log(json?.items, "json.itemsjson.items");
    dispatch(setSearchVideos(json.items));
  };

  return (
    <div className="flex flex-wrap gap-4 mt-2">
      {/* HIGHER ORDER COMPONENT FROM VIDEO CARD - AD COMPONENT */}
      {/* {videos[0] && <AdVideoCard videoInfo={videos[0]} />} */}
      {appVideos.map((item) => (
        <div className=" w-[19%]" key={item.id.videoId}>
          <Link to={`/watch?v=${item.id.videoId}`}>
            <VideoCard videoInfo={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
