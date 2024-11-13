import { useSelector } from "react-redux";
import Post from "../Post/Post";
import Skeleton from "../Skeleton";

function SearchResults() {
  const { searchResults, isLoading, error } = useSelector(
    (state) => state.posts
  );

  const renderedPosts = searchResults.map((post) => (
    <Post key={post.data.id} post={post} />
  ));

  return (
    <div>
      {isLoading ? (
        <Skeleton times={3} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>{renderedPosts}</div>
      )}
    </div>
  );
}

export default SearchResults;
