import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import location from "../../../assets/icons/Location.png";
import money from "../../../assets/icons/money.png";

const Job = ({ job }) => {
  return (
    <article className="border border-gray-200 rounded-md p-5 hover:shadow-md shadow duration-200">
      <figure className="w-28 h-14">
        <img className="object-contain w-full" src={job.logo} alt={job.title} />
      </figure>
      <div className="tittle text-[#474747]">
        <h4 className="text-2xl font-semibold leading-normal">
          {job.job_title}
        </h4>
        <p className="text-[#757575] font-myFont font-medium text-xl">
          {job.company_name}
        </p>
      </div>
      <div className="buttons space-x-3 font-semibold my-5">
        <button className="border-2 border-purple-600 px-[10px] py-[3px] rounded-sm gradientColor">
          Remote
        </button>
        <button className="border-2 border-purple-600 px-[10px] py-[3px] rounded-sm gradientColor">
          FullTime
        </button>
      </div>
      <div className="text-[#757575] font-myFont font-medium text-xl flex space-x-3 my-3">
        <div className="flex ">
          <img className="w-[24px] h-[24px]" src={location} alt="" />
          <h1>{job.location}</h1>
        </div>
        <div className="flex ">
          <img className="w-[24px] h-[24px]" src={money} alt="" />
          <h1>Salary: {job.salary}</h1>
        </div>
      </div>
      <Link  to={`/details/${job.id}`}>
        <button className="btn">
          View Details
        </button>
      </Link>
    </article>
  );
};

export default Job;
