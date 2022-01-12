import React, { useState } from "react";
import "./style.scss";

function Searchbar({ searchSongFn }) {
  const [keyword, setkeyword] = useState("");

  //Search khi user nhan enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchSongFn(keyword);
    }
  };

  //Chạy hàm search ở comp cha
  // useEffect(() => {
  //   handleOnChange(keyword);
  // }, [keyword]);

  return (
    <div className="search-bar d-flex">
      <input
        type="text"
        value={keyword}
        placeholder="Bài hát, playlish, nghệ sĩ,..."
        onChange={(event) => setkeyword(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      {keyword ? (
        <ion-icon
          onClick={() => {
            searchSongFn("");
            setkeyword("");
          }}
          name="close-outline"
        ></ion-icon>
      ) : (
        <ion-icon name="search-outline"></ion-icon>
      )}
    </div>
  );
}

export default Searchbar;
