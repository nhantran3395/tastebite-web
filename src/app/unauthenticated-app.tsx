import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from 'pages/landing';
import FindRecipes from 'pages/find-recipes';
import Layout from 'components/layout';

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/find-recipes" element={<FindRecipes />} />
    </Routes>
  );
};

const UnauthenticatedApp = () => {
  return (
    <Layout>
      <UnauthenticatedRoutes />
    </Layout>
  );
};

export default UnauthenticatedApp;
