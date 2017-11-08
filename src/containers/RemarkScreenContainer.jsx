import React from 'react';
import { connect } from 'react-redux';

import { toggleRemarkScreen } from '../state/actions'; 
import RemarkScreen from '../components/RemarkScreen';

class RemarkScreenContainer extends React.Component {
  constructor(props) {  
    super(props);
  }

  componentDidMount() {
    this.initializeEscClosing();
  }

  initializeEscClosing() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        if (this.props.isActive && e.which == 27) {
          this.props.toggleScreen();
        } 
      });
    } 
  }
  
  render() {
    return (
      <div>
        <RemarkScreen
          isActive={this.props.isActive}
          locationPathName={this.props.locationPathName}
          onClick={this.props.toggleScreen}
        />
        {this.props.isActive && <div 
            onClick={this.props.toggleScreen}
            className="c-remark-screen-overlay"
          >
          </div>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { isActive: state.remarkScreen.isActive };
}

const mapDispatchToProps = (dispatch) => {
  return { toggleScreen: () => dispatch(toggleRemarkScreen()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemarkScreenContainer);
