import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { GoTrash } from "react-icons/go";
import { FcEditImage, FcVideoCall } from "react-icons/fc";

import About from './Components/About/About.jsx';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';


import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Users2 from './Components/Users2/Users2.jsx';
import Posts from './Components/Posts/Posts.jsx';

const userDataPromise = fetch('https://jsonplaceholder.typicode.com/users').then(userData => userData.json());

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/about', Component: About },
            { path: '/login', Component: Login },
            {
                path: '/users',
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                Component: Users
            },
            {
                path: '/users2',
                element: <Suspense fallback={'Loading......'}>
                    <Users2 userDataPromise={userDataPromise}></Users2>
                </Suspense>
            },
            {
                path: 'users/:userId',
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element: <Suspense fallback={'Loading...'}>
                    <UserDetails></UserDetails>
                </Suspense>
            },
            { 
                path: '/posts', 
                loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
                Component: Posts
            }
        ]
    },
    {
        path: '*',
        element: <div className='w-full h-screen flex items-center'>
            <h1 className='mx-auto font-black text-5xl'>404 Not Found</h1>
        </div>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
