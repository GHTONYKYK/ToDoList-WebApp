import React from "react";

// Components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Web App. All rights reserved.
      </p>
    </footer>
  );
}

//THIS IS NEEDED!!
//npm install next react react-dom
