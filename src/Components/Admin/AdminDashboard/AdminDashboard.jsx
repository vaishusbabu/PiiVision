import React, { useState } from 'react';

const navItems = [
  { label: 'Admin Dashboard', icon: 'home', active: true },
  { label: 'Components', icon: 'dashboard', subItems: ['Buttons', 'Cards', 'Forms'] },
  { label: 'Charts', icon: 'show_chart', subItems: ['Bar Charts', 'Pie Charts'] },
  { label: 'UI Features', icon: 'tune', subItems: ['Modals', 'Dropdowns'] },
  { label: 'Form Elements', icon: 'edit', subItems: ['Inputs', 'Checkboxes'] },
  { label: 'Tables', icon: 'table_chart' },
  { label: 'Maps', icon: 'map' },
  { label: 'Pages', icon: 'insert_drive_file' },
  { label: 'Menu Level 1', icon: 'menu', subItems: ['Level 2', 'Level 3'] },
];

const progressData = [
  { label: 'Total Count', value: 86, count: '57,820' },
  { label: 'Processed', value: 76, count: ' 89,745' },
  { label: 'Unprocessed', value: 58, count: '178,391' },
  { label: 'Finalised', value: 58, count: '32,592' },
];

const acquisitionChannels = [
  { label: 'Other', percent: '+87%', color: '#36b9cc' },
  { label: 'Search engines', percent: '+22%', color: '#2c3e50' },
  { label: 'Referral Traffic', percent: '+70%', color: '#1b4965' },
  { label: 'Direct Traffic', percent: '+38%', color: '#539165' },
  { label: 'Ad Campaigns', percent: '+17%', color: '#aee6ad' },
];

const feedItems = [
  {
    name: 'Kostya Danovsky',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/290104f9-198d-4ea8-97ee-2eeb22b8b974.png',
    text: "Guys, check this out: A police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and",
  },
  {
    name: 'Andrey Hrabouski',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/68e316d8-4996-4fec-bb76-c9ad9bfedc70.png',
    text: 'Added new video "Vader and Me"',
  },
];

function CircularProgress({ percentage }) {
  // Circular progress using SVG
  const radius = 30;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} aria-label={`${percentage}% completion`}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#36b9cc"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.35s' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="12" fill="#555">
        {percentage}%
      </text>
    </svg>
  );
}

