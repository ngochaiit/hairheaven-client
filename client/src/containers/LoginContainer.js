import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Login from '../Admin/Login'
import {loadUser} from '../redux/actions/index'

class LoginContainer extends Component {
 
 render() {
     var {login,loadUser, messageFail} = this.props;
     
     console.log(login,'dumb');
     console.log(messageFail,'123345')
     
    return (
        <Login loadUser={loadUser} login ={login} messageFail = {messageFail}/>
    );
  }
}




const mapStateToProps = state =>
{
  return{
    login : state.LoginReducer.user,
    messageFail: state.LoginReducer.message,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadUser : loadUser(dispatch),
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
