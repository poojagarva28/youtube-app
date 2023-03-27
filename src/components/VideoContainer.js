import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
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
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {/* HIGHER ORDER COMPONENT FROM VIDEO CARD - AD COMPONENT */}
      {/* {videos[0] && <AdVideoCard videoInfo={videos[0]} />} */}
      {videos.map((item) => (
        <div className=" w-[18.5%]" key={item.id}>
          <Link to={`/watch?v=${item.id}`}>
            <VideoCard videoInfo={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
