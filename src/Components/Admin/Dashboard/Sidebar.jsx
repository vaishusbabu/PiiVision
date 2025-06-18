import React from 'react';

const Sidebar = ({ navItems }) => {
  return (
    <nav className="sidebar" aria-label="Primary Navigation">
      <div className="sidebar-logo" tabIndex={0}>Pii<span style={{ color: '#16a085' }}>Vision</span></div>
      <ul className="nav-list">
        {navItems.map((item, i) => (
          <li
            className={`nav-item ${item.active ? 'active' : ''}`}
            key={i}
            tabIndex={0}
            aria-current={item.active ? 'page' : undefined}
          >
            <span className="material-icons nav-icon" aria-hidden="true">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.subItems && (
              <span className="material-icons submenu-arrow" aria-hidden="true">chevron_right</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
