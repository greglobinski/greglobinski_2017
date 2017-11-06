import React from 'react';
import Link from 'gatsby-link';
import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';

const RemarkScreen = (props) => { 
  const links = [ 
    { path: 'toolbox', icon: FaWrench }, 
    { path: 'playground', icon: FaPaperPlaneO }
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      <div className="c-remark-screen__message">
        <p>
          <b>I'm glad</b><br /> seeing you interested in my stuff.
        </p>
        <p>
          There's a thing I want you to rember going over the website.
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
        {
          links.map((link) => (        
            <Link 
              key={link.path}
              className="c-remark-screen__link" 
              to={`/${link.path}/`}
              onClick={props.onClick}
              tabIndex={props.isActive ? '1' : '-1'}
            >
              <link.icon /> {link.path}
            </Link>)
          ) 
        }
      </div>
    </div>
  )
};

export default RemarkScreen;