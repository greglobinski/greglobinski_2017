import React from 'react';

const ToolBoxListItem = ({ id, label, onClick, elevated }) => {

  function onClickHandler(e) {
    e.target.blur();
    e.target.style['z-index'] = 1;
    onClick(e, id);
  }

  return (
    <li 
      className="c-toolbox-list__item"     
    >
      <button 
        id={id}
        onClick={onClickHandler}
        className="c-toolbox-list__btn"        
        style={{ zIndex: elevated === id ? 1 : '' }}
      >
        {label}
      </button>
    </li>
  )
};

export default ToolBoxListItem;