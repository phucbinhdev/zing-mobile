import React, { useEffect, useState } from "react";
import MusicApi from "../../api/MusicApi";
import "./style.scss";

function Radio() {
  // const [songList, setSongList] = useState([]);
  // const [background, setBackground] = useState([]);

  useEffect(() => {
    const fetchSong = async () => {
      const songList = await MusicApi.testapi();
      console.log(songList);
      // setSongList(songList.song);
    };

    fetchSong();
  }, []);
  return <div className="radio-page">Chúc mừng năm mới</div>;
}

export default Radio;
