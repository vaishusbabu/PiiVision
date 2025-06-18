import React from 'react';
import CircularProgress from '../CircularProgress'

const MetricCard = ({ label, value, count }) => {
  return (
    <div className="card">
      <CircularProgress percentage={value} />
      <div className="card-content">
        <div className="card-label">{label}</div>
        <div className="card-count">{count}</div>
      </div>
    </div>
  );
};

export default MetricCard;
