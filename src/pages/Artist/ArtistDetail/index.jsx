import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import MusicApi from "../../../api/MusicApi";
import ArtistSong from "./components/ArtistSong";
import AstistBio from "./components/AstristBio";
import "./style.scss";

function ArtistDetail() {
  const param = useParams();
  const [artist, setArtist] = useState(() => param.artistName);
  const [isLoading, setLoading] = useState(false);
  const [artistInfo, setArtistInfo] = useState([]);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      setLoading(true);
      const artistData = await MusicApi.getDetailArtist(artist);
      setArtistInfo(artistData);
      console.log(artistData);
      setSongList(artistData?.sections[0]?.items);
      setLoading(false);
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

  const follower = nFormatter(artistInfo?.follow, 1);

  return (
    <div className="artist-detail">
      <div className="artistThumnail">
        {isLoading ? (
          <Skeleton className="artistThumnail" />
        ) : (
          <img src={artistInfo?.thumbnailM} alt="" />
        )}

        <div className="info">
          <h1 className="name-artist">
            {artistInfo?.name || <Skeleton width="60%" />}
          </h1>
          <p className="follower">
            {Number(follower) === 0 ? (
              <Skeleton width={100} />
            ) : (
              follower + " người theo dõi"
            )}{" "}
          </p>
        </div>
      </div>
      <Container className="mt-3">
        <ArtistSong songList={songList} isLoading={isLoading} />
        {!isLoading ? (
          <AstistBio
            bio={artistInfo?.biography}
            realname={artistInfo?.realname}
            birthday={artistInfo?.birthday}
            national={artistInfo?.national}
          />
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

export default ArtistDetail;
