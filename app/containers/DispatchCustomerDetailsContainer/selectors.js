import { createSelector } from 'reselect';

/**
 * Direct selector to the customerDetailsContainer state domain
 */
const selectDispatchCustomerDetailsContainerDomain = () => state => state.get('DispatchCustomerDetails');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomerDetailsContainer
 */

const selectDispatchCustomerDetailsContainer = () => createSelector(
  selectDispatchCustomerDetailsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectDispatchCustomerDetailsContainer;
export {
  selectDispatchCustomerDetailsContainerDomain,
};
