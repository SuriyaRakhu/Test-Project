/*
 *
 * CustomerDetailsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCustomerDetailsContainer from './selectors';
import CustomerDetails from '../../components/CustomerDetailsComponents/CustomerDetails';
import {getCustomerInfo} from './actions';
export class CustomerDetailsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

 //React Component Life Cycle
	componentDidMount = () => {
		this.props.customerInfoAction();
	}
  render() {
    return (
        <div>  
            <CustomerDetails {...this.props} />
	    </div>

    );
  }
}

const mapStateToProps = selectCustomerDetailsContainer();

function mapDispatchToProps(dispatch) {
  return {
    	customerInfoAction: () => {dispatch(getCustomerInfo())}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailsContainer);
