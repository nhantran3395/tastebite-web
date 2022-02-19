import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

import { ReactComponent as Brand } from 'assets/images/brands/brand4.svg';

import './navbar.scss';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navigation-bar">
      <Container>
        <Navbar.Brand href="/">
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/find-recipes">Find Recipes</Nav.Link>
            <NavDropdown title="My Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/saved-recipes">Saved Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/tried-recipes">Tried Recipes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
