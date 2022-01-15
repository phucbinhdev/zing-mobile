import React from "react";
import { Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MVItemSkeleton() {
  return (
    <Col xs={6}>
      <Skeleton className="thumbnail" borderRadius={5} height={96} />
      <div className="info d-flex">
        <div style={{ marginRight: "7px" }}>
          <Skeleton width={30} height={30} borderRadius={50} />
        </div>
        <div className="title" style={{ marginTop: "2px" }}>
          <p className="mv-title">
            <Skeleton />
          </p>
          <p className="artist-name">
            <Skeleton width={"70%"} />
          </p>
        </div>
      </div>
    </Col>
  );
}

export default MVItemSkeleton;
