import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Mid from "./midpage/mid.jsx";
import { Generic } from "rbx";
import Steps from "./midpage/steps.jsx";
import Nav from "./toppage/nav.jsx";  
import Toppagebottom from "./toppagebottom/statement.jsx"; 
import Carousel from "./toppage/carousel.jsx"; 
import Edpage from "./educators/edpage.jsx"; 
import Bottom from "./footer/footer.jsx"; 
// import Yellow from "./toppage/yellowbottom.jsx"; 
import Aboutus from "./toppage/aboutus.jsx"; 
import Contactus from "./toppage/contactus.jsx"; 
import Whymeditate from "./toppage/whymeditate.jsx";
import Vidpage from "./midpage/vidpage.jsx";
import Live from "./toppage/live.jsx";
import Moredescription from "./educators/moredescription.jsx";
import App from "./example";



class Index extends React.Component {
  render () {
  return (
  
    <Generic> 
        <Nav/>
        <Carousel/>
        <Live />
        {/* <Yellow/> */}
        <Toppagebottom />
        <Mid />
        <Steps />
        <Vidpage/>
        <Edpage/>
        <Bottom/>
        {/* <Aboutus/> */}
        {/* <Contactus/> */}
        <Whymeditate/>
        {/* <Moredescription/> */}
        {/* <App/> */}
        
    
        
        
        
        
    </Generic>
    
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);