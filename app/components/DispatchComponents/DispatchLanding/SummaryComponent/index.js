import React,{Components} from 'react';
import styles from '../styles.css';
import PageHeader from '../PageHeader';
import OpcoListComp from '../OpcoListComp';
import RouteDetailsCard from '../RouteDetailsCard';
import cx from "classnames";
    
export class SummaryComponent extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<div className={cx(styles.routeContainer, "container")}>
               {/*<PageHeader/>*/}
                <OpcoListComp/>
                <RouteDetailsCard {...this.props}/>
        </div>);
    }
}
export default SummaryComponent;