import React from "react";
import "../../App.css";

const UserBanner = () => {
  return (
    <div className="grayGradient h-screen w-full  top-0 ">
      <div className="deviderDiv flex mx-auto nh-screen">
        <div className="text w-1/2 flex flex-col justify-center items-center">
          <div className="tittle w-[519px]">
            <h1 className="text-[80px] font-semibold leading-[100px]">
              One Step Closer To Your{" "}
              <span className="gradientColor">Dream Job</span>
            </h1>
          </div>
          <div className="textsAndButton">
            <p className="h-[90px] w-[519px]">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>

            <button className="bg-gradient-to-r  from-[#7E90FE] to-[#9873FF] text-white py-2 px-3 rounded-sm">
              Get Started
            </button>
          </div>
        </div>
        <div className="image w-1/2 mb-4 ">
          <img
          className=""
            src="../../../src/assets/images/user.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
