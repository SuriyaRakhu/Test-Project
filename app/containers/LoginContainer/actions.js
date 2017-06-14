/*
 *
 * NavigationContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  CHECK_ACTION,
  COLLAPSE_MENU,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function checkError() {
  return {
    type: CHECK_ACTION,
    payload: {
      name: 'HOME'
    } 
  };
}

export function toggleCollapse(item) {
  if(item == 'true'){
    return {
      type: COLLAPSE_MENU,
      payload: {
        name: 'DASHBOARD',
        collapsed: true
      } 
    }
  }else{
    return {
      type: COLLAPSE_MENU,
      payload: {
        name: 'DASHBOARD',
        collapsed: false
      } 
    }
  }
  
}