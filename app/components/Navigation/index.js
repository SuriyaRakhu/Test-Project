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
import {Link} from "react-router";
import {Navbar, Row, Col, Button, Header, Brand,ListGroup, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { horizontalCenter } from 'react-icons-kit';
//import AppBar from '../AppBar';
//import SlideMenu from '../SlideMenu';
const MySpan = 
        horizontalCenter(
            props => <span>{props.children}</span>
    );
    
export class Navigation extends React.Component{
  constructor(){
    super()
    this.state = {toggle: true, name: 'Home'}
  }

  togglemode = () => {
    this.setState({toggle: !this.state.toggle})
  }

  navigateTo = (name) => {
    this.setState({toggle: !this.state.toggle, name: name})
  }
  
  render(){

var listItems = this.props.Customer.map(function(item,index) {
      return (
        <ListGroupItem key={index}>
          <Link to={item.to} onClick={() => this.navigateTo(item.click)} ><MySpan><Icon icon={item.icon} size={36}/>{item.tab}</MySpan></Link>
        </ListGroupItem>
      );
    },this);


    return(
      <div>
        <Navbar className={styles.customNav} fixedTop={true}>
          <Row>
            <Col xs={2}>
              <Button className={styles.hamburger+' '+(this.state.toggle ? 'NoClass' : styles.change)} onClick={this.togglemode.bind(this)}>
                <div className={styles.bar1+' '+styles.menuButton}></div>
                <div className={styles.bar2+' '+styles.menuButton}></div>
                <div className={styles.bar3+' '+styles.menuButton}></div>
              </Button>
            </Col>
            <Col lg={4} xs={10}>
              <Navbar.Header className={styles.navHead}>
                <Navbar.Brand>
                  <a className={styles.heading}>{this.state.name}</a>
                </Navbar.Brand>
              </Navbar.Header>
            </Col>
          </Row>
        </Navbar>
        <div className={styles.mySidenav+' '+(this.state.toggle ? 'NoClass' : styles.setWidth)}>
          <div className={styles.nameHead}>
            <p>Hi, <b>Rahul</b></p>
          </div>
          <ListGroup className={styles.noWrap}>
            {listItems}
          </ListGroup>
        </div>
      </div>
    );
  }
}


Navigation.propTypes = {
  Customer : React.PropTypes.arrayOf(
    React.PropTypes.shape({
      tab:React.PropTypes.string.isRequired,
      to:React.PropTypes.string.isRequired,
      click:React.PropTypes.string.isRequired,
      icon:React.PropTypes.object.isRequired
    })
  ).isRequired,
 };
export default Navigation;
