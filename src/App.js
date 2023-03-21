import React from "react";
import { Route,Routes } from "react-router-dom";
import SearchPg from "./Components/SearchPg/SearchPg";
import Homepg from "./Homepg";
import SideNav from "./Components/SideNav";
import Playlist1 from "./Components/Playlist1";
import Playlist2 from "./Components/Playlist2";
import Playlist3 from "./Components/Playlist3";
import Player from "./Player";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/" Component={Homepg} />
        <Route path="/search" Component={SearchPg} />
        <Route path="/playlist1" Component={Playlist1} />
        <Route path="/playlist2" Component={Playlist2} />
        <Route path="/playlist3" Component={Playlist3} />
      </Routes>
      <Player/>
    </div>
  );
}

export default App;

