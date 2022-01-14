import React from "react";
import { Container, Row } from "react-bootstrap";
import ArtistItem from "../../components/ArtistItem";
import artistList from "./artist-json.json";
import "./style.scss";

function Artist() {
  return (
    <Container className="artist-page">
      <h2 className="text-center mb-3">Nghệ sĩ nổi bất</h2>
      <Row className="artists ">
        {artistList.map((artist) => (
          <ArtistItem data={artist} key={artist.id} />
        ))}
      </Row>
    </Container>
  );
}

export default Artist;
