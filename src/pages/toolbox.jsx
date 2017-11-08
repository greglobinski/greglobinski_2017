import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import ToolBoxListContainer from '../containers/ToolBoxListContainer';

export default () => (
  <div className="c-content-box">
    <HeadlineWithFocus><span>These are pieces of </span>my toolbox</HeadlineWithFocus>
    <ToolBoxListContainer />
  </div>
);