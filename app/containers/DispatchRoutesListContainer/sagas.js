// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, delay} from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestRouteInfoSucceeded, requestCustomerRouteSucceeded} from './actions'
import { defaultAction} from '../../services/restService';
import {GET_ROUTES,
        REQUESTORDERINFOSUCCEEDED,
        GET_ROUTES_LIST,
        GET_CUSTOMER_ROUTES, 
        REQUESTCUSTOMERROUTEINFOSUCCEEDED
      } from './constants';
// Individual exports for testing
export function* defaultSaga() {
  return;
}

function* fetchBiddingInfo(data) {
  try {    
    const routeInfo = yield call(defaultAction, data);
    yield put(requestRouteInfoSucceeded(routeInfo));
  } catch(e) {
    console.log("failed"+e);
  }
}

function* getRouteInfoSaga() {
  
  yield* takeLatest(GET_ROUTES,fetchBiddingInfo);  
}

function* fetchRouteListInfo(data) {
  try {    
    const routeInfo = yield call(defaultAction, data);
    //yield put(requestRouteInfoSucceeded(routeInfo));
  } catch(e) {
    console.log("failed"+e);
  }
}

function* getRouteListInfoSaga() {
  
  yield* takeLatest(GET_ROUTES_LIST,fetchRouteListInfo);  
}

function* fetchCustRouteInfo(data) {
  try {    
    const custRouteInfo = yield call(defaultAction, data);
    yield put(requestCustomerRouteSucceeded(custRouteInfo));
  } catch(e) {
    console.log("failed"+e);
  }
}

function* getCustomerRouteSaga() {  
  yield* takeLatest(GET_CUSTOMER_ROUTES,fetchCustRouteInfo);  
}

// All sagas to be loaded
export default [
  defaultSaga,
  getRouteInfoSaga,
  getRouteListInfoSaga,
  getCustomerRouteSaga,
];
