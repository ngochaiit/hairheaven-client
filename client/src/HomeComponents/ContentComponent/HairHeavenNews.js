import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showBlogPost} from '../../redux/actions/index'
import {
 SERVER_NAME,
  SERVER_PORT,
 } from '../../APIs/apiParameters'

class Content extends Component {

  componentDidMount()
  {
    
    this.props.actionShowPosts();// chay ham actionShowPosts de lay du lieu tu state
    
  }

  
  
  render() {

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
  // const renderNew = () =>
  // { 
  //   let {blogPosts} = this.props;
  //  if(blogPosts.length > 0)
  //  {
  //   let listmap =  blogPosts.data.map((blogPost,index) =>
  //   {
  //     if(index >= blogPosts.lengh -4)
  //     {
  //       return(
  //       <div key = {index}>
  //         <div className = 'image'><img src ={blogPost.urlImage}/></div>
  //         <div className = 'blogPost'>
  //         <div className ='titleBlogPost'>{blogPost.title}</div>
  //         <div className = 'contentBlogPost'>{blogPost.content}</div>
  //         </div>
  //       </div>
  //       )
  //     }
  //   })

  //   return listmap;
  //  }
  //  return;
  // }
    return (
      <section>
          <h1>Hair Heaven Tin Tuc</h1>
          <article>
              <div className ="container-news">
              {
                renderNew().map((newpost,i)=> (
                  <div key = {i}>
                  <div className = 'image'><img src ={`${SERVER_NAME}:${SERVER_PORT}/blogposts/sendfile/${newpost.urlImage}`} alt="abc" /></div> 
                  <div className = 'blogPost'>
                    <div className ='titleBlogPost'>{newpost.title}</div>
                    <div className = 'contentBlogPost'>{newpost.content}</div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Content);
