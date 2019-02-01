import React, { Component } from 'react';
import './Login.css'
import { withRouter } from 'react-router-dom'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
// import {loginUser} from '../APIs/usersAPI'

// const method = 
//   {
//     async login() {
      
//       alert("login")
//     },
//     async loginFacebook()
//     {
//       alert('Ban bam dang nhap facebook')
//     }, 
//     async loginGoogle()
//     {
//       alert('Ban bam dang nhap google')
     
//     }
//   }

  const required = (value) => {
    if (isEmpty(value)) {
        return <span className="form-text text-danger">This field is required</span>;
    }
  }

  const email = (value) => {
    if (!isEmail(value)) {
        return <span className="form-text text-danger">Invalid email format</span>;
    }
  }

  const minLength = (value) => {
    if (value.trim().length < 6) {
        return <span className="form-text text-danger">Password must be at least 6 characters long</span>;
    }
  }

class Login extends Component {
  async onSubmit(e){
    e.preventDefault();
    
    let target = e.target;
    // let value = target.type === 'checkbox' ? target.checked : target.value;

    let email = target.email.value;
    let password = target.password.value;


    await this.form.validateAll();  
    let{loadUser} = this.props;
    

    if ( this.checkBtn.context._errors.length === 0 ) {
        alert(`Your Email is: ${email}. Your Password is: ${password}`);
     await loadUser(email, password);
      let {login} = this.props;
      console.log(login,'login');
      
      
      
      if(login.result === true)
      {
        
        this.props.history.push('/');
       
      }
      else{
        return '';
      }
      
    }
    
}

renderNotify = () =>
{
  if(this.props.messageFail !== '')
  {
    console.log(this.props.messageFail)
    return <div class="alert alert-warning">
    <strong>Warning!</strong> {this.props.messageFail}
  </div>
  }
}


  render() {
   
    return (
        <div className="container login-form">
        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
        <label for="Email">Email: </label>
         
         <Input name='email' placeholder ='Email...'  validations={[required, email]}  />
         <div>{this.props.login.email}</div>

        <label for="email">Password</label>
        <Input type="password" id="password" name="password" placeholder="Your password" validations={[required, minLength] } />
        <div>{this.props.login.password}</div>

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" 
              id="customCheck1"/>
          <label className="custom-control-label" 
              for="customCheck1">Remember password</label>
        </div>

        <div className ="social-media">
        <div className ="icon facebook"><i className="fab fa-facebook-f"></i></div>
        <div className =' facebook-click' ><span>Login with Facebook</span></div>
        </div>
        <div className ="social-media">
        <div className =" icon google"><i className="fab fa-google"></i></div>
        <div className =' google-click'><span>Login with google</span></div>
        </div>

        <button type="submit" className="btn btn-primary login-button" >LOGIN</button>
        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
        </Form>
        {this.renderNotify()}
        </div>
    );
  }
}






export default withRouter(Login) ;
