import React from "react";
import { Container } from "react-bootstrap";
import Avatar from "../Avatar";
import Searchbar from "../SearchBar";
import "./style.scss";

function HeaderBar() {
  return (
    <Container
      className=" d-flex position-fixed topbar"
      style={{
        zIndex: 99,
        backdropFilter: 1,
      }}
    >
      <Avatar />
      <Searchbar />
    </Container>
  );
}

export default HeaderBar;
