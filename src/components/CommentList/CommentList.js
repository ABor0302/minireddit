import React from "react";
import { FaUserCircle } from "react-icons/fa";

function CommentsList({ comments }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
          {comment.author_avatar ? (
            <img
              src={comment.author_avatar}
              alt={comment.author}
              className="w-10 h-10 rounded-full mr-3"
            />
          ) : (
            <FaUserCircle size={40} className="text-gray-400 mr-3" />
          )}

          <div>
            <p className="text-gray-700 font-semibold">{comment.author}</p>
            <p className="text-gray-600">{comment.text}</p>
          </div>
        </div>
      ))}

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
        Show More Comments
      </button>
    </div>
  );
}

export default CommentsList;

