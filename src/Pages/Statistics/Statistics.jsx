import React from "react";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";
import JobCategory from "../../components/JobCategory/JobCategory";
import UserBanner from "../../components/UserBanner/UserBanner";

const Statistics = () => {

  return (
    <div>
      <UserBanner />
      <JobCategory />
      <FeaturedJobs />
    </div>
  );
};

export default Statistics;
