import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaUserShield } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'User',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const result = await dispatch(register(formData));
      if (result.meta.requestStatus === 'fulfilled') {
        toast.success('Registration successful!');
        navigate('/');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h3 className="text-center text-primary mb-4">Create an Account</h3>

        <div className="form-group mb-3">
          <label className="form-label">
            <FaUser className="me-2" /> Username
          </label>
          <input
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Enter username"
            onChange={handleChange}
        
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        <div className="form-group mb-3">
          <label className="form-label">
            <FaEnvelope className="me-2" /> Email
          </label>
          <input
            name="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter email"
            onChange={handleChange}
          

          
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="form-group mb-3">
          <label className="form-label">
            <FaLock className="me-2" /> Password
          </label>
          <input
            name="password"
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter password"
            onChange={handleChange}
          
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>

        <div className="form-group mb-3">
          <label className="form-label">
            <FaLock className="me-2" /> Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            placeholder="Confirm password"
            onChange={handleChange}
          
          />
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
        </div>

        <div className="form-group mb-4">
          <label className="form-label">
            <FaUserShield className="me-2" /> Role
          </label>
          <select
            name="role"
            className="form-select"
            onChange={handleChange}
            value={formData.role}
        
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Register;
