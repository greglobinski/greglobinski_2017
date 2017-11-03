import React from 'react';
import Link from 'gatsby-link';
import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';

const RemarkScreen = (props) => (
  <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
    <div className="c-remark-screen__message">
      <p>
        <b>I'm glad</b><br /> seeing you interested in my stuff.
      </p>
      <p>
        There's a little thing I want you to rember going over the website.
      </p>
      <p>
        At present, I'm open to <b>full time on-site job</b> offers (Warsaw or London).
      </p>
      <p>
        Instantly, you realize that I could fit, drop me a message at <b>greglobinsk[at]gmail.com</b>.
      </p>
      <p>
        Thank you. Now, you're free to go further.
      </p>
    </div>
    <div className="c-remark-screen__links">
      <Link 
        className="c-remark-screen__link" 
        to="/toolbox/"
        onClick={props.onClick}
      >
        <FaWrench />Toolbox
      </Link>
      <Link 
        className="c-remark-screen__link" 
        to="/playground/"
        onClick={props.onClick}
      >
        <FaPaperPlaneO />Playground
      </Link>
    </div>
  </div>
);

export default RemarkScreen;