import React from 'react';
import "../../../App.css";


const JobCard = ({jobs}) => {
    return (
        <div className=' grayGradient mt-3 m-3 font-myFont p-10 '>
            <img className='w-10 mb-14' src={jobs.image} alt="" />
            <h6 className='text-xl font-bold'>{jobs.tittle}</h6>
            <p className='text-[#A3A3A3] text-base font-medium'>{jobs.available} + Jobs Available</p>
        </div>
    );
};

export default JobCard;