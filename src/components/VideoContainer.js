import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json, "item");
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {videos.map((item) => (
        <div className=" w-[18.5%]">
          <Link to={`/watch?v=${item.id}`}>
            <VideoCard videoInfo={item} key={item.id} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
