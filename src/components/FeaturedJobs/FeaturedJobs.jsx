import React, { useEffect, useState } from "react";
import Job from "./Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="texts font-myFont text-center text-[#1A1919]">
        <h2 className="text-5xl font-bold">Featured Jobs</h2>
        <p className="text-[#757575] text-xs font-semibold leading-[26px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="job grid grid-cols-2 gap-10 container mx-auto my-10">
        {
          jobs.map(job => <Job key={job.id} job={job}/>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
