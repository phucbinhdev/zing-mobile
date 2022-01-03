import React, { useState, useEffect } from "react";
import MusicApi from "../../api/MusicApi";
import TimeSlider from "./components/TimeSlider";
import "./style.scss";

function PlayControl({ firstSongID = "kHxmyZkLsQnDppHymTvmZmtZhlkbZkGdW" }) {
  const [isPlay, setPlay] = useState(false);
  const [songInfo, setSongInfo] = useState();

  useEffect(() => {
    const fetchFirstSong = async () => {
      const songData = await MusicApi.getDetalSong(firstSongID);
      setSongInfo(songData);
      console.log(songInfo);
    };

    fetchFirstSong();
  }, []);

  function handleClickPausePlay() {
    setPlay(!isPlay);
  }

  function hanleSetPlayState(playStatus) {
    setPlay(playStatus);
  }

  return (
    <div className="d-flex play-control justify-content-between">
      <TimeSlider
        playStatus={isPlay}
        hanleSetPlayState={hanleSetPlayState}
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
        <div>
          <ion-icon name="play-skip-forward-sharp"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default PlayControl;
