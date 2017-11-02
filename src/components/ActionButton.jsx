import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import { FaArrowRight, FaClose } from 'react-icons/lib/fa/';

const ActionButton = ({ topPx, rightPx, classes, isActive, isFixed, onClick, buttonRef }) => {  

  return (
    <button 
      onClick={onClick}
      className={`
        ${classes.block} 
        ${isActive && classes.isActive} 
        ${isFixed && classes.isFixed}
      `}
      style={{ top: topPx, right: rightPx }}
      ref={buttonRef}
    > 
      <FaArrowRight />
    </button>
  )
} 

ActionButton.propTypes = {
  topPx: PropTypes.string.isRequired,
  rightPx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired
}  

export default ActionButton;