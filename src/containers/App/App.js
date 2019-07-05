import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import './App.scss';
import Routes from '../../routes';
import {Navbar, Container, Nav} from 'react-bootstrap'

function App() {
  return (
      <Fragment>
          <Container>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="#home">Tok Health</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                          <Link className="nav-link" to="/">Home</Link>
                          <Link className="nav-link" to="/about-us">About</Link>
                      </Nav>
                      <Nav>
                          <Nav.Link href="#deets">Login</Nav.Link>
                          <Nav.Link eventKey={2} href="#memes">Sign Up</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
              <Routes/>
          </Container>
      </Fragment>
  );
}
export default App;
