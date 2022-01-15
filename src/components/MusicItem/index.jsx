import React from "react";
import { useDispatch } from "react-redux";
import { setPlayingSong } from "../PlayControler/playSongSlice";
import "./style.scss";

function MusicItem({ data }) {
  const dispatch = useDispatch();
  const handlePlayMusic = (idSong) => {
    console.log(idSong);
    const action = setPlayingSong(idSong);
    dispatch(action);
  };

  return (
    <div className="zingchart-item" onClick={() => handlePlayMusic(data.code)}>
      {data?.position ? (
        <>
          <div className="number">{data?.position}</div>{" "}
          <ion-icon name="remove-outline"></ion-icon>
        </>
      ) : (
        ""
      )}

      <div className="songInfo">
        <div className="thumbnail">
          <img src={data?.thumbnail} alt="" />
        </div>
        <div className="song-title">
          <p className="song-name">{data?.name || data?.title}</p>
          <p className="song-artist">{data?.performer || data?.artistsNames}</p>
        </div>
      </div>
    </div>
  );
}

export default MusicItem;
