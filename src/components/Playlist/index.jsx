import React from "react";
import { Container } from "react-bootstrap";
import PlaylistItem from "./components/Playlist-Item";
import "./style.css";

function Playlist() {
  return (
    <Container className="playlist mt-3">
      <div className="title mb-2 d-flex align-items-center">
        <h3 className="mb-0">Gần đây</h3>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
      <div className="album-list">
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </div>
    </Container>
  );
}

export default Playlist;
