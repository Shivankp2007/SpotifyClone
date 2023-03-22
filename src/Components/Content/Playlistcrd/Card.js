import React, { UseState } from "react";
import { Link } from "react-router-dom";


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
          image:"Images/pov ur in love.jpg",
          name:":pov ur in love",
          description:"smtg",
          playlist:"playlist3"
      },
      {
          id:4,
          image:"Images/Bollywood butter.jpg",
          name:"Bollywood Butter",
          description:"smtg",
          playlist:"playlist4"
      },
      {
          id:5,
          image:"Images/Trending Valentines Hits.jpg",
          name:"Trending Valentine's Hits",
          description:"smtg",
          playlist:"playlist5"
      },
      {
          id:6,
          image:"Images/Image.jpg",
          name:"Bollywood Mush",
          description:"smtg",
          playlist:"playlist5"
      },
      {
          id:7,
          image:"Images/bonesm.jpg",
          name:"Bones",
          description:"smtg",
          playlist:"playlist5"
      },
    ];



function Card() {
  return (
    <div className="row-1">
      {MenuData.map((Re) => {
        return (
          <div className="CardCover">
            <Link to={Re.playlist}>
              <div className="card">
                <div className="card-img">
                  <img className="image" src={Re.image} alt="" />
                </div>
                <div className="carddown">
                  <div className="card-name">{Re.name}</div>
                  <div className="des">{Re.description}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Card;
