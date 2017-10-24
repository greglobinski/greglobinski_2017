import React from 'react';
import Link from 'gatsby-link';
import MainNav from '../components/MainNav';

const MainHeader = () => (
  <header className="c-main-header">
    <div className="c-main-header__logo">
      &nbsp;
    </div>
    <div className="c-main-header__nav">
      <MainNav></MainNav>
    </div>
  </header>
);

export default MainHeader; 