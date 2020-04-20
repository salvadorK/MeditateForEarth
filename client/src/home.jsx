
import React, {} from 'react'
import "./index.scss";
import Mid from "./midpage/mid.jsx";
import { Generic } from "rbx";
import Steps from "./midpage/steps.jsx";
import Nav from "./toppage/nav.jsx";  
import Toppagebottom from "./toppagebottom/statement.jsx"; 
import Carousel from "./toppage/carousel.jsx"; 
import Bottom from "./footer/footer.jsx"; 
import Live from "./toppage/live.jsx"; 
import Vidpage from "./midpage/vidpage.jsx";


const Home = () => (
    <div>
            
            
  


         <Generic>
             <Nav/>
            <Carousel/>
            <Live />
            <Toppagebottom />
            <Mid />
            <Steps /> 
            <Vidpage/>
            <Bottom/>
         </Generic>


         </div>
)

export default Home
