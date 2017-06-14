import React,{Components} from 'react';
import styles from './styles.css';
import ReactDataGrid from 'react-data-grid';
import {Editors, Formatters} from 'react-data-grid-addons';
import {Button, Row} from 'react-bootstrap';
import cx from "classnames";

export class CustomersRoute extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            customerRoutes: this.props.customerRoutesData, 
            routeNo: null, 
            rowsCount:0,
            columns:[
                {
                    key: 'routeNo',
                    name: 'ROUTE',
                    locked: true,
                    width: 75                    
                },
                {
                    key: 'stopNum',
                    name: 'Stop',
                    locked: true,
                    width: 75
                },
                {
                    key: 'customerNum',
                    name: 'Customer',
                    locked: true,
                    width: 100,
                },
                {
                    key: 'customerName',
                    name: 'Customer Name',
                    width: 300,
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
                    width: 150,
                    editable: true
                },
                {
                    key: 'projectedDepature',
                    name: 'Projected Departure',
                    width: 150,
                    editable: true
                },
                {
                    key: 'actualArrival',
                    name: 'Actual Arrival',
                    width: 150
                },
                {
                    key: 'autualDepature',
                    name: 'Actual Departure',
                    width: 150
                },
                {
                    key: 'caseCount',
                    name: 'Case Count',
                    width: 75
                },
                {
                    key: 'offDay',
                    name: 'Off day',
                    width: 75
                },
                {
                    key: 'deliveryMethod',
                    name: 'Dl Type',
                    width: 75
                },
                {
                    key: 'routeToNumber',
                    name: 'Route To',
                    width: 75
                },
                {
                    key: 'custDelWin1',
                    name: 'Customer Delivery Windows',
                    width: 150
                },
                {
                    key: 'openTime',
                    name: 'Open Time',
                    width: 75
                },
                {
                    key: 'closeTime',
                    name: 'Close Time',
                    width: 75
                },
                {
                    key: 'deliveryDate',
                    name: 'Delivery Date',
                    width: 100
                }
                ]
            };        
    }
    componentDidMount = () => {
        //this.props.getCustomerRoutes();
	}
    componentWillReceiveProps(nextProps) {
        if(nextProps.customerRoutesData != undefined && nextProps.customerRoutesData != null && nextProps.customerRoutesData.mapData != undefined && nextProps.customerRoutesData.mapData != null){
            this.setState({ routeNo: nextProps.customerRoutesData.mapData.routeInfo.routeNo });  
            this.setState({ customerRoutes: nextProps.customerRoutesData.rows });
            this.setState({ rowsCount: nextProps.customerRoutesData.rows.length });
        }
    }

    rowGetter = rowNumber => this.state.customerRoutes[rowNumber];
    
    handleGridRowsUpdated = (fromRow, toRow, updated) => { 
        /*let rows = this.state.customerRoutes.slice();

        for (let i = fromRow.fromRow; i <= fromRow.toRow; i++) {
        let rowToUpdate = rows[i];
        let updatedRow = update(rowToUpdate, {$merge: fromRow.updated});
        rows[i] = updatedRow;
        }

        this.setState({ customerRoutes: rows });*/
    }

    render(){
        return(<div className={styles.tableDiv}>
                <Row className={styles.infoStyle}>
                    <span className={styles.leftText}> Correct the actual arrival/ departure time only if multiple customers were concluded to same physical location. </span>
                    <div className={cx(styles.correctActTimeBtn, "pull-right")}>
                        <Button bsStyle="success" onClick={this.props.correctActualTime}>Correct Actual Time</Button>
                    </div>
                </Row>
                <div className="text-center"><ReactDataGrid 
                enableCellSelect={true}
                columns={this.state.columns}
                rowGetter={this.rowGetter}
                rowsCount={this.state.rowsCount}
                minHeight={500} 
                headerRowHeight={50}
                onGridRowsUpdated={this.handleGridRowsUpdated} />
                </div>
            </div>);
    }
}
export default CustomersRoute;