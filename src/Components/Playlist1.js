import React from 'react';
import NavbarP from './Content/Navbar_P';

function Playlist1() {
  return (
    <div className='Content'>
      <NavbarP/>
      <div className="Content-playlist">
        <div className="playlist-head">
          <div className="title">
            <img src="" alt="" />
            <text>Title</text>
          </div>
          <div className="album"><text>Album</text></div>
          <div className="date"><text>Date added</text></div>
          <div className="time"><text><img src="" alt="" /></text></div>
        </div>
        <div className="playlist-body"></div>
      </div>
    </div>
  )
}

export default Playlist1
