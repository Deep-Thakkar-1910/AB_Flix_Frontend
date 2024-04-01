import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: { bookmarkId: [], bookmarkArray: [] },
  reducers: {
    toggleBookmark: (state, action) => {
      const doesIdExist = state.bookmarkId.indexOf(action.payload);
      if (doesIdExist !== -1) {
        state.bookmarkId.splice(doesIdExist, 1);
      } else {
        state.bookmarkId.push(action.payload);
      }
    },
    populateBookmarkArray: (state, action) => {
      state.bookmarkArray = action.payload;
    }
  }
});

export const { toggleBookmark, populateBookmarkArray } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
