import React, { Component } from "react";
import "./styles.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse />
        <Navbar.Toggle />
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">
              <img src="https://coinswitch.co/public/images/Logo.svg" />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default CustomNavbar;
