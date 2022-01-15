import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MusicApi from "../../api/MusicApi";
import MvItem from "../../components/MVItem";
import MVItemSkeleton from "../../components/MVItem/MVItemSkeleton";

import "./style.scss";

function MVPage() {
  const [mvList, setMvList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //Lấy dữ liệu trang mv
  useEffect(() => {
    const fetchMV = async () => {
      setLoading(true);
      const mvListData = await MusicApi.getMvList();
      setMvList(mvListData.items);
      const MvJsonData = JSON.stringify(mvListData?.items);
      sessionStorage.setItem("MvList", MvJsonData);
      console.log(mvListData);
      setLoading(false);
    };

    if (sessionStorage.getItem("MvList")) {
      console.log("use mv sessionStorage");
      const MvData = JSON.parse(sessionStorage.getItem("MvList"));
      setMvList(MvData);
    } else {
      fetchMV();
    }
  }, []);
  return (
    <Container className="mv-page">
      <h2>MV nổi bật</h2>
      <Row className="mv-list">
        {/* <MVItemSkeleton />
        <MVItemSkeleton /> */}
        {isLoading
          ? Array.apply(null, Array(10)).map((mv) => <MVItemSkeleton />)
          : mvList?.map((mv) => <MvItem key={mv.id} data={mv} />)}
      </Row>
    </Container>
  );
}

export default MVPage;
