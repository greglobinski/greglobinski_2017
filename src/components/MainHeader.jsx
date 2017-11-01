import React from 'react';
import Link from 'gatsby-link';
import MainNav from '../components/MainNav';

const MainHeader = (props) => (
  <header className="c-main-header">
    <div className="c-main-header__logo">
      Greg's
    </div>
    <div className="c-main-header__nav">
      <MainNav />
    </div>
  </header>
);

export default MainHeader; 