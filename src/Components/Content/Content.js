import React from "react";
import Itemrow from "./Itemrow";
import MiddleRow from "../Middle/MiddleRow";
import Navbar from "./Navbar";


function Content() {
  return (
    <div className="Content">
      <Navbar />
        <div className="Content-middle">
            <div className="now"></div>
            <div className="wish">Good Evening</div>
            <MiddleRow/>
            <MiddleRow/>
        </div>
      <Itemrow/>
      <Itemrow/>
      <Itemrow/>
      <Itemrow/>
      <Itemrow/>
    </div>
  );
}

export default Content;
