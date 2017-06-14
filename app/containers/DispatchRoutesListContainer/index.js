/*
 *
 * CustomerDetailsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectDispatchRoutesListContainer from './selectors';
import DispatchRoutesList from '../../components/DispatchComponents/DispatchRoutesList';
import DispatchRoutesDetails from '../../components/DispatchComponents/DispatchRoutesDetails';
import {Grid, Row, Col, Tabs, Tab, Nav, NavItem} from 'react-bootstrap';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import { push } from 'react-router-redux'; 
import {getRouteInfo,getRouteListInfo,getCustomerRoute} from './actions';
import CustomersRoute from '../../components/DispatchComponents/CustomersRoute'; 
import styles from './styles.css';


export class DispatchRoutesListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
propTypes: { 
      updateDetails: PropTypes.func.isRequired 
    }
   
  constructor (){
    super();
    this.state = {
      test: 'wdww',
      selected:0
    }    
  }

	componentDidMount = () => {
    // console.log("dispatched action");
		this.props.getRoutes();
    //this.props.getRoutesList();
	}

  selectedTab=(key)=>{
      if(this.state.selected==0 && key==1){
          this.props.getCustomerRoutes();
          this.setState({selected:this.state.selected!=key?key:this.state.selected})        
      } else
          this.setState({selected:this.state.selected!=key?key:this.state.selected})        
    }

  updateRoute(index){
    this.props.updateDetails(index);
  }

  gotoEditRoute = () =>{    
     browserHistory.push('/editRoute');
    }
    correctActualTime = () =>{    
      this.setState({selected:0}); 
    }
  render() {
    return (<div className={styles.padStyle} >
                <Tab.Container id="routeTabs-with-dropdown" activeKey={this.state.selected} onSelect={this.selectedTab} className={styles.tabStyle}>
                    <Row>
                    <Col>
                        <Nav bsStyle="tabs" className={styles.tab}>
                            <NavItem eventKey={0}>
                                 <span className={styles.tabTitle}>DISTRIBUTION</span>
                            </NavItem>
                            <NavItem eventKey={1}>
                                 <span className={styles.tabTitle}>CUSTOMERS ROUTE</span>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col>
                       <Tab.Content animation>
                           <Tab.Pane eventKey={0}>
                            <div /*style={headerPresent}*/>
                                <Col xs={12} md={4} sm={5} className={styles.noPad}>
                                  <DispatchRoutesList {...this.props} test={this.test}/>
                                </Col>
                                <Col xsHidden md={8} sm={7}>
                                  <DispatchRoutesDetails {...this.props} gotoEditRoute={this.gotoEditRoute}/>
                                </Col>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey={1}>
                                <CustomersRoute {...this.props} correctActualTime={this.correctActualTime}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>          
        </div>);
  }
}

const mapStateToProps = selectDispatchRoutesListContainer();

function mapDispatchToProps(dispatch) {
  return {
    updateDetails: (id) => {dispatch(push(id))}, 
    customerDetails: (id) => {dispatch(push(id))},
     getRoutes : () => {dispatch(getRouteInfo())},
     //getRoutesList : () => {dispatch(getRouteListInfo())},
     getCustomerRoutes : () => {dispatch(getCustomerRoute())}  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DispatchRoutesListContainer);
