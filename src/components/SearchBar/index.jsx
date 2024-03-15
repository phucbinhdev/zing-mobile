import React, { useCallback, useState } from "react";
import "./style.scss";
import { debounce } from "lodash";

function Searchbar({ searchSongFn }) {
  const [keyword, setkeyword] = useState("");

  const debounceSearch = useCallback(
    debounce((keyword) => {
      console.log("keyword", keyword);
      searchSongFn(keyword);
    }, 300),
    []
  );

  return (
    <div className="search-bar d-flex">
      <input
        type="text"
        value={keyword}
        placeholder="Bài hát, playlist, nghệ sĩ,..."
        onChange={(event) => {
          const keyword = event.target.value;
          setkeyword(keyword);
          debounceSearch(keyword);
        }}
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
