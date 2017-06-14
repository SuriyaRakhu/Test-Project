import React from 'react';
import ReactDOM from 'react-dom';
import { Modal,Button,Image } from 'react-bootstrap';
import styles from './style.css'
import DeliveredIcon from "../../../assets/deliveredIcon.png";
import RunningTruck from "../../../assets/runningTruck.png";
export default class OverLaySection extends React.Component {
    render(){
        return (
        <Modal dialogClassName={styles.bottom} show={this.props.showLoactionDetails} onHide={this.props.closeDetails}>
          <Modal.Header closeButton>
              <Modal.Title>Customer Name: {this.props.locationDetails.customerList.customers["0"].custName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
                <Image className={styles.deliveryStatus} src={this.props.locationDetails.customerList.customers["0"].orderList.orders["0"].orderStatus=="R" ?RunningTruck: DeliveredIcon} circle />
                <h3 className={styles.textCenter}>{this.props.locationDetails.customerList.customers["0"].orderList.orders["0"].orderStatus=="R" ? "Running" : "Delivered"}</h3>
              </div>
              <h6>Customer Number : #{this.props.locationDetails.customerList.customers["0"].custNumber}</h6>
              <h6>Stop Number : #{this.props.locationDetails.stopNum}</h6>
              <h6>Order Status : #{this.props.locationDetails.customerList.customers["0"].orderList.orders["0"].orderStatus}</h6>
              <h6>Actual Arriaval Time : #{this.props.locationDetails.customerList.customers["0"].orderList.orders["0"].delivery.actualArrvTime}</h6>
              <h6>Planned Arrival Time : #{this.props.locationDetails.customerList.customers["0"].orderList.orders["0"].delivery.plannedArrvTime}</h6>
              <h6>Planned Dept Time : #{this.props.locationDetails.customerList.customers["0"].orderList.orders["0"].delivery.plannedDeptTime}</h6>
          </Modal.Body>
        </Modal>
        );
    }
}
