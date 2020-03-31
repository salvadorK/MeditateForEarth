import React, { Component } from 'react'
import {Navbar} from 'rbx'
import ReactDOM from "react-dom";

import "./nav.scss"

export default class Nav extends Component {
    render() {
        return (
            
                <Navbar>
  <Navbar.Brand>
    <Navbar.Item href="#">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        alt=""
        role="presentation"
        width="112"
        height="28"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Segment align="start">
      <Navbar.Item>Home</Navbar.Item>
      <Navbar.Item>Documentation</Navbar.Item>

      <Navbar.Item dropdown>
        <Navbar.Link>More</Navbar.Link>
        <Navbar.Dropdown>
          <Navbar.Item>About</Navbar.Item>
          <Navbar.Item>Jobs</Navbar.Item>
          <Navbar.Item>Contact</Navbar.Item>
          <Navbar.Divider />
          <Navbar.Item>Report an issue</Navbar.Item>
        </Navbar.Dropdown>
      </Navbar.Item>
    </Navbar.Segment>

    <Navbar.Segment align="end">
      <Navbar.Item>
    bffebefbefbnesnbser
      </Navbar.Item>
    </Navbar.Segment>
  </Navbar.Menu>
</Navbar>


        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Nav />, rootElement);