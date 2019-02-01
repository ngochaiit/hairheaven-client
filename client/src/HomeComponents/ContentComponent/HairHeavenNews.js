import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showBlogPost} from '../../redux/actions/index'
import {
 SERVER_NAME,
  SERVER_PORT,
 } from '../../APIs/apiParameters';
 import withStyle from 'react-jss';

 const styles =
   {
    imgCss : {
     border: '1px solid #ddd',
     borderRadius: '4px',
     padding: '5px,',
     width: '150px',
     height: 'auto'

    },
    container: 
    {
      display: 'flex',
      padding: '20px'

    },
    BlogPostTitle: 
    {
      fontSize: '20px',
      fontFamily: 'Sarabun',
      paddingLeft: '10px',
      textTransform: 'uppercase',
      fontWeight: '700',
      color: '#2e2d2d'
    },
    BlogPostContent:
    {
      fontSize: '16px',
      fontFamily: 'Oswald',
      paddingLeft: '10px',
      paddingTop: '20px',
      fontWeight: '300',
      color: '#A9A9A9'
    }
   }
 
class Content extends Component {

  componentDidMount()
  {
    
    this.props.actionShowPosts();// chay ham actionShowPosts de lay du lieu tu state
    
  }

  
  
  render() {
    let {classes} = this.props;
    const renderNew = () =>
    { 
      let {blogPosts} = this.props;
      console.log(blogPosts);
      
      if(blogPosts.data)
      {
        return blogPosts.data.slice(blogPosts.data.length-4,blogPosts.data.length);
       
      }
      return [];
    }

    return (
      <section>
          <h1>Hair Heaven Tin Tuc</h1>
          <article>
              <div className ="container-news">
              {
                renderNew().map((newpost,i)=> (
                  <div key = {i} className = {classes.container}>
                  <div className = 'image'><img src ={`${SERVER_NAME}:${SERVER_PORT}/blogposts/sendfile/${newpost.urlImage}`} alt="abc" className = {classes.imgCss} /></div> 
                  <div className = 'blogPost'>
                    <div className ={classes.BlogPostTitle}>{newpost.title}</div>
                    <div className = {classes.BlogPostContent}>{newpost.content}</div>
                  </div>
                  </div>
                ))
              }
              
              </div>
          </article>
      </section>
    );
    
  }
}


const mapStateToProps = state =>
{
  return{
    blogPosts : state.BlogPostReducer.blogPosts
  }
}

const mapDispatchToProps= (dispatch) =>
{
    return  {
        actionShowPosts : showBlogPost(dispatch),
        
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyle(styles)(Content));
