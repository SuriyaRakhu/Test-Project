/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { personStalker } from 'react-icons-kit/ionicons/personStalker';
import { ic_person_outline } from 'react-icons-kit/md/ic_person_outline';
import { androidSettings } from 'react-icons-kit/ionicons/androidSettings';
import { history } from 'react-icons-kit/fa/history';
import { ic_message } from 'react-icons-kit/md/ic_message';   

import { ic_power_settings_new } from 'react-icons-kit/md/ic_power_settings_new'; 
import {
  DEFAULT_ACTION,
  CHECK_ACTION,
  COLLAPSE_MENU
} from './constants';

const initialState = fromJS({
  Customer : [
    {
      tab:'Profile Information',
      to: '/customerdetails',
      click:'Profile',
      icon: ic_person_outline
    },
    {
      tab:'Notification Settings',
      to: '/customersettings',
      click:'Notification Settings',
      icon: androidSettings
      
    },{
      tab:'Notification History',
      to: '/customersettings',
      click:'Notification Settings',
      icon: history
      
    },{
      tab:'Feedback to MA',
      to: '/maFeedback',
      click:'Feedback',
      icon: ic_message
    }
  ],
  MA : [
    {
      tab:'Customers',
      to: '/customerdetails',
      click:'Profile',
      icon: personStalker
    },
    {
      tab:'Notification Settings',
      to: '/customerdetails',
      click:'Notification Settings',
      icon: androidSettings
    },{
      tab:'Notification History',
      to: '/customerdetails',
      click:'Notification Settings',
      icon: history
    }
  ],
  Dispatcher : [
    {
      tab:'Notification Settings',
      to: '/customerdetails',
      click:'Notification Settings',
      icon: androidSettings
      
    },{
      tab:'Notification History',
      to: '/customerdetails',
      click:'Notification Settings',
      icon: history
    },{
      tab:'Logout',
      to: '/',
      click:'Home',
      icon: ic_power_settings_new  
    }
  ] 
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_ACTION:
      return state.set('userDetails', action.payload);
    case DEFAULT_ACTION:
      return state;  
    case COLLAPSE_MENU:
      return state.set('userDetails', action.payload);  
    default:
      return state;
  }
}

export default navigationContainerReducer;
