import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function AstistBio({ bio, realname, birthday, national }) {
  return (
    <section className="story">
      <h3>Thông tin</h3>
      <p style={{ fontSize: "14px" }}>
        <div
          dangerouslySetInnerHTML={{
            __html: bio,
          }}
        ></div>
      </p>
      <Row className="mb-2">
        <Col xs={4}>
          <b>Tên thật</b>
        </Col>
        <Col xs={8}>{realname}</Col>
      </Row>
      <Row className="mb-2">
        <Col xs={4}>
          <b>Ngày sinh</b>
        </Col>
        <Col xs={8}>{birthday}</Col>
      </Row>
      <Row>
        <Col xs={4}>
          <b>Quốc gia</b>
        </Col>
        <Col xs={8}>{national}</Col>
      </Row>
    </section>
  );
}

export default AstistBio;
