import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import "./style.css";

function Searchbar() {
  return (
    <div className="search-bar d-flex">
      <input
        type="text"
        name=""
        id=""
        placeholder="Bài hát, playlish, nghệ sĩ,..."
      />
      <SearchIcon className="text-secondary font" />
    </div>
  );
}

export default Searchbar;
