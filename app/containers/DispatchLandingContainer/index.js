/*
 *
 * DispatchLandingContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectDispatchLandingContainer from './selectors';
import SummaryComponent from '../../components/DispatchComponents/DispatchLanding/SummaryComponent';
import {Grid, Row, Col} from 'react-bootstrap';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';

export class DispatchLandingContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor (){
    super();
    this.state = {}
  }

  test = (test) =>{
   // console.log(test)
  }
  showRoutesButnClick = () =>{    
      browserHistory.push('/home/1');
    }
  render() {    
    return (
      <SummaryComponent showRoutesButnClick={this.showRoutesButnClick} />
       );
  }
}

const mapStateToProps = selectDispatchLandingContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DispatchLandingContainer);
