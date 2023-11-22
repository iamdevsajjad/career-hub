import React from 'react';

const JobCard = ({jobs}) => {
    console.log(jobs.tittle);
    return (
        <div>
            <p>{jobs.tittle}</p>
            <img src={jobs.image} alt="" />
        </div>
    );
};

export default JobCard;