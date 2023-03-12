import React from 'react';
import Back from '../Middle/Images/Back.png'
import Front from '../Middle/Images/Front.png';
import Profile from '../Middle/Images/Profile.png'
import logo from '../Middle/Images/logo.jpg';
import play from '../Middle/Images/play.png'
import { ThreeDRotationRounded } from '@mui/icons-material';
import like from '../Middle/Images/like.png'
import Threedotp from '../Middle/Images/Threedotp.svg'


function Navbar_P() {
  return (
    <div className="Contentp">
        <div className="Content-Up-p">
        <div className="Content-top">
            <div className="top-left">
            <button className="bck-frt-btn"><img src={Back} alt="" /></button>
            <button className="bck-frt-btn"><img src={Front} alt="" /></button>
            </div>
            <div className="top-right">
                <button className="Pre-btn">Premium Plans</button>
                <button className="Pro-btn">
                    <div className="pro">
                    <img src={Profile} alt="" className="pr"/>
                    </div>
                    Shivank
                    <img src="" alt="" />
                </button>
            </div>
        </div>
        <div className="Content-bottom">
            <plaintext>Playlist</plaintext>
            <plaintextname>Hot Hits India</plaintextname>
            <plaintextdown>The hottest tracks in India. Cover:Sam Smith.</plaintextdown>
            <plaintextinfo>
                <img className='logo' src={logo} alt="" />
                <name>Spotify</name>
                <ul>
                    <li>93,864 likes</li>
                    <li className='li'>51 songs,about 2hr 30min</li>
                </ul>
            </plaintextinfo>
        </div>
    </div>
    <div className="Content-down">
    <div className="Content-actions">
        <span className="play-btn">
            <img src={play} alt="" />
        </span>
        
        <img src={like} alt="" />
        <img className='threedotp' src={Threedotp} alt="" />
    </div>
    </div>
    </div>
  )
}

export default Navbar_P
