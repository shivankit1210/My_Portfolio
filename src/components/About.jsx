import React from "react";
import myImages from "../assets/myImages2.jpg";
import TechStack from "./TechStack";
const About = () => {
  return (
    <>
    <div className="flex flex-col  items-center w-[100%] h-[94vh] ">
      <div className=" flex place-content-center w-[60%] h-[24vh]">
        <div className="mt-16 font-medium  font-serif text-xl text-gray-900">
          <p>
            I thrive on crafting intuitive web solutions that merge
            functionality with aesthetic appeal. My goal is to develop
            innovative, responsive designs that not only meet user needs but
            also enrich their digital journeys.
          </p>
        </div>
      </div>
      <div className="flex place-content-center justify-between w-[60%] h-[60vh] ">
        <div className="h-[70%] mr-16 mt-12 ml-0 shadow-2xl">
          <img src={myImages} className="w-full h-full object-cover " alt="" />
        </div>
        <div className=" w-[70%] h-[90%] mt-10">
          <p>
            My journey into front-end development began with a fascination for
            transforming complex concepts into engaging digital experiences.
            Initially focusing on creating seamless user interfaces, I quickly
            expanded my skills in ReactJS, HTML, CSS, and JavaScript. I’ve
            developed innovative solutions and built strong foundations in web
            development, driven by a curiosity to explore how technology shapes
            user interactions.{" "}
          </p>

          <p>
            Combining my background in problem-solving with a passion for
            technology, I am committed to crafting intuitive solutions that
            enhance user experiences. I thrive on discovering new tech trends,
            diving into UX design, and translating these insights into impactful
            projects. Outside of coding, you might find me exploring tech
            innovations, reading about design, or enjoying a game of football.{" "}
          </p>
        </div>
      </div>
      <button className="border border-blue-800 p-2  rounded-md font-semibold text-blue-800 hover:bg-blue-800 hover:border-gray-700 hover:text-white">View Resume</button>
    </div>
    <TechStack/>
    </>
    
  );
};

export default About;
