import React, { Component } from 'react';

import './App.css';
import Content from './HomeComponents/Content';
import Footer from './HomeComponents/Footer/Footer';
import './responsive.css';
import Carousel from './HomeComponents/header/Carousel'


class Home extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        <Content/>
        <Footer/>

      </div>
    );
  }
}

export default Home;
