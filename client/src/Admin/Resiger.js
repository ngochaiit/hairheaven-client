import React, { Component } from 'react';
import './Login.css'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';





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

  const password = (value, props, components) => {
    let password = document.getElementById('password').value;
    if (value !== password ) { 
      return <span className="form-text text-danger">Passwords are not equal.</span>
    }
    
  };
  



class Resiger extends Component {
  

async onSubmit(e){
    e.preventDefault();
    let target = e.target;
    let {signUpUser} = this.props;
  ;

   await this.form.validateAll();
   let name = target.name.value;
//   let value = target.type === 'checkbox' ? target.checked : target.value;
    let email = target.email.value;
    let password = target.password.value
    

    if ( this.checkBtn.context._errors.length === 0 ) {
        alert('Gui thong tin den NodeJs Server')
       await signUpUser(name, email, password)
       let {signUpSuccess} = this.props;
       console.log('111')
      console.log(signUpSuccess)
    //    if(registerResponse.result === true)
    //    {
    //     alert(`${registerResponse.message} ban da thanh cong`)
        
    //    }
    //    else if(registerResponse.result === false){
    //     alert(`${registerResponse.message} ban da that bai khi dang ki`)
    //    }
    }
    
}


  render() {
    return (
        <div className="container login-form">
        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
        <label htmlFor="name">name: </label>
         
         <Input name='name' placeholder ='fill your full name'  validations={[required]}   />
         
        <label htmlFor="Email">Email: </label>
         
         <Input name='email' placeholder ='Email...'  validations={[required, email]}    />
         

        <label htmlFor="password">Password</label>
        <Input type="password" id="password" name="password" placeholder="Your password" validations={[required, minLength] }   />
        
        <label htmlFor="password">Resiger Password</label>
        <Input type="password" id="repeatPassword" name="repeatPassword" placeholder="Repeat your password" validations={[required, minLength, password] } />
        

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" 
              id="customCheck1"/>
          <label className="custom-control-label" 
              htmlFor="customCheck1">Remember password</label>
        </div>
        <button type="submit" className="btn btn-primary login-button" >Resiger</button>
        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
        </Form>

        </div>
    );
  }
}






export default Resiger;
