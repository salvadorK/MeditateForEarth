import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Mid from "./midpage/mid.jsx";
import { Content } from "rbx";
import Steps from "./midpage/steps.jsx";
import Nav from "./toppage/nav.jsx";  

class Index extends React.Component {
  render () {
  return (
  
    <Content> 
        <Nav/>
        <Mid />
        <Steps />
    </Content>
    
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);