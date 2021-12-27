import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import Newfeed from "../../pages/Newfeed";
import Profile from "../../pages/Profile";
import Radio from "../../pages/Radio";
import Zingchart from "../../pages/Zingchart";

function MainSection() {
  return (
    <div>
      {" "}
      {/* main */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/zingchart" element={<Zingchart />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/newfeed" element={<Newfeed />} />
        {/* <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/zingchart">
          <Zingchart />
        </Route>
        <Route path="/radio">
          <Radio />
        </Route>
        <Route path="/newfeed">
          <Newfeed />
        </Route> */}
      </Routes>
    </div>
  );
}

export default MainSection;
