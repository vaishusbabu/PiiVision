import React from 'react';

import './UserHome.css';
import UserNavbar from '../UserNavbar/UserNavbar';

const UserHome = () => {
  return (
    <>
      <UserNavbar />
      <div className="dashboard-container">
        <h1 className="text-center text-success mt-5">Welcome to the User Dashboard</h1>
        <p className="text-center text-muted">Explore features, update your profile, and more.</p>
      </div>
    </>
  );
};

export default UserHome;
