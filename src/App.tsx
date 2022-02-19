import React from 'react';
import Container from 'react-bootstrap/container';

import Layout from 'components/layout';
import Button from 'components/button';

import 'styles/App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Mighty Super Cheesecake</h1>
        <Button>Find Recipes</Button>
      </Layout>
    </div>
  );
}

export default App;
