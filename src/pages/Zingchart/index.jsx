import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import MusicItem from "../../components/MusicItem";
import "./style.scss";

function Zingchart() {
  const [ZingChartList, setZingChartList] = useState([]);
  const [zingChartLimit, setZingChartLimit] = useState(20);
  const bxhListRedux = useSelector((state) => state.songList);

  useEffect(() => {
    if (bxhListRedux) setZingChartList(bxhListRedux);
  }, [bxhListRedux]);

  const handleMore = () => {
    const maxLimit = 100;
    if (zingChartLimit <= maxLimit) setZingChartLimit((prev) => prev + 20);
    else setZingChartLimit(maxLimit);
  };

  return (
    <Container className="zingchart-page">
      <div className="title d-flex">
        <h1>#Zingchart</h1>
        <ion-icon name="play"></ion-icon>
      </div>
      <div className="zingchart-list mt-4">
        {ZingChartList?.slice(0, zingChartLimit).map((songData, index) => {
          return <MusicItem data={songData} key={songData.id} />;
        })}
        {zingChartLimit !== 100 ? (
          <span className="text-center loadmore" onClick={handleMore}>
            Xem thêm
          </span>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

export default Zingchart;
