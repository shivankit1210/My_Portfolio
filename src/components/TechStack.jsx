import React from "react";
import {IconsData} from "../IconsData";
import Footer from "./Footer";

const TechStack = () => {
  return (
    <>
      <div className="flex flex-col mt-16 items-center  h-[100vh] ">
        <div className="mb-16">
          <h1 className="font-bold text-4xl underline text-gray-800">MY TECH STACK</h1>
        </div>{" "}
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 p-4 w-[80%] ">
          {IconsData.map(({ id, Icon, title }) => (
            <div key={id} className="flex flex-col items-center  w-60 h-40 cursor-pointer hover:scale-125 delay-100">
              <Icon className="text-8xl " />
              <p className="text-blue-600 shadow-lg shadow-gray-400 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TechStack;
