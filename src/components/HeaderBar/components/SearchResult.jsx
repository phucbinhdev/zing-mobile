import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResult({ result }) {
  if (result) {
    return (
      <div className="w-100">
        {result.map((song) => (
          <SearchResultItem key={song.endcodeId} result={song} />
        ))}
      </div>
    );
  } else {
    return;
  }
}

export default SearchResult;
