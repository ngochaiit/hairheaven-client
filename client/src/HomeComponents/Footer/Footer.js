import React, { Component } from 'react';

import './footer.css';
class Footer extends Component {
  render() {
      
    return (
      <footer>
          <div className="container">
        <div className="row">
        <div className="col-lg-7 col-md-7 col-xs-12 col-sm-12 col-left">
            <p className ='footer-text'>Viện Tóc Hair Heaven - Nơi Mái Tóc Được Yêu Thương</p>
            <p className ='footer-text'>429 Trương Định, Q.Hoàng Mai, TP Hà Nội</p>
            <p className ='footer-text'>Giấy Chứng Nhận Kinh Doanh: 010.7467.693</p>
            <p className ='footer-text'>Ngày Cấp: 10/10/2018</p>
            <p className ='footer-text'>Nơi Cấp: Sở Kế Hoạch Đầu Tư Thành Phố Hà Nội</p>
            <p className ='footer-text timework'>Giờ Phục Vụ: 8h30 - 21h00(kể cả thứ 7 và chủ nhật)</p>
        </div>

         <div className="col-lg-5 col-md-5 col-xs-12 col-sm-12  col-right">
            <p className ='footer-text'>Trải nghiệm dịch vụ chưa từng có tại Hair Heaven</p>
            <p className ='footer-text'>Chấp nhận thanh toán qua thẻ tín dụng</p>
            <p className ='footer-text'>Hair Heaven - Nơi mái tóc được yêu thương</p>
            </div>
        </div>
          </div>

          <div className = 'col-lg-12 col-md-12 col-xs-12 col-sm-12 '>
          <p className ='footer-text copyright' >Copyright 2018 Hair Heaven, Inc .All Rights Reserveds</p></div>
      </footer>

    );
  }
}

export default Footer;
