import React, { UseState } from 'react';
import {Link} from 'react-router-dom';

const MenuData =[
    {
        id:1,
        image:"Images/Hot Hits India.jpg",
        name:"Hot Hits India",
        description:"The hottest tracks in india. Cover:Sam..",
        playlist:"/playlist1",
    },
    {
        id:2,
        image:"Images/Hot Hits Hindi.jpg",
        name:"Hot Hits Hindi",
        description:"smtg",
        playlist:"/playlist2"
    },
    {
        id:3,
        image:"Images/back",
        name:"Ram",
        description:"smtg",
        playlist:"playlist3"
    },
    {
        id:4,
        image:"Images/back",
        name:"Ram",
        description:"smtg",
        playlist:"playlist4"
    },
    {
        id:5,
        image:"Images/back",
        name:"Ram",
        description:"smtg",
        playlist:"playlist5"
    },
  ];

function Card() {
        return (
          <div className='row-1'>
            {MenuData.map((Re)=> {
                return(
                    <div className="CardCover">
                    <Link to={Re.playlist}>
                    <div className="card">
                      <div className="card-img">
                        <img className='image'  src={Re.image} alt="" />
                      </div>
                      <div className="carddown">
                        <div className="card-name">
                            {Re.name}
                        </div>
                        <div className="des">
                            {Re.description}
                        </div>
                      </div>
                  </div>
                  </Link> 
                  </div> 
                );
            })};
          </div>
        );
};

export default Card;

 