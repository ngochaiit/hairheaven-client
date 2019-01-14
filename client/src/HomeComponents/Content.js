import React, { Component } from 'react';
import Prices from './ContentComponent/Prices'
import HairHeavenNews from './ContentComponent/HairHeavenNews'

import HairTrends from './ContentComponent/HairTrends'
import ImageGridList from './ContentComponent/HairHeavenImage'
import VideoList from './ContentComponent/VideoList'
import ReviewCustomers from './ContentComponent/ReviewCustomers'
import HairHeavenStore from './ContentComponent/HairHeavenStore'
import Commitment from './ContentComponent/Commitment'
import './Content.css';

class Content extends Component {
  render() {    
    return (
      <div className="container">
          <Prices/>
          <HairHeavenNews/>
          <HairTrends/>
          { <ImageGridList/> }
          <VideoList/>
          <ReviewCustomers/>
           <HairHeavenStore/>
           <Commitment/>
      </div>
    );
  }
}

export default Content;
