import React from 'react';
import Link from 'gatsby-link';

class RemarkScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="c-shout-screen">
        <div className="c-shout-screen__message">
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
            Thank you. Now, you're free to go...
          </p>
          <div>
            <Link to="/playground/">Playground</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default RemarkScreen;