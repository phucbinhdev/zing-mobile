import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResult({ result }) {
  console.log("ressulte", result);
  if (result) {
    return (
      <div className="w-100">
        {result.map((song, index) => (
          <SearchResultItem key={song._id} result={song} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="w-100">
        <div
          className="result-item"
          onClick={() => console.log(result.encodeId)}
        >
          <ion-icon name="search-circle"></ion-icon>
          Không tìm thấy kết quả nào
        </div>
      </div>
    );
  }
}

export default SearchResult;
