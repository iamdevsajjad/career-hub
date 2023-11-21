import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="outlet container mx-auto">
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;