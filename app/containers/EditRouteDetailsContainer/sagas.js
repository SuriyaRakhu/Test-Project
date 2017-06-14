// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, delay} from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestRouteDetailSucceeded } from './actions'
import { defaultAction} from '../../services/restService';
import {GET_ROUTE_DETAIL, REQUESTROUTEDETAILSUCCEEDED} from './constants';
// Individual exports for testing
export function* defaultSaga() {
  return;
}

function* fetchRouteDetailInfo(data) {
  // console.log('3. From saga function to fetchSagaFunction..');
  try {    
    const routeDetail = yield call(defaultAction, data);
    yield put(requestRouteDetailSucceeded(routeDetail));
  } catch(e) {
    console.log("failed"+e);
  }
}

function* getRouteDetailSaga() {  
  // console.log('2. From action to saga function..');
  yield* takeLatest(GET_ROUTE_DETAIL, fetchRouteDetailInfo);  
}

// All sagas to be loaded
export default [
  defaultSaga,
  getRouteDetailSaga,
];
