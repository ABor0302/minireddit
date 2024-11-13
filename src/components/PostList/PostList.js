import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store";
import Post from "../Post/Post";
import Button from "../Button";
import Skeleton from "../Skeleton";

function PostList() {
  const dispatch = useDispatch();
  const { posts, isLoading, error, after, searchResults } = useSelector(
    (state) => state.posts
  );
  const postsToRender = searchResults.length > 0 ? searchResults : posts;

  useEffect(() => {
    if (!isLoading && posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, isLoading, posts.length]);

  const loadMorePosts = () => {
    if (!isLoading) {
      dispatch(fetchPosts(after));
    }
  };

  const renderedPosts = postsToRender.map((post) => (
    <Post key={post.data.id} post={post} />
  ));

  return (
    <div>
      {isLoading && posts.length === 0 ? (
        <Skeleton times={5} />
      ) : (
        <>
          {renderedPosts}
          {error && <p>Hata: {error}</p>}
        </>
      )}

      <div className="flex justify-center mt-4 mb-10">
        <Button
          primary
          className="rounded-lg"
          loading={isLoading}
          onClick={loadMorePosts}
        >
          Show More
        </Button>
      </div>
    </div>
  );
}

export default PostList;
