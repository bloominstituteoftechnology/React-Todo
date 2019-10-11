import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Mommy Madness!!</h1>
      < Link style={linkStyle} to="/panic">PANIC BUTTON!!</Link>
    </header>
  )
}

const headerStyle = {
  color: '#fff',
  textAlign: 'center',
  marginLeft: '100px',
  alignItems: 'center',
  padding: '10px',
  fontSize: '25px',
  borderRadius:'70px',
  maxWidth:'80%'

}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;