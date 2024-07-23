import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {
  return (
    <nav className="bg-[#0F77AE] flex justify-between items-center px-4 py-5  text-black h-20 w-full  md:px-4 md:py-4 md:w-full ">
      <div className="  text-white font-semibold text-xl px-2 cursor-pointer ">
        Saqlain_Mushtaq
      </div>
      <ul className="md:flex text-lg hidden font-medium items-center">
        <li className="mx-[10px] px-2  py-2 cursor-pointer text-white  hover:bg-blue-700  hover:text-white hover:rounded">
          Home
        </li>
        <li className="mx-[10px] px-3 py-3 cursor-pointer text-white hover:bg-blue-700 hover:px-3 hover:py-3 hover:text-white hover:rounded">
          Blog
        </li>
        <li className="mx-[10px] px-3 py-3 cursor-pointer text-white hover:bg-blue-700 hover:px-3 hover:py-3 hover:text-white hover:rounded">
          About Us{" "}
        </li>
        <li className="mx-[10px] px-3 py-3 cursor-pointer text-white hover:bg-blue-700 hover:px-3 hover:py-3 hover:text-white hover:rounded">
          Contact Us{" "}
        </li>
      </ul>
      <div className="hidden  md:block bg-blue-700 text-white font-medium px-3 py-3 text-lg cursor-pointer rounded  ">
        Login/ SignUp
      </div>
      <div className="md:hidden">
        <a
          href="#"
          className="  fill-blue-500 text-4xl font-semibold text-white "
        />
        <AiOutlineMenu className="text-white font-extrabold text-2xl" />
      </div>
    </nav>
  );
}

export default Nav;
