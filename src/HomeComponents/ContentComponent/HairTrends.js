import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <section>
         <h1>LOOK BOOK THOI TRANG HAIRHEAVEN</h1>
       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
           <div className = 'container-hair-style'>
           <div className = "btn button-left">
           <i className="fas fa-angle-left"></i>
           </div>
              
           <div className = 'group-image'>
           <div className = 'imagestyle'>
           <img className = "img-responsive" src = "https://30shine.com/images/BestHair/Thumb_sport.jpg" alt ="sport" />
           <p></p>
           </div>
           <p>Kieu toc cua Pro</p>
           </div>
           <div className = 'group-image'>
           <div className = 'imagestyle'>
           <img className = "img-responsive" src = "https://30shine.com/images/BestHair/lookbook-sidepart.jpg" alt="sidepart" />
           <p></p>
           </div>
           <p>Kieu toc cua Pro</p>
           </div>
           <div className = "btn button-right">
           <i className="fas fa-angle-right"></i>
           </div>
           </div>
       </div>

      </section>
    );
  }
}

export default Content;
