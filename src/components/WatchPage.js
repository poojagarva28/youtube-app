import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";

const WatchPage = () => {
  const [watchVideo, setWatchVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch("");
    const json = await data.json();
    setWatchVideo(json?.items[0]);
    console.log(json?.items[0], "json data");
  };

  return (
    <div className="p-8">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h4 className="font-bold text-2xl my-4">{watchVideo?.snippet?.title}</h4>
      <div className="flex items-center gap-4 ">
        <h4 className="font-semibold text-xl">
          {watchVideo?.snippet?.channelTitle}
        </h4>
        <button className="rounded-3xl shadow-lg py-1 px-3 bg-gray-700 text-white font-semibold">
          Subscribe
        </button>
      </div>
      <div className="w-9/12">
        <Comments />
      </div>
    </div>
  );
};

export default WatchPage;
