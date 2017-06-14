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


import {ListGroup, ListGroupItem} from 'react-bootstrap';

export class Settings extends React.Component{
    constructor(){
        super()
        this.state = {pushChecked: false, invoiceChecked: false, delayChecked: false, earlyChecked: false}
    }

    toggleSwitch(){
        this.setState({pushChecked: !this.state.pushChecked})
    }
    render(){
      return (
   <div>
      <ListGroup>
            <ListGroupItem className={styles.list}>
                <span>Push Notification<Switch className={styles.iosToggle} checked={this.state.pushChecked} onChange={this.toggleSwitch.bind(this)}/></span>
            </ListGroupItem>
       </ListGroup> 
        <ListGroup>       
            <ListGroupItem className={this.state.pushChecked ? styles.showToggl+' '+styles.list : styles.hideToggle}>Invoice Notification
                <Switch className={styles.iosToggle} checked={this.state.invoiceChecked} />
            </ListGroupItem>
            <ListGroupItem className={this.state.pushChecked ? styles.showToggl+' '+styles.list : styles.hideToggle}>Alert
                <Switch className={styles.iosToggle} checked={this.state.delayChecked} />
            </ListGroupItem>
        </ListGroup> 
   </div>
 );
    }
  }

export default Settings;
