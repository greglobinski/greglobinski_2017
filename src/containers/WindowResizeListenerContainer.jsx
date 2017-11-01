import React from 'react';
import { connect } from "react-redux";
import ReactWindowResizeListener from 'window-resize-listener-react';


const WindowResizeListenerContainer = ({ increment }) => {
  console.log('WindowResizeListenerContainer');

  function testF() {
    return increment();
  }

  return (
    <ReactWindowResizeListener onResize={testF}> 
      ReactWindowResizeListener 
    </ReactWindowResizeListener>
  )
};

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) };
}


export default connect(
  mapStateToProps, mapDispatchToProps)(WindowResizeListenerContainer);

 

/*

windowResizeHandler(event) {
  console.log('windowResizeHandler()');
  console.log(this);
  //this.store.dispatch({ type: `INCREMENT` })
  //  this.positionFloatingButton();
}  

*/