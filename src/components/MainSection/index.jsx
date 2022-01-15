import React from "react";
import { Route, Routes } from "react-router-dom";
import Artist from "../../pages/Artist/index.jsx";
import ArtistDetail from "../../pages/Artist/ArtistDetail";
import Homepage from "../../pages/Homepage";
import MVPage from "../../pages/MV";
import Profile from "../../pages/Profile";
import Zingchart from "../../pages/Zingchart";

function MainSection() {
  return (
    <div style={{ paddingBottom: "110px" }}>
      {" "}
      {/* main */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/zingchart" element={<Zingchart />} />
        <Route path="/MV" element={<MVPage />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/artist/:artistName" element={<ArtistDetail />} />
      </Routes>
    </div>
  );
}

export default MainSection;
