import React from "react";
import { Container } from "react-bootstrap";
import Avatar from "../Avatar";
import Searchbar from "../SearchBar";

function HeaderBar() {
  return (
    <Container className="p-1 d-flex">
      <Avatar />
      <Searchbar />
    </Container>
  );
}

export default HeaderBar;
