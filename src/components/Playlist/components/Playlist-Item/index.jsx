import React from "react";

function PlaylistItem(props) {
  let { name, thumbnail } = props.data;
  const thumnailW300 = thumbnail.replace("w94", "w200");

  return (
    <div className="playlist-item">
      <img src={thumnailW300} alt="" />
      <ion-icon name="play-circle"></ion-icon>
      <p className="title">{name}</p>
    </div>
  );
}

export default PlaylistItem;
