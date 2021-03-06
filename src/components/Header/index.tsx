import React, { FC, useState } from 'react';
import './index.scss'
import { Link } from 'react-router-dom';
import Transfert from '../../images/transfert.svg';
import Logo from '../../images/logo.png';
import Facebook from '../../images/facebook.svg';
import Insta from '../../images/insta.svg';
import Map from '../../images/map.svg';


const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  console.log(menuOpen)

  return (
    <>
    
    <div className={`nav-container ${menuOpen ? "active" : ""} `}>
      <nav>

        <ul className="mobile-nav">
            <li>
                <Link reloadDocument to="/" className="logo-container"><img className='logo' src={Logo} alt="Logo"/></Link>
            </li>
            <li>
                <div onClick={handleMenuOpen} className="menu-icon-container">
                    <div className="menu-icon">
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                    </div>
                </div>
            </li>
        </ul>

        <ul className="desktop-nav">
            <div className="nav-left">
                <li>
                <Link reloadDocument to="/" className="logo-container"><img className='logo' src={Logo} alt="Logo"/></Link>
                </li>
                <li>
                <a href="http://beaujeu.reseaudesvilles.fr/fr/information/97744/musee-marius-audin">Musee</a>
                </li>
                <li>
                <Link reloadDocument to="/quiz">Quiz</Link>
                </li>
            </div>

            <div className="nav-right">
                <li>
                  <a href='https://www.facebook.com/' className=""><img className='facebook' src={Facebook} alt="Facebook"/></a>
                </li>

                <li>
                  <a href='https://www.instagram.com/' className=""><img className='insta' src={Insta} alt="Instagram"/></a>
                </li>

                <li>
                  <a href='https://www.google.com/maps?q=52+Place+de+l%27H%C3%B4tel+de+Ville+69+430+Beaujeu&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiRubWC3ZP3AhVSQBoKHd_eAScQ_AUoAXoECAEQAw' className=""><img className='map' src={Map} alt="Voir sur la carte"/></a>
                </li>

                <li>
                  <a href='#' className="transfert"><img className='linkedin' src={Transfert} alt="Transfert"/></a>
                </li>
            </div>
        </ul>
        
      </nav>

      <div className="link-close"></div>
    </div>
    
    </>
  );
}

export default Header;
