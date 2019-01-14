import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Register from '../Admin/Resiger'
import {signUpUser} from '../redux/actions/index'

class RegisterContainer extends Component {
 
 render() {
     let {signUpUser, signUpSuccess } = this.props;
    
 
    return (
       <Register signUpUser = {signUpUser} signUpSuccess = {signUpSuccess}/>
    );
  }
}



const mapStateToProps = state =>
{
   return{
    signUpSuccess: state.LoginReducer.signUpSuccess
   }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpUser : signUpUser(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
