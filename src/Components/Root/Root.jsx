import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col border container mx-auto my-10 p-4 gap-4'>
            <Header></Header>
            <hr />
            <div style={{ display: 'flex' }}>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default Root;