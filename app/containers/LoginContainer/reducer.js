/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHECK_ACTION,
  COLLAPSE_MENU
} from './constants';

const initialState = fromJS({
  userDetails: {
    name: 'DASHBOARD',
    collapsed: true,
  }  
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_ACTION:
        return state.set('userDetails', action.payload);
    case DEFAULT_ACTION:
      return state;  
    case COLLAPSE_MENU:
        return state.set('userDetails', action.payload);  
    default:
        return state;
  }
}

export default loginContainerReducer;
