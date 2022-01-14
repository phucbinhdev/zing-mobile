import React from "react";
import { Col } from "react-bootstrap";

function ArtistItem({ data }) {
  const viewArtist = (alias) => {
    console.log(alias);
  };
  return (
    <Col xs={6}>
      <div className="artist-item" onClick={() => viewArtist(data.alias)}>
        <img className="thumbnail" src={data.thumbnail} alt="" />
        <p className="artist-name">{data.name}</p>
      </div>
    </Col>
  );
}

export default ArtistItem;
