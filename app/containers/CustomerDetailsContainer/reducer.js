/*
 *
 * CustomerDetailsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUESTCUSTOMERINFOSUCCEEDED

} from './constants';

const initialState = fromJS({
  items : [
    {
      name:'Grocery',
      description:'link to Grocery items'
    },
    {
      name:'Electronics',
      description:'link to Electronics items'
    },
    {
      name:'Heavy metals',
      description:'link to Heavy metals articles'
    }
  ]
});

function customerDetailsContainer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
	      case REQUESTCUSTOMERINFOSUCCEEDED:
        return state.set('customerInfoData',action.customerInfo);
    default:
      return state;
  }
}

export default customerDetailsContainer;
