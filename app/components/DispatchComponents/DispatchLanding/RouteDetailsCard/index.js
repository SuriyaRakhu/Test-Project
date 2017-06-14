import React,{Components} from 'react';
import styles from '../styles.css';
import {Thumbnail, Button, Col} from 'react-bootstrap';
import ChartComponent from '../ChartComponent';
import cx from "classnames";

class RouteDetails extends React.Component {
  render(){
   return (<div className={styles.routeDetails}>
            <Col xs={12} sm={5} className={styles.pt2p}>
                <div className={cx(styles.gridDisp, styles.totalRoutes, "text-center")}>
                    <span className="text-uppercase">Total Number Of Routes</span>
                    <span className={styles.routeCount}>20</span>
                </div>
            </Col>
            <Col xs={12} sm={7} className={styles.routePercent}>
                    <ChartComponent statusName="delivered" percentVal="75"/>
                    <ChartComponent statusName="en-route" percentVal="20"/>
                    <ChartComponent statusName="shipping soon" percentVal="5"/>                
            </Col>
           <hr className={styles.fullWidth}/>
         </div>);
  }
}
class DateChooser extends React.Component {
    render(){
        var newDate = new Date().toLocaleDateString();
        const todayDate = "Today, " + newDate;    
        return (<div className={styles.dateSelector}>
                    <hr className={styles.fullWidth}/>
                    <h4 className={styles.inlnblk}>{todayDate}</h4>
                    <hr className={styles.fullWidth}/>
                </div>);
        }
}
export class RouteDetailsCard extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<div className={cx(styles.routeCard, styles.fullWidth, "pull-left")}>
            <Thumbnail>
                <h4 className={cx(styles.boldText, "text-uppercase")} >Route Summary</h4>
                <DateChooser/>
                <RouteDetails/>
                <div className={styles.viewRouteBtn}>
                    <Button bsStyle="success" className="text-uppercase" onClick={this.props.showRoutesButnClick}>View Routes</Button>
                </div>
             </Thumbnail>
         </div>);
    }
}
export default RouteDetailsCard;