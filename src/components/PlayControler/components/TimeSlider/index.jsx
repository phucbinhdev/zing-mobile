import React, { useRef, useState, useEffect } from "react";
import Slider from "react-input-slider";

function TimeSlider({ playStatus, hanleSetPlayState }) {
  const audioRef = useRef();
  //   const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  //   const [isPlay, setPlay] = useState(playStatus);

  //handle Pause/Play button
  useEffect(() => {
    // setPlay(playStatus);
    if (!playStatus) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    console.log("chilrenSTT", playStatus);
  }, [playStatus]);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (playStatus) audioRef.current.play();
  };

  //   const handlePausePlayClick = () => {
  //     if (playStatus) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play();
  //     }
  //     setPlay(!playStatus);
  //   };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!playStatus) {
      hanleSetPlayState(true);
      audioRef.current.play();
    }
  };

  return (
    <>
      <Slider
        className="timeslider"
        xmax={duration}
        x={currentTime}
        onChange={handleTimeSliderChange}
        axis="x"
        //   x={state.x}
        //   onChange={({ x }) => setState((state) => ({ ...state, x }))}
      />
      <audio
        ref={audioRef}
        src="https://mp3-s1-zmp3.zadn.vn/e7e000cc268dcfd3969c/2172183184086830160?authen=exp=1641359791~acl=/e7e000cc268dcfd3969c/*~hmac=a9c269e4f0cefce8fb4d49f340ca74cd&fs=MTY0MTE4Njk5MTU5Nnx3ZWJWNnwxMDEyMzQ3OTYyfDE3MS4yMjQdUngMTmUsIC5LjIyNA"
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => hanleSetPlayState(false)}
      />
    </>
  );
}

export default TimeSlider;
