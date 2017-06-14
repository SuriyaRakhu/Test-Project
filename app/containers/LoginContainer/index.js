/*
 *
 * LoginContainer
 *
 */
import React from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login'
import selectNavigationContainer from './selectors';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state ={
      username:"",
      password:"",
      usernameStatus:null,
      passwordStatus:null
    }
  }
  componentDidMount(){
  }
  onChangeUsername = (e) =>{
    this.setState({username:e.target.value});
    if(this.state.username.length>6)
      this.setState({usernameStatus:"success"});
    else
      this.setState({usernameStatus:"error"});
  }
  onChangePassword = (e) => {
    this.setState({password:e.target.value});
    if(this.state.password.length>6)
      this.setState({passwordStatus:"success"});
    else
      this.setState({passwordStatus:"error"});    
  }
  loginClick = () =>{    
    browserHistory.push('/dispatch');
  }
  render() {
    return (

      <Login 
        changeUsername={this.onChangeUsername} 
        username={this.state.username} 
        changePassword={this.onChangePassword} 
        password={this.state.password} 
        usernameStatus={this.state.usernameStatus}
        passwordStatus={this.state.passwordStatus}
        loginClick = {this.loginClick}
      />

    );
  }
}

const mapStateToProps = selectNavigationContainer();
export default connect(mapStateToProps)(LoginContainer);
//export default LoginContainer;
