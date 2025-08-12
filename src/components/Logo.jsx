import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div style={{ width }}>
      <img src="/path/to/logo.png" alt="" style={{ width: '100%' }} />
    </div>
  )
}

export default Logo