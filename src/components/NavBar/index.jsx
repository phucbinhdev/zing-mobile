import React from "react";
import { Col, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import PlayControl from "../PlayControler";
import "./style.css";

function Navbar() {
  return (
    <Container className="nav-bar">
      <PlayControl />
      <div className="d-flex nav-bar-link">
        <NavLink to="/profile">
          <Col>
            <ion-icon name="musical-notes-outline"></ion-icon>
            Cá Nhân
          </Col>
        </NavLink>
        <NavLink to="/">
          <Col>
            <ion-icon name="disc-outline"></ion-icon>
            Khám phá
          </Col>
        </NavLink>
        <NavLink to="/zingchart">
          {" "}
          <Col>
            <ion-icon name="stats-chart-outline"></ion-icon>
            #zingchart
          </Col>
        </NavLink>
        <NavLink to="/radio">
          <Col>
            <ion-icon name="radio-outline"></ion-icon>
            Radio
          </Col>
        </NavLink>
        <NavLink to="/newfeed">
          {" "}
          <Col>
            <ion-icon name="newspaper-outline"></ion-icon>
            Theo dõi
          </Col>
        </NavLink>
      </div>
    </Container>
  );
}

export default Navbar;
