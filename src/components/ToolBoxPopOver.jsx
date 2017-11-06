import React from 'react';
import renderHTML from 'react-render-html';

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
        {/*
          TODO: find a lighter html renderer
        */}
        {renderHTML(comment)}
      </div>
    </div>
  )
}

export default ToolBoxPopOver;