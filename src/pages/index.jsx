import React from 'react';
import FocusingHeadline from '../components/FocusingHeadline';

export default () => {
  return (
    <div className="c-content-box">
      <FocusingHeadline 
        modifierClassNames="c-focusing-headline--super-big"
      > 
        Hi, I'm a front-end web developer
      </FocusingHeadline>
      <h2>I build web interfaces using...</h2>
    </div>
  ) 
}

