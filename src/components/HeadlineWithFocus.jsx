import React from 'react';

class HeadlineWithFocus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClassName: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState) => ({
        animationClassName: 'c-headline-focus--animation'
      }));
    },5);  
  }

  render() { 
    return (
        <h1 
          className={ `c-headline-focus
            ${this.props.modifierClassNames} 
            ${this.state.animationClassName}` } 
          ref="myImgContainer"
        >            
          { this.props.children }
        </h1>
    )
  }
}

export default HeadlineWithFocus; 

