import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Member from "../pages/Member";
import Locate from "../pages/Locate";
import TeamInfo from "../pages/TeamInfo";
import Notice from "../pages/Notice";
import Gallery from "../pages/Gallery";
import Promote from "../pages/Promote";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Locate" element={<Locate />} />
      <Route path="/Member" element={<Member />} />
      <Route path="/TeamInfo" element={<TeamInfo />} />
      <Route path="/Notice" element={<Notice />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/Promote" element={<Promote />} />
    </Routes>
  );
}

export default Router;
