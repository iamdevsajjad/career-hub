import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import calendarImg from "../../assets/icons/calendar.png";
import emailImg from "../../assets/icons/email.png";
import locationImg from "../../assets/icons/location2.png";
import moneyImg from "../../assets/icons/money.png";
import phoneImg from "../../assets/icons/phone.png";

const ViewDetails = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("../../../public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const { id } = useParams();

  const foundObj = jobs?.find((job) => Number(job.id) === Number(id));

  const handleApplyButton = (id) => {
    let newObj = {};

    const applidJobs = localStorage.getItem("applied-jobs");

    if (applidJobs) {
      newObj = JSON.parse(applidJobs);
    }

    const alreadyApplied = newObj[id];

    if (alreadyApplied) {
      return alert("Already applied");
    } else {
      newObj[id] = true;
    }

    localStorage.setItem("applied-jobs", JSON.stringify(newObj));
  };

  return (
    <div>
      <div className="text h-[200px] flex justify-center items-center grayGradient relative">
        <img
          className=" absolute left-0 bottom-0"
          src="../../../src/assets/images/bg1.png"
          alt=""
        />
        <h1 className="font-myFont text-xl font-bold text-[#1A1919]">
          View Details
        </h1>
        <img
          className="absolute right-0 top-0 -mt-20"
          src="../../../src/assets/images/bg2.png"
          alt=""
        />
      </div>
      <div className="flex justify-between items-start w-full max-w-7xl mx-auto py-10">
        <div className="basis-2/3 space-y-4">
          <p className="text-[#757575] leading-7">
            <span className="font-bold text-black">Job Description: </span>
            {foundObj?.job_description}
          </p>

          <p className="text-[#757575] leading-7">
            <span className="font-bold text-black">Job Responsibility: </span>
            {foundObj?.job_responsibility}
          </p>
          <p className="text-[#757575] leading-7">
            <span className="font-bold text-black">
              Educational Requirement:{" "}
            </span>
            {foundObj?.educational_requirements}
          </p>
          <p className="text-[#757575] leading-7">
            <span className="font-bold text-black">Experiences: </span>
            {foundObj?.experiences}
          </p>
        </div>
        <div className="basis-[33%] space-y-4">
          <div className=" bg-[#f3f2ff] p-4 rounded">
            <h3 className="border-b text-xl text-black font-bold pb-3">
              Job Details
            </h3>
            <div className="space-y-4 py-4 w-full">
              <div className="flex items-start space-x-3">
                <div className="flex space-x-1 items-center">
                  <img
                    className=" w-5 h-5 object-contain"
                    src={moneyImg}
                    alt="icon-image"
                  />
                  <h5 className=" font-bold text-black">Salary:</h5>
                </div>
                <p className="text-[#757575] leading-6">
                  {foundObj?.salary} (Per Month)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex space-x-1 items-center">
                  <img
                    className=" w-5 h-5 object-contain"
                    src={calendarImg}
                    alt="icon-image"
                  />
                  <h5 className=" font-bold text-black">Job Title:</h5>
                </div>
                <p className="text-[#757575] leading-6">
                  {foundObj?.job_title}
                </p>
              </div>
            </div>
            <h3 className="border-b text-xl text-black font-bold pb-3">
              Contact Information
            </h3>
            <div className="space-y-4 py-4 w-full">
              <div className="flex items-start space-x-3">
                <div className="flex space-x-1 items-center">
                  <img
                    className=" w-5 h-5 object-contain"
                    src={phoneImg}
                    alt="icon-image"
                  />
                  <h5 className=" font-bold text-black">Phone:</h5>
                </div>
                <p className="text-[#757575] leading-6">
                  {foundObj?.contact_information.phone}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex space-x-1 items-center">
                  <img
                    className=" w-5 h-5 object-contain"
                    src={emailImg}
                    alt="icon-image"
                  />
                  <h5 className=" font-bold text-black">Email:</h5>
                </div>
                <p className="text-[#757575] leading-6">
                  {foundObj?.contact_information.email}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex space-x-1 items-center">
                  <img
                    className=" w-5 h-5 object-contain"
                    src={locationImg}
                    alt="icon-image"
                  />
                  <h5 className=" font-bold text-black">Address:</h5>
                </div>
                <p className="text-[#757575] leading-6">
                  {foundObj?.contact_information.address}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => handleApplyButton(foundObj.id)}
            className="btn w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
