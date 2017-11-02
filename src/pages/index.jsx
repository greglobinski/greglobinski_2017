import React from 'react';

import HeadlineWithFocus from '../components/HeadlineWithFocus';

const Index = () => (
  <div className="c-content-box">
    <h2>
      Hi, it's Greg
    </h2>              
    <HeadlineWithFocus  
      modifierClassNames={`
        c-headline-focus 
        c-headline-focus--super-big
      `}
    > 
      I'm a front-end web developer
    </HeadlineWithFocus>
    <h2 
      className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
    >
      I build web interfaces
    </h2>               
  </div>          
);

export default Index;