import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setPlayingSong } from "../PlayControler/playSongSlice";
import "./style.scss";

function MusicItem({ data }) {
  const dispatch = useDispatch();
  const handlePlayMusic = (idSong) => {
    if (idSong) {
      const action = setPlayingSong(idSong);
      dispatch(action);
    } else {
      Swal.fire({
        html: "Do hạn chế liên quan đến api.</br> Không thể phát nhạc ở trang này",
        title: "Đang phát triển",
        icon: "warning",
        confirmButtonText: "Đóng",
      });
    }
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
