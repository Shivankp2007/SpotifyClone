import React, { useRef, useState } from 'react';
import hitsindia from './Images/HitsIndia.jpg';
import hitshindi from './Images/HitsHindi.jpg';
import {Link} from 'react-router-dom';


const pimage = [hitsindia,hitshindi]
const pname = ["Hot Hits India","Hot Hits Hindi"]
const pinfo = ["asdasdas","ghjghjgjhindi"]

export default function Card_Player(){
  const Imagecg = useRef()
  const namecg = useRef()
  const infocg = useRef()

  const [index, setIndex] = useState(0);

  const [currentname] = useState(pname[index]);
  const [currentinfo] = useState(pinfo[index]);
  const [currentimage] = useState(pimage[index]);

  return (
        <div className='item'>
          <Link to="/playlist1">
          <div className="card">
            <div className="card-img">
              <img className='image' ref={pimage}  src={currentimage} alt="" />
            </div>
            <div className="carddown">
              <div className="card-name">{currentname}</div>
            </div>
        </div>
        </Link>
      </div>
    )
}


