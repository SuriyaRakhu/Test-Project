/*
 *
 * CustomerDetailsContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_ROUTES,
  REQUESTORDERINFOSUCCEEDED,
  GET_ROUTES_LIST,
  GET_CUSTOMER_ROUTES,  
  REQUESTCUSTOMERROUTEINFOSUCCEEDED
} from './constants';
import {getServiceUrl} from '../../services/getServiceUrl';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getRouteInfo() {
  // console.log('1. From Container, action dispatched to actions..');
  let serviceParams = {}
  serviceParams.apiName = "GETROUTEINFO";
  
  let requestParams = getServiceUrl(serviceParams)
  return {
    type: GET_ROUTES, 
    request: requestParams
    
  };
}

export function requestRouteInfoSucceeded(routeInfo){
  return {
    type: REQUESTORDERINFOSUCCEEDED, 
    routeInfo
  }
}

export function getRouteListInfo() {
  let serviceParams = {}
  serviceParams.apiName = "GETROUTELISTINFO";
  serviceParams.queryString = "userId=Qd8hxycpIsOBd2yT3bu0E0dtiezbrd2ftbUZQMl8NdQ&password=Qd8hxycpIsOBd2yT3bu0E4kuTxiD7aJ8CrqKm/o3SoA";
  serviceParams.queryParams = {
                                  "routes":"44",
                              };
  let requestParams = getServiceUrl(serviceParams)
  return {
    type: GET_ROUTES_LIST, 
    request: requestParams
    
  };
}

export function getCustomerRoute() {
  let serviceParams = {}
  serviceParams.apiName = "GETCUSTOMERROUTE";
  
  let requestParams = getServiceUrl(serviceParams)
  return {
    type: GET_CUSTOMER_ROUTES, 
    request: requestParams
    
  };
}

export function requestCustomerRouteSucceeded(customerRoutes){
  // console.log('4. From fetchSagaFunction back to actions requestRouteDetailSucceeded method..');
  return {
    type: REQUESTCUSTOMERROUTEINFOSUCCEEDED, 
    customerRoutes
  }
}