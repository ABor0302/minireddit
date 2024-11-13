import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../thunks/fetchPost";
import { fetchPostsBySearch } from "../thunks/fetchPostsBySearch";
import { fetchPostDetails } from "../thunks/fetchPostDetails";
const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    searchResults: [],
    postDetails:null,
    isLoading: false,
    error: null,
    after: null,
  },
  reducers: {
    clearSearchResults(state, action) {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, ...action.payload.posts];
      state.after = action.payload.after;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchPostsBySearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPostsBySearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchResults = action.payload;
    });
    builder.addCase(fetchPostsBySearch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchPostDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postDetails = {  
        post: action.payload.post,
        comments: action.payload.comments,
      };
    });
    builder.addCase(fetchPostDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const postReducer = postSlice.reducer;
export const { clearSearchResults } = postSlice.actions;
