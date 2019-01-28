import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showBlogPost, deleteABlogPost} from '../redux/actions/index';
import {Link} from 'react-router-dom'






class BlogPostList extends Component {

    componentDidMount()
    {
        this.props.actionShowPosts();
    }

    
  render() {
      let {BlogPostObject} = this.props;
      
      let tokenKey = sessionStorage.getItem('tokenKey');
        console.log(tokenKey)
      
      const listPosts = () =>
      {   
          console.log()
          if(BlogPostObject.data){
            let posts = BlogPostObject.data.map((blogPost,index) =>
            {
                return (
                    <tr className="gradeA odd"  role="row" key ={index}>
                    <td className="sorting_1">{index}</td>
                    <td>{blogPost.title}</td>
                    <td>{blogPost.author}</td>
                    <td className="center">{blogPost.createdAt}</td>
                    <td className="center">{blogPost.updatedAt}</td>
                    <td className='center'><Link to ={`/updateblogpost/${blogPost._id}/${index}`}><button  type="button" className="btn btn-primary">Updated</button></Link>
                    <button type="button" className="btn btn-danger" onClick = {()=>{this.props.actionDeletePost(blogPost._id,tokenKey) ;  }} >Delete</button></td>
                </tr>

                )
            })
            return posts;
          } 
          return;
      }
      console.log(this.props.DltMes);
      
    return(
       <div>
            <div className="row">
            
    <div className="col-sm-6">
            <div className="dataTables_length" id="dataTables-example_length"><label>Show <select name="dataTables-example_length"
                    aria-controls="dataTables-example" className="form-control input-sm">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select> entries</label>
            </div>
            
    </div>
    <div className="col-sm-6">
        <div id="dataTables-example_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm"
                    placeholder="" aria-controls="dataTables-example"/></label></div>
    </div>
</div>
<div className="row">
    <div className="col-sm-12">
        <table className="table table-striped table-bordered table-hover dataTable no-footer dtr-inline" id="dataTables-example"
            role="grid" aria-describedby="dataTables-example_info"  width="100%">
            <thead>
                <tr role="row">
                    <th className="sorting_asc" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1"
                        width = '275px' aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Index</th>
                    <th className="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" width = '327px'
                        aria-label="Browser: activate to sort column ascending">Title</th>
                    <th className="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" width = '299px'
                        aria-label="Platform(s): activate to sort column ascending">Author</th>
                    <th className="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" width = '240px'
                        aria-label="Engine version: activate to sort column ascending">Created at</th>
                    <th className="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" width = '180px'
                        aria-label="CSS grade: activate to sort column ascending">Updated at</th>
                </tr>
            </thead>
            <tbody>

               {listPosts()}
                
            </tbody>
        </table>
    </div>
</div>

<div className="row">
    <div className="col-sm-6">
        <div className="dataTables_info" id="dataTables-example_info" role="status" aria-live="polite">Showing 1 to 10 of
            57 entries</div>
    </div>
    <div className="col-sm-6">
        <div className="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
            <ul className="pagination">
                <li className="paginate_button previous disabled" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_previous"><a
                        href="123">Previous</a></li>
                <li className="paginate_button active" aria-controls="dataTables-example" tabindex="0"><a href="123">1</a></li>
                
                <li className="paginate_button next" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_next"><a
                        href="123">Next</a></li>
            </ul>
        </div>
    </div>
</div>
<div>
    <div class="alert alert-primary" role="alert">
    <strong>{this.props.DltMes}</strong>
    </div>
</div>
       </div>
    )
}
}

const mapStateToProps = (state) =>
{
    return{
        BlogPostObject: state.BlogPostReducer.blogPosts,
        DltMes :  state.BlogPostReducer.message
    }
}
 
const mapDispatchToProps= (dispatch) =>
{
    return  {
        actionShowPosts : showBlogPost(dispatch),
        actionDeletePost : deleteABlogPost(dispatch),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostList);
