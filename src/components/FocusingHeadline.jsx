import React from 'react';

class FocusingHeadline  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initailStateClassName: 'c-focusing-headline--initial-state'
    }
  }

  componentDidMount() {
    // let { clientHeight, clientWidth } = this.refs.myImgContainer;

    setTimeout(() => {
      this.setState((prevState) => ({
        initailStateClassName: ''
      }));
    },5);
  }

  render() { 
    return (
        <h1 
          className={ `c-focusing-headline
                      ${this.props.modifierClassNames} 
                      ${this.state.initailStateClassName}` } 
          ref="myImgContainer"
        >            
          { this.props.children }
        </h1>
    )
  }
}

export default FocusingHeadline;

