import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from 'pages/landing';
import FindRecipes from 'pages/find-recipes';
import SavedRecipes from 'pages/saved-recipes';
import TriedRecipes from 'pages/tried-recipes';
import Layout from 'components/layout';

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/find-recipes" element={<FindRecipes />} />
      <Route path="/saved-recipes" element={<SavedRecipes />} />
      <Route path="/tried-recipes" element={<TriedRecipes />} />
    </Routes>
  );
};

const AuthenticatedApp = () => {
  return (
    <Layout>
      <AuthenticatedRoutes />
    </Layout>
  );
};

export default AuthenticatedApp;
