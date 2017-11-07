import React from 'react';
import Link from 'gatsby-link';

const MainFooter = () => (
  <div className="c-main-footer">
    <p className="c-main-footer__note">
      Build with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> 
      {' '} and <a href="https://reactjs.org">React</a>. 
      Hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>. 
      The code is open source and available on 
      {' '}<a href="https://github.com/greglobinski/playground" target="_blank">Github</a>.
    </p>
  </div>
);

export default MainFooter;