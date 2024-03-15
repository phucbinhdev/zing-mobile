import React from "react";
import Swal from "sweetalert2";
import "../style.scss";

function SearchResultItem({ result }) {
  const handleClick = () => {
    Swal.fire({
      html: "Do hạn chế liên quan đến api.</br> Tính năng hiện chưa thể sử dụng",
      title: "Đang phát triển",
      icon: "warning",
      confirmButtonText: "Đóng",
    });
  };
  //   console.log(result);
  return (
    <div className="result-item" onClick={handleClick}>
      <ion-icon name="search-circle"></ion-icon>

      {result.name_music}
    </div>
  );
}

export default SearchResultItem;
