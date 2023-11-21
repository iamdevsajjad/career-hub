import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='flex justify-around py-5 sticky top-0'>
            <div className="logo text-2xl font-semibold">CareerHub</div>
            <div className="links">
                <ul className='flex gap-5'>
                    <li><Link to="/">Statistics</Link></li>
                    <li><Link to="/appliedJobs">Applied Jobs</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                </ul>
            </div>
            <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-2 px-3 rounded-sm'>Start Applying</button>
        </header>
    );
};

export default Navbar;