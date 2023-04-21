import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="bg-white text-black  overflow-hidden videocard m-3 border-4 border-[#f4d738]">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="border-[#f4d738] border-[3px]"
      />
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
