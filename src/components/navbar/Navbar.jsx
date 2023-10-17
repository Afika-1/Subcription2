import React from 'react'
import './nav.css'

function Navbar() {
  return (
    <header >
        <div className='logo'>
            Recipe<span>Hub</span>
        </div>
        <nav>
            <ul>
              
                <a href='#page1'><li>Home</li></a>
                <a href='#page2'><li>About Us</li></a>
                <a href='#page2'><li>Snacks</li></a>
                <a href='#page3'><li>Vegan</li></a>
                <a href='#page4'></a><li>Meals</li>
            </ul>
        </nav>
        <div className='nav-btn'>
          {/* <button className='login'>Login</button> */}
          <a href='#footer'><button className='signIn'>Don't miss out!</button></a>
        </div>
    </header>
  )
}

export default Navbar