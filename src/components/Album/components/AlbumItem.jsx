import React from "react";

function AlbumItem({ thumbnail }) {
  return (
    <div className="album-item">
      <img
        src={
          thumbnail ||
          "https://photo-resize-zmp3.zadn.vn/w256_r1x1_jpeg/cover/4/1/f/2/41f2c246b38c76a8c9840b1d168ad388.jpg"
        }
        alt=""
      />
    </div>
  );
}

export default AlbumItem;
