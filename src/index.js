import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Mid from "./midpage/mid.jsx";
import { Generic } from "rbx";
import Steps from "./midpage/steps.jsx";
import Nav from "./toppage/nav.jsx";  
import Carousel from "./toppage/carousel.jsx";
import Live from "./toppage/live.jsx";

class Index extends React.Component {
  render () {
  return (
  
    <Generic> 
        <Nav/>
        <Carousel />
        <Live />
        <Mid />
        <Steps />
    </Generic>
    
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);