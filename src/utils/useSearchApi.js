import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY } from "./constants";
import { setSearchVideos } from "./searchItemSlice";

export const useSearchApi = async (appSearchText) => {
  const dispatch = useDispatch();
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
