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

  const playlist1 = songList.slice(0, 9);
  const playlist2 = songList.slice(10, 19);
  const playlist3 = songList.slice(20, 29);
  const playlist4 = songList.slice(30, 39);
  const playlist5 = songList.slice(40, 49);
  const playlist6 = songList.slice(50, 59);
  const playlist7 = songList.slice(60, 69);
  const playlist8 = songList.slice(70, 79);

  return (
    <Container className="p-0">
      <SliderSection />
      <Playlist songList={playlist1} title="Gần đây" />
      <Playlist songList={playlist2} title="Có thể bạn muốn nghe" />
      <Playlist songList={playlist3} title="Lựa chọn hôm nay" />
      <Playlist songList={playlist4} title="Nhạc mới mỗi ngày" />
      <Playlist songList={playlist5} title="Mới phát hành" />
      <Playlist songList={playlist6} />
      <Playlist songList={playlist7} />
      <Playlist songList={playlist8} />
    </Container>
  );
}

export default Homepage;
