import React from 'react';

import ReactWindowResizeListener from 'window-resize-listener-react';

import HeadlineWithFocus from '../components/HeadlineWithFocus';
import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';
import FloatingButton from '../components/FloatingButton';

class Index extends React.Component {
  constructor(props) {
    super(props);   
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.state = {
      subHeadlineModifierClassName: 'is-pos-relative',
      floatingButtonTop: '10px',
      floatingButtonRight: '10px'
    }
  } 

  componentDidMount() {
    this.positionFloatingButton();
  }

  windowResizeHandler(event) {
    this.positionFloatingButton();
  }  
  
  positionFloatingButton() {
    //console.log(window.innerWidth - this.subHeadline.offsetLeft - this.subHeadline.offsetWidth);
    // console.log(window.innerWidth, this.subHeadline.offsetLeft, this.subHeadline.offsetWidth, this.floatingButton.offsetWidth);
    // this.setState(() => ({
    //   floatingButtonTop: `${this.subHeadline.offsetTop}px`,
    //   floatingButtonRight: `${window.innerWidth - this.subHeadline.offsetLeft - this.subHeadline.offsetWidth - (this.floatingButton.offsetWidth * 1.8)}px` 
    // }))    
  }

  render() { 
    return (
     
        <div className="l-page-container">
          <MainHeader></MainHeader> 
        {/* 
          
        */}
            <main className="l-main">
            <div className="c-content-box">
              <HeadlineWithFocus  
                modifierClassNames="c-headline-focus c-headline-focus--super-big"
              > 
                Hi, I'm a front-end web developer
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
          {/* 
                                <FloatingButton 
            top={this.state.floatingButtonTop}
            right={this.state.floatingButtonRight}
            buttonRef={(button) => { this.floatingButton = button; }}
          /> 

          */}
          <ReactWindowResizeListener onResize={this.windowResizeHandler} />          
        </div>
    )
  }
};


export default Index;