import React from "react";
import { Col, Row } from "react-bootstrap";
import "../style.scss";

function SearchResultItem({ result }) {
  //   console.log(result);
  return (
    <div className="result-item" onClick={() => console.log(result.id)}>
      <ion-icon name="search-circle"></ion-icon>

      {result.name}
    </div>
  );
}

export default SearchResultItem;
