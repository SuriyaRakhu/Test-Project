/*
 *
 * CustomerDetailsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
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

function MaFeedbackContainer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default MaFeedbackContainer;
