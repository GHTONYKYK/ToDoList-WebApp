import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className="container py-2 flex justify-between items-center">
        <div className="flex space-x-4 ml-auto">
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//THIS IS NEEDED!!
//npm install next react react-dom
