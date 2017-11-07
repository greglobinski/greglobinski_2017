import React from 'react';
import Link from 'gatsby-link';
import MainNav from '../components/MainNav';
import logo from './../images/logo40.jpg'; 

const MainHeader = (props) => (
  <header className="c-main-header">
    <Link 
      to="/" 
      className="c-main-header__logo"
    >
      <img src={logo} alt="greglobinski.com"/>
    </Link>
    <div className="c-main-header__nav">
      <MainNav />
    </div>
  </header>
);

export default MainHeader; 