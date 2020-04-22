import React, { Component } from 'react'
import {Navbar, Divider} from 'rbx'
import {Link} from "react-router-dom"
import "./nav.scss"


export default class Nav extends Component {
    render() {
        return (
          
      <div>
        <Navbar color="black">               
              <Navbar.Burger />
            <Navbar.Menu >
            <Navbar.Segment align="end">
              
              <Navbar.Item className="homebutton"><Link to="/">Home</Link></Navbar.Item>
              <Navbar.Item dropdown hoverable className="wholink">
                <Navbar.Link arrowless>About</Navbar.Link> 
                  <Navbar.Dropdown>
                    <Navbar.Item as="span"><Link to="/about">About us</Link></Navbar.Item> 
                    <Navbar.Item as="span"><Link to="/educators">Educators</Link></Navbar.Item>
                    <Navbar.Item as="span"><Link to="/contact">Contact</Link></Navbar.Item>
                  </Navbar.Dropdown>
                </Navbar.Item>
      
                  <Divider vertical color={"warning"}></Divider>
       
                <Navbar.Item className="homebutton">English</Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>



        
</div>

        )
    }
}
