/*
 *
 * CustomerDetailsContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_ROUTES,
} from './constants';
import {getServiceUrl} from '../../services/getServiceUrl';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

