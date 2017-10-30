import React from 'react';

import ReactWindowResizeListener from 'window-resize-listener-react';

import HeadlineWithFocus from '../components/HeadlineWithFocus';
import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';
import FloatingButton from '../components/FloatingButton';
import ShoutScreen from '../components/ShoutScreen';

class Index extends React.Component {
  constructor(props) {
    super(props);   
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.positionFloatingButton = this.positionFloatingButton.bind(this);
    this.floatingButtonClickHandler = this.floatingButtonClickHandler.bind(this);
    this.state = {
      floatingButtonTop: '',
      floatingButtonRight: '',
      floatingButtonModifierClassName: '',
      shoutScreenActive: false
    }
  } 

  componentDidMount() {
    this.positionFloatingButton();
  }

  windowResizeHandler(event) {
    this.positionFloatingButton();
  }  
  
  positionFloatingButton() {
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
    return (
     
        <div className="l-page-container">
          <MainHeader></MainHeader> 
          <main className="l-main">
            <div className="c-content-box">
              <h2>Hi, it's Greg</h2>              
              <HeadlineWithFocus  
                modifierClassNames="c-headline-focus c-headline-focus--super-big"
              > 
                I'm a front-end web developer
              </HeadlineWithFocus>
              <h2 
                className="c-content-box__subheadline c-content-box__subheadline--with-button"
                ref={(h2) => { this.subHeadline = h2; }}
              >
                I build web interfaces
              </h2>              
            </div>
          </main>  
          <MainFooter></MainFooter>             
          <FloatingButton 
            top={this.state.floatingButtonTop}
            right={this.state.floatingButtonRight}
            modifierClassName={this.state.floatingButtonModifierClassName}
            buttonRef={(button) => { this.floatingButton = button; }}
            onClick={this.floatingButtonClickHandler}
          />       
          { this.state.shoutScreenActive && <ShoutScreen /> }      
          <ReactWindowResizeListener onResize={this.windowResizeHandler} />          
        </div>
    )
  }
};


export default Index;