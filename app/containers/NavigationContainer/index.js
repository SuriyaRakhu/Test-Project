/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import {checkError, toggleCollapse} from './actions'
//import * as ReactBootstrap from 'react-bootstrap';
import {Tab, Row, Col, Nav, NavItem, Container, Pane} from 'react-bootstrap';
import styles from './styles.css';
import {Link} from "react-router";
export class NavigationContainer extends React.Component { 
  // eslint-disable-line react/prefer-stateless-function
  toggleMode(mode) {
    //console.log('hi '+mode)
    /*if(mode){
      console.log('true')
      this.props.toggleCollapse('true')
    }else{
      console.log('false')
      this.props.toggleCollapse('false')
    }*/
  }
  
  handleClick(){
    this.props.history.push('/');
  }

  componentDidMount(){    
  }
  render() {
    return (
      <div>
        <Navigation {...this.props} />       
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    checkError :() => {
      dispatch(checkError())
    },
    toggleCollapse :(item) => {
      dispatch(toggleCollapse(item))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
