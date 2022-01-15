import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ArtistItem({ data }) {
  return (
    <Col xs={6}>
      <Link to={`${data.alias}`} className="artist-item">
        <img className="thumbnail" src={data.thumbnail} alt="" />
        <p className="artist-name">{data.name}</p>
      </Link>
    </Col>
  );
}

export default ArtistItem;
