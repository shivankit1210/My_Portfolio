import React from "react";
import Typewriter from "typewriter-effect";
import Man from "../assets/Man.png";
import { RiArrowDownWideLine } from "react-icons/ri";

const Intro = () => {
  return (
    <div className="flex place-content-center items-center h-[94vh]">
      <div className=" w-[60%] h-[100%] place-content-center ">
        <div className="flex justify-center items-center flex-col ">
          <h1 className="font-extrabold text-3xl  flex items-start">
            Hi there, I’m{" "}
            <span className="ml-2">
              <Typewriter
                options={{
                  strings: [
                    "Shivankit Agarwal",
                    "Front-end Developer",
                    "Quick Learner",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50, // Controls how fast the text is deleted
                  cursor: "|", // Cursor customization
                  delay: 75, // Speed of typing
                }}
              />
            </span>
          </h1>
          <p className="w-[70%] mt-10">
            I’m Shivankit Agarwal, a Front-end Developer with a passion for
            creating sleek, user-friendly web experiences. Proficient in
            ReactJS, HTML, CSS, and JavaScript, I enjoy transforming ideas into
            interactive interfaces. When I'm not coding, I explore tech trends,
            read about UX, or play football. Let’s connect and build something
            amazing!
          </p>
        </div>
        
      </div>
      <div className=" w-[40%] h-[100%] px-16 py-20 ">
        <div className=" w-80 h-60 rounded-full  ">
          <img src={Man} alt="not found" className="rounded-full shadow-2xl shadow-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
