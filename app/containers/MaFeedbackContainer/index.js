/*
 *
 * CustomerDetailsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCustomerSettingsContainer from './selectors';
import MaFeedback from '../../components/CustomerDetailsComponents/MaFeedback';

export class MaFeedbackContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
       <div>  
         <MaFeedback {...this.props} />
	    </div>

    );
  }
}

const mapStateToProps = MaFeedbackContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MaFeedbackContainer);
