// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, delay} from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestCustomerInfoSucceeded} from './actions'
import { defaultAction} from '../../services/restService';
import {GETCUSTOMERINFO} from './constants';

// Individual exports for testing
export function* defaultSaga() {
  return;
}


function* fetchBiddingInfo(data) {
  try {    
    const customerInfo = yield call(defaultAction, data);
    yield put(requestCustomerInfoSucceeded(customerInfo));
  } catch(e) {
    console.log("failed"+e);
  }
}


function* getCustomerInfoSaga() {
  yield* takeLatest(GETCUSTOMERINFO,fetchBiddingInfo);  
}


// All sagas to be loaded
export default [
  getCustomerInfoSaga,
];
