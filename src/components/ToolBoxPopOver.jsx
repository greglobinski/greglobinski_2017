import React from 'react';
import { FaClose } from 'react-icons/lib/fa/';
import logo from './../images/logo24.jpg'; 

const ToolBoxPopOver = ({ 
  top, 
  bottom, 
  left, 
  right, 
  modifierClasses, 
  description,
  comment,
  onClick }) => 
{
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
      <button 
        className="c-toolbox-popover__close"
        onClick={onClick}
      >
        <FaClose />
      </button>
      <div className="c-toolbox-popover__text">
        <p className="c-toolbox-popover__description"
          dangerouslySetInnerHTML={{__html: description}}
        />
        {comment &&
          <div className="c-toolbox-popover__footer">
            <div className="c-toolbox-popover__avatar">
              <img src={logo} alt="greglobinski.com" />
            </div>  
            <span 
              className="c-toolbox-popover__comment" 
              dangerouslySetInnerHTML={{__html: comment}} 
            />
          </div>     
        }                    
      </div>
    </div>
  )
}

export default ToolBoxPopOver;