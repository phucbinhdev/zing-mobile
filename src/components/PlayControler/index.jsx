import React from "react";
import "./style.css";

function PlayControl() {
  return (
    <div className="d-flex play-control justify-content-between">
      <div className="d-flex">
        <div className="cd">
          <img src="https://picsum.photos/45" alt="" />
        </div>
        <div className="title d-flex justify-content-center flex-column align-items-start">
          <p className="mb-0">Tên bài hát</p>
          <p className="sub mb-0">Nghệ sĩ</p>
        </div>
      </div>
      <div className="control-song d-flex align-items-center">
        <div>tim</div>
        <div>play</div>
        <div>next</div>
      </div>
    </div>
  );
}

export default PlayControl;
