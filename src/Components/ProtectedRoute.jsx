import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, role }) => {
  const { accessToken, user } = useSelector((state) => state.auth);

  if (!accessToken || !user) {
    return <Navigate to="/" replace />;
  }

  const userRole = user?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  if (role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
