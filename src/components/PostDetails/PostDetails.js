import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetails } from "../../store";
import Skeleton from "../Skeleton";
import Button from "../Button";
import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";

function PostDetails() {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const { postDetails, isLoading, error } = useSelector((state) => state.posts);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [dispatch, postId]);

  if (isLoading) {
    return <Skeleton times={1} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!postDetails?.post) {
    return <div>Post not found</div>;
  }

  const { post, comments } = postDetails;
  const { title, author, ups, created_utc, preview, thumbnail } = post;
  const imageUrl =
    preview?.images?.[0]?.source?.url.replace(/&amp;/g, "&") || thumbnail;
  const hoursAgo = Math.floor((Date.now() / 1000 - created_utc) / 3600);

  const commentsToShow = comments.slice(0, page * 10);

  const loadMoreComments = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200 mt-5">
      <div className="flex mb-4">
        <div className="flex flex-col items-center mr-4 text-xs text-gray-600">
          <button className="text-gray-500 hover:text-gray-700 mb-1">
            <FaArrowUp size={18} />
          </button>
          <p className="font-semibold">{ups}</p>
          <button className="text-gray-500 hover:text-gray-700 mt-1">
            <FaArrowDown size={18} />
          </button>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg w-full mb-4"
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div>
              <span className="text-gray-800">Posted by </span>
              <span className="text-blue-600 font-semibold">{author}</span>
            </div>
            <span>{hoursAgo} hours ago</span>
            <div className="flex items-center space-x-1">
              <FaComment />
              <span>{comments.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Comments:</h2>
        <div className="space-y-4">
          {commentsToShow.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-100 p-3 rounded-lg border border-gray-300"
            >
              <p className="text-gray-700 mb-1">{comment.body}</p>
              <div className="flex items-center text-xs text-gray-500">
                {comment.author_avatar && (
                  <img
                    src={comment.author_avatar}
                    alt={comment.author}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                )}
                <i>{comment.author}</i>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {comments.length > page * 10 && (
            <Button
              onClick={loadMoreComments}
              loading={isLoading}
              primary
              className="rounded-lg"
            >
              Show More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
