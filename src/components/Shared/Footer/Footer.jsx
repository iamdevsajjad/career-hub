import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-[#1A1919] py-10 font-myFont text-white">
      <div className="fullFooter grid grid-cols-5 container mx-auto  border-b-2">
        <div className="mx-auto navGroup">
          <h2 className="text-3xl font-semibold">Career Hub</h2>
          <p className="w-[300px]">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form
          </p>
          <div className="h-[156px] w-[165px]">
            <button><img src="../../../../src/assets/icons/social.png" alt="" /></button>
          </div>
        </div>
        <div className=" navGroup w-24 mx-auto">
          <h3>Company</h3>
          <div className="Links">
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
          </div>
        </div>
        <div className=" navGroup w-24 mx-auto">
          <h3>Products</h3>
          <div className="Links">
          <p>Prototype</p>
          <p>Plans & pricing</p>
          <p>Customers</p>
          <p>integrations</p>
          </div>
        </div>
        <div className=" navGroup w-24 mx-auto">
          <h3>Support</h3>
          <div className="Links">
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a partner</p>
          <p>Developers</p>
          </div>
        </div>
        <div className=" navGroup w-36 mx-auto">
          <h3>Contact</h3>
          <div className="Links">
          <p>24 Broadway , NYC</p>
          <p> 777 - 978 - 557</p>
          </div>
        </div>

      </div>
      <div className="bottomTexts flex justify-between container mx-auto py-5">
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>powered by CareerHub</p>
      </div>
    </footer>
  );
};

export default Footer;
