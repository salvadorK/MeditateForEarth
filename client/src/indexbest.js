import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {BrowserRouter as Router} from "react-router-dom";
import Scrolltotop from "./scrolltotop.jsx";
import App from "./app.jsx";



class Index extends React.Component {
  render () {
    return (
  
      <Router>
      
        <Scrolltotop/>
        <App/>
      
      </Router>
             
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);