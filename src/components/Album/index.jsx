import React from "react";
import { Row } from "react-bootstrap";
import AlbumItem from "./components/AlbumItem";
import "./style.scss";

function Album(props) {
  //   const thumnails = items.slice(0,5)

  console.log(props);

  return (
    <div className="album-list">
      {/* <div className="album-header">
        <div className="album-avatar">
          <img
            src="https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/8/e/f/4/8ef45dd9a76426895bc8117a10136f4b.jpg"
            alt=""
          />
        </div>
        <div className="title-section">
          <p className="mb-1">jksjhfd</p>
          <p className="mb-0">50 bài hảt</p>
        </div>
      </div>
      <div className="album-body">
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </div> */}
    </div>
  );
}

export default Album;
