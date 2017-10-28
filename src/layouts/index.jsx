import React from 'react';
import Link from 'gatsby-link';
import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';

export default ({ children }) => 
  <div className="l-page-container">
    <MainHeader></MainHeader>
      <main className="l-main">
        { children() }
      </main>
    <MainFooter></MainFooter>
  </div>