import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ForgotPassword/ForgotPassword.css';

const ResetPassword = () => {
  const [form, setForm] = useState({ newPassword: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Password reset to:', form.newPassword);
    navigate('/');
  };

  return (
    <div className="forgot-container">
      <form className="forgot-form" onSubmit={handleSubmit}>
        <h3 className="text-center text-primary mb-4">Reset Password</h3>

        <div className="form-group mb-3">
          <label className="form-label">
            <FaLock className="me-2" /> New Password
          </label>
          <input
            type="password"
            name="newPassword"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <label className="form-label">
            <FaLock className="me-2" /> Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
