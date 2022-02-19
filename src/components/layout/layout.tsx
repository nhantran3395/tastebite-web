import React, { ReactNode } from 'react';
import Container from 'react-bootstrap/container';

import NavBar from 'components/navbar';
import Footer from 'components/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
