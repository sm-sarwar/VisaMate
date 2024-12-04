import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <nav className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;