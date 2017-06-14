import React,{Components} from 'react';
import styles from './styles.css';
import {ListGroup, ListGroupItem, Row, Col, DropdownButton, MenuItem} from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { filter } from 'react-icons-kit/fa/filter';
import { sortAmountDesc } from 'react-icons-kit/fa/sortAmountDesc';   
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
    
//import FaAngleRight from 'react-icons/lib/fa/angle-right';

export class DispatchRoutesList extends React.Component{
    constructor(props){
        super(props)
        this.state = {routeList: this.props.routes, sortBy: '', filterBy: ''};
    }

    componentDidMount(){        
    }

    navigateToRouteDetails = (e) => {
        //console.log(e.currentTarget.id);        
        this.props.updateDetails("/home/"+e.currentTarget.id);
    }

    sortBy(data){
        this.setState({sortBy: data});
    }
    
    filterBy(data){
        this.setState({filterBy: data});
    }

    render(){
        var routeList = this.state.routeList;
        
        
            if(this.state.sortBy == 'routeId'){
                routeList.sort(function(a, b) {
                    return parseFloat(a.routeId) - parseFloat(b.routeId);
                });
            }else if(this.state.sortBy == 'totalStops'){
                routeList.sort(function(a, b) {
                    return parseFloat(a.totalStops) - parseFloat(b.totalStops);
                });
            }else if(this.state.sortBy == 'delay'){
                routeList.sort(function(a, b) {
                    return parseFloat(a.delay) - parseFloat(b.delay);
                });
            }else if(this.state.sortBy == 'name'){
                routeList.sort(function(a,b) {return (a.customer > b.customer)} );
            }

            if(this.state.filterBy == 'routeId'){
                routeList = routeList.filter(function (a) {
                    return (a.routeId) >= 2000
                });
            }else if(this.state.filterBy == 'totalStops'){
                routeList = routeList.filter(function (a) {
                    return (a.totalStops) >= 40
                });
            }else if(this.state.filterBy == 'delay'){
                routeList = routeList.filter(function (a) {
                    return (a.delay) >= 50
                });
            }
            
            
            
        var route = routeList.map(function(item,index) {
        return (
            <div className={styles.routeCard} key={index} id={index} onClick={this.navigateToRouteDetails} >
                <div style={item.bgStatus}>
                <ListGroupItem className={styles.noBorder}>
                    <Row className={styles.routeRow}>
                        <Col className={styles.leftCol} xs={6}>
                            <h4>{item.routeId}</h4>
                            <p>{item.customer}</p>
                        </Col>
                        <Col xs={6} className={styles.rightCol}>
                            <p className={styles.delay}>Delay: {item.delay}mins</p>
                        </Col>
                    </Row>
                    <Row className={styles.routeRow2}>
                        <Col className={styles.leftCol} xs={2}>
                            <Icon size={36} icon={item.icon} className={styles.icon} style={item.status}/>  
                        </Col>
                        <Col xs={5}>
                            <h5><b>Total Stops</b></h5>
                            <p>{item.totalStops}</p>
                        </Col>
                        <Col xs={5} className={styles.rightCol}>
                            <h5><b>Stops Pending</b></h5>
                            <p>{item.stopsPending}</p>
                        </Col>
                    </Row>
                </ListGroupItem>
                </div>
            </div>
        );
        },this);
        return(
        <div>
            <div className={styles.routeCard} >
            <ListGroupItem className={styles.noBorder+' '+styles.routeSortCard}>
                <Row>
                    <Col mdOffset={10}>
                        <DropdownButton className={styles.sortButton} title={<Icon icon={sortAmountDesc}/>} id='sort'>
                            <MenuItem eventKey="0">Sort By:</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="1" onClick={() => this.sortBy('totalStops')}>Stops</MenuItem>
                            <MenuItem eventKey="2" onClick={() => this.sortBy('routeId')}>Route Id</MenuItem>
                            <MenuItem eventKey="3" onClick={() => this.sortBy('delay')}>Delay</MenuItem>
                            <MenuItem eventKey="4" onClick={() => this.sortBy('name')}>Customer</MenuItem>
                        </DropdownButton>
                        <DropdownButton className={styles.sortButton} title={<Icon icon={filter}/>} id='filter'>
                            <MenuItem eventKey="0">Filter By:</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="1" onClick={() => this.filterBy('totalStops')}>Stops</MenuItem>
                            <MenuItem eventKey="2" onClick={() => this.filterBy('routeId')}>Route Id</MenuItem>
                            <MenuItem eventKey="3" onClick={() => this.filterBy('delay')}>Delay</MenuItem>
                        </DropdownButton> 
                    </Col>
                </Row>
                </ListGroupItem>
            </div>
            {route}
        </div>
        );
    }
}

DispatchRoutesList.propTypes = {
  routes : React.PropTypes.arrayOf(
    React.PropTypes.shape({
      routeId: React.PropTypes.number.isRequired,
      delay: React.PropTypes.number.isRequired,
      customer: React.PropTypes.string.isRequired,
      totalStops :React.PropTypes.number.isRequired,
      stopsPending: React.PropTypes.number.isRequired,
      status: React.PropTypes.object.isRequired,
      icon: React.PropTypes.object.isRequired,
      bgStatus: React.PropTypes.object.isRequired,
  })).isRequired
 
 };
export default DispatchRoutesList;