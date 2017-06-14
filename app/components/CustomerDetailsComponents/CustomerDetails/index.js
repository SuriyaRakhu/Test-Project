/**
*
* Navigation functional component.
* Functional Components - https://facebook.github.io/react/docs/components-and-props.html
*
*/

import React from 'react';

import styles from './styles.css';
import 'react-ios-switch/build/bundle.css';
import Switch from 'react-ios-switch';

import {Tab, Row, Col, Container, Grid, Glyphicon} from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { iosPersonOutline } from 'react-icons-kit/ionicons/iosPersonOutline';    
import { iosLocationOutline } from 'react-icons-kit/ionicons/iosLocationOutline';  
import { iosTelephoneOutline } from 'react-icons-kit/ionicons/iosTelephoneOutline';    
import { fileText2 } from 'react-icons-kit/icomoon/fileText2'; 
import { script } from 'react-icons-kit/iconic/script';
//import AppBar from '../AppBar';
//import SlideMenu from '../SlideMenu';

export class CustomerDetails extends React.Component{

    render(){
      return (
   <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={12}>
            <Row>
              <Col xs={2}>
                <div style={{color: '#59c3f9'}}>
                  <Icon size={36} icon={iosPersonOutline} />
                </div>
              </Col>
              <Col xs={10}>
                <Row>
                  <b>Customer ID: 122121</b>
                </Row>
                <Row>
                  Chicksaw Nation Sr Citizen Center
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12}>
            <Row>
              <Col xs={2}>
                <div style={{color: '#59c3f9'}}>
                  <Icon size={36} icon={iosLocationOutline} />
                </div>
              </Col>
              <Col xs={10}>
                <Row>
                  <b>Address</b>
                </Row>
                <Row>
                  707 Sherri Classics, Purcell, OK, 73080-6275
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12}>
            <Row>
              <Col xs={2}>
                <div style={{color: '#59c3f9'}}>
                  <Icon size={36} icon={iosTelephoneOutline} />
                </div>
               </Col>
              <Col xs={10}>
                <Row>
                <b>Phone #</b>
                </Row>
                <Row>
                405-527-6667
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
   </div>
 );
    }
  }
export default CustomerDetails;
