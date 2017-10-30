import React from 'react';
import Link from 'gatsby-link';
import { FaArrowRight, FaClose } from 'react-icons/lib/fa/';


const FloatingButton = (props) => {

  return (
    <button 
      className={ `c-floating-button ${props.modifierClassName}` }
      style={{ top: props.top, right: props.right }}
      ref={ props.buttonRef }
      onClick={props.onClick}
    >
      { props.modifierClassName === 'c-floating-button--is-fixed' ? <FaClose /> : <FaArrowRight /> }
    </button>
  )
} 

export default FloatingButton;
