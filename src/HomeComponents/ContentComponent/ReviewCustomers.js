import React, { Component } from 'react';

class ReviewCustomers  extends Component {
  render() {
    return (
      <section>
         <h1>KHÁCH HÀNG NHẬN XÉT HAIR HEAVEN</h1>
       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
           <div className = 'container-hair-style'>
           <div className = "btn button-left">
           <i className="fas fa-angle-left"></i>
           </div>
              
           <div className = 'group-image-review'>
           <div className = 'imagestyle'>
           <img className = "img-responsive" src = "https://30shine.com/images/BestHair/pewpew-min.jpg" alt ="bestHair" />
           <p></p>
           </div>
           <h5>Vinh Vật Vờ - Blogger</h5>
           <p>Kieu toc cua Pro</p>
           </div>
           <div className = 'group-image-review'>
           <div className = 'imagestyle'>
           <img className = "img-responsive" src = "https://30shine.com/images/BestHair/b-ray-min.jpg" alt='bestHair'/>
           <p></p>
           </div>
           <h5>Anh Tuấn - Diễn viên</h5>
           <p>Kieu toc cua Pro</p>
           </div>

            <div className = 'group-image-review'>
           <div className = 'imagestyle'>
           <img className = "img-responsive" src = "https://30shine.com/images/BestHair/massew-min.jpg" alt ="bestHair"/>
           <p></p>
           </div>
           <h5>Vương Anh - Diễn viên</h5>
           <p>Kieu toc cua Pro</p>
           </div>
           <div className = "btn button-right">
           <i className="fas fa-angle-right"></i>
           </div>
           </div>
           <p className = "text">Xem Them</p>
           <p className = 'angle-down'><i className="fas fa-angle-down"></i></p>
       </div>

      </section>
    );
  }
}

export default ReviewCustomers;
