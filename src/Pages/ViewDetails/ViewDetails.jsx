import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../App.css";
import DetailsComponent from '../../components/DetailsComponent/DetailsComponent';

const ViewDetails = () => {
    const [jobs , setJobs] = useState([]);
    const [details, setDetails] = useState();

    useEffect(() => {
        fetch("../../../public/jobs.json")
        .then(res => res.json())
        .then(data =>setJobs(data))
    }, []);

    const {id} = useParams()
    console.log(jobs?.id);

    
    // useEffect(() => {
    //     const findDetails = jobs?.find(job => job.id === id);
    //     console.log(findDetails);
        
    // }, [jobs , id])

    return (
        <div>
            <div className="text h-[200px] flex justify-center items-center grayGradient ">
            <img className=' absolute left-0' src="../../../src/assets/images/bg1.png" alt="" />
                <h1 className='font-myFont text-xl font-semibold text-[#1A1919]'>View Details</h1>
                <img className='absolute right-0 top-0' src="../../../src/assets/images/bg2.png" alt="" />
              
            </div>
            <DetailsComponent/>
        </div>
    );
};

export default ViewDetails;