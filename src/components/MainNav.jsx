import React from 'react';
import Link from 'gatsby-link';
import { FaMapMarker, FaEnvelopeO, FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';
import { TiCodeOutline } from 'react-icons/lib/ti';



const ListLink = (props) => (
  <li className="c-main-nav__elem" >
    <Link to={props.to} className="c-main-nav__link" activeClassName="c-main-nav__link--is-active" exact={true}>
      {props.children}
    </Link>
  </li>
);  

const MainNav = () => (
  <ul className="c-main-nav">
    <ListLink to="/"><FaMapMarker /> Home</ListLink>
    <ListLink to="/toolbox/"><FaWrench /> Toolbox</ListLink>
    <ListLink to="/playground/"><FaPaperPlaneO /> Playground</ListLink>
    <ListLink to="/contact/"><FaEnvelopeO /> Contact</ListLink>
  </ul>
);

export default MainNav;


// FaGithub