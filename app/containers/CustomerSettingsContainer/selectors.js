import { createSelector } from 'reselect';

/**
 * Direct selector to the customerDetailsContainer state domain
 */
const selectCustomerSettingsContainerDomain = () => state => state.get('customerSettingsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomerDetailsContainer
 */

const selectCustomerSettingsContainer = () => createSelector(
  selectCustomerSettingsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectCustomerSettingsContainer;
export {
  selectCustomerSettingsContainerDomain,
};
