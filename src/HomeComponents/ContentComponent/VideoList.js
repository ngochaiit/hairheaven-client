import React, { Component } from 'react';

class VideoList extends Component {
  render() {
    return (
      <section>
         <div className = 'Title'>
         <h1>30 Shine Channel</h1>
         <div className="form-group">
           
           <select className="form-control" name="" id="dropdown-video">
             <option>Sắp Xếp</option>
             <option>Mới Nhất</option>
             <option>Xem Nhiều Nhất</option>
             <option>Yêu Thích Nhất</option>
           </select>
         </div>
         </div>
     <div className = "media-group">
     <div className="media">
       <a className="d-flex align-self-bottom play-video"  href = "about">
       <span></span>
           <img src="https://i.ytimg.com/vi/DV98DkrxJ44/hqdefault.jpg" alt=""/>
       </a>
       <div className="media-body">
         <h5>Media heading</h5>
         <p>Media text</p>
       </div>
     </div>
     <div className="media">
       <a className="d-flex align-self-bottom play-video"  href = "about">
       <span></span>
           <img src="https://i.ytimg.com/vi/iFN3uQLdMVM/hqdefault.jpg" alt=""/>
       </a>
       <div className="media-body">
         <h5>Media heading</h5>
         <p>Media text</p>
       </div>
     </div>

     <div className="media">
       <a className="d-flex align-self-bottom play-video"  href = "about">
       <span></span>
           <img src="https://i.ytimg.com/vi/DXEK9pL7vro/hqdefault.jpg" alt=""/>
       </a>
       <div className="media-body">
         <h5>Media heading</h5>
         <p>Media text</p>
       </div>
     </div>

     <div className="media">
       <a className="d-flex align-self-bottom play-video"  href = "about">
       <span></span>
           <img src="https://i.ytimg.com/vi/rKi7wnfyN1k/hqdefault.jpg" alt=""/>
       </a>
       <div className="media-body">
         <h5>Media heading</h5>
         <p>Media text</p>
       </div>
     </div>
     </div>
     <div className = "yt-sub">
     <p>SUBSCRIBE HAIR HEAVEN ĐỂ ĐẸP  HƠN MỖI NGÀY! >></p>
     <a href="video">
       <img src='https://www.seoclerk.com/pics/want58549-1k18A11517785670.jpg' alt="about"/>
     </a>
     </div>
      </section>
    );
  }
}

export default VideoList;
