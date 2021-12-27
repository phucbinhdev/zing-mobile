import React from "react";

function PlaylistItem() {
  return (
    <div className="playlist-item">
      <img
        src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/e/f/4/8ef45dd9a76426895bc8117a10136f4b.jpg"
        alt=""
      />
      <ion-icon name="play-circle"></ion-icon>
      <p className="title">Cà phê cùng Indie Việt</p>
    </div>
  );
}

export default PlaylistItem;
