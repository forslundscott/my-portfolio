import React from 'react'
import SwirlyWrapper from './swirlyWrapper'
const Header = (props) => {
  return (
    <header className="sticky-header">
      <img src={`${process.env.PUBLIC_URL}/apple-touch-icon.png`} alt="Logo" style={{ width: '10vh', height: '10vh' }} />
      
        <h1 className="project-heading">{props.title}</h1>
      
    </header>
  )
}

export default Header
