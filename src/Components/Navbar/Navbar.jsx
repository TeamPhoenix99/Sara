import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  
  const [navValue, setNavValue] = useState('home');

  return (
    <>
      <nav className='nav'>
        <div className="nav-left">
          <p>Holiday<span>Nepal</span></p>
        </div>

        <div className="nav-right">
          <div className="nav-btns">
          <Link to="/" onClick={()=>setNavValue('home')} className={navValue === 'home' ? 'active-nav':''} >
            <p>Home</p>
          </Link>
          <Link to="/place" onClick={()=>setNavValue('place')} className={navValue === 'place' ? 'active-nav':''} >
            <p>Places</p>
          </Link>
          <Link to="/event" onClick={()=>setNavValue('events')} className={navValue === 'events' ? 'active-nav':''}>
            <p>Events</p>
          </Link>
          <Link to="/package" onClick={()=>setNavValue('packages')} className={navValue === 'packages' ? 'active-nav':''} >
            <p>Packages</p>
          </Link>
          <Link to="/activity" onClick={()=>setNavValue('activity')} className={navValue === 'activity' ? 'active-nav':''} >
            <p>Activities</p>
          </Link>
          </div>
          <p className='sign-btn'>Login/SignUp</p>
        </div>
      </nav>
    </>
  )
}
