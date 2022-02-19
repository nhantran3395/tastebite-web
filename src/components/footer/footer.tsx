import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

import Link from 'components/link';
import { ReactComponent as Brand } from 'assets/images/brands/brand4.svg';

import './footer.scss';

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col lg={6} className="footer-column">
          <Stack gap={3}>
            <Link to="/">
              <Brand />
            </Link>
            <span>Built by Nhan Thanh Tran</span>
          </Stack>
        </Col>
        <Col lg={3} className="footer-column">
          <Stack gap={2}>
            <h6>Tastebite</h6>
            <Link to="/">Home</Link>
            <Link to="/find-recipes">Find Recipes</Link>
            <Link to="/saved-recipes">Save Recipes</Link>
            <Link to="/tried-recipes">Tried Recipes</Link>
          </Stack>
        </Col>
        <Col lg={3} className="footer-column">
          <Stack gap={2}>
            <h6>Nhan Thanh Tran</h6>
            <Link isExternalResource to="https://www.linkedin.com/in/thanh-nhan-tran/">
              LinkedIn
            </Link>
            <Link isExternalResource to="https://github.com/tranthanhnhan3395">
              GitHub
            </Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
