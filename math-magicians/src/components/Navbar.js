import React from 'react';
// import Calculator from './Calculator';
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand mx-4" to="/"><h1>Math Magicians</h1></Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mx-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"><h5>Home</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/calculator"><h5>Calculator</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/quote"><h5>Quote</h5></Link>
            </li>
          </ul>
        </div>
    </nav>
    
    
    </>
  );
}

export default Navbar;
