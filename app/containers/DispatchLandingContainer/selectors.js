import { createSelector } from 'reselect';

/**
 * Direct selector to the DispatchLandingContainer state domain
 */
const selectDispatchLandingContainerDomain = () => state => state.get('dispatchLanding');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DispatchLandingContainer
 */

const selectDispatchLandingContainer = () => createSelector(
  selectDispatchLandingContainerDomain(),
  (substate) => substate.toJS()
);

export default selectDispatchLandingContainer;
export {
  selectDispatchLandingContainerDomain,
};
