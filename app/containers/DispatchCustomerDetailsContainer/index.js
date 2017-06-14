/*
 *
 * CustomerDetailsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectDispatchCustomerDetailsContainer from './selectors';
import CustomerDetails from '../../components/DispatchComponents/CustomerDetails';
import {Grid, Row, Col} from 'react-bootstrap';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import { push } from 'react-router-redux';  

const headerPresent = {
  marginTop: "60px"
}

const noMargin = {
  marginLeft: "0px",
  marginRight: "0px"
}


export class DispatchCustomerDetailsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
propTypes: { 
      updateDetails: PropTypes.func.isRequired 
    }
   
  constructor (){
    super();
  }

  updateRoute(index){
    this.props.updateDetails(index);
  }


  render() {
    return (
       <div style={headerPresent}>
          <CustomerDetails />
	    </div>

    );
  }
}

const mapStateToProps = selectDispatchCustomerDetailsContainer();

function mapDispatchToProps(dispatch) {
  return {
    updateDetails: (id) => {dispatch(push(id))},
   
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DispatchCustomerDetailsContainer);
