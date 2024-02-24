import React from 'react'
import './css/nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div className="logo">
            <img src="/images/logo.jpg" alt="logo" />
        </div>

        <div className="list">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Informration</li>
            </ul>
        </div>


        <div className="btn">
            Login
        </div>
      
    </div>
  )
}

export default Nav