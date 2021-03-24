import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            RTPD Online
            <i class="fas fa-laptop-house"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
             <Link
                to='/TalentPool'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Talent Pool
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/BriLifeTalks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                BRILife Talks
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Assesment'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Assesment
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Lms'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                LMS
              </Link>
            </li>

            <li>
              <Link
                to='/SignUp'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
