import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_RELATED_VIDEOS_API } from "../utils/constants";

const RelatedVideos = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"), "currentVideoId");

  useEffect(() => {
    getRelatedVideos();
  }, []);

  const getRelatedVideos = async () => {
    const api =
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=" +
      searchParams.get("v") +
      "&type=video&key=" +
      GOOGLE_API_KEY;
    const data = await fetch(api);
    const json = await data.json();
    console.log(json.items, "related videos");
    setVideos(json.items);
  };
  return videos.map((item) => (
    <Link to={`/watch?v=${item.id.videoId}`} key={item.id.videoId}>
      <div className="shadow-md rounded-lg overflow-hidden flex mb-3">
        <img src={item?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
        <div className="p-2">
          <h4 className="font-bold">{item?.snippet?.title}</h4>
          <h5>{item?.snippet?.channelTitle}</h5>
          <h6>{item?.snippet?.viewCount} Views</h6>
        </div>
      </div>
    </Link>
  ));
};

export default RelatedVideos;
