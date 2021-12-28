import React from "react";

function PlaylistItem(props) {
  let { name, thumbnail } = props.data;
  const thumnailW300 = thumbnail.replace("w94", "w200");

  return (
    <div className="playlist-item">
      <div className="thumnail-box">
        <img height="150px" width="150px" src={thumnailW300} alt="" />
        <ion-icon name="play-circle"></ion-icon>
      </div>
      <p className="title mb-0">{name}</p>
    </div>
  );
}

export default PlaylistItem;
