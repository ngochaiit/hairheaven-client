import React, { Component } from 'react';

class Commitment extends Component {
  render() {
    return (
      <section className = 'commitment'>
          <div className="col-lg-7 col-md-12 col-xs-12 col-sm-12 col-left">
          <h1>Cam kết HairHeaven Care</h1>
          <div className = 'content-care'>
          <div className="col-lg-3 col-md-3 col-xs-3 col-sm-3 fix_col active-box">
              <div className = 'circle-active'>
              <p className = 'fix-text text active'>7</p>
              <p className = 'text active'>ngay</p>
              </div>
              <p className = 'text'>Chinh Sua Toc</p>
            <p className = 'text'>Mien Phi</p>
          </div>
          <div className="col-lg-3 col-md-3 col-xs-3 col-sm-3 fix_col">
              <div className = 'circle'>
              <p className = 'fix-text text'>3</p>
              <p className = 'text'>ngay</p>
              </div>
              <p className = 'text'>Chinh Sua Toc</p>
            <p className = 'text'>Mien Phi</p>
          </div>
          <div className="col-lg-3 col-md-3 col-xs-3 col-sm-3 fix_col">
              <div className = 'circle'>
              <p className = 'fix-text text'>7</p>
              <p className = 'text'>ngay</p>
              </div>
              <p className = 'text'>Chinh Sua Toc</p>
            <p className = 'text'>Mien Phi</p>
          </div>
          <div className="col-lg-3 col-md-3 col-xs-3 col-sm-3 fix_col">
              <div className = 'circle'>
              <p className = 'fix-text text'>7</p>
              <p className = 'text'>ngay</p>
              </div>
              <p className = 'text'>Chinh Sua Toc</p>
            <p className = 'text'>Mien Phi</p>
          </div>
          
              
          </div>
          <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-fixhair ">
          <p className = 'text'>Nếu anh chưa hài lòng về kiểu tóc sau khi về nhà vì bất kỳ lý do gì, 30Shine sẽ hỗ trợ anh sửa lại mái tóc đó hoàn toàn miễn phí trong vòng 7 ngày. Anh đặt lịch bình thường và báo sửa tóc với lễ tân</p>
          <p className = 'text'><span>Ap Dung: </span>Salon bất kỳ toàn hệ thống 30Shine.</p>
              
          </div>
        
          </div>
        
        <div className="col-lg-5 col-md-12 col-xs-12 col-sm-12 col-right">
            <h1>Danh Sách Cửa Hàng(9h- 21h)</h1>

            <div className="listsalon col-lg-12 col-sm-12 col-md-12 col-xs-12">
            <div className="form-group information-contact">
              
              <select className="form-control text" name="" id="">
                
                <option>T.P HA NOI</option>
               
                
              </select>
              
              
            </div>

            <div className = 'list-tele'>
              <div className = "detail">
              <div className = "index">1</div>
              <div className = "location">429 Truong Dinh, Q.Hoang Mai, T.P Ha Noi</div>
              <div className = 'telephone'><div className ='phone-cricle'><i className="fas fa-phone"></i></div><div className = 'phone'>094.292.4035</div></div></div>
              </div>

            <div className = 'list-tele'>
              <div className = "detail">
              <div className = "index">2</div>
              <div className = "location">198c Vinh Hung, P.Linh Nam,T.P Ha Noi</div>
              <div className = 'telephone'><div className ='phone-cricle'><i className="fas fa-phone"></i></div><div className = 'phone'>094.292.4035</div></div></div>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Commitment;
