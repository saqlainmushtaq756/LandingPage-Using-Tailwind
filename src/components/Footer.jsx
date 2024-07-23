import React from "react";
import { FaAngleRight } from "react-icons/fa6";

function Footer() {
  return (
    <>
      {/* text area  */}
      <div className="content-center bg-white  items-center text-center flex flex-col flex-wrap w-100 mt-10 px-5 py-5  ">
        <p class="uppercase text-[#0F77AE]  font-bold text-3xl md:text-4xl">
          No pain no gain
        </p>
        <div className="h-1  border-b-[5px] rounded-full  w-[30%] border-yellow-400  mt-5 "></div>
      </div>
      {/* footer area  */}
      <div className="bg-[#0F77AE] w-full h-aut0 flex flex-wrap items-center mt-10 justify-evenly ">
        <div className="flex flex-wrap flex-col  mt-5 mb-3 w-64 h-64 items-center">
          <h1 className="font-bold text-xl text-white mt-3 px-3 py-3">
            Heading is
          </h1>
          <p className="font-semibold text-sm text-white px-3  text-justify py-4">
            something is writen in here the main content of the footer{" "}
          </p>
          <a
            href="#"
            className=" font-semibold text-sm text-white px-3  text-justify py-4"
          >
            learn More{" "}
          </a>
        </div>
        <div className="flex flex-wrap flex-col  mt-5 mb-3 w-64 h-64 items-center  ">
          <h1 className="font-bold text-xl text-white px-3 mt-3">
            company Detils
          </h1>
          <ul className="font-semibold text-sm text-white px-3  text-justify py-3 mx-1">
            <li className="flex flex-row flex-wrap gap-1 text-base  items-center content-center">
              {" "}
              <FaAngleRight className="text-sm  font-semibold" />
              Home
            </li>
            <li className="flex flex-row flex-wrap gap-1 text-base  items-center content-center">
              {" "}
              <FaAngleRight className="text-sm  font-semibold" />
              Services
            </li>
            <li className="flex flex-row flex-wrap gap-1 text-base  items-center content-center">
              {" "}
              <FaAngleRight className="text-sm font-semibold " />
              About Us
            </li>
            <li className="flex flex-row flex-wrap gap-1 text-base  items-center content-center">
              {" "}
              <FaAngleRight className="text-sm font-semibold " />
              Contact Us
            </li>
          </ul>
          <a
            href="#"
            className=" font-semibold text-sm text-white px-3  text-justify"
          >
            learn More{" "}
          </a>
        </div>
        <div className="flex flex-wrap flex-col  mt-5 mb-3 w-64 h-64 items-center  ">
          <h1 className="font-bold text-xl text-white px-3 mt-3">
            company Detils
          </h1>
          <ul className="font-semibold text-sm text-white px-3  text-justify py-3 mx-1">
            <li className="flex flex-row flex-wrap gap-1 text-base  items-center content-center">
              {" "}
              <FaAngleRight className="text-sm  font-semibold" />
              Home
            </li>
            <li className="flex flex-row flex-wrap gap-1 text-base  items-center content-center">
              {" "}
              <FaAngleRight className="text-sm  font-semibold" />
              Services
            </li>
            <li className="flex flex-row flex-wrap gap-1 text-base  items-center content-center">
              {" "}
              <FaAngleRight className="text-sm font-semibold " />
              About Us
            </li>
            <li className="flex flex-row flex-wrap gap-1 text-base  items-center content-center">
              {" "}
              <FaAngleRight className="text-sm font-semibold " />
              Contact Us
            </li>
          </ul>
          <a
            href="#"
            className=" font-semibold text-sm text-white px-3  text-justify"
          >
            learn More{" "}
          </a>
        </div>
      </div>
      {/* footer ends */}
    </>
  );
}

export default Footer;
