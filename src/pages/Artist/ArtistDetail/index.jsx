import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MusicApi from "../../../api/MusicApi";
import ArtistSong from "./components/ArtistSong";
import AstistBio from "./components/AstristBio";
import "./style.scss";

function ArtistDetail() {
  const param = useParams();
  const [artist, setArtist] = useState(() => param.artistName);
  const [artistInfo, setArtistInfo] = useState([]);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      const artistData = await MusicApi.getDetailArtist(artist);
      setArtistInfo(artistData);
      console.log(artistData);
      setSongList(artistData?.sections[0]?.items);
    };

    console.log("lay du lieu");
    fetchArtist();
  }, [artist]);

  const nFormatter = (num, digits) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  };

  return (
    <div className="artist-detail">
      <div className="artistThumnail">
        <img src={artistInfo?.thumbnailM} alt="" />
        <div className="info">
          <h1 className="name-artist">{artistInfo?.name}</h1>
          <p className="follower">
            {nFormatter(artistInfo?.follow, 1)} nguời theo dõi
          </p>
        </div>
      </div>
      <Container className="mt-3">
        <ArtistSong songList={songList} />
        <AstistBio
          bio={artistInfo?.biography}
          realname={artistInfo?.realname}
          birthday={artistInfo?.birthday}
          national={artistInfo?.national}
        />
      </Container>
    </div>
  );
}

export default ArtistDetail;
