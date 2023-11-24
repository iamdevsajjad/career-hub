import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("../../../public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const appliedJobsFromLocalStorage = JSON.parse(
    localStorage.getItem("applied-jobs")
  );

  //

  const appliedJobs = [];
  for (const job in appliedJobsFromLocalStorage) {
    const appliedJob = jobs.find((jb) => jb.id === Number(job));
    appliedJobs.push(appliedJob);
  }

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-6">
          {appliedJobs?.map((job) => (
            <article key={job?.id} className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-xl ">

            <div className=" p-5"> 
            <img className="m-auto" src={job?.logo} alt="" />
            </div>
    
    
            <div className="p-10 my-auto flex justify-between items-center">
                <div>
                <h1 className="text-2xl font-semibold text-gray-800">A Way Out</h1>
                <p className="text-base text-gray-400 mt-2">
                    Super creative and colorful illustrations by Matheus Lopes. Check out more of his amazing artworks in his portfolio.
                </p>
                </div>
                <button className="btn text-sm">View Details</button>
            </div>
        </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
