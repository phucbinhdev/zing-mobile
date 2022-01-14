import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MusicApi from "../../api/MusicApi";
import MvItem from "../../components/MVItem";
import "./style.scss";

function MVPage() {
  const [mvList, setMvList] = useState([]);

  //Lấy dữ liệu trang mv
  useEffect(() => {
    const fetchMV = async () => {
      const mvListData = await MusicApi.getMvList();
      setMvList(mvListData.items);
      const MvJsonData = JSON.stringify(mvListData?.items);
      localStorage.setItem("MvList", MvJsonData);
      console.log(mvListData);
    };

    if (localStorage.getItem("MvList")) {
      console.log("use mv localstorage");
      const MvData = JSON.parse(localStorage.getItem("MvList"));
      setMvList(MvData);
    } else {
      fetchMV();
    }
  }, []);
  return (
    <Container className="mv-page">
      <h2>MV nổi bật</h2>
      <Row className="mv-list">
        {mvList?.map((mv) => (
          <MvItem data={mv} />
        ))}
      </Row>
    </Container>
  );
}

export default MVPage;
