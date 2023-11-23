import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../.././../App.css";
const Navbar = () => {
  return (
    <header className="flex justify-around py-5 sticky top-0 z-30 grayGradient">
      <button className="logo text-2xl font-semibold"><Link to={"/"}>CareerHub</Link></button>
      <div className="links">
        <ul className="flex gap-5 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "gradientColor" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="appliedJobs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "gradientColor" : ""
              }
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "gradientColor" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="btn">
        Start Applying
      </button>
    </header>
  );
};

export default Navbar;
