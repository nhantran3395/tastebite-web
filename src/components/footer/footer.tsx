import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

import { ReactComponent as Brand } from 'assets/images/brands/brand4.svg';

import './footer.scss';

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col lg={6} className="footer-column">
          <Stack gap={3}>
            <Brand />
            <span>Built by Nhan Thanh Tran</span>
          </Stack>
        </Col>
        <Col lg={3} className="footer-column">
          <Stack gap={2}>
            <h6>Tastebite</h6>
            <a href="#">Home</a>
            <a href="#">Find Recipes</a>
            <a href="#">Saved Recipes</a>
            <a href="#">Tried Recipes</a>
          </Stack>
        </Col>
        <Col lg={3} className="footer-column">
          <Stack gap={2}>
            <h6>Nhan Thanh Tran</h6>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
