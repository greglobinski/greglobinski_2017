import React from 'react';
import { connect } from 'react-redux';

import RemarkScreen from '../components/RemarkScreen';

class RemarkScreenContainer extends React.Component {
  constructor(props) {  
    super(props);
  }

  render() {
    return (
      <div>
      <RemarkScreen
        isActive={this.props.isActive}
      />
      <svg id="svg-filter" style={{ 
        position: "absolute", top: "0", 
        left: "0", width: "100%", height:"100%"}}>
        <filter id="svg-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
        </filter>
      </svg>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { isActive: state.remarkScreen.isActive };
}

const mapDispatchToProps = (dispatch) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemarkScreenContainer);
