import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchPostDetails = createAsyncThunk('posts/fetchPostDetails', async (postId) => {
  const response = await axios.get(`https://www.reddit.com/comments/${postId}.json`);
  const post = response.data[0].data.children[0].data;
  const comments = response.data[1].data.children.map(comment => ({
    id: comment.data.id,
    author: comment.data.author,
    body: comment.data.body,
  }));
  return { post, comments };
});

export {fetchPostDetails}

