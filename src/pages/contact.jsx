import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Obfuscate from 'react-obfuscate';
import { FaEnvelopeO, FaTwitter, FaGithub } from 'react-icons/lib/fa/';

export default (props) => {
  return ( 
    <div className="c-content-box">
      <HeadlineWithFocus>You can get in touch <span>anytime throug</span></HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email='greglobinski@gmail.com' />
        </li>
        <li className="c-contact-list__item">
          <FaTwitter />
          <a href="https://twitter.com/greglobinski">@greglobinski</a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a href="https://github.com/greglobinski">greglobinski</a>
        </li>
      </ul>
      <h2 
      className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Do not forget
      </h2>      
    </div>
  )
};
