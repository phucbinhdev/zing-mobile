import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import MusicItem from "../../../../../components/MusicItem";
import ListWithThumbnail from "../../../../../components/Skeleton/ListWithThumbnail";
function ArtistSong({ songList, isLoading }) {
  const [songLimit, setSongLimit] = useState(5);
  const maxLimit = songList.length;
  const SkeletonArr = Array.apply(null, Array(5));

  const handleMore = () => {
    if (songLimit <= maxLimit) setSongLimit((prev) => prev + 5);
    else setSongLimit(maxLimit);
  };

  return (
    <section>
      <h2>{isLoading ? <Skeleton width={100} /> : "Bài hát"}</h2>
      <Row>
        {isLoading
          ? SkeletonArr.map((v, index) => <ListWithThumbnail key={index} />)
          : songList
              ?.slice(0, songLimit)
              .map((song) => <MusicItem data={song} key={song.encodeId} />)}
      </Row>
      {songLimit && songLimit < maxLimit ? (
        <span className="text-center loadmore" onClick={handleMore}>
          XEM THÊM
        </span>
      ) : (
        ""
      )}
    </section>
  );
}

export default ArtistSong;
