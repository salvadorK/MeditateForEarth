import React, { Component } from 'react'
import {Navbar, Divider} from 'rbx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Aboutus from "./aboutus.jsx"; 
import Contactus from "./contactus.jsx"; 
import Whymeditate from "./whymeditate.jsx"; 
// import Live from "./live.jsx"; 
import "./nav.scss"


export default class Nav extends Component {
    render() {
        return (
          
            <div>
        


<Navbar color="black">               
  <Navbar.Brand className="logo" >
      <Navbar.Item  href="#">

    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu >
    <Navbar.Segment align="end">
      <Navbar.Item><Link to="/">Home</Link></Navbar.Item>  
      <Navbar.Item><Link to="/about">About us</Link></Navbar.Item>
      <Navbar.Item><Link to="contact">Contact</Link></Navbar.Item>
      <Divider vertical color={"warning"}></Divider>
      <Navbar.Item dropdown>
        <Navbar.Link>English</Navbar.Link>
        <Navbar.Dropdown>
          <Navbar.Item>Français(bientôt)</Navbar.Item>
        </Navbar.Dropdown>
      </Navbar.Item>
    </Navbar.Segment>
  </Navbar.Menu>
</Navbar>



        
</div>

        )
    }
}
