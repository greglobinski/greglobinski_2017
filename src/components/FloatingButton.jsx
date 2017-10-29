import React from 'react';
import Link from 'gatsby-link';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';


const FloatingButton = (props) => {

  return (
    <button 
      className="c-floating-button"
      style={{ top: props.top, right: props.right }}
      ref={ props.buttonRef }
    >
      <FaArrowRight />
    </button>
  )
} 

export default FloatingButton;
