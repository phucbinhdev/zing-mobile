import React, { useEffect, useState } from "react";
import MusicApi from "../../api/MusicApi";
import AlbumItem from "./components/AlbumItem";
import "./style.scss";

function Album({ keyAlbum = "kncnTzddNZCGtHtDHLnyLCFHhJSNCk " }) {
  const [Albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchSong = async () => {
      const albums = await MusicApi.getAlbum(keyAlbum);
      setAlbums(albums);
    };

    fetchSong();
  }, []);

  return (
    <div
      className="album-list p-2 mb-3"
      style={{
        backgroundImage: `url(${Albums?.info?.thumbnail})`,
      }}
    >
      <div className="album-header">
        <div className="album-avatar">
          <img src={Albums?.info?.thumbnail} alt="" />
          <ion-icon name="shuffle-outline"></ion-icon>
        </div>
        <div className="title-section">
          <p className="mb-0">{Albums?.info?.title}</p>
          <p className="mb-0 sub">{Albums?.items?.length} bài hát</p>
        </div>
      </div>
      <div className="album-body">
        {Albums?.items?.slice(0, 5).map((v, i) => {
          return <AlbumItem thumbnail={v.thumbnail} key={v.id} />;
        })}
      </div>
    </div>
  );
}

export default Album;
