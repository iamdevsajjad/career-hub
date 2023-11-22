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
            <div className="texts mt-20 container mx-auto">
                <h1 className='text-5xl font-myFont font-bold leading-normal text-center my-5'>Job Category List</h1>
                <p className='font-myFont font-medium text-2xl text-[#757575] leading-[26px] text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="categories grid grid-cols-4  gap-10 my-12  ">
                    {
                        category.map((jobs,index) => <JobCard key={index+1} jobs={jobs}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCategory;