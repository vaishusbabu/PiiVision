import React from 'react'

function FeedCard({feedItems}) {
  return (
    <div>
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
    </div>
  )
}

export default FeedCard