import React from "react";
import "../style.scss";

function SearchResultItem({ result }) {
  //   console.log(result);
  return (
    <div className="result-item" onClick={() => console.log(result.encodeId)}>
      <ion-icon name="search-circle"></ion-icon>

      {result.title}
    </div>
  );
}

export default SearchResultItem;
