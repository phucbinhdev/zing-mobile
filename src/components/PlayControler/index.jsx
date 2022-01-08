import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicApi from "../../api/MusicApi";
import { setSongRedux } from "./bxhSlice";
import TimeSlider from "./components/TimeSlider";
import "./style.scss";

function PlayControl({ firstSongID = "kHxmyZkLsQnDppHymTvmZmtZhlkbZkGdW" }) {
  const [isPlay, setPlay] = useState(false);
  const [songInfo, setSongInfo] = useState();

  //Use Redux
  const dispatch = useDispatch();
  const songListRedux = useSelector((state) => state.songList);

  const [currentSongid, setCurrentSongid] = useState(
    () => localStorage.getItem("currentID") ?? firstSongID
  );

  //Lấy danh sách bài hát lưu vào redux
  useEffect(() => {
    const fetchSong = async () => {
      const songList = await MusicApi.getZingChart();

      //set redux state
      const setSongAction = setSongRedux(songList);
      dispatch(setSongAction);
    };

    fetchSong();
  }, []);

  //Lấy bài hát theo id để phát
  useEffect(() => {
    const fetchDetailSong = async () => {
      const songData = await MusicApi.getDetailSong(currentSongid);
      setSongInfo(songData);
    };

    fetchDetailSong();
  }, [currentSongid]);

  function handleClickPausePlay() {
    setPlay(!isPlay);
  }

  function handleClickSkipSong() {
    let currentIndex = songListRedux.findIndex(
      (song) => song.name === songInfo?.name
    );

    //Id đổi thì tự động lấy bài mới
    setCurrentSongid(songListRedux[++currentIndex]?.code);
    localStorage.setItem("currentID", songListRedux[currentIndex]?.code);
  }

  function hanleSetPlayState(playStatus) {
    setPlay(playStatus);
  }

  return (
    <div className="d-flex play-control justify-content-between">
      <TimeSlider
        playStatus={isPlay}
        hanleSetPlayState={hanleSetPlayState}
        nextSong={handleClickSkipSong}
        srcSong={songInfo?.source}
      />
      <div className="d-flex">
        <div className="cd">
          <img height={45} width={45} src={songInfo?.thumbnail} alt="" />
        </div>
        <div className="title d-flex justify-content-center flex-column align-items-start">
          <p className="mb-0">{songInfo?.name}</p>
          <p className="sub mb-0">{songInfo?.artists_names}</p>
        </div>
      </div>
      <div className="control-song d-flex align-items-center">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div onClick={handleClickPausePlay}>
          {isPlay ? (
            <ion-icon name="pause-sharp"></ion-icon>
          ) : (
            <ion-icon name="play-sharp"></ion-icon>
          )}
        </div>
        <div onClick={handleClickSkipSong}>
          <ion-icon name="play-skip-forward-sharp"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default PlayControl;
