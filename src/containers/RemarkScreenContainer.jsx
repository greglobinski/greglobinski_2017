import React from 'react';
import { connect } from 'react-redux';

import RemarkScreen from '../components/RemarkScreen';

class RemarkScreenContainer extends React.Component {
  constructor(props) {  
    super(props);
  }

  render() {
    return (
      <RemarkScreen
        isActive={this.props.isActive}
      />
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