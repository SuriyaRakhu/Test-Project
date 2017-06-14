import { createSelector } from 'reselect';

/**
 * Direct selector to the editRouteDetailsContainer state domain
 */
const selectEditRouteDetailsContainerDomain = () => state => state.get('routeDetailsList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomerDetailsContainer
 */

const selectEditRouteDetailsContainer = () => createSelector(
  selectEditRouteDetailsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectEditRouteDetailsContainer;
export {
  selectEditRouteDetailsContainerDomain,
};
