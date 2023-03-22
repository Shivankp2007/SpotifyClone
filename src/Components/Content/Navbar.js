import React from 'react';
import Back from '../Middle/Images/Back.png'
import Front from '../Middle/Images/Front.png';
import Profile from '../Middle/Images/Profile.png'
import { useNavigate } from 'react-router-dom';




function Navbar() {
  let nav = useNavigate();
  return (
    <div className="Content-Up">
        <div className="Content-top">
            <div className="top-left">
            <button className="bck-frt-btn" onClick={() => nav(-1)} ><img src={Back} alt="" /></button>
            <button className="bck-frt-btn" onClick={() => nav(1)} ><img src={Front} alt="" /></button>
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
    </div>
  )
}

export default Navbar
