import React from "react";
import "./style.scss";

function MusicItem({ data }) {
  return (
    <div className="zingchart-item">
      <div className="number">{data?.position}</div>
      <ion-icon name="remove-outline"></ion-icon>
      <div className="songInfo">
        <div className="thumbnail">
          <img src={data?.thumbnail} alt="" />
        </div>
        <div className="song-title">
          <p className="song-name">{data?.name}</p>
          <p className="song-artist">{data?.performer}</p>
        </div>
      </div>
    </div>
  );
}

export default MusicItem;