function AdminDashboard() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <style>{`
        /* Reset & basics */
        * {
          box-sizing: border-box;
        }
        body,html,#root {
          margin:0; padding:0; height:100%;
          font-family: 'Poppins', sans-serif;
          background: #f5f6fa;
          color: #333;
        }
        a {
          text-decoration: none;
          color: inherit;
        }

        /* Layout grid */
        .dashboard {
          display: grid;
          grid-template-columns: 250px 1fr;
          min-height: 100vh;
          background: #f5f6fa;
        }
        @media (max-width: 767px) {
          .dashboard {
            grid-template-columns: 1fr;
          }
        }

        /* Sidebar */
        .sidebar {
          background-color: #2c3e50;
          color: #ecf0f1;
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem;
          position: relative;
          z-index: 11;
        }
        .sidebar-logo {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 2rem;
          color: #1abc9c;
          user-select: none;
        }
        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }
        .nav-item {
          display: flex;
          align-items: center;
          padding: 0.7rem 1rem;
          margin-bottom: 0.2rem;
          cursor: pointer;
          border-radius: 6px;
          transition: background-color 0.3s;
          user-select: none;
        }
        .nav-item:hover, .nav-item.active {
          background-color: #16a085;
        }
        .nav-icon {
          font-size: 1.2rem;
          margin-right: 1rem;
          display:flex;
          align-items:center;
          justify-content:center;
          width: 24px;
          height: 24px;
        }
        .nav-label {
          flex-grow: 1;
          font-weight: 500;
        }

        /* Submenu arrow */
        .submenu-arrow {
          font-size: 1rem;
          transition: transform 0.3s;
          user-select: none;
        }
        .submenu-open .submenu-arrow {
          transform: rotate(90deg);
        }

        /* Submenu */
        .submenu {
          list-style: none;
          margin: 0.3rem 0 1rem 2.2rem;
          padding-left: 0;
          display: none;
          user-select: none;
        }
        .submenu.open {
          display: block;
        }
        .submenu li {
          padding: 0.4rem 0;
          color: #bdc3c7;
          font-size: 0.9rem;
          cursor: pointer;
          user-select: none;
        }
        .submenu li:hover {
          color: #1abc9c;
        }

        /* Header */
        .header {
          background-color: #34495e;
          color: #ecf0f1;
          padding: 0.8rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 10;
          user-select: none;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .menu-toggle {
          font-size: 1.5rem;
          cursor: pointer;
          display: none;
          background: none;
          border: none;
          color: #ecf0f1;
        }
        @media (max-width: 767px) {
          .menu-toggle {
            display: block;
          }
        }
        .search-box {
          background: #2c3e50;
          border-radius: 20px;
          padding: 0.3rem 1rem;
          display: flex;
          align-items: center;
          color: #bdc3c7;
          font-size: 0.9rem;
          gap: 0.5rem;
          width: 250px;
          max-width: 100vw;
        }
        .search-box input {
          border: none;
          outline: none;
          background: transparent;
          color: #ecf0f1;
          width: 100%;
          font-size: 0.9rem;
        }
        .header-contact {
          font-size: 0.85rem;
          color: #bdc3c7;
          user-select: text;
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          position: relative;
        }
        .icon-button {
          position: relative;
          cursor: pointer;
          color: #ecf0f1;
          font-size: 1.3rem;
          user-select: none;
        }
        .icon-badge {
          position: absolute;
          top: -4px;
          right: -6px;
          background-color: #e74c3c;
          color: white;
          font-size: 0.7rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          user-select: none;
        }
        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          cursor: pointer;
          border: 2px solid #16a085;
        }

        /* Main content */
        .main-content {
          padding: 1.5rem 2rem;
          overflow-y: auto;
        }

        /* Breadcrumb */
        .breadcrumb {
          font-size: 0.9rem;
          color: #95a5a6;
          margin-bottom: 1rem;
        }
        .breadcrumb a {
          color: #16a085;
          font-weight: 600;
        }

        /* Dashboard title */
        .dashboard-title {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #7f8c8d;
          user-select: text;
        }

        /* Cards wrapper */
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .card {
          background: #fff;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          user-select: none;
        }
        .card svg {
          flex-shrink: 0;
        }
        .card-content {
          flex-grow: 1;
        }
        .card-label {
          font-size: 0.85rem;
          color: #999;
          margin-bottom: 0.3rem;
        }
        .card-count {
          font-size: 1.25rem;
          font-weight: 700;
          color: #555;
        }

        /* Two column grid for main dashboard charts and feed */
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 767px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Acquisition channels card */
        .acquisition-card, .users-country-card, .revenue-card, .feed-card {
          background: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
          user-select: none;
        }
        .card-title {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 1rem;
          color: #555;
        }

        /* Acquisition channels chart */
        .acquisition-wrapper {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .donut-chart {
          width: 180px;
          height: 180px;
          flex-shrink: 0;
        }

        .acquisition-legend {
          flex-grow: 1;
          font-size: 0.9rem;
          color: #444;
        }
        .legend-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.6rem;
        }
        .legend-color {
          width: 15px;
          height: 15px;
          border-radius: 4px;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }
        .legend-label {
          flex-grow: 1;
        }
        .legend-percent {
          font-weight: 600;
          min-width: 44px;
          text-align: right;
          color: #333;
        }

        /* Users by Country Map */
        .map-container img {
          width: 100%;
          border-radius: 8px;
        }

        /* Revenue chart */
        .revenue-chart img {
          width: 100%;
          border-radius: 8px;
        }

        /* Feed Items */
        .feed-list {
          list-style: none;
          margin: 0;
          padding: 0;
          max-height: 280px;
          overflow-y: auto;
        }
        .feed-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
          user-select: none;
        }
        .feed-avatar {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          object-fit: cover;
          flex-shrink: 0;
        }
        .feed-content {
          font-size: 0.9rem;
          color: #444;
        }
        .feed-name {
          font-weight: 600;
          margin-bottom: 0.2rem;
          color: #333;
        }

        /* Scrollbar for feed list */
        .feed-list::-webkit-scrollbar {
          width: 6px;
        }
        .feed-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .feed-list::-webkit-scrollbar-thumb {
          background: #16a085;
          border-radius: 4px;
        }

        /* Icon font import */
      `}</style>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      {/* Dashboard grid wrapper */}
      <div className="dashboard">
        {/* Sidebar */}
        <nav className="sidebar" aria-label="Primary Navigation">
          <div className="sidebar-logo" tabIndex={0}>Pii<span style={{color: '#16a085'}}>Vision</span></div>
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

        {/* Main content + Header */}
        <main className="main-content" role="main" aria-label="Admin Dashboard Content">
          <header className="header">
            <div className="header-left">
              <button
                className="menu-toggle"
                aria-label="Toggle menu"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="material-icons">menu</span>
              </button>
              <div className="search-box" role="search">
                <span className="material-icons" aria-hidden="true">search</span>
                <input type="search" placeholder="Search for..." aria-label="Search dashboard content" />
              </div>
            </div>
            <div className="header-right">
              <span className="header-contact" aria-live="polite">
                Have questions? <a href="mailto:info@magpiitech.com" style={{color:'#1abc9c'}}>info@magpiitech.com</a>
              </span>
              <button className="icon-button" aria-label="Show notifications">
                <span className="material-icons">notifications</span>
                <span className="icon-badge">5</span>
              </button>
              <button className="icon-button" aria-label="Show messages">
                <span className="material-icons">email</span>
                <span className="icon-badge">9</span>
              </button>
              <img
                src=""
                alt="User avatar"
                className="user-avatar"
              />
            </div>
          </header>

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#home">Home</a> / <span aria-current="page">Dashboard</span>
          </nav>

          <h1 className="dashboard-title" tabIndex={-1}>ADMIN DASHBOARD</h1>

          {/* Cards */}
          <section className="cards" aria-label="Key metrics">
            {progressData.map(({ label, value, count }, index) => (
              <div className="card" key={index}>
                <CircularProgress percentage={value} />
                <div className="card-content">
                  <div className="card-label">{label}</div>
                  <div className="card-count">{count}</div>
                </div>
              </div>
            ))}
          </section>

          {/* Two column main dashboard area */}
          <section className="dashboard-grid">
            {/* Acquisition Channels Card */}
            <section className="acquisition-card" aria-label="Acquisition channels">
              <h2 className="card-title">ACQUISITION CHANNELS</h2>
              <div className="acquisition-wrapper">
                <svg
                  className="donut-chart"
                  viewBox="0 0 42 42"
                  width="180"
                  height="180"
                  aria-hidden="true"
                >
                  <circle
                    className="donut-hole"
                    cx="21"
                    cy="21"
                    r="15.91549431"
                    fill="#fff"
                  />
                  <circle
                    className="donut-ring"
                    cx="21"
                    cy="21"
                    r="15.91549431"
                    fill="transparent"
                    stroke="#d2d3d4"
                    strokeWidth="3"
                  />
                  {acquisitionChannels.map((channel, i, arr) => {
                    const total = 100;
                    // Use predefined percentages for demo, approximate values for pie slices
                    const percentValues = [22, 14, 20, 18, 26];
                    const circumference = 2 * Math.PI * 15.91549431;
                    const offset =
                      percentValues
                        .slice(0, i)
                        .reduce((a, b) => a + b, 0) / 100 * circumference;
                    return (
                      <circle
                        key={channel.label}
                        cx="21"
                        cy="21"
                        r="15.91549431"
                        fill="transparent"
                        stroke={channel.color}
                        strokeWidth="3"
                        strokeDasharray={`${(percentValues[i] / 100) *
                          circumference} ${circumference}`}
                        strokeDashoffset={circumference - offset}
                        aria-label={`${channel.label || 'default'} segment`}
                      />
                    );
                  })}
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy="0.3em"
                    fontSize="5"
                    fill="#333"
                  >
                    1,900,128
                  </text>
                  <text
                    x="50%"
                    y="60%"
                    textAnchor="middle"
                    dy="1.3em"
                    fontSize="2"
                    fill="#666"
                  >
                    Views Total
                  </text>
                </svg>
                <div className="acquisition-legend" role="list">
                  {acquisitionChannels.map((channel, i) => (
                    <div className="legend-item" key={i} role="listitem">
                      <div
                        className="legend-color"
                        style={{ backgroundColor: channel.color }}
                      ></div>
                      <div className="legend-label">{channel.label}</div>
                      <div className="legend-percent">{channel.percent}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Users by Country Card */}
            <section className="users-country-card" aria-label="Users by country">
              <h2 className="card-title">USERS BY COUNTRY</h2>
              <div className="map-container">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f8cd0209-c3d4-4f04-a2d3-623ff8da0cab.png"
                  alt="Map showing users by country with regions highlighted in colors"
                />
              </div>
            </section>

            {/* Revenue Chart Card */}
            <section className="revenue-card" aria-label="Revenue chart">
              <h2 className="card-title">REVENUE</h2>
              <div className="revenue-chart">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/064694da-fed8-4495-8f8d-8632495e1fa9.png"
                  alt="Revenue chart showing revenue spread over time"
                />
              </div>
            </section>

            {/* Feed Card */}
            <section className="feed-card" aria-label="Latest feed updates">
              <h2 className="card-title">FEED</h2>
              <ul className="feed-list">
                {feedItems.map(({ name, avatar, text }, i) => (
                  <li className="feed-item" key={i}>
                    <img
                      src={avatar}
                      alt={`User avatar of ${name}`}
                      className="feed-avatar"
                      loading="lazy"
                    />
                    <div className="feed-content">
                      <div className="feed-name">{name}</div>
                      <div>{text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;

