import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Login from '../Admin/Login'
import {loadUser} from '../redux/actions/index'

class LoginContainer extends Component {
 
 render() {
     var {login,loadUser} = this.props;
     console.log(login); 
    return (
        <Login loadUser={loadUser} login ={login}/>
    );
  }
}




const mapStateToProps = state =>
{
  return{
    login : state.LoginReducer.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadUser : loadUser(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
