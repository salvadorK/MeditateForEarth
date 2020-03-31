import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Mid from "./midpage/mid.jsx";
import { Container } from "rbx";
import Steps from "./midpage/steps.jsx";

class Index extends React.Component {
  render () {
  return (
    <Container> 
        <Mid />
        <Steps />
    </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);