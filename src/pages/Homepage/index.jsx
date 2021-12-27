import React from "react";
import { Container } from "react-bootstrap";
import Playlist from "../../components/Playlist";
import SliderSection from "../../components/Slider";

function Homepage() {
  return (
    <Container className="p-0">
      <SliderSection />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
    </Container>
  );
}

export default Homepage;
