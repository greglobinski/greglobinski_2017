import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";

export default () => (
  <div className="c-content-box">
    <Helmet title="Let's play" />

    <HeadlineWithFocus>
      Playground
      {/*<span>What's that?</span>*/}
    </HeadlineWithFocus>
    <p>Coming soon...</p>
  </div>
);
