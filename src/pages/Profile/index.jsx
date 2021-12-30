import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MusicApi from "../../api/MusicApi";
import Album from "../../components/Album";
import "./style.scss";

function Profile() {
  return (
    <Container className="profile">
      <section className="mt-2 mb-3">
        <h2>Thư viện</h2>
        <Row>
          <div className="bcard">
            <div className="icon">
              <ion-icon name="musical-notes"></ion-icon>
            </div>
            Bài hát
          </div>{" "}
          <div className="bcard">
            <div className="icon">
              <ion-icon name="cloud-upload"></ion-icon>
            </div>
            Upload
          </div>{" "}
          <div className="bcard">
            <div className="icon">
              <ion-icon name="phone-portrait"></ion-icon>
            </div>
            Trên thiết bị
          </div>{" "}
          <div className="bcard">
            <div className="icon">
              <ion-icon name="albums"></ion-icon>
            </div>
            Album
          </div>
        </Row>
      </section>

      <section className="mb-3">
        <h2>Mix nhạc</h2>
        <Album keyAlbum="kncnTzddNZCGtHtDHLnyLCFHhJSNCk" />
        <Album keyAlbum="ZmxnyZnadRDxGbQtHtvHkHtZXSGsNuLRL" />
        <Album keyAlbum="kHJmtLbaNFcSFbXtHTbmLHtLXSnsaEFZN" />
      </section>
    </Container>
  );
}

export default Profile;
