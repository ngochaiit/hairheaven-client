import React, { Component } from 'react';

import './App.css';
import Content from './HomeComponents/Content';
import Footer from './HomeComponents/Footer/Footer';
import './responsive.css';


class Home extends Component {
  render() {
    return (
      <div>
        <Content/>
        <Footer/>

      </div>
    );
  }
}

export default Home;
