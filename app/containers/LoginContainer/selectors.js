import { createSelector } from 'reselect';

/**
 * Direct selector to the navigationContainer state domain
 */
const selectLoginContainerDomain = () => state => state.get('loginContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContainer
 */

const selectLoginContainer = () => createSelector(
  selectLoginContainerDomain(),
  (substate) => substate.toJS()
);

export default selectLoginContainer;
export {
  selectLoginContainerDomain,
};
