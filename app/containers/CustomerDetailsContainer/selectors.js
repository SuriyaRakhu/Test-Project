import { createSelector } from 'reselect';

/**
 * Direct selector to the customerDetailsContainer state domain
 */
const selectCustomerDetailsContainerDomain = () => state => state.get('customerDetailsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomerDetailsContainer
 */

const selectCustomerDetailsContainer = () => createSelector(
  selectCustomerDetailsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectCustomerDetailsContainer;
export {
  selectCustomerDetailsContainerDomain,
};
