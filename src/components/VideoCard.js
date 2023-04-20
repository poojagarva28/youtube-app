import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="bg-black text-white shadow-3xl overflow-hidden videocard m-3 border-4 border-white">
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <div className="p-3">
        <h4 className="font-bold">{title}</h4>
        <h5>{channelTitle}</h5>
        {/* <h6>{statistics.viewCount} Views</h6> */}
      </div>
    </div>
  );
};

// HIGHER ORDER COMONENT - TAKES A COMPONENT AND RETURNS A NEW COMPONENT
// export const AdVideoCard = ({ videoInfo }) => {
//   return (
//     <div className="border border-red-500">
//       <VideoCard videoInfo={videoInfo} />
//     </div>
//   );
// };

export default VideoCard;
