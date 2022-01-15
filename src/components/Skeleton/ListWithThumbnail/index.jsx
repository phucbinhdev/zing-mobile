import React from "react";
import Skeleton from "react-loading-skeleton";

function ListWithThumbnail() {
  return (
    <div className="zingchart-item" style={{ paddingLeft: "15px" }}>
      <div className="songInfo">
        <div className="thumbnail">
          <Skeleton borderRadius={7} width={50} height={50} />
        </div>
        <div className="song-title">
          <p className="song-name">
            <Skeleton width="80%" />
          </p>
          <p className="song-artist">
            <Skeleton width="100px" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListWithThumbnail;
