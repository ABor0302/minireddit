import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchPostsBySearch } from "../store";
import { clearSearchResults } from "../features/posts/postSlice";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.jpg";

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
    setSearchTerm("");
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-950 text-white mb-5">
      <Link
        onClick={() => dispatch(clearSearchResults())}
        to="/"
        className="text-xl font-bold"
      >
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-full mb-4 sm:mb-0"
        />
      </Link>

      <span className="text-2xl font-bold text-blue-500 sm:ml-20 mb-4 sm:mb-0">
        <span className="text-blue-500">mini</span>
        <span className="text-white">Reddit</span>
      </span>

      <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row sm:items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="p-2 rounded-l-md bg-gray-500 mb-4 sm:mb-0 sm:mr-2"
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
