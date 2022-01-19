import React from "react";
import { Col } from "react-bootstrap";
import Swal from "sweetalert2";

function MvItem({ data }) {
  const { thumbnail, title, artist, link } = data;
  console.log(data);
  const playMv = () => {
    Swal.fire({
      html: "Do hạn chế liên quan đến api.</br> Không thể phát MV",
      title: "Đang phát triển",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xem trên Zing",
      cancelButtonText: "Đóng",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.open(`https://zingmp3.vn${link}`, "_blank");
      }
    });
  };
  return (
    <Col xs={6} onClick={playMv}>
      <img className="thumbnail" src={thumbnail} alt="" />
      <div className="info d-flex">
        <div className="avatar">
          <img src={artist.thumbnail} alt="" />
        </div>
        <div className="title">
          <p className="mv-title">{title}</p>
          <p className="artist-name">{artist.name}</p>
        </div>
      </div>
    </Col>
  );
}

export default MvItem;
