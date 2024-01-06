import React from "react";
import logo from '../logo.svg';
import "./Includes.style.css";
import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (

    <>
      <Navbar className="NavStyle">
        <Container>
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo" />
            <span className="nav1name">Real </span>
            <span className="nav2name"> ESTATE</span>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  )



}
export default Header;