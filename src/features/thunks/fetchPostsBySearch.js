import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 const fetchPostsBySearch = createAsyncThunk(
  "posts/fetchPostsBySearch",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/all/search.json?q=${searchTerm}&limit=10`
      );
      return response.data.data.children;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export {fetchPostsBySearch}
