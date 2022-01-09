import React from "react";
import { useDispatch } from "react-redux";
import { setPlayingSong } from "../../../PlayControler/playSongSlice";

function PlaylistItem(props) {
  let { name, thumbnail, code } = props.data;
  const thumnailW300 = thumbnail.replace("w94", "w200");

  const dispatch = useDispatch();

  const handlePlayMusic = (idSong) => {
    const action = setPlayingSong(idSong);
    dispatch(action);
  };

  return (
    <div className="playlist-item" onClick={() => handlePlayMusic({ code })}>
      <div className="thumnail-box">
        <img height="150px" width="150px" src={thumnailW300} alt="" />
        <ion-icon name="play-circle"></ion-icon>
      </div>
      <p className="title mb-0">{name}</p>
    </div>
  );
}

export default PlaylistItem;
