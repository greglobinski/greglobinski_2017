import React from 'react';


const ToolBoxPopOver = ({ top, bottom, left, right, modifierClasses, comment }) => {
  return (
    <div 
      className={`c-toolbox-popover ${modifierClasses}`}
      style={{ 
        bottom: bottom, 
        top: top,         
        left: left,
        right: right 
      }}
    >
      <div className="c-toolbox-popover__text">
        {comment}
      </div>
    </div>
  )
}

export default ToolBoxPopOver;