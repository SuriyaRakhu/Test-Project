/**
*
* LOgin functional component.
* Functional Components - https://facebook.github.io/react/docs/components-and-props.html
*
*/

import React from 'react';
import styles from './styles.css';
import { Button,Form,FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';
import icon from "../../assets/Sysco_White.png";

class Login extends React.Component {
render(){
 return (
   <div>
   <h2 className={styles.heading}>My <img src={icon}/> Truck</h2>
   <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardHeader}><h4 className={styles.cardTitle}>Log into My Sysco Truck</h4></div>
                <form>
                  <FormGroup className={styles.userName} validationState={this.props.usernameStatus}>
                    {/*<ControlLabel>Username</ControlLabel>*/}
                    <FormControl
                      type="text"
                      className={styles.widthFull}
                      placeholder="Enter username"
                      onChange={this.props.changeUsername}
                      value={this.props.username}
                    />                   
                  </FormGroup>
                  <FormGroup className={styles.password} validationState={this.props.passwordStatus}>
                    {/*<ControlLabel>Password</ControlLabel>*/}
                    <FormControl
                      type="password"
                      className={styles.widthFull}
                      placeholder="Enter password"
                      onChange={this.props.changePassword}
                      value={this.props.password}
                    />                   
                  </FormGroup>
                  <div className={styles.buttonStyle}>
                    <Button className={styles.loginButton} onClick={this.props.loginClick}>LOGIN</Button>  
                  </div>             
                </form>
          </div>
    </div>
    </div>
  );
}
}
export default Login;