import React,{Components} from 'react';
import styles from './styles.css';
import {Button, ButtonToolbar, Form, FormGroup, FormControl, Modal, DropdownButton, MenuItem, Row, Col} from 'react-bootstrap';
import cx from "classnames";
import ReactDataGrid from 'react-data-grid';
import {Editors, Formatters} from 'react-data-grid-addons';
import Icon from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross'; 

const TextBoxFormatter = React.createClass({
  propTypes: {
    // value: React.PropTypes.string.isRequired
  },
  render() {
    const textValue = (this.props.value ? this.props.value : '');
    return (<form>
            <FormGroup controlId="formBasicText" className={styles.mb0}>
                <FormControl type="text" value={textValue} className={styles.inputStyle}/>
            </FormGroup>
          </form>);
  }
});

class StopTransactionsTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rowsData: [],
            columns:[
                {
                    key: 'stopNum',
                    name: 'Stop #',
                    locked: true,
                    width: 75
                },
                {
                    key: 'transType',
                    name: 'Trans Type',
                    width: 75,
                },
                {
                    key: 'modifiedAt',
                    name: 'Modified At',
                    width: 100
                },
                {
                    key: 'modifiedBy',
                    name: 'Modified By',
                    width: 150
                },
                {
                    key: 'driverOldName',
                    name: 'Driver Old Name',
                    width: 100
                },
                {
                    key: 'driverNewName',
                    name: 'Driver New Name',
                    width: 100
                },
                {
                    key: 'oldTractorID',
                    name: 'Old Tractor ID',
                    width: 100
                },
                {
                    key: 'newTractorID',
                    name: 'New Tractor ID',
                    width: 100
                },
                {
                    key: 'newStopNo',
                    name: 'New Stop No',
                    width: 75
                },
                {
                    key: 'newActArrival',
                    name: 'New Actual ARRV',
                    width: 100
                },
                {
                    key: 'newActDept',
                    name: 'New Actual DEPT',
                    width: 100
                },
                {
                    key: 'oldPlanArrival',
                    name: 'Old Plan ARRV',
                    width: 100
                },
                {
                    key: 'newPlanArrival',
                    name: 'New Plan ARRV',
                    width: 100
                },
                {
                    key: 'oldPlanDept',
                    name: 'Old Plan DEPT',
                    width: 100
                },
                {
                    key: 'newPlanDept',
                    name: 'New Plan DEPT',
                    width: 100
                },                
                {
                    key: 'oldStopDelay',
                    name: 'Old Stop Delay',
                    width: 100
                },
                {
                    key: 'newStopDelay',
                    name: 'New Stop Delay',
                    width: 100
                },
                {
                    key: 'oldRouteDelay',
                    name: 'Old Route Delay',
                    width: 100
                },
                {
                    key: 'newRouteDelay',
                    name: 'New Route Delay',
                    width: 100
                },
                {
                    key: 'expectionOld',
                    name: 'Expection Flag Old',
                    width: 100
                },
                {
                    key: 'expectionNew',
                    name: 'Expection Flag New',
                    width: 100
                },
                {
                    key: 'stopCmnt',
                    name: 'Stop Comment',
                    width: 100
                },
                {
                    key: 'routeCmnt',
                    name: 'Route Comment',
                    width: 100
                }
            ]
        };
    }
    componentDidMount = () => {
     this.createRows();
	}
    createRows=()=>{
        let rows = [];
        for (let i = 1; i <= 5; i++) {
            rows.push({
                id: i,
                stopNum: ' ',
                transType: ' ',
                modifiedAt: ' ',
                modifiedBy: ' ',
                driverOldName: ' ',
                driverNewName: ' ',
                oldTractorID: ' ',
                newTractorID: ' ',
                newStopNo: ' ',
                newActArrival: ' ',
                newActDept: ' ',
                oldPlanArrival: ' ',
                newPlanArrival: ' ',
                oldPlanDept: ' ',
                newPlanDept: ' ',
                oldStopDelay: ' ',
                newStopDelay: ' ',
                oldRouteDelay: ' ',
                newRouteDelay: ' ',
                expectionOld: ' ' ,
                expectionNew: ' ',
                stopCmnt: ' ',
                routeCmnt: ' '            
            });
        }
         this.setState({ rowsData: rows });
    }

    rowGetter = rowNumber => this.state.rowsData[rowNumber];

    render(){
        return(<ReactDataGrid
        enableCellSelect={true}
        columns={this.state.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rowsData.length}
        minHeight={250} 
        headerRowHeight={50} />);
    }
}

class EditModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modalHeader : this.props.modalContext,
            opcoOrRoute : this.props.routeNo
        };
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.modalContext != undefined && nextProps.modalContext != null){
            this.setState({ modalHeader: nextProps.modalContext });
            if(nextProps.modalContext == 0){
                if(nextProps.opcoNo != undefined && nextProps.opcoNo != null){
                    this.setState({ opcoOrRoute: nextProps.opcoNo });
                }
            } else if(nextProps.modalContext == 1){
                if(nextProps.routeNo != undefined && nextProps.routeNo != null){
                    this.setState({ opcoOrRoute: nextProps.routeNo });
                }
            }  
        }      
    }
    render(){
        const headerValues = ['Add/Edit OPCO Comment: OPCO ', 'Stop Edit Transactions - Route # ']
        const headerval = headerValues[this.state.modalHeader] + this.state.opcoOrRoute;
        return(<Modal {...this.props} className={styles.modalAlign}>
            <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>{headerval}</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            {(this.state.modalHeader == 0) && <FormGroup controlId="commentArea">
                <FormControl componentClass="textarea" placeholder="OPCO Comments" className={styles.opcoComment} />
            </FormGroup>}
            {(this.state.modalHeader == 1) && <div> 
                <StopTransactionsTable /> </div>}
          </Modal.Body>
         { (this.state.modalHeader == 0) && <Modal.Footer>
            <div className={styles.divBtns}>
            <Button bsStyle="success" className={styles.editButns}>Save</Button>
            <Button className={cx(styles.editButns, styles.greybutn)} onClick={this.props.onHide}>Cancel</Button>
            </div>
          </Modal.Footer>}
        </Modal>);
    }
}
const DropDownListFormatter = React.createClass({
  propTypes: {
    // value: React.PropTypes.string.isRequired
  },
  render() {      
    // const textValue = (this.props.value ? this.props.value : '');
    const numbers = [1, 2, 3, 4, 5];
    return (<DropdownButton bsStyle="default" title="1" id="newStpVal">
                {numbers.map((number) =>
                  <MenuItem key={number.toString()} eventKey={number.toString()}>{number}</MenuItem>)}
            </DropdownButton>);
  }
});
const titles = ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.'];

class RouteDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            routeNum : '',
            showModal: false,
            modalContext: 0            
        };
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.routeNo != undefined && nextProps.routeNo != null){
            this.setState({ routeNum: nextProps.routeNo });
        }
    }
    closeModal=()=>{
        this.setState({ showModal: false });
        this.setState({ modalContext: 0 });
    }
    openComments=()=>{
        this.setState({ showModal: true });
        this.setState({ modalContext: 0 });
    }
    openTransactions=()=>{
        this.setState({ showModal: true });
        this.setState({ modalContext: 1 });
    }
    render() {
         return (<div className={styles.editRouteDiv}>
                   <Row className={styles.noMargin}> 
                       <span>Edit Route # {this.state.routeNum}</span>
                       <span className={"pull-right"}>Last Modified By: Alex John</span>
                   </Row>
                   <hr/>
                   <Row className={styles.noMargin}>
                       <Col xs={6} sm={4} md={4} lg={4} className={styles.noPadding}>
                            <div className="">
                                <span>Driver Name</span>
                                <form>
                                    <FormGroup controlId="driverName" className={styles.pt5}>
                                        <FormControl type="text" value="Jeffry George" className={styles.inputStyle}/>
                                    </FormGroup>
                                </form>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={4} className={styles.noPadding}>
                            <div className="">
                                <span>Tractor ID</span>
                                <form>
                                    <FormGroup controlId="tractorId" className={styles.pt5} >
                                        <FormControl type="text" value="563248" className={styles.inputStyle}/>
                                    </FormGroup>
                                </form>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={4} className={styles.noPadding}>
                            <div className="">
                                <span>Delay (mins)</span>
                                <form>
                                    <FormGroup controlId="drivername" className={styles.pt5}>
                                        <FormControl type="text" value="55" className={styles.inputStyle}/>
                                    </FormGroup>
                                </form>
                            </div>
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8} className={styles.noPadding}>
                            <div className="">
                                <span>Comment</span>
                                <form>
                                    <FormGroup controlId="comment" className={styles.pt5}>
                                        <FormControl componentClass="textarea" placeholder="Enter Comments" className={styles.commentSection}/>
                                    </FormGroup>
                                </form>
                            </div>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} className={styles.noPadding}>
                            <div className={styles.pt10}>
                                <Button bsStyle="link" className={cx(styles.dispBlk, styles.editRouteLinks)} onClick={this.openComments}>Add OPCO Comment</Button>
                                <Button bsStyle="link" className={styles.editRouteLinks} onClick={this.openTransactions}>Transactions</Button>
                            </div>
                        </Col>
                   </Row>    
                   <hr/>
                   <EditModal show={this.state.showModal} onHide={this.closeModal} modalContext={this.state.modalContext} {...this.props}/>
            </div>);
    }
}

