import React from 'react';
import Link from 'gatsby-link';

const ListLink = (props) => (
  <li className="c-main-nav__elem" >
    <Link to={props.to} className="c-main-nav__link" activeClassName="c-main-nav__link--is-active" exact={true}>
      {props.children}
    </Link>
  </li>
);  

const MainNav = () => (
  <ul className="c-main-nav">
    <ListLink to="/">Home</ListLink>
    <ListLink to="/toolbox">Toolbox</ListLink>
    <ListLink to="/playground">Playground</ListLink>
    <ListLink to="/contact">Contact</ListLink>
  </ul>
);

export default MainNav;