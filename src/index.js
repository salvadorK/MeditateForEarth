import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Mid from "./midpage/mid.jsx";
import { Content } from "rbx";
import Steps from "./midpage/steps.jsx";
import Nav from "./toppage/nav.jsx";  
import Toppagebottom from "./toppagebottom/statement.jsx"; 
import Carousel from "./toppage/carousel.jsx"; 

class Index extends React.Component {
  render () {
  return (
  
    <Content> 
        <Nav/>
        <Carousel/>
        <Toppagebottom />
        <Mid />
        <Steps />
    </Content>
    
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);