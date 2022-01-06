import React, { useState, useEffect } from "react";
import MusicApi from "../../api/MusicApi";
import TimeSlider from "./components/TimeSlider";
import "./style.scss";

function PlayControl({ firstSongID = "kHxmyZkLsQnDppHymTvmZmtZhlkbZkGdW" }) {
  const [isPlay, setPlay] = useState(false);
  const [songInfo, setSongInfo] = useState();
  const [songStorage, setSongStorage] = useState(() => {
    const songListStorageJSON = localStorage.getItem("songList");
    return JSON.parse(songListStorageJSON);
  });
  const [currentSongid, setCurrentSongid] = useState(
    () => localStorage.getItem("currentID") ?? firstSongID
  );

  const fetchSong = async () => {
    const songData = await MusicApi.getDetailSong(currentSongid);
    setSongInfo(songData);
    // console.log(songInfo);
  };

  // useEffect(() => {
  //   const fetchSongList = async () => {
  //     const songListData = await MusicApi.getZingChart();
  //     if (songListData) {
  //       setSongList(songListData.song);
  //       setCurrentSongid(songList[0]?.code);
  //     }
  //   };

  //   fetchSongList();
  // }, []);

  //Lấy một bài hát để phát
  useEffect(() => {
    fetchSong();
    // console.log("chạy lần đầu");
  }, []);

  //Lấy bài hát theo id để phát
  useEffect(() => {
    fetchSong();
    // console.log("Chạy khi đổi id");
  }, [currentSongid]);

  function handleClickPausePlay() {
    setPlay(!isPlay);
  }

  function handleClickSkipSong() {
    const songLocalStorage = JSON.parse(localStorage.getItem("songList"));

    // console.log("local", songLocalStorage);
    let currentIndex = songLocalStorage.findIndex(
      (song) => song.name === songInfo?.name
    );
    // currentIndex++;
    // console.log("currentIndex", currentIndex);

    //Id đổi thì tự động lấy bài mới
    setCurrentSongid(songStorage[++currentIndex]?.code);
    localStorage.setItem("currentID", songStorage[currentIndex]?.code);
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
