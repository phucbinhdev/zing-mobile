import React from "react";
import "./style.scss";

function Searchbar() {
  return (
    <div className="search-bar d-flex">
      <input
        type="text"
        name=""
        id=""
        placeholder="Bài hát, playlish, nghệ sĩ,..."
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Searchbar;
