import { createSelector } from 'reselect';

/**
 * Direct selector to the customerDetailsContainer state domain
 */
const MaFeedbackContainerDomain = () => state => state.get('MaFeedbackContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomerDetailsContainer
 */

const MaFeedbackContainer = () => createSelector(
  MaFeedbackContainerDomain(),
  (substate) => substate.toJS()
);

export default MaFeedbackContainer;
export {
  MaFeedbackContainerDomain,
};
