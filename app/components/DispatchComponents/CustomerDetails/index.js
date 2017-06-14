import React,{Components} from 'react';
import styles from './styles.css';
import {ListGroup, ListGroupItem, Row, Col,Grid} from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { truck } from 'react-icons-kit/icomoon/truck'; 
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import { edit } from 'react-icons-kit/fa/edit'; 
    
//import FaAngleRight from 'react-icons/lib/fa/angle-right';

export class CustomerDetails extends React.Component{
    constructor(){
        super()
    }

    
    render(){
        return(
            <div className={styles.mainDiv}>
                <Row className={styles.rowBorder}>
                    
                        <Col md={2}>
                            <div className={styles.ring}>
                                <Icon icon={truck} size={64}/>
                                <h4 className={styles.textCenter}>RUNNING</h4>
                            </div>
                            
                        </Col>
                        <Col md={1}>
                            <div>
                                <p className={styles.textCenter+' '+styles.routeNo}>2</p>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className={styles.title}>
                                <h2>SODX Total Systems pvt ltd</h2>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className={styles.date}>
                                <h4>01/06/2017</h4>
                            </div>
                        </Col>
                    
                </Row>
                <Row className={styles.timesRow}>
                    <Col className={styles.timesCol} sm={4}>
                        <div>
                            <h4>Planned</h4>
                            <p>Arrival</p>
                            <p>Departure</p>
                        </div>
                    </Col>
                    <Col className={styles.timesCol} sm={4}>
                        <div>
                            <h4>Projected</h4>
                            <p>Arrival</p>
                            <p>Departure</p>
                        </div>
                    </Col>
                    <Col className={styles.timesCol} sm={4}>
                        <div>
                            <h4>Actual</h4>
                            <p>Arrival</p>
                            <p>Departure</p>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.secondRow}>
                    <Col sm={4}>
                        <div>
                           <h4>Case Count</h4>
                            <p>Off Day: XXXXXXXX</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={styles.deliveryWindow}>
                           <h4>Customer Delivery Window</h4>
                            <div>
                                <p>Open</p>
                            </div>
                            <div>
                                <p>Close</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div>
                            <h4>Route To</h4>
                            <p>DI Type: XXXXXXXX</p>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.secondRow}>
                <h4>MA/Customer Info</h4>
                    <Col sm={4}>
                        <div>
                            <p>MA Name:</p>
                            <p>MA Phone:</p>
                            <p>MA Mobile:</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div>
                            <p>DSM Name:</p>
                            <p>DSM Phone:</p>
                            <p>DSM Mobile:</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div>
                            <p>Customer Name:</p>
                            <p>Customer Phone:</p>
                            <p>Customer Mobile:</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

/*DispatchRouteSummary.propTypes = {
  routes : React.PropTypes.arrayOf(
    React.PropTypes.shape({
      routeId: React.PropTypes.number.isRequired,
      delay: React.PropTypes.string.isRequired,
      customer: React.PropTypes.string.isRequired,
      totalStops :React.PropTypes.number.isRequired,
      stopsPending: React.PropTypes.number.isRequired,
      status: React.PropTypes.object.isRequired,
      icon: React.PropTypes.object.isRequired,
      bgStatus: React.PropTypes.object.isRequired,
    })
  ).isRequired,
 };*/
export default CustomerDetails;