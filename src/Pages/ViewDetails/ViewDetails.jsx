import React from 'react';
import { useParams } from 'react-router-dom';
import "../../App.css";

const ViewDetails = () => {
    const productId = useParams()
    console.log(productId);
    return (
        <div>
            <div className="text h-[200px] flex justify-center items-center grayGradient ">
            <img className=' absolute left-0' src="../../../src/assets/images/bg1.png" alt="" />
                <h1 className='font-myFont text-xl font-semibold text-[#1A1919]'>View Details</h1>
                <img className='absolute right-0 top-0' src="../../../src/assets/images/bg2.png" alt="" />
              
            </div>
        </div>
    );
};

export default ViewDetails;