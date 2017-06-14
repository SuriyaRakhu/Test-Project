/*
 *
 * CustomerDetailsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCustomerSettingsContainer from './selectors';
import Settings from '../../components/CustomerDetailsComponents/CustomerSettings';

export class CustomerSettingsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
       <div>  
         <Settings {...this.props} />
	    </div>

    );
  }
}

const mapStateToProps = selectCustomerSettingsContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSettingsContainer);
