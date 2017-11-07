import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import ToolBoxListContainer from '../containers/ToolBoxListContainer';

export default () => (
  <div className="c-content-box">
    <HeadlineWithFocus>These are pieces of my toolbox</HeadlineWithFocus>
    <ToolBoxListContainer />
  </div>
);