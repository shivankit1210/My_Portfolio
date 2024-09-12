import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-300  py-8 shadow-orange-500 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap">
          
          {/* Short Bio */}
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2 text-black">Shivankit Agarwal</h3>
            <p className="text-sm text-gray-700">
              Passionate about creating intuitive, meaningful user experiences and solving front-end challenges through innovative design.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/shivankit-agarwal" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/shivankit1210" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com/shivankit" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
              <FaTwitter size={24} />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mt-4">
            <p className="text-sm text-gray-700 flex items-center"><MdEmail/> {" "}shivankit1210@gmail.com</p>
            <p className="text-sm text-gray-700 flex items-center"><FaLocationDot/> {" "} Noida, UttarPradesh India</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-700">
          © {new Date().getFullYear()} Shivankit Agarwal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
