import React, { Component } from 'react';
import {createNewBlogPost} from '../APIs/usersAPI'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class BlogPosts extends Component {
   
state = {
    editorState: EditorState.createEmpty(),
}
onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
    async onSubmit(e){
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let content = JSON.stringify(target.content.value);
       
        let file = e.target.urlImage.files[0];

        let tokenKey = sessionStorage.getItem('tokenKey');
        if(tokenKey)
        {
            await createNewBlogPost(title, content,file,tokenKey)
            alert('insert database success');
        }
}
getCurrentContent = (e) =>
{
    console.log(e)
}
  render() {
    const { editorState } = this.state;
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
                {/* <textarea className="form-control mytextarea" rows="3"  name = 'content'  /> */}
                <div>
        <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
          editorState={editorState}
          
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea style = {{width: '100%', height: '300px'}}
        
          name = 'content'
        />
      </div>
                
            </div>    
            <button type="submit" className="btn btn-primary">Submit Button</button>
            <button type="reset" className="btn btn-success">Reset Button</button>
        </form>
    </div>
    
    );
  }
}



export default BlogPosts;
