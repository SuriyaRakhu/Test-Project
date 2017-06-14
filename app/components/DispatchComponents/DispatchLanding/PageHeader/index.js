import React,{Components} from 'react';
import styles from '../styles.css';
import {Button} from 'react-bootstrap';
import cx from "classnames";

export class PageHeader extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<div className={styles.summaryTitle}>
                    <Button className={cx(styles.inlnblk, "pull-right")}>
                        <i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>
                    </Button>
                    <Button className={styles.inlnblk}>
                        <i className="glyphicon glyphicon-menu-hamburger"></i>
                    </Button>
                    <div className={cx(styles.inlnblk, "text-uppercase")}>
                        <h3>Dashboard</h3>
                    </div>
            </div>);
    }
}
export default PageHeader;