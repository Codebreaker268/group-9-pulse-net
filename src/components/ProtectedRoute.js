// components/ProtectedRoute.js
import React from 'react';
import { Route} from 'react-router-dom';
import useAuth from '../utils/UseAuth';

const ProtectedRoute = ({ element, ...rest }) => {
  useAuth();
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
