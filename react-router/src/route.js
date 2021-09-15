import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import ItemProduct from './components/ItemProduct';
import Login from './components/Login';
export const route = [
    {
        path : '/',
        exact : true,
        component : () => <Home/>
    },
    {
        path : '/about',
        exact : true,
        component : () => <About/>
    },
    {
        path : '/contact',
        exact : true,
        component : () => <Contact/>
    },
    {
        path : '/products',
        exact : true,
        component : ({match}) => <Products match = {match}/>
    },
    {
        path : '/products/:paramUrl',
        exact : true,
        component : ({match}) => <ItemProduct match = {match}/>
    },
    {
        path : '/login',
        exact : true,
        component : ({location}) => <Login location = {location}/>
    },
    {
        path : '',
        exact : true,
        component : () => <NotFound/>
    }
   
]