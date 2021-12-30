import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MusicApi from "../../api/MusicApi";
import MusicItem from "../../components/MusicItem";
import "./style.scss";

function Zingchart() {
  const [ZingChartList, setZingChartList] = useState([]);

  useEffect(() => {
    const fetchSong = async () => {
      const zingChart = await MusicApi.getZingChart();
      setZingChartList(zingChart.song);
    };

    fetchSong();
  }, []);
  console.log("zingchart", ZingChartList);

  return (
    <Container className="zingchart-page">
      <div className="title d-flex">
        <h1>#Zingchart</h1>
        <ion-icon name="play"></ion-icon>
      </div>
      <div className="zingchart-list mt-4">
        {ZingChartList?.slice(0, 10).map((songData, index) => {
          return <MusicItem data={songData} key={songData.id} />;
        })}
        {/* <div className="zingchart-item">
          <div className="number">1</div>
          <ion-icon name="remove-outline"></ion-icon>
          <div className="songInfo">
            <div className="thumbnail">
              <img
                src="https://vikdang.github.io/Code_web_music_player/assets/img/tabCharts/chartSongRanks/song1.jpg"
                alt=""
              />
            </div>
            <div className="song-title">
              <p className="song-name">Ngày xuân long phụng sum vầy</p>
              <p className="song-artist">Lê Bảo Bình</p>
            </div>
          </div>
        </div>
        <div className="zingchart-item">
          <div className="number">2</div>
          <ion-icon name="remove-outline"></ion-icon>
          <div className="songInfo">
            <div className="thumbnail">
              <img
                src="https://vikdang.github.io/Code_web_music_player/assets/img/tabCharts/chartSongRanks/song1.jpg"
                alt=""
              />
            </div>
            <div className="song-title">
              <p className="song-name">Ngày xuân long phụng sum vầy</p>
              <p className="song-artist">Lê Bảo Bình</p>
            </div>
          </div>
        </div>
        <div className="zingchart-item">
          <div className="number">3</div>
          <ion-icon name="remove-outline"></ion-icon>
          <div className="songInfo">
            <div className="thumbnail">
              <img
                src="https://vikdang.github.io/Code_web_music_player/assets/img/tabCharts/chartSongRanks/song1.jpg"
                alt=""
              />
            </div>
            <div className="song-title">
              <p className="song-name">Ngày xuân long phụng sum vầy</p>
              <p className="song-artist">Lê Bảo Bình</p>
            </div>
          </div>
        </div>
        <div className="zingchart-item">
          <div className="number">4</div>
          <ion-icon name="remove-outline"></ion-icon>
          <div className="songInfo">
            <div className="thumbnail">
              <img
                src="https://vikdang.github.io/Code_web_music_player/assets/img/tabCharts/chartSongRanks/song1.jpg"
                alt=""
              />
            </div>
            <div className="song-title">
              <p className="song-name">Ngày xuân long phụng sum vầy</p>
              <p className="song-artist">Lê Bảo Bình</p>
            </div>
          </div>
        </div>
        <div className="zingchart-item">
          <div className="number">5</div>
          <ion-icon name="remove-outline"></ion-icon>
          <div className="songInfo">
            <div className="thumbnail">
              <img
                src="https://vikdang.github.io/Code_web_music_player/assets/img/tabCharts/chartSongRanks/song1.jpg"
                alt=""
              />
            </div>
            <div className="song-title">
              <p className="song-name">Ngày xuân long phụng sum vầy</p>
              <p className="song-artist">Lê Bảo Bình</p>
            </div>
          </div>
        </div> */}

        <span className="text-center loadmore">Xem thêm</span>
      </div>
    </Container>
  );
}

export default Zingchart;
