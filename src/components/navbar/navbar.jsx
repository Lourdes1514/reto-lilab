import React  from 'react';
import logo from '../../images/paws.svg'

import './navbar.sass';

const Navbar = () => {
  return(

    <div className="navbar xscs10 xsc10"> 

      <img className="xscs2" src={logo} alt=""/>
      <div className="barSearchNavbar xscs8 xsc6">
        <input type="text" className="inputNavbar xscs5" placeholder="Buscar ..."></input>
        <i className="iconNavbar fas fa-search xscs1 "></i>
      </div>

    </div>

  )
}
export default Navbar