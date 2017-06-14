import React,{Components} from 'react';
import styles from './styles.css';
import {ListGroup, ListGroupItem, Row, Col, Tabs, Tab, Nav, NavItem, Grid} from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { list } from 'react-icons-kit/icomoon/list'; 
import { iosLocationOutline } from 'react-icons-kit/ionicons/iosLocationOutline'; 
import { iosListOutline } from 'react-icons-kit/ionicons/iosListOutline';    
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';  
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO';
import { DispatchRouteSummary } from '../DispatchRouteSummary';
import RouteMapContainer from '../../../containers/RouteMapContainer';

//import FaAngleRight from 'react-icons/lib/fa/angle-right';

export class DispatchRoutesDetails extends React.Component{
    constructor(){
        super()
        this.state={
            selected:1,
            routes: []
        }
    }
    componentDidMount(){
        setTimeout(function() { this.selectedTab(0); }.bind(this), 900);
        this.setState({routes: this.props.routes[0].routeData});
    }
    selectedTab=(key)=>{
        this.setState({selected:this.state.selected!=key?key:this.state.selected})
    }
	
	details = () => {
        this.props.customerDetails("/home/0/dispatchCustomerDetails");
    }
    render(){
        var item = this.state.routes;
        var route = item.map(function(data,index) {
            return(
                
                                <div key={index}>
                                    <div className={styles.sec1}>
                                        <div className={styles.timeFix}>
                                           <span> {data.arrival}</span>
                                        </div>
                                        <Icon icon={data.icon} size={36} className = {styles.centerIcon} style={data.runningStatus}/>
                                    </div>
                                    <div className={styles.sec2}>
                                        <div>
                                            <p><b>CUSTOMER #:{data.customerId}</b></p>
                                            <p>{data.customer}</p>
                                            <p><b>PLANNED DEPARTURE: {data.departure}</b></p> 
                                        </div>
                                        
                                    </div>
                                    <div className={styles.sec3} onClick={this.details}>
                                        <div>
                                            <Icon icon={ic_chevron_right} size={36} className={styles.chevron} />
                                        </div>
                                    </div>
                                </div>
                           
			);
        },this)
                    
        return(
            <div>
                <DispatchRouteSummary  {...this.props}/>
                  <Tab.Container id="tabs-with-dropdown" activeKey={this.state.selected} onSelect={this.selectedTab}>
                    <Row>
                    <Col>
                        <Nav bsStyle="tabs" className={styles.tab}>
                            <NavItem eventKey={0}>
                                 <Icon icon={iosListOutline} size={36} /> <span className={styles.tabTitle}>LIST VIEW</span>
                            </NavItem>
                            <NavItem eventKey={1}>
                                 <Icon icon={iosLocationOutline} size={36}/> <span className={styles.tabTitle}>MAP VIEW</span>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col>
                       <Tab.Content animation>
                           <Tab.Pane eventKey={0}>
                            {route}
                            </Tab.Pane>
                            <Tab.Pane eventKey={1}>
                                <RouteMapContainer enableList={this.selectedTab} sampleParam={this.state.selected}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
           </div>
        );
    }
}

DispatchRoutesDetails.propTypes = {
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
      routeData: React.PropTypes.arrayOf(
          React.PropTypes.shape({
              customerId: React.PropTypes.string.isRequired,
              arrival: React.PropTypes.string.isRequired,
              customer: React.PropTypes.string.isRequired,
              departure: React.PropTypes.string.isRequired,
              runningStatus: React.PropTypes.object.isRequired,
              icon: React.PropTypes.object.isRequired,
          }).isRequired,
      )
    })
  ).isRequired,
 };
export default DispatchRoutesDetails;