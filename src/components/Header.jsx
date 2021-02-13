import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/your-logo.png';

const Header = () => (
  <header className='item header'>
    <img className='header__logo' src={logo} alt='your logo' />
    <h1>Header component</h1>
  </header>
);

export default Header;
