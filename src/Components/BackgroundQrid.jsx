import React from 'react'

function BackgroundQrid() {
  return (
    <div className="background-grid">
        {[...Array(11)].map((_, i) => (
        <div key={i} className="grid-box" />
        ))}
    </div>
  )
}

export default BackgroundQrid