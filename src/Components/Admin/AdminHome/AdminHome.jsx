import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import './AdminHome.css';

const AdminHome = () => {
  return (
    <>
      <AdminNavbar />
      <div className="dashboard-container">
        <h1 className="text-center text-primary mt-5">Welcome to the Admin Dashboard</h1>
        <p className="text-center text-muted">Manage users, system settings, and reports.</p>
      </div>
    </>
  );
};

export default AdminHome;
