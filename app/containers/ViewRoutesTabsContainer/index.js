import React from 'react';
import styles from './styles.css';
import {Row, Col, Tabs, Tab, Nav, NavItem} from 'react-bootstrap';
import cx from "classnames";
import DispatchRoutesListContainer from '../DispatchRoutesListContainer';

export class ViewRoutesTabs extends React.Component{
    constructor(){
        super()
        this.state = {
            selected:0
        };
    }
    selectedTab=(key)=>{
        this.setState({selected:this.state.selected!=key?key:this.state.selected})
    }
    render(){
        return(<div className={styles.padStyle} >
                {/*<Tabs defaultActiveKey={1} id="routeTabs">
                    <Tab eventKey={1} title="distribution" className={cx("text-uppercase")}>
                        <DispatchRoutesListContainer/>
                        {this.props.children}
                    </Tab>
                    <Tab eventKey={2} title="customers route" className="text-uppercase">Tab 2 content</Tab>
                </Tabs>      */}
                <Tab.Container id="routeTabs-with-dropdown" activeKey={this.state.selected} onSelect={this.selectedTab} className={styles.tabStyle}>
                    <Row>
                    <Col>
                        <Nav bsStyle="tabs" className={styles.tab}>
                            <NavItem eventKey={0}>
                                 <span className={styles.tabTitle}>DISTRIBUTION</span>
                            </NavItem>
                            <NavItem eventKey={1}>
                                 <span className={styles.tabTitle}>CUSTOMERS ROUTE</span>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col>
                       <Tab.Content animation>
                           <Tab.Pane eventKey={0}>
                            <DispatchRoutesListContainer/>
                        {this.props.children}
                            </Tab.Pane>
                            <Tab.Pane eventKey={1}>
                                Tab 2 Content
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>          
        </div>);
    }
}
export default ViewRoutesTabs;