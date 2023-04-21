import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import RelatedVideos from "./RelatedVideos";

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
    // console.log(json?.items[0], "json data");
  };

  return (
    <>
      <div className="p-2 pt-5 px-0 flex">
        <div className="p-5 bg-white">
          <iframe
            width="960"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h4 className="font-bold text-2xl my-4">
            {watchVideo?.snippet?.title}
          </h4>
          <div className="flex items-center gap-4 ">
            <h4 className="font-semibold text-xl">
              {watchVideo?.snippet?.channelTitle}
            </h4>
            <button className="rounded-3xl shadow-lg py-1 px-3 bg-gray-700 text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="px-5 flex flex-col pr-0 w-[380px]">
          <LiveChat />
        </div>
      </div>
      <div className="flex mb-6">
        <div className="bg-white p-5 w-[1000px] mt-5">
          <Comments />
        </div>
        <div className="bg-white p-5 w-[360px] mt-5 ml-5">
          <RelatedVideos />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
