import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

  return (

    <div className="w-[100vw]  h-[6vh] flex items-center shadow-2xl shadow-blue-200">
        {/* Main Div */}
      <div className="flex w-[100vw]  justify-center items-center   ">
        {/* Name Div */}
        <div className="font-bold  flex justify-start w-[44rem] text-2xl" style={{fontFamily:"'Handjet', sans-serif"}}>SHIVANKIT AGARWAL</div>
        {/* Navbar Div */}
        <div className="flex justify-end  w-96">
        <ul className="flex gap-x-5 font-light md:visible invisible">
              <li>
                <Link to="/">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              
            </ul>
        </div>
        <div className="md:invisible">
        <RxHamburgerMenu />

        </div>
      </div>
    </div>
  );
};

export default Header;
