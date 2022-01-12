import React from "react";
import "./loading.scss";

function SearchLoading() {
  return (
    <div className="w-100">
      <div className="result-item search-section">
        <ion-icon name="reload-outline"></ion-icon>
        Đang tìm kiếm
      </div>
    </div>
  );
}

export default SearchLoading;
