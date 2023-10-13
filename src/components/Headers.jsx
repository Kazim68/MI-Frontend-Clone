import React from 'react'
import '../styles/headers.css'

const Headers = ({text}) => {
  return (
      <div className='heading'>
          <div></div>
          <p>{text}</p>
          <div></div>
    </div>
  )
}

export default Headers