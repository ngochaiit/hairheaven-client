import React from 'react';
import NotFound from './Admin/notFound'
import Home from './Home'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import BlogPost from './Admin/BlogPost'
import BlogPostList from './Admin/BlogPostList'
import BlogPostEdit from './Admin/BlogPostEdit'
import PageBlogPost from './Admin/PageBlogPost'

const routes = [
    {
        path: '/',
        exact: true,
        main : () => <Home/>
    },
    {
        path: '/login',
        exact: false,
        main : () => <LoginContainer/>
    },
    {
        path: '/resiger',
        exact: false,
        main: () => <RegisterContainer/>
    },
    {
        path: '/blogpost',
        exact: false,
        main: () => <BlogPost/>
    }
    ,
    {
    path: '/showallblogpost',
    exact: false,
    main: () => <BlogPostList/>

    },
    {
    path:'/updateblogpost/:id/:index',
    exact: false,
    main: () => <BlogPostEdit/>
    },
    {
        path:'/news/:id',
        exact: false,
        main: () => <PageBlogPost/>
        },
    
    {
        path: '',
        exact: false,
        main : () => <NotFound/>

    }
];

export default routes;
