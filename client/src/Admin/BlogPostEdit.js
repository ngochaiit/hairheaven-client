import React, { Component } from 'react';
import {updatePost} from '../APIs/usersAPI'
import {withRouter} from 'react-router-dom'



class BlogPostEdit extends Component {


    async onSubmit(e){
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let content = target.content.value;
        let file = e.target.urlImage.files[0];
        let id = this.props.match.params.id;
        console.log(id);
        console.log(file)
        let tokenKey = sessionStorage.getItem('tokenKey');
        if(tokenKey)
        {
          let sendingData=  await updatePost(id, title, content, file, tokenKey)
          console.log(sendingData.message);
        }
       
}
  render() {
    return (
        <div className="col-lg-12">
        <form onSubmit={e => this.onSubmit(e)}  method = 'POST' >
            <div className="form-group">
                <label>Edit Your Title Here</label>
                <input className="form-control" name = 'title'/>
                <p className="help-block">Edit BlogPost Here.</p>
            </div>
            
            
            <div className="form-group">
                <label>File input</label>
                <input type="file" name = 'urlImage'/>
            </div>
            <div className="form-group">
                <label>Content</label>
                <textarea className="form-control mytextarea" rows="3"  name = 'content'  />
            </div>    
            <button type="submit" className="btn btn-primary">Submit Button</button>
            <button type="reset" className="btn btn-success">Reset Button</button>
        </form>
    </div>
    
    );
  }
}



export default withRouter(BlogPostEdit);
