import React,{Components} from 'react';
import styles from '../styles.css';
import {Col} from 'react-bootstrap';
import cx from "classnames";

class CircularProgress extends React.Component {
    render() {
        const radius = this.props.radius - this.props.strokeWidth / 2;
        const width = this.props.radius * 2;
        const height = this.props.radius * 2;
        /*const viewBox = "0 0 "+(this.props.radius * 2)+" "+(this.props.radius * 2);*/
        const viewBox = "0 0 200 200";
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * this.props.percentage / 100;
        const strokeWdth = this.props.strokeWidth+"px";
        var circleShade = "";
        var textColor = "";
        if(this.props.percentage>=75){
            circleShade = styles.greenColor;
            textColor = styles.greenText;
        }
        else if(this.props.percentage<75 && this.props.percentage>=20){
            circleShade = styles.orangeColor;
            textColor = styles.orangeText;
        }
        else if(this.props.percentage>=0 && this.props.percentage<20){
            circleShade = styles.greyColor;
            textColor = styles.greyText;
        }
        else{
            circleShade = styles.greyColor;
        }
        return (<div className={styles.svgContainer}>
                    <svg className={cx(styles.CircularProgress, styles.svgContent)} viewBox={viewBox} preserveAspectRatio="xMidYMin slice"> 
                        {/*<text className={cx(styles.CircularProgressText, styles.greyText, styles.dontWrap, styles.font12)} x="75%" y="0%" dy="2em" dx="-4em" textAnchor="middle">{this.props.status}</text>*/}
                        <circle className={styles.CircularProgressBg} cx="50%" cy="50%" r={radius} strokeWidth={strokeWdth} />
                        <circle className={cx(styles.CircularProgressFg, circleShade)} cx="50%" cy="50%" r={radius} strokeWidth={strokeWdth} style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }} />
                        <text className={cx(styles.CircularProgressText, textColor)} x="50%" y="50%" dy=".4em" textAnchor="middle"> {this.props.percentage}% </text>
                        <text className={cx(styles.CircularProgressText, styles.greyText, styles.font25)} x="110%" y="80%" dy="1.2em" dx="-4em" textAnchor="middle"> 10 </text>
                    </svg>
            </div>);
    }
}

export class ChartComponent extends React.Component{
    render(){
        var divText = "";
        const statusPassed = this.props.statusName;
        if(statusPassed == "delivered"){
            divText = "delay : 10";
        } else if(statusPassed == "en-route"){
            divText = "deviated stops : 5";
        } else if(statusPassed == "shipping soon"){
            divText = "incomplete stops : 3";
        }
        return(
        <Col xs={4} sm={4} md={4} lg={4} className={cx(styles.totalRoutes, styles.inlnblk)}>
            <div className={cx(styles.chartVal, "text-center", "text-uppercase")}>
                <div className={styles.pt10}>
                    <span className={cx(styles.dontWrap, styles.font12)}>{statusPassed}</span>
                </div>
                <CircularProgress strokeWidth="5" radius="55" percentage={this.props.percentVal} status={this.props.statusName}/>
                <div className={styles.stopsDetails}>
                    <span className={styles.font12}>{divText}</span>
                </div>
            </div>
         </Col>
        );
    }
}
export default ChartComponent;