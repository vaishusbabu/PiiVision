import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
import MetricCard from '../Dashboard/MetricCard';
import Breadcrumb from '../Dashboard/Breadcrumb';
import UsersByCountry from '../Dashboard/UsersByCountry';
import RevenueChart from '../Dashboard/RevenueChart';
import FeedCard from '../Dashboard/FeedCard';
import './AdminDashboard.css';
import InspectionsChart from '../Dashboard/InspectionsChart';
import InspectionsToday from '../Dashboard/InspectionsToday';

const navItems = [
  { label: 'Overview', icon: 'home', active: true },
  { label: 'Inspections', icon: 'dashboard', subItems: ['Buttons', 'Cards', 'Forms'] },
  // { label: 'Scan Analysis', icon: 'show_chart', subItems: ['Bar Charts', 'Pie Charts'] },
  // { label: 'Treatment Planning', icon: 'tune', subItems: ['Modals', 'Dropdowns'] },
  // { label: 'Case Notes & Reports', icon: 'edit', subItems: ['Inputs', 'Checkboxes'] },
  // { label: 'Appointment Management', icon: 'table_chart' },
  // { label: 'Clinic Locations', icon: 'map' },
  // { label: 'Documents & Uploads', icon: 'insert_drive_file' },
  { label: 'Settings', icon: 'menu', subItems: ['Level 2', 'Level 3'] },
];

const progressData = [
  { label: 'Inspections Submitted', value: 86, count: '57,820' },
  { label: 'Inspections Completed', value: 76, count: '89,745' },
  { label: 'Inspections Pending', value: 58, count: '178,391' },
  { label: 'Failed Inspections', value: 58, count: '32,592' },
];

const acquisitionChannels = [
 { label: 'Lowest Inspection Time', percent: '+95%', color: '#36b9cc' },
  { label: 'Average Inspection Time', percent: '+27%', color: '#2c3e50' },
  { label: 'Highest Inspection Time', percent: '+72%', color: '#1b4965' }
  // { label: 'Direct Booking ', percent: '+38%', color: '#539165' },
  // { label: 'Online Ads', percent: '+17%', color: '#aee6ad' },
];


const InspectionToday = [
 { label: 'Success', percent: '+95%', color: '#2c3e50' },
  { label: 'Pending', percent: '+27%', color: '#1b4965' },
  { label: 'Failure', percent: '+72%', color: '#36b9cc' }
  // { label: 'Direct Booking ', percent: '+38%', color: '#539165' },
  // { label: 'Online Ads', percent: '+17%', color: '#aee6ad' },
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

function AdminDashboard() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <div className="dashboard">
        <Sidebar navItems={navItems} />

        <main className="main-content" role="main" aria-label="Admin Dashboard Content">
          <Header mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
          <Breadcrumb />

          <h1 className="dashboard-title" tabIndex={-1}>OVERVIEW</h1>

          <section className="cards">
            {progressData.map((item, index) => (
              <MetricCard key={index} {...item} />
            ))}
          </section>

          <section className="dashboard-grid">
            <InspectionsChart acquisitionChannels={acquisitionChannels} />
            <InspectionsToday InspectionToday={InspectionToday}/>
            {/* <UsersByCountry /> */}
            {/* <RevenueChart />
            <FeedCard feedItems={feedItems} /> */}
          </section>
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;
