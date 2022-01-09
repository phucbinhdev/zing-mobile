import React, { useEffect, useState } from "react";
import "./style.scss";

function Searchbar({ handleOnChange }) {
  const [keyword, setkeyword] = useState("");

  useEffect(() => {
    handleOnChange(keyword);
  }, [keyword]);

  return (
    <div className="search-bar d-flex">
      <input
        type="text"
        value={keyword}
        placeholder="Bài hát, playlish, nghệ sĩ,..."
        onChange={(event) => setkeyword(event.target.value)}
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Searchbar;
