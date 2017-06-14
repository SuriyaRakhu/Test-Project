/*
 *
 * CustomerDetailsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { truck } from 'react-icons-kit/icomoon/truck'; 
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO';
import {
  DEFAULT_ACTION,
} from './constants';
const completed ={ 
    color: "green"
}

const running = {
    color: "orange"
}

const stopped = {
    color: "slategrey"
}

const bgCompleted = {
    paddingLeft: "5px",
    backgroundColor: "green"
}

const bgPending = {
    paddingLeft: "5px",
    backgroundColor: "orange"
}

const bgStopped = {
    paddingLeft: "5px",
    backgroundColor: "slategrey"
}

const initialState = fromJS({
  routes : [
    {
      routeId: 1555,
      delay : 10,
      customer: 'Arthur',
      totalStops: 16,
      stopsPending: 0,
      status: completed,
      icon: checkCircleO,
      bgStatus: bgCompleted,
      routeData: [
        {
          customerId: '778545',
          arrival: '6:01',
          customer: 'SODX Total Systems',
          departure:'7:40',
          runningStatus: completed,
          icon: checkCircleO,
        },
        {
          customerId: '711545',
          arrival: '8:01',
          customer: 'SODX Total Systems',
          departure:'9:40',
          runningStatus: running,
          icon: truck,
        },{
          customerId: '123545',
          arrival: '10:01',
          customer: 'SODX Total Systems',
          departure:'10:40',
          runningStatus: running,
          icon: truck,
        },
        {
          customerId: '123545',
          arrival: '11:01',
          customer: 'SODX Total Systems',
          departure:'11:40',
          runningStatus: running,
          icon: truck,
        },
        {
          customerId: '5544777',
          arrival: '12:01',
          customer: 'SODX Total Systems',
          departure:'12:40',
          runningStatus: running,
          icon: truck,
        },
        {
          customerId: '222222',
          arrival: '13:01',
          customer: 'SODX Total Systems',
          departure:'13:40',
          runningStatus: running,
          icon: truck,
        }
      ]
    },
    {
      routeId: 1548,
      delay : 0,
      customer: 'Rupert',
      totalStops: 161,
      stopsPending: 0,
      status: running,
      icon: truck,
      bgStatus: bgPending,
      routeData: [
        {
          customerId: '778545',
          arrival: '6:01',
          customer: 'SODX Total Systems',
          departure:'7:40',
          runningStatus: completed,
          icon: checkCircleO,
        },
        {
          customerId: '711545',
          arrival: '8:01',
          customer: 'SODX Total Systems',
          departure:'9:40',
          runningStatus: running,
          icon: truck,
        },{
          customerId: '123545',
          arrival: '10:01',
          customer: 'SODX Total Systems',
          departure:'10:40',
          runningStatus: running,
          icon: truck,
        }
      ]
    },
    {
      routeId: 2018,
      delay : 50,
      customer: 'Emma',
      totalStops: 45,
      stopsPending: 0,
      status: stopped,
      icon: truck,
      bgStatus: bgStopped,
      routeData: [
        {
          customerId: '778545',
          arrival: '6:01',
          customer: 'SODX Total Systems',
          departure:'7:40',
          runningStatus: completed,
          icon: checkCircleO,
        },
        {
          customerId: '711545',
          arrival: '8:01',
          customer: 'SODX Total Systems',
          departure:'9:40',
          runningStatus: running,
          icon: truck,
        },{
          customerId: '123545',
          arrival: '10:01',
          customer: 'SODX Total Systems',
          departure:'10:40',
          runningStatus: running,
          icon: truck,
        }
      ]
    },
    {
      routeId: 7741,
      delay : 35,
      customer: 'Watson',
      totalStops: 42,
      stopsPending: 0,
      status: running,
      icon: truck,
      bgStatus: bgPending,
      routeData: [
        {
          customerId: '778545',
          arrival: '6:01',
          customer: 'SODX Total Systems',
          departure:'7:40',
          runningStatus: completed,
          icon: checkCircleO,
        },
        {
          customerId: '711545',
          arrival: '8:01',
          customer: 'SODX Total Systems',
          departure:'9:40',
          runningStatus: running,
          icon: truck,
        },{
          customerId: '123545',
          arrival: '10:01',
          customer: 'SODX Total Systems',
          departure:'10:40',
          runningStatus: running,
          icon: truck,
        }
      ]
    },
    {
      routeId: 7474,
      delay : 100,
      customer: 'Alfred',
      totalStops: 71,
      stopsPending: 0,
      status: running,
      icon: truck,
      bgStatus: bgPending,
      routeData: [
        {
          customerId: '778545',
          arrival: '6:01',
          customer: 'SODX Total Systems',
          departure:'7:40',
          runningStatus: completed,
          icon: checkCircleO,
        },
        {
          customerId: '711545',
          arrival: '8:01',
          customer: 'SODX Total Systems',
          departure:'9:40',
          runningStatus: running,
          icon: truck,
        },{
          customerId: '123545',
          arrival: '10:01',
          customer: 'SODX Total Systems',
          departure:'10:40',
          runningStatus: running,
          icon: truck,
        }
      ]
    }
  ]
});

function DispatchRoutesListContainer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default DispatchRoutesListContainer;
