import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.jpg"
import './Header.css'

const Header = () => {
  return (
    <div className="header-container1" >
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="img bor" />
          <nav>
            <NavLink to="/"><h1>UstaTop</h1></NavLink>
          </nav>
        </div>
     <nav className='header-nav'>
    <NavLink to="/">Home</NavLink>
      <NavLink to='/Marketplace'>Marketplace</NavLink>
      <NavLink to='/Dashboard'>Dashboard</NavLink>
      <NavLink to='/Chat'>Chat</NavLink>
      <NavLink to='/Settings'>Settings</NavLink>
     </nav>
     <div className="header-button">
      <button className='header-btn1'>Sign in</button>
      <button className='header-btn2'>Sign up</button>
     </div>
      </div>

    </div>
  )
}

export default Header