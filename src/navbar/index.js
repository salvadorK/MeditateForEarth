import React from "react";
import ReactDOM from "react-dom";

import "rbx/index.css";
import { Content } from "rbx";

function App() {
  return (
    <Content>
      Hello world from <a href="https://github.com/dfee/rbx">rbx</a>!
    </Content>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);