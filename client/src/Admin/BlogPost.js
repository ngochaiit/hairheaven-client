import React, { Component } from 'react';
import {createNewBlogPost} from '../APIs/usersAPI'


class BlogPosts extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         content: '',

    //     };
    //       this.handleEditorChange = this.handleEditorChange.bind(this);

    // }

    // handleEditorChange(e){
    //     console.log('Content was updated:', e.target.getContent());
    //     this.setState({content: e.target.getContent()});
    //   }

    async onSubmit(e){
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let content = target.content.value;
        console.log(content)
        let file = e.target.urlImage.files[0];

        let tokenKey = sessionStorage.getItem('tokenKey');
        if(tokenKey)
        {
            await createNewBlogPost(title, content,file,tokenKey)
            alert('insert database success');
        }
}
  render() {
    return (
        <div className="col-lg-12">
        <form onSubmit={e => this.onSubmit(e)}  method = 'POST' >
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" name = 'title'/>
                <p className="help-block">Example block-level help text here.</p>
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



export default BlogPosts;
