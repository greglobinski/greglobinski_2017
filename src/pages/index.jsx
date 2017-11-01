import React from 'react';

import HeadlineWithFocus from '../components/HeadlineWithFocus';
import FloatingButton from '../components/FloatingButton';
import ShoutScreen from '../components/ShoutScreen';

class Index extends React.Component {
  constructor(props) {
    super(props);       
    
    this.positionFloatingButton = this.positionFloatingButton.bind(this);
    this.floatingButtonClickHandler = this.floatingButtonClickHandler.bind(this);
    
    this.state = {
      // floatingButtonTop: '',
      // floatingButtonRight: '',
      // floatingButtonModifierClassName: '',
      shoutScreenActive: false
    }
  } 

  componentDidMount() {
    //this.positionFloatingButton();
  }
  
  
  positionFloatingButton() {
  //  if (this.state.floatingButtonModifierClassName !== 'c-floating-button--is-fixed' ) {
      this.setState(() => ({
        floatingButtonModifierClassName: '',
        floatingButtonRight: `-100px`                                
      })) 

      setTimeout(() => {
        this.setState(() => ({
          floatingButtonModifierClassName: 'c-floating-button--is-active',
          floatingButtonTop: `${this.subHeadline.offsetTop + (this.subHeadline.offsetHeight / 2) - (this.floatingButton.offsetHeight / 2)}px`,
          floatingButtonRight: `${window.innerWidth - this.subHeadline.offsetLeft - this.subHeadline.offsetWidth - (this.floatingButton.offsetWidth * 1.5)}px`                                
        }))       
      }, 500);
    // }
  }

  floatingButtonClickHandler() {
    if (this.state.floatingButtonModifierClassName === 'c-floating-button--is-active' ) {
      this.setState(() => ({
        shoutScreenActive: true,
        floatingButtonTop: `10px`,
        floatingButtonRight: `10px`, 
        floatingButtonModifierClassName: `c-floating-button--is-fixed`
      }));
    } else {
      this.setState(() => ({
        shoutScreenActive: false,
        floatingButtonModifierClassName: 'c-floating-button--is-active',
        floatingButtonTop: `${this.subHeadline.offsetTop + (this.subHeadline.offsetHeight / 2) - (this.floatingButton.offsetHeight / 2)}px`,
        floatingButtonRight: `${window.innerWidth - this.subHeadline.offsetLeft - this.subHeadline.offsetWidth - (this.floatingButton.offsetWidth * 1.5)}px`                                
      }));      
    }
  }

  render() { 
    //console.log(this.props);
    return (
      <div className="c-content-box">
        <h2>
          Hi, it's Greg
        </h2>              
        <HeadlineWithFocus  
          modifierClassNames={`
            c-headline-focus 
            c-headline-focus--super-big
          `}
        > 
          I'm a front-end web developer
        </HeadlineWithFocus>
        <h2 
          className={`
            js-action-button-anchor
            c-content-box__subheadline 
            c-content-box__subheadline--with-button
          `}
          ref={(h2) => { this.subHeadline = h2; }}
        >
          I build web interfaces
        </h2>               
      </div>          
    )
  }
};


export default Index;