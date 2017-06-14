/*
 *
 * EditRouteDetailsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUESTROUTEDETAILSUCCEEDED
} from './constants';


const initialState = fromJS({
  routes : []
});

function EditRouteDetailsContainer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
        return state;
    case REQUESTROUTEDETAILSUCCEEDED:
        //console.log('5. From actions requestRouteDetailSucceeded method to reducer action which update the state values..');
        return state.set('routeDetailInfo',action.routeDetails);
    default:
        return state;
  }
}

export default EditRouteDetailsContainer;
