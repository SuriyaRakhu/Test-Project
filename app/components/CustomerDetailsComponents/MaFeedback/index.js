/**
*
* Navigation functional component.
* Functional Components - https://facebook.github.io/react/docs/components-and-props.html
*
*/

import React from 'react';

import styles from './styles.css';
import {Tab, Row, Col, Container, Grid, Button} from 'react-bootstrap';

export class MaFeedback extends React.Component{
    constructor(){
        super()
        
    }

    render(){
      return (
   <div>
      <Grid className={styles.main}>
        <Row className={styles.Row}>
            <Col xs={4}><b>MA Name</b></Col>
            <Col xs={8}>Rahul Raj</Col>
        </Row>
        <Row className={styles.Row}>
            <Col xs={4}><b>Invoice #</b></Col>
            <Col xs={8}><input className={styles.invoiceInput} type="text"/></Col>
        </Row>
        <Row className={styles.Row}>
            <Col xs={12}>
                <p>Your feedback will help us serve you better</p>
                <input className={styles.invoiceText} type="textarea" placeholder="Enter your feedback here" />
            </Col>
        </Row>
        <Row className={styles.Row}>
            <Col xsOffset={4}>
                <Button bsStyle="success">Submit Feedback</Button>
            </Col>
        </Row>
      </Grid>
   </div>
 );
    }
  }

export default MaFeedback;
