/*
 *
 * CustomerDetailsContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  GETCUSTOMERINFO, 
  REQUESTCUSTOMERINFOSUCCEEDED,
} from './constants';
import {getServiceUrl} from '../../services/getServiceUrl';
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function getCustomerInfo(payload) {
  let serviceParams = {}
  serviceParams.apiName = "GETCUSTOMERINFO";

  let requestParams = getServiceUrl(serviceParams)
  return {
    type: GETCUSTOMERINFO, 
    request: requestParams
    
  };
}

export function requestCustomerInfoSucceeded(customerInfo){
  return {
    type: REQUESTCUSTOMERINFOSUCCEEDED, 
    customerInfo
  }
}