import { createSelector } from 'reselect';

/**
 * Direct selector to the customerDetailsContainer state domain
 */
const selectDispatchRoutesListContainerDomain = () => state => state.get('dispatchRoutesList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomerDetailsContainer
 */

const selectDispatchRoutesListContainer = () => createSelector(
  selectDispatchRoutesListContainerDomain(),
  (substate) => substate.toJS()
);

export default selectDispatchRoutesListContainer;
export {
  selectDispatchRoutesListContainerDomain,
};
