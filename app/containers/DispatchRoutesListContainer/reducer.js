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
  REQUESTORDERINFOSUCCEEDED, REQUESTCUSTOMERROUTEINFOSUCCEEDED
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
    ],
  routeInfoData : 
  {
	route: {
		organization: {
			opcoId: 44,
			opcoName: "Vancouver",
			opcoAddress: "1346 Kingsway Avenue",
			opcoLatitude: "4924781",
			timezone: "America/Los_Angeles",
			opcoLongitude: "-12275096",
			routeList: {
				routes: [{
					routeId: "1049",
					stops: {
						wsStops: [{
								stopNum: 1,
								tripId: "1100441049",
								customerList: {
									customers: [{
										custNumber: "19775",
										custName: "                   K F C #1840",
										deliveryDay: "000",
										zipcode: "V4C 6R4",
										country: null,
										state: "BC",
										city: "DELTA",
										addressLine1: "8737  120 STREET / 101",
										addressLine2: "",
										addressLine3: "",
										addressLine4: "",
										custTelephone: "7785785062",
										contactPerson: "",
										latitude: "40.768211",
										longitude: "-73.971804",
										orderList: {
											orders: [{
												orderNumber: "7389626",
												roadnetOrderStsCode: null,
												deliveryDate: "20160516",
												shipOrPickUpDate: null,
												orderStatus: "D",
												deliveryMethodCode: "N",
												manifestNumber: null,
												routeNumber: null,
												stopNumber: null,
												offDayDelivery: "N",
												invoiceNumber: "9120885",
												remoteOrdEntryMode: null,
												itemQty: "49",
												purchaseOrderNo: null,
												routeToNumber: null,
												immediateOrderFlag: "N",
												totalCube: null,
												totalWeight: null,
												delivery: {
													delWindow1To: " 09:00",
													delWindow1From: " 00:01",
													delWindow2To: "174500",
													delWindow2From: "143000",
													variance: "49",
													plannedArrvTime: "2016-05-16T05:57:00",
													plannedDeptTime: "2016-05-16T06:45:00",
													actualArrvTime: "2016-05-16 06:47:24.0",
													actualDeptTime: null,
													driverName: "Gruyaert,Travis(802415)",
													truckLatitude: "49162663",
													truckLongitude: "-122859193",
													projectedArrivalFrom: "2016-05-16T06:30:00",
													projectedArrivalTo: "2016-05-16T08:30:00"
												},
												invoiceItemList: null
											}]
										}
									}]
								}
							}
  ]
          },
					tripId: "1100441049",
					maximunArrivedStopNumber: 1,
					routeDelay: 48
				}]
			}
		},
		message: null
	}
}
});

function DispatchRoutesListContainer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
      case REQUESTORDERINFOSUCCEEDED:
          return state.set('routeInfoData',action.routeInfo);
      case REQUESTCUSTOMERROUTEINFOSUCCEEDED:
          return state.set('customerRoutesData',action.customerRoutes);
    default:
      return state;
  }
}

export default DispatchRoutesListContainer;
