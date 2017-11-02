import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import { FaArrowRight, FaClose } from 'react-icons/lib/fa/';

const FloatingButton = ({ topPx, rightPx, classes }) => {  
  console.log(topPx, rightPx, classes); 
  return (
    <button 
      className={ classes.block }
      style={{ top: topPx, right: rightPx }}
    > 
      <FaArrowRight />
    </button>
  )
} 

FloatingButton.propTypes = {
  topPx: PropTypes.string.isRequired,
  rightPx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}  

export default FloatingButton;


/*
    <button 
      className={`c-floating-button`}
      style={{ top: offsetTop, right: offsetRight }}
      onClick={onClick}
    >
      { isFixed ? <FaClose /> : <FaArrowRight /> }
    </button>
*/

// { 
//   onClick, 
//   isActive,
//   isFixed,
//   offsetTop, 
//   offsetRight }

// FloatingButton.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   isActive: PropTypes.bool.isRequired,
//   isFixed: PropTypes.bool.isRequired,
//   offsetTop: PropTypes.string.isRequired,
//   offsetRight: PropTypes.string.isRequired
// }  

//export default FloatingButton;
  

// const FloatingButton = (props) => {

//   return (
//     <button 
//       className={ `c-floating-button ${props.modifierClassName}` }
//       style={{ top: props.top, right: props.right }}
//       ref={ props.buttonRef }
//       onClick={props.onClick}
//     >
//       { props.modifierClassName === 'c-floating-button--is-fixed' ? <FaClose /> : <FaArrowRight /> }
//     </button>
//   )
// } 

// export default FloatingButton;
