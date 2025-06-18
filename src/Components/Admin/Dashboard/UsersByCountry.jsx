import React from 'react'

function UsersByCountry() {
  return (
    <div>
        <section className="users-country-card" aria-label="Users by country">
              <h2 className="card-title">USERS BY COUNTRY</h2>
              <div className="map-container">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f8cd0209-c3d4-4f04-a2d3-623ff8da0cab.png"
                  alt="Map showing users by country with regions highlighted in colors"
                />
              </div>
        </section>
    </div>
  )
}

export default UsersByCountry