import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (after = null, { rejectWithValue }) => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axios.get(
          `https://www.reddit.com/r/all/top.json?limit=10${
            after ? `&after=${after}` : ""
          }`
        );
        const data = response.data.data;
        return { posts: data.children, after: data.after };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
export {fetchPosts}
