import React from 'react';
import { Navbar, Container, NavDropdown, Nav, NavItem } from 'react-bootstrap';

import Link from 'components/link';
import { ReactComponent as Brand } from 'assets/images/brands/brand4.svg';

import './navbar.scss';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navigation-bar">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Brand />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="find-recipes">Find Recipes</Link>
            </Nav.Link>
            <NavDropdown title="My Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="saved-recipes">Saved Recipes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="tried-recipes">Tried Recipes</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
