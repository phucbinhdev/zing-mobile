import React from "react";
import "./style.css";

function PlayControl() {
  return (
    <div className="d-flex play-control justify-content-between">
      <div className="d-flex">
        <div className="cd">
          <img height={45} width={45} src="https://picsum.photos/45" alt="" />
        </div>
        <div className="title d-flex justify-content-center flex-column align-items-start">
          <p className="mb-0">Tên bài hát</p>
          <p className="sub mb-0">Nghệ sĩ</p>
        </div>
      </div>
      <div className="control-song d-flex align-items-center">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="play-sharp"></ion-icon>
        </div>
        <div>
          <ion-icon name="play-skip-forward-sharp"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default PlayControl;
