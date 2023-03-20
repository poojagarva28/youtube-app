import React from "react";

const VideoCard = ({ videoInfo }) => {
  console.log(videoInfo, "videoinfo");
  const { snippet, statistics } = videoInfo;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="shadow-md rounded-lg overflow-hidden">
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <div className="p-3">
        <h4 className="font-bold">{title}</h4>
        <h5>{channelTitle}</h5>
        <h6>{statistics.viewCount} Views</h6>
      </div>
    </div>
  );
};

export default VideoCard;
