/*
 *
 * DispatchLandingContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { truck } from 'react-icons-kit/icomoon/truck'; 
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  data : []
});

function DispatchLandingContainer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default DispatchLandingContainer;
