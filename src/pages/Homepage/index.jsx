import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MusicApi from "../../api/MusicApi";
import Playlist from "../../components/Playlist";
import SliderSection from "../../components/Slider";

function Homepage() {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchSong = async () => {
      const songList = await MusicApi.getZingChart();
      console.log(songList);
      setSongList(songList.song);
    };

    fetchSong();
  }, []);

  return (
    <Container className="p-0">
      <SliderSection />
      <Playlist songList={songList} />
      {/* <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist /> */}
    </Container>
  );
}

export default Homepage;
