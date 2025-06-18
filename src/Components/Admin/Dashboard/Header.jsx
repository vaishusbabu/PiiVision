import React from 'react';
import { MdMenu, MdSearch, MdNotifications, MdEmail, MdAccountCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../Redux/Slices/AuthSlice';

const Header = ({ mobileNavOpen, setMobileNavOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // Redirect to login page
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Toggle menu">
          <MdMenu size={24} color="#fff" />
        </button>
        <div className="search-box">
          <MdSearch size={20} color="#fff" />
          <input type="search" placeholder="Search for..." />
        </div>
      </div>

      <div className="header-right">
        <span className="header-contact">
          Have questions? <a href="mailto:info@magpiitech.com" style={{ color: '#1abc9c' }}>info@magpiitech.com</a>
        </span>
        <button className="icon-button" aria-label="Show notifications">
          <MdNotifications size={24} color="black" />
          <span className="icon-badge">5</span>
        </button>
        <button className="icon-button" aria-label="Show messages">
          <MdEmail size={24} color="black" />
          <span className="icon-badge">9</span>
        </button>

        {/* Avatar as Logout Button */}
        <button
          onClick={handleLogout}
          aria-label="Logout"
          className="icon-button"
          style={{ background: 'none', border: 'none' }}
        >
          <MdAccountCircle size={32} color="#fff" className="user-avatar" />
        </button>
      </div>
    </header>
  );
};

export default Header;
