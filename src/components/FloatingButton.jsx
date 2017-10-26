import React from 'react';
import Link from 'gatsby-link';
//var FaBeer = require('react-icons/lib/ti/arrow-right-outline');
import TiArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline';


const FloatingButton = (props) => (
  <button 
    className="c-floating-button"
    style={{ top: props.top, right: props.right }}
  >
  <TiArrowRightOutline />
  </button>
);

export default FloatingButton;