import React, { Component } from 'react';
import withStyle from 'react-jss'; 
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {blogPostDetail} from '../redux/actions/index'
const styles = {

}

class PageBlogPost extends Component {

componentDidMount()
{
    let id = this.props.match.params.id;
    this.props.ShowPost(id);
}

  

  render() {
      let {blogPost} = this.props;
      if(blogPost.data) {
        console.log(blogPost.data.title)
      }

    return (
    <div className = 'container'>
        <div>
            
        </div>
        <div>content</div>
        <div>intro</div>
        <div>content</div>
    </div>
    );
  }
}

const mapStateToProps = state =>
{
    return {
        blogPost: state.BlogPostReducer.detailPosts
    }
}

const mapDispatchToProps= (dispatch) =>
{
    return  {
        ShowPost : blogPostDetail(dispatch),
        
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyle(styles)(withRouter(PageBlogPost )));
