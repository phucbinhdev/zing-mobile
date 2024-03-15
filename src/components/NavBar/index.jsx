import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PlayControl from "../PlayControler";
import "./style.css";

function Navbar() {
  return (
    <div className="nav-bar">
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
        {/* <NavLink to="/MV">
          <Col>
            <ion-icon name="videocam-outline"></ion-icon>
            MV
          </Col>
        </NavLink>
        <NavLink to="/artist">
          {" "}
          <Col>
            <ion-icon name="person-outline"></ion-icon>
            Nghệ sĩ
          </Col>
        </NavLink> */}
      </div>
    </div>
  );
}

export default Navbar;
