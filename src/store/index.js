import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../features/posts/postSlice.js";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export * from "../features/thunks/fetchPost.js";
export * from '../features/thunks/fetchPostsBySearch.js'
export * from "../features/thunks/fetchPostDetails.js";
