import React from 'react';
import Link from 'gatsby-link';
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(
  mapStateToProps, mapDispatchToProps)(Counter);

const ConnectedMainHeader = connect(
  mapStateToProps, mapDispatchToProps)(MainHeader);
//<MainHeader></MainHeader>

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="l-page-container">
        <ConnectedCounter />
        <ConnectedMainHeader />
        <main className="l-main">
          {this.props.children()}
        </main>
        <MainFooter></MainFooter>
      </div>
    )
  }  
}

export default DefaultLayout;