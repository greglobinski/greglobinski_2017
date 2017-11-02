import { createStore as reduxCreateStore } from 'redux';
import * as types from './actionTypes';

const reducer = (state, action) => {
  // if (action.type === `INCREMENT`) {
  //   return Object.assign({}, state, {
  //     count: state.count + 1,
  //   });
  // }
  // return state;

  switch (action.type) {
    case types.TOGGLE_REMARK_SCREEN:
      return Object.assign({}, state, {
        remarkScreen: {
          isActive: !state.remarkScreen.isActive
        }
      })
    default:
      return state
  }  
}

const initialState = { 
  count: 0,
  remarkScreen: {
    isActive: false
  },
  actionButton: {
    topPx: '10px',
    rightPx: '10px',
    classes: { 
      block: 'c-floating-button' 
    }
  }
};

const createStore = () => reduxCreateStore(
  reducer, 
  initialState, 
  process.env.NODE_ENV !== 'production' && (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default createStore;
