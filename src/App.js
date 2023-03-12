import React from "react";
import { Route,Routes,Switch } from "react-router-dom";
import SearchPg from "./Components/SearchPg/SearchPg";
import Homepg from "./Homepg";
import SideNav from "./Components/SideNav";
import Playlist1 from "./Components/Playlist1";
function App() {
  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/" Component={Homepg} />
        <Route path="/search" Component={SearchPg} />
        <Route path="/playlist1" Component={Playlist1} />
      </Routes>
    </div>
  );
}

export default App;

