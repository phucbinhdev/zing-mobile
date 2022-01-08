import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import MusicItem from "../../components/MusicItem";
import "./style.scss";

function Zingchart() {
  const [ZingChartList, setZingChartList] = useState([]);
  const bxhListRedux = useSelector((state) => state.songList);

  useEffect(() => {
    if (bxhListRedux) setZingChartList(bxhListRedux);
  }, [bxhListRedux]);

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

        <span className="text-center loadmore">Xem thêm</span>
      </div>
    </Container>
  );
}

export default Zingchart;
