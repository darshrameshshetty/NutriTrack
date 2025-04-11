import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <div className='fspart'>
            <img src='/images_used/cutlery.png'></img>
            <h1>NutriTrack</h1>
        </div>
        <div className='spart'>
<<<<<<< HEAD
            <h4>HOME</h4><Link to ="/team"><h4>ABOUT</h4></Link><Link to="/log" className="login-link"> <h4>LOGIN</h4></Link>
=======
            <h4>HOME</h4><h4>ABOUT</h4><Link to="/log" className="login-link"> <h4>LOGIN</h4></Link>
>>>>>>> c6c009a9f7b931cd859092be4efa046e9505e092
             <Link to="/upl"> <button className='hel'>Predict Now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
