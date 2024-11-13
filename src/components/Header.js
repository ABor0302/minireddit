import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchPostsBySearch } from "../store";
import { clearSearchResults } from "../features/posts/postSlice";
import { useDispatch } from "react-redux";
function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostsBySearch(searchTerm));
    navigate(`/search/${searchTerm}`);
    setSearchTerm('')
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link onClick={() => dispatch(clearSearchResults())} to="/" className="text-xl font-bold">
        Logo
      </Link>

      <form onSubmit={handleSearchSubmit} className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="p-2 rounded-l-md bg-gray-500"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-r-md"
          disabled={!searchTerm}
        >
          Ara
        </button>
      </form>
    </header>
  );
}

export default Header;

