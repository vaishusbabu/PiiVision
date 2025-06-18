import React from 'react'

function AcquisitionChart({acquisitionChannels}) {
  return (
    <div> <section className="acquisition-card" aria-label="Acquisition channels">
              <h2 className="card-title">Patient Source Insights</h2>
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
            </section></div>
  )
}

export default AcquisitionChart