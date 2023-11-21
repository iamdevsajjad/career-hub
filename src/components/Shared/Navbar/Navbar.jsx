import React from 'react';

const Navbar = () => {
    return (
        <header className='flex justify-around py-5 '>
            <div className="logo text-2xl font-semibold">CareerHub</div>
            <div className="links">
                <ul className='flex gap-4'>
                    <li><a href="">Statistics</a></li>
                    <li><a href="">Applied Jobs</a></li>
                    <li><a href="">Blogs</a></li>
                </ul>
            </div>
            <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-2 px-3 rounded-sm'>Start Applying</button>
        </header>
    );
};

export default Navbar;