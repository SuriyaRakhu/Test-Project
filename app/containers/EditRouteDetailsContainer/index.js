import React from 'react';
import styles from './styles.css';
import cx from "classnames";
import selectEditRouteDetailsContainerDomain from './selectors';
import {getRouteDetail} from './actions';
import EditRouteTable from '../../components/DispatchComponents/EditRouteTable';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';


export class EditRouteDetailsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            selected:0
        };
    }
    componentDidMount = () => {
        // console.log("dispatched action");
		this.props.getRoutesInfo();
	}
    cancelEdit = () =>{    
      browserHistory.push('/home/1');
    }
    render(){
        return(<div className={styles.outerBody}>
        <div className={styles.editRouteBody}>
        <EditRouteTable {...this.props} cancelEdit={this.cancelEdit}/>
      </div> </div>);
    }
}

const mapStateToProps = selectEditRouteDetailsContainerDomain();

function mapDispatchToProps(dispatch) {
  return {
    getRoutesInfo : () => {dispatch(getRouteDetail())}    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRouteDetailsContainer);