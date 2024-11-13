import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const { title, author, ups, num_comments, created_utc, preview, thumbnail } =
    post.data;
  const navigate = useNavigate();
  const imageUrl =
    preview?.images?.[0]?.source?.url.replace(/&amp;/g, "&") || thumbnail;

  const hoursAgo = Math.floor((Date.now() / 1000 - created_utc) / 3600);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-6 max-w-md mx-auto border border-gray-200 flex">
      <div className="flex flex-col items-center mr-4 mt-2 text-xs text-gray-600">
        <button className="text-gray-500 hover:text-gray-700 mb-1">
          <FaArrowUp size={18} />
        </button>
        <p className="font-semibold">{ups}</p>
        <button className="text-gray-500 hover:text-gray-700 mt-1">
          <FaArrowDown size={18} />
        </button>
      </div>
      <div className="flex-1">
        <h2
          onClick={() => navigate(`/details/${post.data.id}`)}
          className="text-lg font-bold text-gray-800 mb-4 text-center cursor-pointer"
        >
          {title}
        </h2>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full mb-4"
            onError={(e) => (e.target.style.display = "none")}
          />
        )}

        <div className="flex items-center justify-between text-xs text-gray-600 border-t pt-4 mt-4">
          <div className="text-left">
            <span className="text-gray-800">Posted by </span>
            <span className="text-blue-600 font-semibold">{author}</span>
          </div>

          <span className="text-center">{hoursAgo} hours ago</span>

          <div className="flex items-center space-x-1 text-right">
            <FaComment />
            <span>{num_comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
