import { Link } from "react-router-dom";
import user from "../../images/user.jpg";
import "./header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { fatchMovie, fatchMovieShows } from "../../features/Movies/movieSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [terms, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (terms === "") return alert("Please Search Movie Category");
    dispatch(fatchMovie(terms));
    dispatch(fatchMovieShows(terms));
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        {console.log("h")}
        <div className="logo">Movie App</div>
      </Link>
      <div className="search_bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={terms}
            placeholder="Search"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      <div className="user_image">
        <img src={user} alt={"user"} />
      </div>
    </div>
  );
};

export default Header;
