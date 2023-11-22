import React from "react";
import "../../App.css";


const UserBanner = () => {
  return (
    <div className="  w-full bg-gray-300 relative ">
      <div className="deviderDiv pt-20 md:w-full md:px-36 flex mx-auto justify-between  items-center ">
        <div className=" w-1/2 space-y-4 font-myFont ">
            <h1 className="text-7xl  font-semibold leading-[80px] ">
              One Step Closer To Your{" "}
              <span className="gradientColor">Dream Job</span>
            </h1>
            <p className=" w-[519px]">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="bg-gradient-to-r  from-[#7E90FE] to-[#9873FF] text-white py-2 px-3 rounded-sm">
              Get Started
            </button>
        </div>
        <div className="image w-1/2 mb-4 ">
          <img 
          className="-m-4 "
            src="../../../src/assets/images/user.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
