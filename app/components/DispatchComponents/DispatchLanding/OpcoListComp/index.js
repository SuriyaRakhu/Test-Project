import React,{Components} from 'react';
import styles from '../styles.css';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import cx from "classnames";

export class OpcoListComp extends React.Component{
    constructor(){
        super()
        this.state = {
            opcos : []
        };
    }
    render(){
        return(<div className={styles.opcoList}>
                <DropdownButton bsStyle="default" title="Select OPCO" id="selectOpco">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
        </div>);
    }
}
export default OpcoListComp;