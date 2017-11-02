import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ReactWindowResizeListener from 'window-resize-listener-react';

import '../scss/main.scss';

require("typeface-exo");
require("typeface-roboto");

import ActionButtonContainer from '../containers/ActionButtonContainer';
import RemarkScreenContainer from '../containers/RemarkScreenContainer';

import MainFooter from '../components/MainFooter'; 
import MainHeader from '../components/MainHeader';

const Counter = ({ count, increment }) =>  (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const counterMapStateToProps = ({ count }) => {
  return { count }
}

const counterMapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(
  counterMapStateToProps, counterMapDispatchToProps)(Counter);


class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  windowResizeHandler() {
    console.log('windowResizeHandler()');    
  }
  
  render() {
    return (
      <div>
        <div className="l-page-container">
          <MainHeader />
          <main className="l-main">
            {this.props.children()}
          </main>
          <MainFooter />
        </div>
        {this.props.location.pathname === '/' && <ActionButtonContainer />}  
        <RemarkScreenContainer />
      </div>
    )
  }  
}

export default DefaultLayout;
