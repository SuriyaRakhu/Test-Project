/*
 *
 * EditRouteDetailsContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_ROUTE_DETAIL,
  REQUESTROUTEDETAILSUCCEEDED
} from './constants';
import {getServiceUrl} from '../../services/getServiceUrl';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getRouteDetail() {
  // console.log('1. From Container, action dispatched to actions..');
  let serviceParams = {}
  serviceParams.apiName = "GETROUTEDETAIL";
  
  let requestParams = getServiceUrl(serviceParams)
  return {
    type: GET_ROUTE_DETAIL, 
    request: requestParams    
  };
}

export function requestRouteDetailSucceeded(routeDetails){
  // console.log('4. From fetchSagaFunction back to actions requestRouteDetailSucceeded method..'+routeDetails);
  return {
    type: REQUESTROUTEDETAILSUCCEEDED, 
    routeDetails
  }
}