import React, { Component } from 'react'
import {Navbar, Divider} from 'rbx'

import "./nav.scss"

export default class Nav extends Component {
    render() {
        return (
          
            
                <Navbar color="black">               
  <Navbar.Brand className="logo" >
      <Navbar.Item  href="#">

    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu >
    <Navbar.Segment align="end">
      <Navbar.Item>Home</Navbar.Item>  
      <Navbar.Item>About us</Navbar.Item>
      <Navbar.Item>Contact</Navbar.Item>
      <Divider vertical color={"warning"}></Divider>
      <Navbar.Item dropdown>
        <Navbar.Link>English</Navbar.Link>
        <Navbar.Dropdown>
          <Navbar.Item>Français</Navbar.Item>
        </Navbar.Dropdown>
      </Navbar.Item>
    </Navbar.Segment>
  </Navbar.Menu>
</Navbar>


        )
    }
}