import React from 'react';
import NavbarP from './Content/Navbar_P';
import Time from './Middle/Images/Time.png';
import Bones from './Middle/Images/Bones.jpg'

function Playlist1() {
  return (
    <div className='Content'>
      <NavbarP/>
      <div className="Content-playlist">
        <div className="playlist-head">
          <div className="title">
            <img src="" alt="" />
            <text># Title</text>
          </div>
          <div className="album"><text>Album</text></div>
          <div className="date"><text>Date added</text></div>
          <div className="time"><text><img className='time' src={Time} alt="" /></text></div>
        </div>
        <div className="underline"></div>
        <div className="playlist-body">
          <div className="Song">
            <div className="song-1">
            <no>1</no>
            <img className='song-img' src={Bones} alt="" />
            <div className="Song-name">
              <textname>Bones</textname>
              <textnameinfo>Imagine Dragons</textnameinfo>
            </div>
            </div>
            <div className="Song-details">
            <div className="album-name">
              <textalbum>Mercury- Acts 1 & 2</textalbum>
            </div>
            <div className="date">2 days ago</div>
            <div className="timeinfo">3:56</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playlist1
