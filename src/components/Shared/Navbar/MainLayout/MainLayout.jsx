import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="outlet ">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;