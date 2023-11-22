import React from 'react';
import Account from "../../assets/icons/accounts.png";
import Engineering from "../../assets/icons/chip.png";
import Creative from "../../assets/icons/creative.png";
import Marketing from "../../assets/icons/marketing.png";
import JobCard from './JobCard/JobCard';


const category = [
    {   
        image: Account,
        tittle: "Account & Finance",
        available:300
    },
    {
        image: Creative,
        tittle: "Creative Design",
        available:100
    },
    {
        image: Marketing ,
        tittle: "Marketing & Sales",
        available:150
    },
    {
        image: Engineering ,
        tittle: "Engineering job",
        available:224
    },
]

const JobCategory = () => {
    return (
        <div>
            <div className="texts text-center mt-20">
                <h1 className='text-5xl font-myFont font-bold leading-normal'>Job Category List</h1>
                <p className='font-myFont font-medium text-2xl text-[#757575] leading-[26px]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="categories">
                    {
                        category.map(jobs => <JobCard key={category.available} jobs={jobs}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCategory;