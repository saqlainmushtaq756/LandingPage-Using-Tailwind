import React from "react";
import image2 from "../images/css.png";
import image3 from "../images/javaScript.png";
import image1 from "../images/html.png";
import jqury from "../images/jquery.png";
import material from "../images/material.png";
import reactpic from "../images/react.png";
import tailwind from "../images/tailwind.png";
import git from "../images/git.png";
import github from "../images/github.png";

function Card1() {
  return (
    <>
      <div className="flex flex-col flex-wrap h-auto w-100 mt-12 py-10 items-center text-center">
        {/* text area  */}
        <div className="flex flex-col flex-wrap items-center text-center w-full h-auto p-5 ">
          <p className="uppercase text-[#0F77AE] font-bold text-3xl md:text-4xl ">
            {"pure hardwork,No shortcut "}
          </p>
          <div className="w-[30%] h-1 border-b-4 border-yellow-400 rounded-2xl mt-2 md:mt-4 mb-5"></div>
        </div>
        {/* card area  */}
        <div className="flex flex-wrap justify-evenly w-full mt-12 h-auto content-center  items-center bg-[#0F77AE] text-white pt-[50px]">
          <div className="w-46 flex flex-col flex-wrap items-center text-center mb-12  px-5 py-5">
            <img
              src={image1}
              alt=""
              className="w-44 h-44 items-center text-center  "
            />
            <p className="text-3xl font-bold text-white  uppercase mt-5 ">
              HTML
            </p>
            <p className="text-center font-semibold  text-yellow-50 flex flex-wrap mt-3  text-lg">
              Hyper text markup language
            </p>
          </div>
          <div className="w-46 flex flex-col flex-wrap items-center text-center mb-12  px-5 py-5">
            <img
              src={image2}
              alt="image 2 "
              className="w-44 h-44 items-center text-center "
            />
            <p className="text-3xl font-bold text-white    uppercase mt-5 ">
              C S S
            </p>
            <p className="text-center text-lg font-semibold text-yellow-50 flex flex-wrap  mt-3">
              Casecading Style sheet
            </p>
          </div>
          <div className="w-46 flex flex-col flex-wrap items-center text-center mb-12  px-5 py-5">
            <img
              src={image3}
              alt="image2"
              className="w-44 h-44 items-center text-center  "
            />
            <p className="text-3xl font-bold  text-white  uppercase mt-5 ">
              javaScript
            </p>
            <p
              className="text-center justify-self-stretch
           font-bold text-yellow-50 flex flex-wrap mt-3 text-lg content-center "
            >
              javaScript is a programming language
            </p>
          </div>
        </div>
      </div>
      {/* Card 2 is here */}
      <div className="flex  flex-col flex-wrap justify-evenly py-10 h-auto w-100 mt-12 content-center  items-center text-center ">
        {/* text area  */}
        <div className="flex flex-col flex-wrap items-center text-center w-full h-auto pt-[50px]">
          <p className="uppercase text-[#0F77AE] font-bold text-3xl md:text-4xl ">
            {"Frontend Development, FrameWorks  "}
          </p>
          <div className="w-[30%] h-1 border-b-4 border-yellow-400 rounded-2xl mt-2 md:mt-4 mb-5"></div>
        </div>
        {/* card area  */}
        <div className=" flex flex-wrap  w-full  h-max bg-[#0F77AE]   justify-evenly items-center content-center mt-10 mb-10  ">
          <div className=" flex flex-wrap flex-col  bg-white  w-80 h-auto border-2 border-black rounded-lg content-center items-center  mt-5 mb-5   ">
            <img
              src={tailwind}
              alt="first image"
              className="w-32 h-32 bg-black border-2 border-black rounded-full m-5 px-5 py-5 "
            />
            <div>
              <h1 className="font-bold text-[#1c597a] text-xl text-center px-2 py-2 mt-1">
                Tailwind css
              </h1>
              <p className="font-semibold text-[#1c597a] text-lg text-justify px-10  w-full h-44 mt-1 md:text-lg">
                Tailwind CSS is an open-source CSS framework. The main feature
                of this library is that, unlike other CSS frameworks like
                Bootstrap
              </p>
            </div>
          </div>
          <div className=" flex flex-wrap flex-col  bg-white  w-80 h-auto  border-2 border-black rounded-lg content-center items-center  mt-5 mb-5  ">
            <img
              src={reactpic}
              alt="first image"
              className="w-32 h-32 bg-black border-2 border-black rounded-full m-5 px-5 py-5"
            />
            <div>
              <h1 className="font-bold text-[#1c597a] text-xl text-center px-2 py-2 mt-1">
                React Js
              </h1>
              <p className="font-semibold text-[#1c597a] text-lg text-justify px-10 w-full h-44 mt-1 md:text-lg">
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on components by Facebook Inc{" "}
              </p>
            </div>
          </div>
          <div className=" flex flex-wrap flex-col  bg-white  w-80 h-auto  border-2 border-black rounded-lg content-center items-center  mt-5 mb-5  ">
            <img
              src={material}
              alt="first image"
              className="w-32 h-32 bg-black border-2 border-black rounded-full m-5 px-5 py-5"
            />
            <div>
              <h1 className="font-bold text-[#1c597a] text-xl text-center px-2 py-2 mt-1">
                Mateial Ui
              </h1>
              <p className="font-semibold text-[#1c597a] text-lg text-justify px-10   w-full h-44 mt-1 md:text-lg">
                Material Design is a design language developed by Google in
                2014. Expanding on the "cards" that debuted in Google Now,
              </p>
            </div>
          </div>
          <div className=" flex flex-wrap flex-col  bg-white  w-80 h-auto  border-2 border-black rounded-lg content-center items-center  mt-5 mb-5  ">
            <img
              src={git}
              alt="first image"
              className="w-32 h-32 bg-black border-2 border-black rounded-full m-5 px-5 py-5"
            />
            <div>
              <h1 className="font-bold text-[#1c597a] text-xl text-center px-2 py-2 mt-1">
                Git
              </h1>
              <p className="font-semibold text-[#1c597a] text-lg text-justify px-10  w-full h-44 mt-1 md:text-lg">
                Git is a distributed version control system that tracks versions
                of files. It is often used to control source code by programmers
              </p>
            </div>
          </div>
          <div className=" flex flex-wrap flex-col  bg-white  w-80 h-auto  border-2 border-black rounded-lg content-center items-center  mt-5 mb-5  ">
            <img
              src={github}
              alt="first image"
              className="w-32 h-32 bg-black border-2 border-black rounded-full m-5 px-5 py-5"
            />
            <div>
              <h1 className="font-bold text-[#1c597a] text-xl text-center px-2 py-2 mt-1">
                GitHub
              </h1>
              <p className="font-semibold text-[#1c597a] text-lg text-justify px-10   w-full h-44 mt-1 md:text-lg">
                GitHub is a developer platform that allows developers to create,
                store, manage and share their code. It uses Git software
              </p>
            </div>
          </div>
          <div className=" flex flex-wrap flex-col  bg-white  w-80 h-auto  border-2 border-black rounded-lg content-center items-center  mt-5 mb-5  ">
            <img
              src={jqury}
              alt="first image"
              className="w-32 h-32 bg-black border-2 border-black rounded-full m-5 px-5 py-5"
            />
            <div>
              <h1 className="font-bold text-[#1c597a] text-xl text-center px-2 py-2 mt-1">
                jQuery
              </h1>
              <p className="font-semibold text-[#1c597a] text-lg text-justify px-10   w-full h-44 mt-1 md:text-lg">
                jQuery is a JavaScript library designed to simplify HTML DOM
                tree traversal and manipulation"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;