import React, { Component } from 'react';
import Carousel from './header/Carousel'
import {  Route, Link,  } from "react-router-dom";
import './header.css'


const menus = [
  {
    name: 'Trang Chủ',
    to: '/',
    exact: true
  },
  {
    name:' Dịch Vụ',
    to:'/login',
    exact: false
  },
  {
    name: 'HairHeaven Member',
    to: '/resiger',
    exact: false
  },
  {
    name: 'Blog',
    to: '/resiger',
    exact: false
  },
  {
    name: 'Tuyển Dụng',
    to: '/resiger',
    exact: false
  }
]





const MenuLink = ({label, to, activeOnlyWhenExact }) =>
{
  return (
    <Route path = {to} exact = {activeOnlyWhenExact} children = {({match}) => {
      var active = match ? 'list-link active ' : 'list-link';
      return (
        <li className={active}>
    <Link to={to} >{label}</Link>
    </li>
      )
    }}

    />
  )
}




class Header extends Component {
  render() {
    return(
     
       <header>
    <div className ='Logo'>
    <div className = 'frame-img'><img src ="http://hocviendaotaotoc.com/wp-content/uploads/2018/12/cropped-logo1.png" alt ="logo"/></div>
    <div className ='group-account-button'>
    <Link name="login" id="login-button" className="btn btnLogin btn-primary" to='/login' role="button">Login</Link>
    <Link name="register" id="register-button" className="btn btnRegister btn-success" to='/resiger'  role="button">register</Link>
    </div>
    </div>
      <nav className= " bg-black ">
      <li className="list-link ">
      <a href="about"><i className="fas fa-home"></i></a>
    </li>

    {this.showMenus(menus)}  
    
    
   <div className="dropdown">
     <div className= "dropdown-toggle" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
         aria-expanded="false">
           HairHeaven Store
         </div>
     <div className="dropdown-menu" aria-labelledby="triggerId">
       <a className="dropdown-item" href="about">Action</a>
       <a className="dropdown-item disabled" href="about">Disabled action</a>
       <h6 className="dropdown-header">Section header</h6>
       <a className="dropdown-item" href="about">Action</a>
       <div className="dropdown-divider"></div>
       <a className="dropdown-item" href="about">After divider action</a>
     </div>
   </div>
</nav>

    
         
      <Carousel/>

       </header>
    
    )
}

showMenus = (menus) =>
{
  var result = null;

  if(menus.length > 0)
  {
    result = menus.map((menu, index) =>
    {
      return (
        <MenuLink
        key = {index}
        label = {menu.name}
        to = {menu.to}
        activeOnlyWhenExact = {menu.exact}
        />
      )
    })
  }
  return result;
}



}


export default Header;