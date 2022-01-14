import React from "react";
import { Col } from "react-bootstrap";

function MvItem({ data }) {
  const { thumbnail, title, artist } = data;
  return (
    <Col xs={6}>
      <img className="thumbnail" src={thumbnail} alt="" />
      <div className="info d-flex">
        <div className="avatar">
          <img src={artist.thumbnail} alt="" />
        </div>
        <div className="title">
          <p className="mv-title">{title}</p>
          <p className="artist-name">{artist.name}</p>
        </div>
      </div>
    </Col>
  );
}

export default MvItem;
