import React, { useState } from "react";
import { Row } from "react-bootstrap";
import MusicItem from "../../../../../components/MusicItem";

function ArtistSong({ songList }) {
  const [songLimit, setSongLimit] = useState(5);
  const maxLimit = songList.length;

  const handleMore = () => {
    if (songLimit <= maxLimit) setSongLimit((prev) => prev + 5);
    else setSongLimit(maxLimit);
  };

  return (
    <section>
      <h2>Bài hát</h2>
      <Row>
        {songList?.slice(0, songLimit).map((song) => (
          <MusicItem data={song} key={song.encodeId} />
        ))}
      </Row>
      {songLimit < maxLimit ? (
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
