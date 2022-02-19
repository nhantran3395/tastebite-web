import React from 'react';
import { isEmpty } from 'lodash';

import UnauthenticatedApp from './unauthenticated-app';
import AuthenticatedApp from './authenticated-app';

import 'styles/App.scss';

function App() {
  const user = {};
  return isEmpty(user) ? <UnauthenticatedApp /> : <AuthenticatedApp />;
}

export default App;
