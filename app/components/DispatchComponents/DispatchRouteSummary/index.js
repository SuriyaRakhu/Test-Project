import React,{Components} from 'react';
import styles from './styles.css';
import {ListGroup, ListGroupItem, Row, Col, Button} from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
 import { edit } from 'react-icons-kit/fa/edit'; 
    
//import FaAngleRight from 'react-icons/lib/fa/angle-right';

export class DispatchRouteSummary extends React.Component{
    constructor(){
        super()
    }

    
    render(){
        return(
            <div className={styles.summary}>
                <Row className={styles.route+' '+styles.header}>
                    <Col md={4} className={styles.alignCenter}>
                        <div >
                            <h4>2029</h4>
                        </div>
                     </Col>
                    <Col md={8} className={styles.alignCenter}>
                        <div className={styles.edit}>
                        <div className={styles.modified}>Last Modified by Alex</div>
                            <Button className={styles.editButn} onClick={this.props.gotoEditRoute}><Icon icon={edit} size={36}/></Button>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.route+' '+styles.detail}>
                    <Col md={4}>
                        <p><b>Delivery Date</b></p>
                        <p>24/05/2017</p>
                        <p><b>Case Count</b></p>
                        <p>6</p>
                    </Col>
                    <Col md={4}>
                        <p><b>Planned Dispatch</b></p>
                        <p>24/12/2017</p>
                        <p><b>Merge Route</b></p>
                        <p>6</p>
                    </Col>
                    <Col md={4}>
                        <p><b>Planned Completion</b></p>
                        <p>27/05/2017</p>
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
export default DispatchRouteSummary;