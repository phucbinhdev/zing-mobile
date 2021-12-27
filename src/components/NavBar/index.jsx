import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlayControl from "../PlayControler";
import {
  MusicNoteIcon,
  PlayIcon,
  ChartBarIcon,
  RssIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";
import "./style.css";

function Navbar() {
  return (
    <Container className="nav-bar">
      <PlayControl />
      <div className="d-flex">
        <Col className="active">
          <MusicNoteIcon className="navbar-icon" />
          Cá Nhân
        </Col>
        <Col>
          <PlayIcon className="navbar-icon" />
          Khám phá
        </Col>
        <Col>
          <ChartBarIcon className="navbar-icon" />
          #zingchart
        </Col>

        <Col>
          <RssIcon className="navbar-icon" />
          Radio
        </Col>
        <Col>
          <NewspaperIcon className="navbar-icon" />
          Theo dõi
        </Col>
      </div>
    </Container>
  );
}

export default Navbar;
