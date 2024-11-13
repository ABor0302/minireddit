import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SearchResults from "./components/SearchResult/SearchResults";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
        <Route path="/details/:postId" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


