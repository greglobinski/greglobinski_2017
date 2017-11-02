import React from 'react';
import { connect } from 'react-redux';
import ActionButton from '../components/ActionButton';

/*
const mapStateToProps = ({ floatingButton }) => {
  return { 
    topPx: floatingButton.topPx,
    rightPx: floatingButton.rightPx,
    classes: floatingButton.classes
  };
}

const mapDispatchToProps = dispatch => {
  return {}
  //return { increment: () => dispatch({ type: `INCREMENT` }) };
}

*/


//const ActionButtonPositioner = connect(
//  mapStateToProps, mapDispatchToProps)(ActionButton);

class ActionButtonPositioner extends React.Component {
  constructor() {
    super();
    this.getButtonAnchor = this.getButtonAnchor.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.getButtonAnchor = this.getButtonAnchor.bind(this);
    this.updateButtonPosition = this.updateButtonPosition.bind(this);
    this.updateButtonTop = this.updateButtonTop.bind(this);
    this.updateButtonRight = this.updateButtonRight.bind(this);
    this.state = {
      buttonAnchor: null,
      buttonTopPx: '0px',
      buttonRightPx: '-100px',
      buttonIsActive: false,
      buttonIsFixed: false
    };
  }

	componentDidMount() {    
    this.getButtonAnchor();

    if(typeof window !== 'undefined') {
      window.addEventListener('resize', this.windowResizeHandler, false);
    }    
  }
    
  componentWillUnmount() {
    if(typeof window !== 'undefined') {
      window.removeEventListener('resize', this.windowResizeHandler, false);
    }
  }

  getButtonAnchor() {
    const buttonAnchor = document.querySelector('.js-action-button-anchor');
    this.setState(() => ({
      buttonAnchor: buttonAnchor
    }), this.updateButtonPosition(true));
  }
    
  windowResizeHandler() {
    if (!this.state.buttonAnchor) {
      return this.getButtonAnchor();
    }

    this.updateButtonPosition();
  }  

  updateButtonPosition(initialization) {

    if (initialization) {
      this.setState(() => ({
        buttonIsActive: true
      }));
    }

    let timeout;

    // prevents a function from being called every time window resizes
    clearTimeout(timeout);

    timeout = setTimeout(() => {    
      const buttonAnchor = this.state.buttonAnchor;
      const actionButton =  this.actionButton;
      const body = document.querySelector('body');

      this.updateButtonTop(buttonAnchor, actionButton, body, initialization);
      
      // when the button position is updated for the first time, after page load,
      // it splits the updating process into two steps, the second step, the
      // update of buttonRight value is triggered only after the updating 
      // the buttonTop value; thanks to that the button comes up on the page
      // horizontaly. (css transition is applied only to the "right" value)
      if (!initialization) {
        this.updateButtonRight(buttonAnchor, actionButton, body);
      }  
    }, 300);  
  }

  updateButtonTop(anchor, button, body, initialization) {
    const anchorOffsetTop = anchor.offsetTop;
    const anchorOffsetHeight = anchor.offsetHeight;
    const buttonOffsetHeight = button.offsetHeight;

    const buttonTop = anchorOffsetTop + (anchorOffsetHeight / 2) - (buttonOffsetHeight / 2);

    this.setState(() => ({
      buttonTopPx: `${buttonTop}px`   
    }), () => { 
      if (initialization) {
        setTimeout(() => {   
          return this.updateButtonRight(anchor, button, body); 
        }, 300);
      }
    });    
  }

  updateButtonRight(anchor, button, body) {    
    const anchorOffsetLest = anchor.offsetLeft;
    const anchorOffsetWidth = anchor.offsetWidth;
    const buttonOffsetWidth = button.offsetWidth;
    const bodyWidth = body.offsetWidth;

    const buttonRight = bodyWidth - anchorOffsetLest - anchorOffsetWidth - (buttonOffsetWidth * 1.5);                   

    this.setState(() => ({
      buttonRightPx: `${buttonRight}px`    
    }));    
  }  

  render() {
    return (
      <ActionButton 
        buttonRef={btn => this.actionButton = btn}
        topPx={this.state.buttonTopPx}
        rightPx={this.state.buttonRightPx}
        isActive={this.state.buttonIsActive}
        isFixed={this.state.buttonIsFixed}
        classes={{
          block: 'c-action-button',
          isActive: 'c-action-button--is-active',
          isFixed: 'c-action-button--is-fixed'
        }}
      />
    )
  }
}

export default connect()(ActionButtonPositioner);