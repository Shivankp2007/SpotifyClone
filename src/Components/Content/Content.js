import React from "react";
import MiddleRow from "../Middle/MiddleRow";
import Navbar from "./Navbar";
import Row from './row'


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
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default Content;