export class EditRouteTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            routeData: [], 
            enableDelete: false,
            routeNo: '', 
            rowsCount:0,
            columns:[
                {
                    key: 'stopNum',
                    name: 'Stop #',
                    locked: true,
                    width: 50
                },
                {
                    key: 'customerNum',
                    name: 'Customer #',
                    locked: true,
                    width: 75,
                },
                {
                    key: 'customerName',
                    name: 'Customer Name',
                    width: 200,
                    locked: true,
                    cellClass: styles.leftText
                },
                {
                    key: 'plannedArrival',
                    name: 'Planned Arrival',
                    width: 150
                },
                {
                    key: 'plannedDepature',
                    name: 'Planned Departure',
                    width: 150
                },
                {
                    key: 'projectedArrival',
                    name: 'Projected Arrival',
                    width: 150
                },
                {
                    key: 'projectedDepature',
                    name: 'Projected Departure',
                    width: 100
                },
                {
                    key: 'actualArrival',
                    name: 'Actual Arrival',
                    width: 100,
                    formatter: TextBoxFormatter
                },
                {
                    key: 'autualDepature',
                    name: 'Actual Departure',
                    width: 100,
                    formatter: TextBoxFormatter
                },
                {
                    key: 'newStop',
                    name: 'New Stop',
                    width: 100,
                    formatter: DropDownListFormatter,
                    cellClass: styles.testOverflw
                },
                {
                    key: 'npArrival',
                    name: 'NP Arrival',
                    width: 100,
                    formatter: TextBoxFormatter
                },
                {
                    key: 'npDepature',
                    name: 'NP Departure',
                    width: 100,
                    formatter: TextBoxFormatter
                },
                {
                    key: 'stopDelay',
                    name: 'Stop Delay',
                    width: 100,
                    formatter: TextBoxFormatter
                },
                {
                    key: 'stopComments',
                    name: 'Stop Comments',
                    width: 200,
                    formatter: TextBoxFormatter
                },
                {
                    key: 'expectFlag',
                    name: 'Expect Flag',
                    width: 100,
                    formatter: DropDownListFormatter
                }
                ]
            };
    }
    componentDidMount = () => {     
	}
    componentWillReceiveProps(nextProps) {
        if(nextProps.routeDetailInfo != undefined && nextProps.routeDetailInfo != null
         && nextProps.routeDetailInfo.mapData != undefined && nextProps.routeDetailInfo.mapData != null){
            this.setState({ routeData: nextProps.routeDetailInfo.rows });
            this.setState({ rowsCount: nextProps.routeDetailInfo.rows.length });
            this.setState({ routeNo: nextProps.routeDetailInfo.mapData.routeInfo.routeNo });
        }
    }

    rowGetter = rowNumber => this.state.routeData[rowNumber];
    
    render(){        
        let {dataList} = this.state.routeData ? this.state.routeData : null;
        return(<div>
            <RouteDetails routeNo={this.state.routeNo} {...this.props}/>
            <div className={"text-center"}>
                <ReactDataGrid
                    enableCellSelect={true}
                    columns={this.state.columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rowsCount}
                    minHeight={500} 
                    headerRowHeight={50}/>
            </div>
            <ButtonToolbar className={styles.pt20}>
                <Button className={cx(styles.editButns, styles.greybutn)}>Add Stop</Button>
                <Button className={cx(styles.editButns, styles.resetButn, "pull-right")}>Reset</Button>
                <Button className={cx(styles.editButns, styles.deleteButn, "pull-right")} disabled={!this.state.enableDelete}>Delete</Button>
                <Button className={cx(styles.editButns, styles.greybutn, "pull-right")} onClick={this.props.cancelEdit}>Cancel</Button>
                <Button bsStyle="success" className={cx(styles.editButns, "pull-right")}>Save</Button>
            </ButtonToolbar>
        </div>);
    }
}
export default EditRouteTable;