import React from "react";

import SearchResultItem from "./SearchResultItem";

function SearchResult({ result, isOpen }) {
  console.log("isopen", isOpen);

  if (!isOpen) {
    result = [];
  }

  if (result) {
    return (
      <div className="w-100">
        {result.map((song) => (
          <SearchResultItem key={song.id} result={song} />
        ))}
      </div>
    );
  } else {
    return;
  }
}

export default SearchResult;
