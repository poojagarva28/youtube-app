import { createSlice } from "@reduxjs/toolkit";

const searchItemSlice = createSlice({
  name: "searchItem",
  initialState: {
    searchText: "anime",
    searchVideos: [],
  },
  reducers: {
    setSearchItem: (state, action) => {
      state.searchText = action.payload;
    },
    setSearchVideos: (state, action) => {
      console.log(action.payload, "action.payload");
      state.searchVideos = action.payload;
    },
  },
});

export const { setSearchItem, setSearchVideos } = searchItemSlice.actions;
export default searchItemSlice.reducer;
