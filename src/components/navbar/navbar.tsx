import React from 'react';
import { Navbar, Container, NavDropdown, Nav, Form } from 'react-bootstrap';

import Link from 'components/link';
import Button from 'components/button';
import Modal from 'components/modal';
import useModal from 'components/modal/modal.hook';
import { ReactComponent as Brand } from 'assets/images/brands/brand4.svg';

import './navbar.scss';

const AuthForm = () => (
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

const NavigationBar = () => {
  const {
    isOpen: isLoginModalOpen,
    closeModal: closeLoginModal,
    openModal: openLoginModal
  } = useModal();

  const {
    isOpen: isRegisterModalOpen,
    closeModal: closeRegisterModal,
    openModal: openRegisterModal
  } = useModal();

  return (
    <>
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

            <Nav>
              <Button className="login" variant="outlined" onClick={openLoginModal}>
                Login
              </Button>
              <Button className="register" onClick={openRegisterModal}>
                Join for free
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={isLoginModalOpen} onHide={closeLoginModal} title={'Login'} body={<AuthForm />} />
      <Modal
        show={isRegisterModalOpen}
        onHide={closeRegisterModal}
        title={'Register'}
        body={<AuthForm />}
      />
    </>
  );
};

export default NavigationBar;
