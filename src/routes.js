import React from 'react';
import NotFound from './Admin/notFound'
import Home from './Home'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'

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
        path: '',
        exact: false,
        main : () => <NotFound/>

    }
];

export default routes;
