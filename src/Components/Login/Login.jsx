
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Slices/AuthSlice';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { jwtDecode } from 'jwt-decode';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.auth);
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await dispatch(login(form));

  if (result.meta.requestStatus === 'fulfilled') {

    const user = result.payload && jwtDecode(result.payload.accessToken);

    const role =
      user?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

   
    if (role?.toLowerCase() === 'admin') {
      navigate('/admin-dashboardM');
    } else if (role?.toLowerCase() === 'user') {
      navigate('/user-dashboard');
    } 
    else {
      console.warn('Unknown role:', role);
    }
  }
};

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3 className="text-center text-primary mb-4">Welcome Back</h3>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <div className="form-group mb-3">
          <label className="form-label">
            <FaEnvelope className="me-2" /> Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-2">
      <label className="form-label">
        <FaLock className="me-2" /> Password
      </label>
      <div className="position-relative">
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          className="form-control pe-5"
          placeholder="Enter password"
          onChange={handleChange}
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="login-password-toggle-icon"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>


        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to="/forgot-password" className="text-decoration-none small text-primary">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-center small">
          Don’t have an account?{' '}
          <Link to="/register" className="text-decoration-none text-primary">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
